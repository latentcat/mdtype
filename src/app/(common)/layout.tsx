
import { Providers } from '@/app/providers'
import { LayoutCommon } from '@/components/Layout'


import { Inter } from 'next/font/google'


import {LayoutHead, layoutMetadata, layoutViewport} from "@/lib/layout_data";
import {cn} from "@/lib/utils";
const inter = Inter({ subsets: ['latin'] })


export default function Layout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
    <LayoutHead />
    <body className={cn(
      "flex h-full bg-white dark:bg-black min-w-[320px]",
      inter.className
    )}>
    <Providers>
      <div className="flex w-full">
        <LayoutCommon>{children}</LayoutCommon>
      </div>
    </Providers>
    </body>
    </html>
  )
}
