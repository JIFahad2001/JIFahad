import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { contactData, socialLinks } from "@/content/contacts";

export const metadata = {
  title: "Contact | JI Fahad",
  description: "Get in touch with JI Fahad for academic communication, research discussions, and collaboration.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Get in Touch</h1>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            I am always open to academic communication, research discussions, potential collaborations, and other relevant professional inquiries. Feel free to reach out through any of the channels below.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Email</h3>
                <a href={`mailto:${contactData.email}`} className="text-secondary hover:underline mt-1 inline-block">
                  {contactData.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Phone & WhatsApp</h3>
                <p className="text-foreground/80 mt-1">{contactData.phone}</p>
                <p className="text-sm text-muted mt-1">WhatsApp: {contactData.whatsapp}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Location</h3>
                <p className="text-foreground/80 mt-1 max-w-xs">{contactData.location}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm h-full flex flex-col">
            <h2 className="text-2xl font-bold text-foreground mb-6">Professional Profiles</h2>
            <p className="text-foreground/80 mb-8">
              Connect with me on professional networks or view my academic profiles to learn more about my background and ongoing work.
            </p>
            
            <div className="space-y-4 flex-grow">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-border bg-background hover:border-primary hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center">
                      <Icon className="h-6 w-6 text-muted group-hover:text-primary transition-colors mr-4" />
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
