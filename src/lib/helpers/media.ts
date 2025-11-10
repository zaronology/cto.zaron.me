export const mediaUrl = (url: string, placeholder?: string) => {
  if (!url) return placeholder || "";

  if (url?.startsWith("http")) return url;

  if ((process?.env?.NODE_ENV || "") === "development") {
    return (process?.env?.NEXT_PUBLIC_STRAPI_API_URL || "").toString().replace("/api", "") + url;
  }

  return url;
};
