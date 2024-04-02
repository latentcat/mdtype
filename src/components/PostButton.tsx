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
        <DropdownMenuLabel>平台</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>复制到微信公众平台</DropdownMenuItem>
        <DropdownMenuItem>复制纯文本输入</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}