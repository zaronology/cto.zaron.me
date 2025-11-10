import React from "react";
import sanitizeHtml from "sanitize-html";

import clsx from "clsx";

type AsHTML = keyof JSX.IntrinsicElements;

type HTMLRendererProps<T extends AsHTML> = {
  html: string;
  as?: T; // The `as` prop is optional, defaulting to "div"
} & JSX.IntrinsicElements[T];

// This uses DOMPurify to sanitize the HTML string before rendering it to the DOM.
// This helps to prevent XSS Cross-Site Scripting attacks by removing any potentially harmful code from the string.
export default function HTMLRenderer<T extends AsHTML = "div">(props: HTMLRendererProps<T>) {
  const { html, as, className, ...rest } = props;
  const cleanHtmlString = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "figure", "figcaption"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      "*": ["style", "class"],
    },
    allowedClasses: {},
    allowedStyles: {
      "*": {
        color: [/^#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
      },
    },
  });

  return React.createElement(as ?? "div", {
    ...rest,
    className: clsx(className ?? ""),
    dangerouslySetInnerHTML: { __html: cleanHtmlString },
  });
}
