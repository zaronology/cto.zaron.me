import { strapi } from "@strapi/client";

/// Only use this server-side.
export const strapiClient = strapi({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  auth: process.env.STRAPI_API_TOKEN,
});
