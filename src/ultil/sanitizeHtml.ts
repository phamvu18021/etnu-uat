import sanitizeHtml from "sanitize-html";

export const cleanContent = (html: string) => {
  const decodedHtml = html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8221;/g, '"')
    .replace(/&#8243;/g, '"')
    .replace(/&#8211;/g, "-");

  return sanitizeHtml(decodedHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1", "h2", "h3", "span", "div"]),
    allowedAttributes: {
      "*": ["style", "class", "className", "data-start", "data-end", "data-is-only-node"],
      a: ["href", "name", "target"],
      img: ["src", "alt", "width", "height"],
    },
  });
};
