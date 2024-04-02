import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {PreviewView} from "@/components/PreviewView";
import {MarkdownView} from "@/components/MarkdownView";
import * as React from "react";


function PanelWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full px-[2px]">
      <div className="w-full h-full bg-panel-bg rounded-lg">
        {children}
      </div>
    </div>
  )
}

export default function Content() {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-full">
      <ResizablePanel className="relative">
        <PanelWrapper>
          <MarkdownView />
        </PanelWrapper>
      </ResizablePanel>
      <ResizableHandle disabled className="opacity-0" />
      <ResizablePanel className="relative">
        <PanelWrapper>
          Two
        </PanelWrapper>
      </ResizablePanel>
      <ResizableHandle disabled className="opacity-0" />
      <ResizablePanel className="relative">
        <PanelWrapper>
          <PreviewView />
        </PanelWrapper>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
