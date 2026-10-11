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
    fullName: "Jannatul Islam Fahad",
    title: "Environmental Science Researcher & Graduate",
    email: "jifahad2072@gmail.com",
    phone: "(+880) 1861758255",
    location: "Narayanganj & Dhaka, Bangladesh",
    website: "https://sites.google.com/view/jifahad/home",
    linkedin: "https://www.linkedin.com/in/ji-fahad-417507182/",
    github: "",
    orcid: "",
    summary: "Environmental science graduate with rigorous academic training in Soil, Water, and Environment at the University of Dhaka. Proven research competency in environmental toxicology, heavy metal assessment, and geospatial analysis (ArcGIS). Dedicated science communicator, former Nature Positive Student Ambassador with Oxford, and podcast host connecting young scholars with global research opportunities."
  },
  education: [
    {
      id: "edu-1",
      institution: "University of Dhaka",
      degree: "Bachelor of Science (Hons.)",
      fieldOfStudy: "Soil, Water and Environment",
      location: "Dhaka, Bangladesh",
      startDate: "Jan 2022",
      endDate: "Apr 2026",
      gpa: "3.44 / 4.00 (Level in EQF: 6)",
      honors: "Departmental Honors Standing",
      bullets: [
        "Major coursework: Environmental Pollution & Toxicology, Soil Physics & Chemistry, Environmental Modeling, Hydrogeology, GIS & Remote Sensing.",
        "Undertook laboratory analyses of heavy metals, nutrient cycles, and soil degradation mitigation."
      ]
    },
    {
      id: "edu-2",
      institution: "Govt. Tolaram College",
      degree: "Higher Secondary Certificate (HSC)",
      fieldOfStudy: "Science",
      location: "Narayanganj, Bangladesh",
      startDate: "Jun 2018",
      endDate: "Jan 2021",
      gpa: "GPA 5.00 / 5.00",
      bullets: [
        "Excellence in Physics, Chemistry, Biology, and Higher Mathematics."
      ]
    },
    {
      id: "edu-3",
      institution: "Narayanganj High School and College",
      degree: "Secondary School Certificate (SSC)",
      fieldOfStudy: "Science",
      location: "Narayanganj, Bangladesh",
      startDate: "Jan 2016",
      endDate: "Mar 2018",
      gpa: "GPA 5.00 / 5.00"
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Host & Lead Producer",
      organization: "Research & Higher Education Podcast",
      location: "Dhaka, Bangladesh",
      startDate: "May 2025",
      endDate: "Sep 2026",
      category: "Academic",
      bullets: [
        "Conducted structured in-depth interviews with prominent researchers, professors, and environmental practitioners across Bangladesh.",
        "Disseminated scientific methodologies and higher education scholarship pathways to over 5,000 undergraduate and graduate listeners.",
        "Produced comprehensive literature overviews and seminar recaps on ecological sustainability."
      ]
    },
    {
      id: "exp-2",
      role: "Student Ambassador",
      organization: "Nature Positive Universities Network (University of Oxford collaboration)",
      location: "Remote / Oxford, UK",
      startDate: "Dec 2024",
      endDate: "Aug 2025",
      category: "Leadership",
      bullets: [
        "Collaborated with an international cohort of student delegates representing global universities to advance biodiversity benchmarks.",
        "Facilitated university environmental auditing modules and shared regional empirical observations on ecological conservation.",
        "Promoted institutional climate literacy initiatives aligned with global COP targets."
      ]
    },
    {
      id: "exp-3",
      role: "Physics Instructor",
      organization: "Paragon Coaching Center",
      location: "Narayanganj, Bangladesh",
      startDate: "Jul 2020",
      endDate: "Jan 2022",
      category: "Teaching",
      bullets: [
        "Delivered structured Newtonian mechanics, thermodynamics, and electromagnetism lectures to over 120 college students.",
        "Designed standardized examination curricula and quantitative problem-solving workshops."
      ]
    }
  ],
  publications: [
    {
      id: "pub-1",
      title: "Heavy metals in dates (Phoenix dactylifera L.) collected from Medina and Dhaka City markets, and assessment of human health risk",
      authors: "Chamon, A. S., Fahad, J. I., et al.",
      venue: "Environmental Systems Research (Springer), Vol. 13, Art. 27",
      year: "2024",
      doiOrUrl: "https://doi.org/10.1186/s40068-024-00355-6",
      type: "Journal",
      description: "Investigated cadmium (Cd) and nickel (Ni) concentrations in imported commercial date varieties (Mariam & Dabash) across Dhaka markets; assessed chronic daily intake (CDI) and cumulative carcinogenic & non-carcinogenic health hazards."
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Dhaleshwari River Basin Environmental Quality Assessment",
      role: "Lead Field Volunteer & Analyst",
      tools: "ArcGIS, Field Hydrometry, Water Sampling Kits",
      date: "Jan 2025 - Jul 2025",
      description: "Coordinated community field visits and collected longitudinal water samples along the industrial corridor of the Dhaleshwari River. Evaluated dissolved oxygen, heavy metal discharge indices, and prepared public awareness briefings for local stakeholders."
    },
    {
      id: "proj-2",
      title: "Comparative Soil Health Assessment in Urban Agricultural Peripheries",
      role: "Principal Investigator (Academic Seminar)",
      tools: "Soil Analysis Kits, SPSS, Excel",
      date: "2024",
      description: "Evaluated organic matter fractions, cation exchange capacity, and microbial biomass activity across suburban crop zones around Dhaka metropolis."
    }
  ],
  skills: [
    {
      id: "sk-1",
      category: "Geospatial & Computational Tools",
      items: "Fundamental ArcGIS, QGIS, Basic SPSS, Python (Data processing & Pandas), LaTeX (Typesetting)"
    },
    {
      id: "sk-2",
      category: "Laboratory & Field Analysis",
      items: "Soil and water chemical profiling, Heavy metal spectrometry prep, Field water sampling, pH/EC meters"
    },
    {
      id: "sk-3",
      category: "Communication & Documentation",
      items: "Public Speaking, Departmental Program Hosting, Scientific Article Writing, MS Office (Word, Excel, PowerPoint)"
    },
    {
      id: "sk-4",
      category: "Languages",
      items: "Bengali (Native), English (Professional Working Proficiency - CEFR Listening C1, Reading C1, Writing B2, Speaking B2)"
    }
  ],
  extracurriculars: [
    {
      id: "extra-1",
      role: "Organizing Secretary",
      organization: "Ananda (University of Dhaka District Student Association)",
      date: "Dec 2024 - Nov 2026",
      description: "Spearheaded student outreach programs, cultural events, and welfare initiatives for students of Narayanganj district at DU."
    },
    {
      id: "extra-2",
      role: "Reciter & Public Speaker",
      organization: "Collegiate Poetry & Cultural Forums",
      date: "2018 - Present",
      description: "Award-winning recitation artist and master of ceremonies for major departmental academic seminars."
    }
  ],
  awards: [
    {
      id: "aw-1",
      title: "Higher Secondary Board Merit Scholarship",
      issuer: "Dhaka Education Board",
      year: "2021",
      description: "Awarded for achieving GPA 5.00/5.00 in the Higher Secondary Certificate examination."
    }
  ],
  references: [
    {
      id: "ref-1",
      name: "Prof. Dr. [Academic Supervisor Name]",
      title: "Professor & Academic Supervisor",
      institution: "Department of Soil, Water and Environment, University of Dhaka",
      email: "supervisor@du.ac.bd",
      phone: "+880 2-9661900",
      relationship: "Undergraduate Academic Advisor & Thesis Mentor"
    },
    {
      id: "ref-2",
      name: "Dr. [Co-Supervisor / Research Collaborator]",
      title: "Associate Professor",
      institution: "Faculty of Biological Sciences, University of Dhaka",
      email: "mentor@du.ac.bd",
      phone: "+880 1812-000000",
      relationship: "Research Co-Supervisor & Senior Colleague"
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
