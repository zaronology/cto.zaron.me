"use client";
import clsx from "clsx";
import HTMLRenderer from "../../ui/HTMLRender";
import sharedStyles from "../_shared-css/shared.module.css";

export type BlogTextBlock = { id: number; text: string; __component: string };
export default function BlogTextBlock(props: BlogTextBlock) {
  const { text } = props;

  return (
    <div className={clsx(sharedStyles.blogBlockContainer)}>
      <HTMLRenderer html={text} className={clsx(sharedStyles.blogBlock)} />
    </div>
  );
}
