import { Download, ExternalLink } from "lucide-react";
import { profileData } from "@/content/profile";
import { educationData } from "@/content/education";
import { experienceData } from "@/content/experience";
import { PrintButton } from "./PrintButton";

export const metadata = {
  title: "Curriculum Vitae | JI Fahad",
  description: "Curriculum Vitae of JI Fahad.",
};

export default function CV() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary">Curriculum Vitae</h1>
        
        <div className="flex gap-3">
          <a 
            href="/documents/Fahad_CV.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted/10 hover:text-primary"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Original
          </a>
          <a 
            href="/documents/Fahad_CV.html" 
            download="Fahad_CV.html"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border shadow-sm p-8 sm:p-12 print:shadow-none print:border-none print:p-0">
        <div className="text-center mb-10 border-b border-border pb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">{profileData.name}</h2>
          <p className="text-muted-foreground">{profileData.headline}</p>
        </div>

        <div className="space-y-10">
          <section>
            <h3 className="text-xl font-bold text-primary mb-4 border-b border-muted/20 pb-2">Education</h3>
            <div className="space-y-6">
              {educationData.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-foreground">{edu.degree}</h4>
                    <span className="text-sm text-muted font-medium shrink-0">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="font-medium text-foreground/80">{edu.institution}, {edu.location}</p>
                  {edu.fieldOfStudy && <p className="text-sm text-foreground/80 mt-1">Field of study: {edu.fieldOfStudy}</p>}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-primary mb-4 border-b border-muted/20 pb-2">Experience</h3>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-foreground">{exp.role}</h4>
                    <span className="text-sm text-muted font-medium shrink-0">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="font-medium text-foreground/80">{exp.organization}{exp.location ? `, ${exp.location}` : ''}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-foreground/80">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-primary mb-4 border-b border-muted/20 pb-2">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Technical Skills</h4>
                <p className="text-sm text-foreground/80">GIS, Basic SPSS, Python</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Tools & Documentation</h4>
                <p className="text-sm text-foreground/80">LaTeX, MS Office, Google Workspace</p>
              </div>
            </div>
          </section>
        </div>
        
        <PrintButton />
      </div>
    </div>
  );
}
