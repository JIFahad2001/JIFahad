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
    title: "Sustanaible Urban development Presentations, Youth for Earth 2025 Competition.",
    category: "Presentations",
    description: "This comprehensive slide deck explores sustainable urban development strategies, highlighting eco-friendly initiatives, modern technological integration, and innovative infrastructure frameworks designed to tackle pressing environmental and resource management challenges in growing cities.",
    url: "https://www.canva.com/design/DAGeP3AvdHA/vx0NZocYAjHJ0NY5FroYHw/edit", // placeholder
  },
  {
    id: "res-2",
    title: "Simulation of Biochar Effects on Soil CO₂ Flux and Diffusivity in Atrai, Naogaon, Bangladesh",
    category: "Presentations",
    description: "This presentation discusses the study findings how biochar impacts soil carbon dynamics, greenhouse gas emissions, and gas transport in agricultural systems, using an integrated dual-scale modeling approach (RothC and COMSOL Multiphysics) applied to Atrai, Naogaon, Bangladesh.",
    url: "https://docs.google.com/presentation/d/1xli9f2OSOWxne_69-NrGWiu86Rnnxe6O/edit?usp=sharing&ouid=108096121644539181268&rtpof=true&sd=true", // placeholder
  },
];
