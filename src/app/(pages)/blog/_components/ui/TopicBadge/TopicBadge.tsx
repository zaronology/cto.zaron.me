"use client";
import { Topic } from "@/lib/Models/Entities/Topic";
import { useRouter } from "next/navigation";
import styles from "./TopicBadge.module.css";

export default function TopicBadge({ topic }: { topic: Topic }) {
  const router = useRouter();
  const handleOnClickTopic = (topic: Topic) => {
    const slug = topic?.slug || "";
    router.push(`/blog/topics/${slug}`);
  };
  return (
    <div onClick={() => handleOnClickTopic(topic)} className={styles.topicBadge}>
      {topic.name}
    </div>
  );
}
