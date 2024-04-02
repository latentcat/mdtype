"use client";

import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useAtomValue, useSetAtom } from "jotai";
import { cssAtom, htmlAtom, previewWrapperAtom } from "@/lib/store/editor";

export function PreviewView() {
  const setPreviewWrapper = useSetAtom(previewWrapperAtom);
  const html = useAtomValue(htmlAtom);
  const css = useAtomValue(cssAtom);
  return (
    <ScrollArea className="h-full w-full">
      <div className="w-full h-full flex flex-col p-3 _bg-border/30 items-center">
        <div className="w-full h-full _rounded-xl _shadow-xl _bg-background _border max-w-md">
          <div ref={setPreviewWrapper} className="p-5">
            <section id="nice" dangerouslySetInnerHTML={{ __html: html }} />
            <style dangerouslySetInnerHTML={{ __html: css }} />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
