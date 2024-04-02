import { atom } from "jotai";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const markdownAtom = atom("");
export const cssAtom = atom("");
export const htmlAtom = atom(async (get) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(get(markdownAtom));
  return file.toString();
});

export const previewWrapperAtom = atom<HTMLDivElement | null>(null);
