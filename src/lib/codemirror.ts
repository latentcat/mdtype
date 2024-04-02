import { defaultKeymap } from "@codemirror/commands";
import { EditorState, EditorStateConfig, Extension } from "@codemirror/state";
import { EditorView, EditorViewConfig, keymap } from "@codemirror/view";
import { minimalSetup } from "codemirror";
import {tags} from "@lezer/highlight"
import {HighlightStyle, syntaxHighlighting} from "@codemirror/language";

interface CreateEditorStateOptions extends EditorStateConfig {
  onChange: (value: string) => void;
  extensions: readonly Extension[];
  fontSize: string;
}

const myHighlightStyle = HighlightStyle.define([
  {tag: tags.keyword, color: "#fc6"},
  {tag: tags.comment, color: "#f5d", fontStyle: "italic"}
])

export function createEditorState(options?: Partial<CreateEditorStateOptions>) {
  const { extensions = [], onChange, ...restOptions } = options || {};

  const updateListener = EditorView.updateListener.of(async (update) => {
    if (update.docChanged) {
      options?.onChange?.(update.state.doc.toString());
    }
  });

  return EditorState.create({
    extensions: [
      keymap.of(defaultKeymap),
      minimalSetup,
      syntaxHighlighting(myHighlightStyle, {
        fallback: true,
      }),
      EditorView.lineWrapping,
      EditorView.theme({
        ".cm-content": {
          padding: "24px",
          fontSize: options?.fontSize || "15px",
          lineHeight: 1.7,
          caretColor: "#0e9"
        },
        "&.cm-focused .cm-selectionBackground, ::selection": {
          backgroundColor: "#074"
        },
        "&.cm-focused .cm-cursor": {
          borderLeftColor: "#0e9"
        },
        "&.cm-focused": { outline: "none" },
        ".cm-gutters": {
          backgroundColor: "#045",
          color: "#ddd",
          border: "none"
        }
      }),
      updateListener,
      ...extensions,
    ],
    ...restOptions,
  });
}

export function createEditorView(config?: EditorViewConfig) {
  const view = new EditorView(config);
  view.dom.style.width = "100%";
  view.dom.style.height = "100%";
  return view;
}
