"use client";
import { Article } from "@/lib/Models/Entities/Article";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./BlogCard.module.css";
import clsx from "clsx";
import { mediaUrl } from "@/lib/helpers/media";
import Avatar from "../Avatar/Avatar";
import Link from "next/link";
import { relativeTimeFormat } from "@/lib/helpers/data-transformers";

type BlogCardProps = { article: Article; style?: React.CSSProperties & { "--blog-index": string }; isFeatured?: boolean };
export default function BlogCard({ article, style, isFeatured }: BlogCardProps) {
  const { author, cover, description, publishedAt, title, slug } = article;
  const imgSize = isFeatured ? styles["image-lg"] : styles["image-md"];
  const titleSize = isFeatured ? styles["title-lg"] : styles["title-md"];
  const BlogImage = ({ isMobile }: { isMobile: boolean }) => (
    <div className={clsx(isMobile ? styles?.blogCardMobileImage : styles.blogCardImageWrapper, !isMobile ? imgSize : "")}>
      <Image
        src={cover ? mediaUrl(cover?.url) : "/images/no-photo.jpg"}
        alt={cover?.alternativeText || cover?.name || title}
        fill
        objectFit="cover"
      />
    </div>
  );

  return (
    <Link href={`/blog/${slug}`} className={clsx(styles.blogCardLinkWrapper)} style={style}>
      <article className={clsx(styles.blogCard)}>
        <BlogImage isMobile={false} />

        <div className={clsx(styles.blogCardContent, "px-1")}>
          {author && (
            <div className={clsx(styles.blogCardAuthor)}>
              <Avatar media={author?.avatar} name={author.name || "unknown"} size="sm" />
              <p className="card-text text-body-tertiary">{author.name || "Anonymous"}</p>
            </div>
          )}

          <div className={clsx("card-body mb-3 px-1", styles.blogCardBody)}>
            <div className={clsx(styles.blogCardBodyContent)}>
              <h6 className={clsx("card-title", styles.blogCardTitle, titleSize)}>{title}</h6>
              <p
                className={clsx("card-text text-body-tertiary", styles.blogCardSubtitle)}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {description}
              </p>
            </div>
            <BlogImage isMobile={true} />
          </div>
          <div className={clsx(styles.blogCardFooter, "px-1")}>
            <p className={clsx("card-text text-body-tertiary", styles.blogCardPublishedAt)}>{relativeTimeFormat(publishedAt)}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
