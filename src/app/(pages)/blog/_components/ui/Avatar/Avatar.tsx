"use client";

import { mediaUrl } from "@/lib/helpers/media";
import { MediaField } from "@/lib/Models/Fields";
import Image from "next/image";
import styles from "./Avatar.module.css";
import clsx from "clsx";
const sizes = {
  xs: styles["avatar-xs"],
  sm: styles["avatar-sm"],
  md: styles["avatar-md"],
  lg: styles["avatar-lg"],
};

export default function Avatar({ media, name, size }: { media: MediaField; name: string; size?: "xs" | "sm" | "md" | "lg" }) {
  const firstInitial = name?.charAt(0).toUpperCase() || "";
  const url = mediaUrl(media?.url);
  const avatarSize = size ? sizes[size] : styles["avatar-md"];
  return (
    <div className={clsx(styles.avatarWrapper, avatarSize)}>
      {media ? (
        <>
          <Image src={url} alt={media?.alternativeText || media?.name || name} objectFit="cover" fill />
        </>
      ) : (
        <div className={clsx(styles.avatarPlaceholder)}>{firstInitial}</div>
      )}
    </div>
  );
}
