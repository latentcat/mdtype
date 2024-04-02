import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {MdniceLogo} from "@/components/Logos";
import Link from "next/link";


export function EditorLogo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="py-2 cursor-pointer">
          <MdniceLogo className="h-5 block outline-0"/>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <Link href="/">
            返回首页
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}