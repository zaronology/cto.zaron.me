"use client";
import React from "react";
import clsx from "clsx";
import styles from "./SearchInput.module.css";
import { useParams, useRouter } from "next/navigation";
import sharedStyles from "../../blog/_shared-css/shared.module.css";
import useTopics from "../../../_hooks/useTopics";
import { useClickAway } from "../../../_hooks/useClickAway";
import { Topic } from "@/lib/Models/Entities/Topic";

export default function SearchInput() {
  const router = useRouter();
  const { search, setSearch, results } = useTopics();
  const [searchBoxOpen, setSearchBoxOpen] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const compRef = React.useRef<HTMLDivElement>(null);
  const params = useParams();
  const slug = params?.slug || null;

  useClickAway(compRef, () => {
    setIsFocused(false);
    setSearchBoxOpen(false);
  });

  React.useEffect(() => {
    if (isFocused && !searchBoxOpen) {
      setSearchBoxOpen(true);
    }
  }, [isFocused, searchBoxOpen]);

  const handleOnClickTopic = (topic: Topic) => {
    const slug = topic?.slug || "";
    setSearchBoxOpen(false);
    setIsFocused(false);
    router.push(`/blog/topics/${slug}`);
  };

  return (
    <div ref={compRef} className={clsx(styles.searchInputWrapper)}>
      <div
        tabIndex={-1}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={clsx(styles.searchInputInnerWrapper)}
      >
        <input
          value={search}
          onChange={({ target }) => setSearch(target?.value)}
          placeholder="Search"
          className={clsx(styles.searchInput)}
          type="text"
        />

        <svg style={{ height: "20px", width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
      <div className={clsx(styles?.searchBox, searchBoxOpen ? styles.boxOpen : styles.boxClose)}>
        <div className={clsx(styles?.searchTopics)}>
          <h4>Topics</h4>
          {results &&
            results?.map((topic) => (
              <div onClick={() => handleOnClickTopic(topic)} key={topic?.id} className={clsx(styles?.topicItem)}>
                <span>{topic.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
