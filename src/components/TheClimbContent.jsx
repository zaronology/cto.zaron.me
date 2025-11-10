"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const TheClimbContent = () => {
  const pathname = usePathname();
  const [ContentComponent, setContentComponent] = useState(null);
  const [contentError, setContentError] = useState(false);

  useEffect(() => {
    if (pathname) {
      const slug = pathname.split("/").pop(); // Extract slug

      const DynamicComponent = dynamic(
        () =>
          import(`@/content/resources/${slug}`).catch(() => {
            setContentError(true);
            return () => <></>;
          }),
        { ssr: false, loading: () => <p>Loading content...</p> }
      );

      setContentComponent(() => DynamicComponent);
    }
  }, [pathname]);

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

  return <ContentComponent />;
};

export default TheClimbContent;
