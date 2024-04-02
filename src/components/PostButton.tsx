"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import { useAtomValue } from "jotai";
import { previewWrapperAtom } from "@/lib/store/editor";
import juice from "juice";

export function PostButton() {
  const previewWrapper = useAtomValue(previewWrapperAtom);

  const copyHtml = (type: "text/plain" | "text/html") => {
    if (!previewWrapper) {
      console.warn("Cannot find preview wrapper");
      return "";
    }

    const juicedHtml = juice(previewWrapper.innerHTML, {
      preserveFontFaces: false,
      preserveImportant: false,
      preserveKeyFrames: false,
      preserveMediaQueries: false,
      preservePseudos: false,
    });

    navigator.clipboard
      .write([
        new ClipboardItem({
          [type]: new Blob([juicedHtml], { type }),
        }),
      ])
      .then(() => console.log("复制成功"))
      .catch(() => console.error("复制失败"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm">
          <Share size={16} className="mr-1.5" />
          发布
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>复制到</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => copyHtml("text/html")}>
          微信公众平台
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyHtml("text/plain")}>
          纯文本
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
