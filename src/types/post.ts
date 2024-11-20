// Define the structure of the frontmatter and posts
export interface PostData {
  title: string;
  date: string;
  description?: string;
  slug: string;
}

export interface PostPreviewData extends PostData {
  previewText: string;
  content: string;
  firstImage: string | null;
}
