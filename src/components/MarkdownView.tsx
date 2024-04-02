"use client";

import * as React from "react";

import { useEffect, useRef } from "react";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { useSetAtom } from "jotai";
import { markdownAtom } from "@/lib/store/editor";
import { createEditorState, createEditorView } from "@/lib/codemirror";

export function MarkdownView() {
  const editor = useRef<HTMLDivElement>(null);
  const setMarkdown = useSetAtom(markdownAtom);

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
  }, [setMarkdown]);

  return <div className="h-full" ref={editor} />;
}
