"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft as arrow } from "@awesome.me/kit-d469f7d4aa/icons/duotone/solid";

const ResourcesContent = (pageData) => {
  const [ContentComponent, setContentComponent] = useState(null);
  const [contentError, setContentError] = useState(false);
  useEffect(() => {
    const DynamicComponent = dynamic(
      () =>
        import(
          `@/content/resources/${pageData.subject}/${pageData.slug}`
        ).catch(() => {
          setContentError(true);
          return () => <></>;
        }),
      { ssr: false, loading: () => <p>Loading content...</p> }
    );

    setContentComponent(() => DynamicComponent);
  }, []);

  if (contentError) {
    return (
      <div>
        <h1>Content Not Found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
      </div>
    );
  }

  if (!ContentComponent) {
    return <p>Loading content...</p>;
  }

  return (
    <>
      <div className="resources-back-btn">
        <Link href={`/resources`}>
          <FontAwesomeIcon icon={arrow} /> Back to Resources
        </Link>
      </div>
      <ContentComponent />
    </>
  );
};

export default ResourcesContent;
