export interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  url?: string;
  isExternal?: boolean;
}

export const resourcesData: Resource[] = [
  {
    id: "res-1",
    title: "Presentations",
    category: "Presentations",
    description: "Various presentations and seminar slides from academic work and public speaking engagements.",
    url: "/resources/presentations" // placeholder
  }
];
