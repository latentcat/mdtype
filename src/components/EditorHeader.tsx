

import { ArticleSelector } from "@/components/ArticleSelector";
import { MenubarDemo } from "@/components/Menubar";
import { HeaderToolbar } from "@/components/HeaderToolbar";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { PostButton } from "@/components/PostButton";
import { MdtypeLogo } from "@/components/Logos";
import { EditorLogo } from "@/components/EditorLogo";
import { Pencil } from "lucide-react";


export function EditorHeader() {
  return (
    <div className="relative flex items-center gap-4 h-12 px-2">
      <div className="grow flex items-center gap-2">
        <div className="ml-2 flex items-center">
          <EditorLogo />
        </div>
        {/*<ArticleSelector />*/}
        <MenubarDemo />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <HeaderToolbar />
        <PostButton />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <h1 className="text-sm _font-medium line-clamp-1 max-w-[250px]">
          十万只鸟儿在 GPU 上飞行——一次关于算法与自然的探索
        </h1>
        <Pencil className="w-4 h-4 ml-2 opacity-50" />
      </div>
    </div>
  )
}