"use client";

import * as React from "react";

import { useAtomValue, useSetAtom } from "jotai";
import {
  cssAtom,
  htmlAtom,
  previewWrapperAtom,
  scrollSyncRefAtom,
} from "@/lib/store/editor";
import { useCallback } from "react";

export function PreviewView() {
  const scrollingSyncRef = useAtomValue(scrollSyncRefAtom);
  const setPreviewWrapper = useSetAtom(previewWrapperAtom);
  const html = useAtomValue(htmlAtom);
  const css = useAtomValue(cssAtom);

  const scrollSyncHandler = useCallback(() => {
    const { editorScrollDOM, previewScrollDOM } = scrollingSyncRef;
    if (scrollingSyncRef.scrolling || !editorScrollDOM || !previewScrollDOM) {
      scrollingSyncRef.scrolling = false;
      return;
    }
    const ratio =
      previewScrollDOM.scrollTop /
      (previewScrollDOM.scrollHeight - previewScrollDOM.clientHeight);
    editorScrollDOM.scrollTo(
      0,
      ratio * (editorScrollDOM.scrollHeight - editorScrollDOM.clientHeight)
    );
    scrollingSyncRef.scrolling = true;
  }, [scrollingSyncRef]);

  return (
    <div
      ref={(dom) => {
        scrollingSyncRef.previewScrollDOM = dom;
      }}
      className="h-full w-full overflow-y-auto overflow-x-hidden"
      onScroll={scrollSyncHandler}
    >
      <div className="w-full h-full flex flex-col p-3 _bg-border/30 items-center">
        <div className="w-full h-full _rounded-xl _shadow-xl _bg-background _border max-w-lg">
          <div ref={setPreviewWrapper} className="p-5">
            <h1 className="text-[22px] font-semibold mt-6 mb-[14px]">
              十万只鸟儿在 GPU 上飞行——一次关于算法与自然的探索
            </h1>
            <div className="text-[15px] opacity-30 mb-6">
              倪豪
            </div>
            <section id="nice" dangerouslySetInnerHTML={{ __html: html }} />
            <style dangerouslySetInnerHTML={{ __html: css }} />
          </div>
        </div>
      </div>
    </div>
  );
}
