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
}

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor (Hons.)",
    institution: "University of Dhaka",
    location: "Dhaka, Bangladesh",
    startDate: "Jan 2022",
    endDate: "Apr 2026",
    fieldOfStudy: "Soil, Water and Environment",
    grade: "3.44",
    url: "https://www.du.ac.bd/"
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate",
    institution: "Govt. Tolaram College",
    location: "Narayanganj, Bangladesh",
    startDate: "Jun 2018",
    endDate: "Jan 2021",
    fieldOfStudy: "Science",
    grade: "5.00",
    url: "https://tolaramcollege.edu.bd/"
  },
  {
    id: "edu-3",
    degree: "Secondary School Certificate",
    institution: "Narayanganj High School and College",
    location: "Narayanganj, Bangladesh",
    startDate: "Jan 2016",
    endDate: "Mar 2018"
  }
];
