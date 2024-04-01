

import {ArticleSelector} from "@/components/ArticleSelector";
import {MenubarDemo} from "@/components/Menubar";
import {HeaderToolbar} from "@/components/HeaderToolbar";


export function Header() {
  return (
    <div className="flex items-center gap-4 h-10 px-6">
      <div className="grow flex items-center gap-4">
        <ArticleSelector />
        <MenubarDemo />
      </div>
      <div>
        <HeaderToolbar />
      </div>
    </div>
  )
}