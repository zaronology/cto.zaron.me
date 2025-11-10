"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";
import clsx from "clsx";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    const isLast = index === segments.length - 1;

    console.log("Is Last:  ", isLast, segment, label);

    return (
      <Breadcrumb.Item key={href} active={isLast} className={clsx(styles?.ellipsis)}>
        {isLast ? <span>{label}</span> : <Link href={href}>{label}</Link>}
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb className="mt-1 fs-6 ">
      <Breadcrumb.Item className={clsx(styles?.ellipsis)}>
        <Link href="/">Home</Link>
      </Breadcrumb.Item>
      {breadcrumbs}
    </Breadcrumb>
  );
}
