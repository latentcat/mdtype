"use client";

import { createEditorState, createEditorView } from "@/lib/codemirror";
import { cssAtom } from "@/lib/store/editor";
import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { css } from "@codemirror/lang-css";

export function CSSView() {
  const editor = useRef<HTMLDivElement>(null);
  const setCss = useSetAtom(cssAtom);

  useEffect(() => {
    const startState = createEditorState({
      extensions: [css()],
      onChange: setCss,
      fontSize: "14px",
    });

    if (editor.current) {
      const view = createEditorView({
        state: startState,
        parent: editor.current,
      });

      fetch("/assets/examples/default.css")
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
    }
  }, [setCss]);

  return <div className="h-full" ref={editor} />;
}
