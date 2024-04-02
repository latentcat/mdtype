import Image from "next/image";
import {MenubarDemo} from "@/components/Menubar";
import {EditorHeader} from "@/components/EditorHeader";
import Content from "@/components/Content";
import {EditorFooter} from "@/components/EditorFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="_border-b shrink-0">
        <EditorHeader/>
      </div>
      <div className="grow relative">
        <div className="absolute w-full h-full top-0 left-0 px-[2px]">
          <Content/>
        </div>
      </div>
      <div className="_border-t _bg-border">
        <EditorFooter />
      </div>
    </main>
  );
}
