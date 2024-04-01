
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {Columns2, Columns3} from "lucide-react";


export function HeaderToolbar() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="2" size="sm">
        <Columns2 size={20} />
      </ToggleGroupItem>
      <ToggleGroupItem value="3" size="sm">
        <Columns3 size={20} />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}