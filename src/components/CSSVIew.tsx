"use client";

import { createEditorState, createEditorView } from "@/lib/codemirror";
import { cssAtom } from "@/lib/store/editor";
import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";

export function CSSView() {
  const editor = useRef<HTMLDivElement>(null);
  const setCss = useSetAtom(cssAtom);

  useEffect(() => {
    const startState = createEditorState({
      doc: "CSS",
      extensions: [],
      onChange: setCss,
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
  }, [setCss]);

  return <div className="h-full" ref={editor} />;
}
