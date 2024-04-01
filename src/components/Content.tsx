import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {PreviewView} from "@/components/PreviewView";
import {MarkdownView} from "@/components/MarkdownView";

export default function Content() {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-full">
      <ResizablePanel>
        <MarkdownView />
      </ResizablePanel>
      <ResizableHandle disabled />
      <ResizablePanel>Two</ResizablePanel>
      <ResizableHandle disabled />
      <ResizablePanel>
        <PreviewView />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
