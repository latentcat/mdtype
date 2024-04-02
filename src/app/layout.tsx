import {type Metadata, Viewport} from 'next'

import './globals.css'

import {layoutMetadata, layoutViewport} from "@/lib/layout_data";

export const metadata: Metadata = layoutMetadata

export const viewport: Viewport = layoutViewport

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
