"use client";

import * as React from "react";

import { useEffect, useMemo, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { minimalSetup } from "codemirror";
import { useSetAtom } from "jotai";
import { htmlAtom } from "@/lib/store/editor";

import { unified } from "unified";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

export function MarkdownView() {
  const editor = useRef<HTMLDivElement>(null);
  const setHtml = useSetAtom(htmlAtom);

  const updateListener = useMemo(
    () =>
      EditorView.updateListener.of(async (update) => {
        if (update.docChanged) {
          const file = await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeSanitize)
            .use(rehypeStringify)
            .process(update.state.doc.toString());
          setHtml(file.toString());
        }
      }),
    [setHtml]
  );

  useEffect(() => {
    const startState = EditorState.create({
      doc: "Hello World",
      extensions: [
        keymap.of(defaultKeymap),
        minimalSetup,
        markdown({ codeLanguages: languages }),
        EditorView.theme({
          ".cm-content": {
            padding: "24px",
            fontSize: "16px",
          },
          "&.cm-focused": { outline: "none" },
        }),
        updateListener,
      ],
    });

    if (editor.current) {
      const view = new EditorView({
        state: startState,
        parent: editor.current,
      });

      view.dom.style.width = "100%";
      view.dom.style.height = "100%";

      return () => {
        view.destroy();
      };
    }
  }, [updateListener]);

  return <div className="h-full" ref={editor} />;
}
