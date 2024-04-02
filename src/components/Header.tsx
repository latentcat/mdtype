

import {ArticleSelector} from "@/components/ArticleSelector";
import {MenubarDemo} from "@/components/Menubar";
import {HeaderToolbar} from "@/components/HeaderToolbar";
import {DarkModeToggle} from "@/components/DarkModeToggle";
import {Button} from "@/components/ui/button";
import {PostButton} from "@/components/PostButton";


export function Header() {
  return (
    <div className="flex items-center gap-4 h-12 px-6">
      <div className="grow flex items-center gap-4">
        <ArticleSelector />
        <MenubarDemo />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <HeaderToolbar />
        <PostButton />
      </div>
    </div>
  )
}