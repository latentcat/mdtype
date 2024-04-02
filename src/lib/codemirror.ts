import { defaultKeymap } from "@codemirror/commands";
import { EditorState, EditorStateConfig, Extension } from "@codemirror/state";
import { EditorView, EditorViewConfig, keymap } from "@codemirror/view";
import { minimalSetup } from "codemirror";

interface CreateEditorStateOptions extends EditorStateConfig {
  onChange: (value: string) => void;
  extensions: readonly Extension[];
}

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
      EditorView.theme({
        ".cm-content": {
          padding: "24px",
          fontSize: "16px",
        },
        "&.cm-focused": { outline: "none" },
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
