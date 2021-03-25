import remark from "remark";
import html from "remark-html";
import removeMD from "remove-markdown";

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getExcerptFromMarkdown(md, length = 200) {
  // Remove markdown, trim and normalize whitespace in content
  let cleaned = removeMD(md || "")
    .trim()
    .replace(/\s+/g, " ");
  const excerpt = cleaned.slice(0, length) + "...";
  return excerpt;
}
