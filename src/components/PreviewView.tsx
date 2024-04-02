"use client";

import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useAtomValue } from "jotai";
import { htmlAtom } from "@/lib/store/editor";

export function PreviewView() {
  const html = useAtomValue(htmlAtom);
  return (
    <ScrollArea className="h-full w-full">
      <div className="w-full h-full flex flex-col p-3 _bg-border/30 items-center">
        <div className="w-full h-full _rounded-xl _shadow-xl _bg-background _border max-w-md">
          <div className="p-5">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
