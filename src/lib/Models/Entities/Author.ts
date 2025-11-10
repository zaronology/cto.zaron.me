import { MediaField } from "../Fields";

export type Author = {
  id: number;
  documentId: string;
  name: string;
  avatar?: MediaField;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
};
