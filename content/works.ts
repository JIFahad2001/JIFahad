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
    description: "This study investigated the levels of heavy metals in two date fruit varieties, Mariam and Dabash, from Bangladesh. It found concerning levels of cadmium (Cd) and nickel (Ni) exceeding maximum permissible limits, though average daily intake was not associated with immediate health risks.",
    url:"https://doi.org/10.1186/s40068-024-00354-7",
  },
  {
    id: "work-2",
    title: "Soil Health",
    category: "Article",
    description: "An article exploring the fundamental concepts of soil health and its importance in environmental science.",
    url: "https://sites.google.com/view/jifahad/works/articles/soil-health",
  },
  {
    id: "work-3",
    title: "PCOS",
    category: "Article",
    description: "An article regarding Polycystic Ovary Syndrome (PCOS).",
    url: "https://sites.google.com/view/jifahad/works/articles/pcos",
  },
  {
    id: "work-4",
    title: "AI and Digital Art",
    category: "Article",
    description: "An article discussing the intersection of artificial intelligence and digital art creation.",
    url: "https://sites.google.com/view/jifahad/works/articles/ai-and-digital-art",
  },
  {
    id: "work-5",
    title: "Toxoplasma gondii",
    category: "Article",
    description: "An article detailing the environmental and health impacts of Toxoplasma gondii.",
    url:"https://sites.google.com/view/jifahad/works/articles/toxoplasma-gondii",
  },
  {
    id: "work-6",
    title: "Simulation of Biochar Effects on Soil CO2 Flux and Diffusivity in Atrai,Naogaon, Bangladesh",
    category: "Seminar Paper",
    description: "This seminar paper studies the effect of biochar application in different rates in a simulated scenario and evaluates its impacts on soil carbon dioxide diffusion based on Millington and Kirk's diffusion model. To simulated the evolution of CO2 gas, Rothamstad Carbon Model (WIndow's GUI version) was used with appropriate measures. The simulated results affirms the viability of biochar as a carbon sequestration method in agricultural fields. ",
    url: "https://drive.google.com/file/d/1HfUN4qaPNfiaS8jEaz5kzZDWYjSDtC-9/view"
  }
];
