export type TemplateStyle = "academic-minimalist" | "modern-stem" | "international-scholar";
export type FontFamilyStyle = "serif" | "sans" | "mono";
export type SpacingStyle = "compact" | "normal" | "spacious";

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string;
  advisor?: string;
  bullets?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  category?: "Research" | "Academic" | "Professional" | "Teaching" | "Leadership";
  bullets: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  doiOrUrl?: string;
  type?: "Journal" | "Conference" | "Preprint" | "Working Paper";
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  role?: string;
  tools?: string;
  date?: string;
  description: string;
  link?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  items: string;
}

export interface ExtracurricularItem {
  id: string;
  role: string;
  organization: string;
  date: string;
  description: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  title: string;
  institution: string;
  email: string;
  phone?: string;
  relationship?: string;
}

export interface CvData {
  personalInfo: {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
    github?: string;
    orcid?: string;
    summary: string;
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  publications: PublicationItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  extracurriculars: ExtracurricularItem[];
  awards: AwardItem[];
  references?: ReferenceItem[];
  settings: {
    template: TemplateStyle;
    fontFamily: FontFamilyStyle;
    accentColor: string;
    paperSize: "a4" | "letter";
    spacing: SpacingStyle;
  };
}

export const sampleCvData: CvData = {
  personalInfo: {
    fullName: "Alex J. Morgan",
    title: "Environmental Science Researcher & Scholar",
    email: "alex.morgan@academic-sample.edu",
    phone: "+1 (650) 723-2000",
    location: "Stanford, CA, United States",
    website: "https://alex-morgan-research.example.edu",
    linkedin: "https://linkedin.com/in/alex-morgan-research",
    github: "https://github.com/alex-morgan-env",
    orcid: "0000-0002-1825-0097",
    summary: "Dedicated environmental researcher with extensive training in soil-water interactions, aquatic toxicology, and spatial environmental modeling. Experienced in conducting longitudinal field assessments, geochemical spectrometry, and publishing peer-reviewed empirical studies. Committed to open science, ecological sustainability, and interdisciplinary collaboration."
  },
  education: [
    {
      id: "edu-1",
      institution: "Stanford University",
      degree: "Master of Science (M.S.)",
      fieldOfStudy: "Earth Systems & Environmental Sciences",
      location: "Stanford, CA",
      startDate: "Sep 2023",
      endDate: "Jun 2025",
      gpa: "3.92 / 4.00",
      honors: "Departmental Fellowship Recipient",
      advisor: "Prof. Sarah Jenkins, Ph.D.",
      bullets: [
        "Advanced coursework: Environmental Toxicology, Aquatic Biogeochemistry, Hydrogeology, and Spatial Statistics.",
        "Master's Thesis: Geochemical mobilization of trace heavy metals under variable climatic hydrologic cycles."
      ]
    },
    {
      id: "edu-2",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science (B.S.)",
      fieldOfStudy: "Soil, Water and Ecosystem Sciences",
      location: "Berkeley, CA",
      startDate: "Aug 2019",
      endDate: "May 2023",
      gpa: "3.88 / 4.00",
      honors: "Summa Cum Laude, Dean's Honors List (All Quarters)",
      bullets: [
        "Core training in Soil Physics & Chemistry, Atmospheric Dynamics, and Field Ecological Surveying."
      ]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Graduate Research Assistant",
      organization: "Stanford Earth & Planetary Sciences Laboratory",
      location: "Stanford, CA",
      startDate: "Oct 2023",
      endDate: "Present",
      category: "Research",
      bullets: [
        "Investigated trace heavy metal bioaccumulation patterns across riverine wetlands using atomic spectrometry.",
        "Managed weekly field hydrometry sensor networks and processed spatial datasets in Python and GIS.",
        "Co-authored 2 grant proposals resulting in $120,000 in regional watershed monitoring support."
      ]
    },
    {
      id: "exp-2",
      role: "Teaching Assistant & Course Facilitator",
      organization: "Department of Environmental Sciences",
      location: "Stanford, CA",
      startDate: "Jan 2024",
      endDate: "Dec 2024",
      category: "Teaching",
      bullets: [
        "Led laboratory sections and recitation sessions for 60+ undergraduate students in Environmental Measurement Methods.",
        "Designed weekly quantitative problem sets and graded laboratory notebooks with structured rubric feedback."
      ]
    }
  ],
  publications: [
    {
      id: "pub-1",
      title: "Trace metal concentrations in estuarine sediment cores: Anthropogenic influx and human health risk modeling",
      authors: "Morgan, A. J., Jenkins, S. R., & Patel, K. D.",
      venue: "Journal of Environmental Science & Policy, Vol. 48, pp. 210-224",
      year: "2025",
      doiOrUrl: "https://doi.org/10.1016/j.envsci.sample.2025",
      type: "Journal",
      description: "Conducted spatial risk modeling and Monte Carlo simulations to assess chronic ingestion risks of heavy metal pollutants across metropolitan watershed buffer zones."
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Automated Watershed Quality Monitoring & GIS Mapping",
      role: "Lead Investigator",
      tools: "ArcGIS Pro, Python (GeoPandas), R, Water Quality Sondes",
      date: "2024",
      description: "Developed an open-source spatial workflow for integrating real-time sensor streams into regional hydrologic flood and contaminant dispersion maps."
    }
  ],
  skills: [
    {
      id: "sk-1",
      category: "Geospatial & Computational",
      items: "ArcGIS Pro, QGIS, Python (Pandas, GeoPandas, NumPy), R (Biostatistics), LaTeX"
    },
    {
      id: "sk-2",
      category: "Analytical & Laboratory",
      items: "Spectrophotometry (AAS, ICP-MS prep), Soil core extraction, Water quality multi-parameter sondes"
    },
    {
      id: "sk-3",
      category: "Scientific Communication",
      items: "Academic Manuscript Writing, Conference Presentations, Grant Writing, Scientific Peer Review"
    },
    {
      id: "sk-4",
      category: "Languages",
      items: "English (Native), Spanish (Professional Working Proficiency)"
    }
  ],
  extracurriculars: [
    {
      id: "extra-1",
      role: "Student Chapter Chair",
      organization: "International Society for Environmental Toxicology & Chemistry (SETAC)",
      date: "2023 - 2025",
      description: "Coordinated annual university symposium featuring keynote researchers from academic and government agencies."
    }
  ],
  awards: [
    {
      id: "aw-1",
      title: "National Science Foundation Graduate Fellowship (Honorable Mention)",
      issuer: "National Science Foundation (NSF)",
      year: "2024",
      description: "Recognized for research merit in environmental geochemical modeling."
    },
    {
      id: "aw-2",
      title: "Dean's Undergraduate Research Excellence Award",
      issuer: "UC Berkeley College of Natural Resources",
      year: "2023",
      description: "Awarded to top 2% of graduating research candidates."
    }
  ],
  references: [
    {
      id: "ref-1",
      name: "Prof. Sarah Jenkins, Ph.D.",
      title: "Professor & Department Chair",
      institution: "Department of Earth Systems Science, Stanford University",
      email: "jenkins@stanford.example.edu",
      phone: "+1 (650) 723-0001",
      relationship: "Master's Thesis Advisor & Academic Supervisor"
    },
    {
      id: "ref-2",
      name: "Dr. Robert H. Chen",
      title: "Senior Research Scientist",
      institution: "Division of Ecosystem Science, UC Berkeley",
      email: "rchen@berkeley.example.edu",
      phone: "+1 (510) 642-0002",
      relationship: "Undergraduate Laboratory Director & Mentor"
    }
  ],
  settings: {
    template: "academic-minimalist",
    fontFamily: "serif",
    accentColor: "#173F35",
    paperSize: "a4",
    spacing: "normal"
  }
};
