"use client";

import * as React from "react";

import { useCallback, useEffect, useRef } from "react";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { useAtomValue, useSetAtom } from "jotai";
import { markdownAtom, scrollSyncRefAtom } from "@/lib/store/editor";
import { createEditorState, createEditorView } from "@/lib/codemirror";

export function MarkdownView() {
  const editor = useRef<HTMLDivElement>(null);
  const setMarkdown = useSetAtom(markdownAtom);
  const scrollingSyncRef = useAtomValue(scrollSyncRefAtom);

  const scrollSyncHandler = useCallback(() => {
    const { editorScrollDOM, previewScrollDOM } = scrollingSyncRef;
    if (scrollingSyncRef.scrolling || !editorScrollDOM || !previewScrollDOM) {
      scrollingSyncRef.scrolling = false;
      return;
    }

    const ratio =
      editorScrollDOM.scrollTop /
      (editorScrollDOM.scrollHeight - editorScrollDOM.clientHeight);
    previewScrollDOM.scrollTo(
      0,
      ratio * (previewScrollDOM.scrollHeight - previewScrollDOM.clientHeight)
    );
  }, [scrollingSyncRef]);

  useEffect(() => {
    if (!editor.current) {
      return;
    }

    const startState = createEditorState({
      extensions: [markdown({ codeLanguages: languages })],
      onChange: setMarkdown,
    });

    const view = createEditorView({
      state: startState,
      parent: editor.current,
    });

    const scrollDOM = view.scrollDOM;
    scrollingSyncRef.editorScrollDOM = scrollDOM;
    scrollDOM.addEventListener("scroll", scrollSyncHandler, { passive: true });

    fetch("/assets/examples/default.md")
      .then((resp) => resp.text())
      .then((text) => {
        view.dispatch(
          startState.update({
            changes: {
              from: 0,
              insert: text,
            },
          })
        );
      });

    return () => {
      view.destroy();
    };
  }, [scrollSyncHandler, scrollingSyncRef, setMarkdown]);

  return <div className="h-full" ref={editor} />;
}
