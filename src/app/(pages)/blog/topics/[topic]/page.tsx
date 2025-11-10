import sharedStyles from "@/app/(pages)/blog/_components/blog/_shared-css/shared.module.css";
import { getArticles } from "@/lib/methods/serverside/blogs";
import clsx from "clsx";
import BlogList from "../../_components/ui/BlogList/BlogList";
import { Metadata } from "next";

const topicToTitle = (topic: string) =>
  topic
    .split(/-|_/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const topic = (await params)?.topic;
  const metadata: Metadata = {
    title: `Zaronology - Topic: ${topicToTitle(topic)}`,
    description: `Explore Articles, blogs about ${topicToTitle(topic)} on Zaronology.`,
    openGraph: {
      title: `Zaronology - Topic: ${topicToTitle(topic)}`,
      description: `Explore Articles, blogs about ${topicToTitle(topic)} on Zaronology.`,
      url: `${process.env.SITE_URL}/blog/topics/${topic}`,
    },
  };
  return metadata;
}

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
  const topic = (await params)?.topic;
  const { data } = await getArticles({ topic });
  console.log("Articles related to topic:", data);

  return (
    <div style={{ color: "black" }} className={clsx(sharedStyles.blogContainer)}>
      <div className={clsx(sharedStyles.blogComponent)}>
        <div style={{ color: "var(--zaron-blue)", margin: "10px 0" }}>
          <h1 className="" style={{ color: "var(--zaron-blue)", margin: "10px 0" }}>
            Topic: {topicToTitle(topic)}
          </h1>
        </div>
        {/* Add your topic-related content here */}
        <div style={{ display: "flex", flexGrow: "1" }} className="mt-4">
          <BlogList articles={data || []} />
        </div>
      </div>
    </div>
  );
}
