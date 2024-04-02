import {type Metadata, Viewport} from "next";

export const layoutMetadata: Metadata = {
  metadataBase: new URL('https://mdnice.latentcat.com'),
  title: {
    template: '%s - mdnice',
    default:
      'mdnice',
  },
  description:
    'mdnice',
  openGraph: {
    title: 'mdnice',
    images: encodeURI(`/og?title=${'Troy Ni'}`)
  },
}

export const layoutViewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  height: 'device-height',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  viewportFit: "cover",
}

export function LayoutHead() {
  return (
    <head>
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta name="theme-color" content="#000000" />
    </head>
  )
}