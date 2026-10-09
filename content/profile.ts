export interface Profile {
  name: string;
  headline: string;
  bio: string[];
  interests: string[];
}

export const profileData: Profile = {
  name: "JI Fahad",
  headline: "Environmental science graduate interested in research, environmental problem-solving, and the communication of scientific knowledge.",
  bio: [
    "I am an environmental science graduate with a profound interest in environmental research, sustainable problem-solving, and communicating scientific knowledge effectively. After completing my Bachelors (Hons.) in Soil, Water and Environment at the University of Dhaka, I have started my Masters journey as focusing on Soil Science from the same department.",
    "My academic journey has equipped me with a strong foundation in understanding complex environmental issues. I actively engage in research, focusing on soil and water quality, environmental toxicology, and sustainability.",
    "Beyond academics, I am a dedicated public speaker and science communicator. I have hosted research podcasts aimed at presenting scientific findings to students, and I actively participate in environmental awareness programs, such as the Dhaleshwari River Protection initiative."
  ],
  interests: [
    "Soil and water science",
    "Environmental pollution and toxicology",
    "Soil and water quality",
    "GIS and remote sensing",
    "Environmental sustainability",
    "Computational Environmetnal Dynamics",
    "Science communication"
  ]
};
