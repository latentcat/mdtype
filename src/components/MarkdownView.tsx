"use client"

import * as React from "react"


import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {useEffect, useRef} from "react";
import { EditorState } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import {markdown} from "@codemirror/lang-markdown"
import {languages} from "@codemirror/language-data"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function MarkdownView() {

  const editor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const startState = EditorState.create({
      doc: 'Hello World',
      extensions: [
        keymap.of(defaultKeymap),
        markdown({codeLanguages: languages}),
        EditorView.theme({
          ".cm-content": {
            padding: "24px",
            fontSize: "16px",
          },
          "&.cm-focused .cm-content": {color: "orange"},
        }),
      ],
    })

    if (editor.current) {
      const view = new EditorView({
        state: startState,
        parent: editor.current,
      })

      view.dom.style.width = "100%";
      view.dom.style.height = "100vh";

      return () => {
        view.destroy()
      }
    }


  }, [])


  return (
    <ScrollArea className="h-full w-full">
      <div className="h-full" ref={editor}>
      </div>
    </ScrollArea>
  )
}
