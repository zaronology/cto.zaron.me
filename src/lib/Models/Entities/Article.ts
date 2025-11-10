import { MediaField } from "../Fields";
import { Author } from "./Author";
import { Category } from "./Category";
import { Topic } from "./Topic";

const fields = {};
export type Article = {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  createdAt: string;
  description: string;
  cover?: MediaField;
  author?: Author;
  category?: Category;
  blocks?: Array<Record<string, any>>;
  topics: Topic[];
};
