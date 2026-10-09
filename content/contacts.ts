import { Mail, Phone, MapPin, Globe, Briefcase } from "lucide-react";

export const contactData = {
  email: "jifahad2072@gmail.com",
  phone: "(+880) 1861758255",
  whatsapp: "01861758255",
  location: "126, Jamtola Masjid Road, New Chashara, 1400, Narayanganj, Bangladesh",
  linkedin: "https://www.linkedin.com/in/ji-fahad-417507182/",
  website: "https://sites.google.com/view/jifahad/home"
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
    name: "Website",
    url: contactData.website,
    icon: Globe
  }
];
