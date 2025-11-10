import { notFound } from "next/navigation";
import contentData from "@/content/resources/index.mjs";
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";
import ResourcesContent from "@/components/ResourcesContent";
import Layout from "@/components/Layout";

export async function generateMetadata({ params }) {
  const { subject, slug } = params;
  const article = contentData.find(
    (item) => item.subject === subject && item.slug === slug
  );
  console.log("article");

  console.log(article);
  if (!article) {
    return notFound();
  }
  return {
    title:
      `${article.metadata.title} - Zaronology` || "Resources by Zaronology",
    description: article.metadata.description || "",
    alternates: {
      canonical: `https://zaronology.com/resources/${subject}/${slug}`,
    },
  };
}

const Page = async ({ params }) => {
  const { subject, slug } = params;
  console.log("======  SLUG" + slug);
  console.log(slug);
  return (
    <Layout>
      <HeaderMain />
      <ResourcesContent subject={subject} slug={slug} />
      <FooterMain />
    </Layout>
  );
};

export default Page;
