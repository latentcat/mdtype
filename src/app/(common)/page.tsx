import {Container} from "@/components/Containers";
import {MdtypeLogo} from "@/components/Logos";
import {Button} from "@/components/ui/button";
import {Ellipsis, Plus} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";



export default async function Home() {

  return (
    <>
      <Container>
        <div className="mt-16 sm:mt-24">
          <div className="flex flex-col">
            <div>
              <MdtypeLogo className="h-8"/>
            </div>

            <div className="mt-12">

              <div className="flex justify-between border-b py-3">
                <h2 className="text-lg font-bold">
                  所有文章
                </h2>
                <div>
                  <Button>
                    <Plus size={20} className="mr-1.5"/>
                    新建
                  </Button>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <Link href="/editor">
                  <div className="line-clamp-1">
                    十万只鸟儿在 GPU 上飞行——一次关于算法与自然的探索
                  </div>
                </Link>
                <div className="">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6">
                        <Ellipsis size={20}/>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>操作</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>删除</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
