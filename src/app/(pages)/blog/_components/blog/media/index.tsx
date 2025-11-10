"use client";
import { mediaUrl } from "@/lib/helpers/media";
import { MediaField } from "@/lib/Models/Fields";
import clsx from "clsx";
import Image from "next/image";
import sharedStyles from "../_shared-css/shared.module.css";
import styles from "./media.module.css";

function simplifyFraction(numerator: number, denominator: number) {
  function gcd(a: number, b: number) {
    // Euclidean algorithm
    return b === 0 ? a : gcd(b, a % b);
  }

  const divisor = gcd(Math.abs(numerator), Math.abs(denominator));

  return {
    numerator: numerator / divisor,
    denominator: denominator / divisor,
  };
}

export type BlogMediaProps = {
  id: string;
  image?: MediaField;
  size: "outset" | "inset" | "full";
  caption: string;
  index: number;
  __component: string;
};
export default function BlogMedia(props: BlogMediaProps) {
  const { image, size, caption } = props;
  console.log(props);
  const { height, width } = image || { width: 200, height: 150 };
  const simplified = simplifyFraction(width, height);
  const imageSize = { aspectRatio: `${simplified.numerator} / ${simplified.denominator}`, maxWidth: "100%", margin: "0" };

  const imageStyle =
    size === "inset" ? clsx(sharedStyles.blogBlock) : size == "outset" ? clsx() : clsx(sharedStyles.outsetComponent);
  const innerContainerStyle =
    size === "inset"
      ? clsx(styles.insetContainer)
      : size === "outset"
      ? clsx(sharedStyles.outsetComponent, styles.outsetContainer)
      : clsx(sharedStyles.fullComponent, styles.fullContainer);
  const imgUrl = image?.url ? mediaUrl(image?.url) : "/images/no-photo.jpg";

  return (
    <div className={clsx(sharedStyles.blogBlockContainer)}>
      <div className={clsx(imageStyle, innerContainerStyle)}>
        <figure style={{ position: "relative", ...imageSize, width: "100%" }}>
          <Image
            src={imgUrl}
            alt={image?.alternativeText || image?.name || "No Image"}
            objectFit={!image?.url ? "cover" : "contain"}
            fill
          />
        </figure>
        {caption && (
          <figcaption className={styles.imageCaptionContainer}>
            <div>{caption}</div>
          </figcaption>
        )}
      </div>
    </div>
  );
}
