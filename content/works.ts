export type WorkCategory = "Article" | "Research Work" | "Review Paper" | "Seminar Paper";

export interface Work {
  id: string;
  title: string;
  category: WorkCategory;
  date?: string;
  description: string;
  authors?: string;
  venue?: string;
  url?: string;
}

export const worksData: Work[] = [
  {
    id: "work-1",
    title: "Heavy metals in dates (Phoenix dactylifera L.) collected from Medina and Dhaka Citymarkets, and assessment of human health risk",
    category: "Research Work",
    date: "2024",
    authors: "Chamon et al.",
    venue: "Environmental Systems Research 13:27",
    description: "This study investigated the levels of heavy metals in two date fruit varieties, Mariam and Dabash, from Bangladesh. It found concerning levels of cadmium (Cd) and nickel (Ni) exceeding maximum permissible limits, though average daily intake was not associated with immediate health risks."
  },
  {
    id: "work-2",
    title: "Soil Health",
    category: "Article",
    description: "An article exploring the fundamental concepts of soil health and its importance in environmental science."
  },
  {
    id: "work-3",
    title: "PCOS",
    category: "Article",
    description: "An article regarding Polycystic Ovary Syndrome (PCOS)."
  },
  {
    id: "work-4",
    title: "AI and Digital Art",
    category: "Article",
    description: "An article discussing the intersection of artificial intelligence and digital art creation."
  },
  {
    id: "work-5",
    title: "Toxoplasma gondii",
    category: "Article",
    description: "An article detailing the environmental and health impacts of Toxoplasma gondii."
  }
];
