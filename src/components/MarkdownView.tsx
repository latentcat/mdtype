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
    const startState = createEditorState({
      extensions: [markdown({ codeLanguages: languages })],
      onChange: setMarkdown,
    });

    if (editor.current) {
      const view = createEditorView({
        state: startState,
        parent: editor.current,
      });
      return () => {
        view.destroy();
      };
    }
  }, [setMarkdown]);

  return <div className="h-full" ref={editor} />;
}
