import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";
import {Share} from "lucide-react";

export function PostButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm">
          <Share size={16} className="mr-1.5" />
          发布
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>复制到</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>微信公众平台</DropdownMenuItem>
        <DropdownMenuItem>纯文本</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}