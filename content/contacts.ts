import { Mail, Phone, MapPin, Globe, Briefcase, Link } from "lucide-react";

export const contactData = {
  email: "jifahad2072@gmail.com",
  phone: "(+880) 1861758255",
  whatsapp: "01861758255",
  location: "New Chashara, Narayanganj-1400, Narayanganj, Bangladesh",
  linkedin: "https://www.linkedin.com/in/ji-fahad-417507182/",
  ORCiD: "https://orcid.org/0009-0001-6411-5224",
  rg: "https://www.researchgate.net/profile/Ji-Fahad?ev=hdr_xprf",
};

export const socialLinks = [
  {
    name: "Email",
    url: `mailto:${contactData.email}`,
    icon: Mail
  },
  {
    name: "LinkedIn",
    url: contactData.linkedin,
    icon: Briefcase
  },
  {
    name: "ORCiD",
    url: contactData.ORCiD,
    icon: Link
  },
  {
    name:"Research Gate",
    url: contactData.rg,
    icon: Link
  }
];
