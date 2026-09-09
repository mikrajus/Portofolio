export interface ProjectFeature {
  strong: string;
  text: string;
}

export interface ProjectEntity {
  id?: string;
  name: string;
  flag?: string | null;
  badge?: string | null;
  tabCategory: "all" | "iot" | "mobile" | string;
  category: string;
  desc: string;
  features?: ProjectFeature[];
  architectureFlow?: string[];
  stack: string[];
  github?: string;
  image?: string;
  imageAlt?: string;
}
