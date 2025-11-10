import { Topic } from "./Topic";

export type Category = {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  topics: Topic[];
  description: string;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
};
