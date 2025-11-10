import Avatar from "@/app/(pages)/blog/_components/ui/Avatar/Avatar";
import { Author } from "@/lib/Models/Entities/Author";
import styles from "./BlogAuthor.module.css";
import clsx from "clsx";

export default function ArticleAuthor({ author }: { author: Author }) {
  return (
    <div className={clsx(styles.blogAuthorWrapper)}>
      <Avatar media={author?.avatar} name={author.name || "unknown"} size="sm" />
      <p className="card-text text-body-tertiary">{author.name || "Anonymous"}</p>
    </div>
  );
}
