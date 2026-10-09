import { profileData } from "@/content/profile";
import { educationData } from "@/content/education";

export const metadata = {
  title: "About | JI Fahad",
  description: "About JI Fahad - Environmental science graduate and researcher.",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Biography</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              {profileData.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
            <div className="space-y-6">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative pl-6 border-l-2 border-accent">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5" />
                  <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-medium">
                    {edu.url ? (
                      <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {edu.institution}
                      </a>
                    ) : (
                      edu.institution
                    )}
                  </p>
                  <p className="text-sm text-muted mt-1">{edu.location} | {edu.startDate} - {edu.endDate}</p>
                  {edu.fieldOfStudy && (
                    <p className="text-sm text-foreground/80 mt-2">
                      <span className="font-semibold">Field of study:</span> {edu.fieldOfStudy}
                    </p>
                  )}
                  {edu.grade && (
                    <p className="text-sm text-foreground/80 mt-1">
                      <span className="font-semibold">Final grade:</span> {edu.grade}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div>
          <div className="sticky top-24 space-y-8">
            <section className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Research Interests</h3>
              <ul className="space-y-2">
                {profileData.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-sm text-foreground/90">{interest}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Software</h4>
                  <p className="text-sm text-foreground/80">GIS, Basic SPSS, Python</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Documentation</h4>
                  <p className="text-sm text-foreground/80">LaTeX, MS Office, Google Workspace</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Communication</h4>
                  <p className="text-sm text-foreground/80">Public Speaking, Science Communication</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
