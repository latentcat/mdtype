import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function PreviewView() {
  return (
    <ScrollArea className="h-full w-full">
    <div className="w-full h-full flex flex-col p-3 _bg-border/30 items-center">
      <div className="w-full h-full rounded-xl _shadow-xl bg-background _border max-w-md">
          <div className="p-5">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
                <Separator className="my-2 opacity-0" />
              </>
            ))}
          </div>
      </div>
    </div>
    </ScrollArea>
  )
}
