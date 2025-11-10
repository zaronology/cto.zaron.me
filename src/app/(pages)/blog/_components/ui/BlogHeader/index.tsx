"use client";
import { Author } from "@/lib/Models/Entities/Author";
import BlogAuthor from "../BlogAuthor/BlogAuthor";
import sharedStyles from "@/app/(pages)/blog/_components/blog/_shared-css/shared.module.css";
import styles from "./BlogHeader.module.css";
import clsx from "clsx";

type BlogHeaderProps = {
  author: Author;
  title: string;
  description: string;
  publishedAt: string;
  createdAt: string;
};
export default function BlogHeader(props: BlogHeaderProps) {
  const { author, title, description, publishedAt, createdAt } = props;

  return (
    <div className={clsx(sharedStyles.blogBlockContainer, styles.blogHeaderWrapper)} style={{ marginBottom: "2rem" }}>
      <div className={clsx(sharedStyles.blogBlock)}>
        <h1 className={styles.blogHeaderTitle}>{title}</h1>
        <span className={clsx(styles.blogHeaderSubtitle)}>{description}</span>
        <BlogAuthor author={author} />
      </div>
    </div>
  );
}
