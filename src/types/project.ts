export type Project = {
  id: string;
  name: string;
  type: string;
  year: number;
  externalUrl?: string;  // Optional external URL to display in the project content
  link: string;
  content?: {
    description: string;
    tweetId?: string;
    instagramId?: string;
    images?: Array<{
      src: string;
      alt: string;
      width: number;
      height: number;
    }>;
  };
} 