export interface AcademicDocument {
  id: string;
  title: string;
  type: "transcript" | "certificate" | "result";
  institution: string;
  degreeOrExam: string;
  year: string;
  gpa?: string;
  cgpa?: string;
  fileUrl: string;
  fileSize?: string;
  status: "verified" | "available_on_request";
  note?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  fieldOfStudy?: string;
  grade?: string;
  url?: string;
  documents?: AcademicDocument[];
}

export const academicDocuments: AcademicDocument[] = [
  {
    id: "doc-du-4",
    title: "DU B.S. (Hons.) 4th Year Final Academic Transcript (2024)",
    type: "transcript",
    institution: "University of Dhaka",
    degreeOrExam: "Bachelor of Science (Hons.) in Soil, Water and Environment",
    year: "2024 (Published 2026)",
    gpa: "3.39",
    cgpa: "3.44",
    fileUrl: "/documents/DU_BS_4th_Year_Transcript_2024.pdf",
    fileSize: "760 KB",
    status: "verified",
    note: "Final cumulative degree result: Passed with CGPA 3.44 out of 4.00."
  },
  {
    id: "doc-du-3",
    title: "DU B.S. (Hons.) 3rd Year Academic Transcript (2023)",
    type: "transcript",
    institution: "University of Dhaka",
    degreeOrExam: "Bachelor of Science (Hons.) in Soil, Water and Environment",
    year: "2023",
    gpa: "3.38",
    cgpa: "3.46",
    fileUrl: "/documents/DU_BS_3rd_Year_Transcript_2023.pdf",
    fileSize: "671 KB",
    status: "verified",
    note: "3rd Year examination result archive from Office of Controller of Examinations."
  },
  {
    id: "doc-du-2",
    title: "DU B.S. (Hons.) 2nd Year Academic Transcript (2022)",
    type: "transcript",
    institution: "University of Dhaka",
    degreeOrExam: "Bachelor of Science (Hons.) in Soil, Water and Environment",
    year: "2022",
    gpa: "3.56",
    cgpa: "3.51",
    fileUrl: "/documents/DU_BS_2nd_Year_Transcript_2022.pdf",
    fileSize: "764 KB",
    status: "verified",
    note: "2nd Year examination result archive from Office of Controller of Examinations."
  },
  {
    id: "doc-du-1",
    title: "DU B.S. (Hons.) 1st Year Academic Transcript (2021)",
    type: "transcript",
    institution: "University of Dhaka",
    degreeOrExam: "Bachelor of Science (Hons.) in Soil, Water and Environment",
    year: "2021",
    gpa: "3.45",
    cgpa: "3.45",
    fileUrl: "/documents/DU_BS_1st_Year_Transcript_2021.pdf",
    fileSize: "464 KB",
    status: "verified",
    note: "1st Year examination result archive from Office of Controller of Examinations."
  },
  {
    id: "doc-hsc",
    title: "Higher Secondary Certificate (HSC) Result & Marksheet (2020)",
    type: "certificate",
    institution: "Govt. Tolaram College",
    degreeOrExam: "Higher Secondary Certificate (HSC) - Dhaka Board",
    year: "2020",
    gpa: "5.00 / 5.00",
    fileUrl: "/documents/HSC_Result_Certificate_2020.pdf",
    fileSize: "106 KB",
    status: "verified",
    note: "Science group result publication record from Education Board: GPA 5.00."
  },
  {
    id: "doc-ssc",
    title: "Secondary School Certificate (SSC) Result & Record (2018)",
    type: "result",
    institution: "Narayanganj High School and College",
    degreeOrExam: "Secondary School Certificate (SSC) - Dhaka Board",
    year: "2018",
    fileUrl: "/documents/SSC_Result.pdf",
    fileSize: "Official Record Notice",
    status: "available_on_request",
    note: "SSC result that I could not attach here. Official academic certificate and marksheet are verified on record and available upon request."
  }
];

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor (Hons.) in Soil, Water and Environment",
    institution: "University of Dhaka",
    location: "Dhaka, Bangladesh",
    startDate: "Jan 2022",
    endDate: "Apr 2026",
    fieldOfStudy: "Soil, Water and Environment",
    grade: "Final CGPA: 3.44 (Scale 4.00)",
    url: "https://www.du.ac.bd/",
    documents: academicDocuments.filter((d) => d.id.startsWith("doc-du"))
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Tolaram College",
    location: "Narayanganj, Bangladesh",
    startDate: "Jun 2018",
    endDate: "Jan 2021",
    fieldOfStudy: "Science",
    grade: "GPA: 5.00 / 5.00",
    url: "https://tolaramcollege.edu.bd/",
    documents: academicDocuments.filter((d) => d.id === "doc-hsc")
  },
  {
    id: "edu-3",
    degree: "Secondary School Certificate (SSC)",
    institution: "Narayanganj High School and College",
    location: "Narayanganj, Bangladesh",
    startDate: "Jan 2016",
    endDate: "Mar 2018",
    fieldOfStudy: "Science",
    documents: academicDocuments.filter((d) => d.id === "doc-ssc")
  }
];
