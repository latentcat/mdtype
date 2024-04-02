"use client";

import { htmlAtom } from "@/lib/store/editor";
import { useAtomValue } from "jotai";

export default function ContentView() {
  const html = useAtomValue(htmlAtom);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
