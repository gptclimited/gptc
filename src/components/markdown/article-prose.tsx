import Link from "next/link";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold text-gtn-primary first:mt-0">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-gtn-primary">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-justify leading-relaxed text-muted-foreground">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-justify text-muted-foreground">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-justify text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-justify leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="font-medium text-gtn-secondary underline underline-offset-2 transition-colors hover:text-gtn-primary"
    >
      {children}
    </Link>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-gtn-accent pl-4 text-muted-foreground italic">
      {children}
    </blockquote>
  ),
};

type ArticleProseProps = {
  content: string;
  className?: string;
};

export function ArticleProse({ content, className }: ArticleProseProps) {
  return (
    <div className={cn("mx-auto max-w-3xl", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
