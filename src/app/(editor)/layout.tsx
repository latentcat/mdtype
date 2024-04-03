import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {Providers} from "@/app/providers";
import {cn} from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Editor",
  description: "mdtype Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-editor-bg")}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
