

import {ArticleSelector} from "@/components/ArticleSelector";
import {MenubarDemo} from "@/components/Menubar";
import {HeaderToolbar} from "@/components/HeaderToolbar";
import {DarkModeToggle} from "@/components/DarkModeToggle";
import {Button} from "@/components/ui/button";
import {PostButton} from "@/components/PostButton";
import {MdniceLogo} from "@/components/Logos";
import {EditorLogo} from "@/components/EditorLogo";


export function EditorHeader() {
  return (
    <div className="flex items-center gap-4 h-12 px-2">
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
    </div>
  )
}