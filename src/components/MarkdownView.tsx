import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function MarkdownView() {
  return (
    <ScrollArea className="h-full w-full">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm opacity-0">
              {tag}
            </div>
            {/*<Separator className="my-2" />*/}
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
