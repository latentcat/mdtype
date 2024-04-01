

import {ArticleSelector} from "@/components/ArticleSelector";
import {MenubarDemo} from "@/components/Menubar";
import {HeaderToolbar} from "@/components/HeaderToolbar";
import {DarkModeToggle} from "@/components/DarkModeToggle";


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
      </div>
    </div>
  )
}