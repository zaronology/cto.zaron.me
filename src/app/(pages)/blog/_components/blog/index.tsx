import React from "react";
import { componentMap } from "./component-map";

export const mapComponents = ({ data, zonePage, index }: any) => {
  const { __component, ...rest } = data;

  try {
    // decreases the bundle size by loading the component only when it's needed.
    // dynamic is a feature of Next.js that allows you to load components asynchronously.
    // note that it has nothing to do with Strapi's dynamic zone.
    const Component = componentMap[__component as keyof typeof componentMap];

    const props = { ...rest };

    return <Component {...props} pageData={zonePage} index={index} />;
  } catch (error) {
    console.error(`Error creating component ${__component}:`, error);
    return null;
  }
};

export default mapComponents;
