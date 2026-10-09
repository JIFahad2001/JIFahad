export interface Experience {
  id: string;
  role: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  category: "Professional" | "Research" | "Volunteer" | "Leadership";
}

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Research Podcast Host",
    organization: "Research and Analysis Institute",
    startDate: "May 2025",
    endDate: "Sep 2026",
    category: "Professional",
    responsibilities: [
      "Hosted podcasts with researchers and scholars to present their research findings.",
      "Discussed higher education opportunities for Bangladeshi students globally."
    ]
  },
  {
    id: "exp-2",
    role: "Student Ambassador",
    organization: "Nature Positive University, University of Oxford",
    startDate: "Dec 2024",
    endDate: "Aug 2025",
    category: "Leadership",
    responsibilities: [
      "Worked as a student ambassador meeting individuals from different countries.",
      "Mutually shared work through modules arranged by the host organization."
    ]
  },
  {
    id: "exp-3",
    role: "Volunteer",
    organization: "Dhaleshwari River Protection Awareness",
    startDate: "Jan 2025",
    endDate: "Jul 2025",
    category: "Volunteer",
    responsibilities: [
      "Assessed the current condition of the Dhaleshwari river and its surrounding environment along with local culture."
    ]
  },
  {
    id: "exp-4",
    role: "Organizing Secretary",
    organization: "'Ananda', University of Dhaka",
    startDate: "Dec 2024",
    endDate: "Nov 2026",
    category: "Leadership",
    responsibilities: [
      "Helped and organized different events and activities for the district-level organization."
    ]
  },
  {
    id: "exp-5",
    role: "Physics Instructor",
    organization: "Paragon Coaching Center",
    location: "Narayanganj, Bangladesh",
    startDate: "Jul 2020",
    endDate: "Jan 2022",
    category: "Professional",
    responsibilities: [
      "Delivered lectures on Higher Secondary School Physics.",
      "Managed Exams and Question Preparation."
    ]
  }
];
