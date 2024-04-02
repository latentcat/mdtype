import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PreviewView } from "@/components/PreviewView";
import { MarkdownView } from "@/components/MarkdownView";
import * as React from "react";
import { CSSView } from "@/components/CSSView";

function PanelWrapper({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="absolute top-0 left-0 w-full h-full px-[2px]">
      <div className="w-full h-full bg-panel-bg rounded-lg flex flex-col">
        <div className="shrink-0 p-1 flex items-center justify-center">
          <div className="text-xs text-foreground/50">
            {title}
          </div>
        </div>
        <div className="grow relative">
          <div className="absolute top-0 left-0 w-full h-full">

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Content() {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-full">
      <ResizablePanel className="relative">
        <PanelWrapper title="Markdown">
          <MarkdownView/>
        </PanelWrapper>
      </ResizablePanel>
      <ResizableHandle disabled={false} withHandle/>
      <ResizablePanel className="relative">
      <PanelWrapper title="CSS">
          <CSSView />
        </PanelWrapper>
      </ResizablePanel>
      <ResizableHandle disabled={false} withHandle />
      <ResizablePanel className="relative">
        <PanelWrapper title="HTML">
          <PreviewView />
        </PanelWrapper>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
