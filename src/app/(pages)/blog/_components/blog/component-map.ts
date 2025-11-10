import dynamic from "next/dynamic";

export const componentMap = {
  "blog.text-block": dynamic(() => import("./text-block"), { ssr: true }),
  "blog.media": dynamic(() => import("./media"), { ssr: true }),
};
