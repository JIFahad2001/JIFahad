import { experienceData } from "@/content/experience";

export const metadata = {
  title: "Professional Experience | JI Fahad",
  description: "Professional, research, volunteer, and leadership experience of JI Fahad.",
};

export default function Experience() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Professional Experience</h1>
        <p className="text-lg text-foreground/80 max-w-3xl">
          My professional background including academic roles, leadership positions, and volunteer work.
        </p>
      </div>
      
      <div className="relative border-l-2 border-muted/30 ml-3 md:ml-6 space-y-12 pb-8">
        {experienceData.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1.5 ring-4 ring-background" />
            
            <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <div className="text-primary font-medium mt-1">{exp.organization}</div>
                  {exp.location && <div className="text-sm text-muted mt-1">{exp.location}</div>}
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-muted/10 text-muted-foreground whitespace-nowrap">
                    {exp.startDate} — {exp.endDate}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                    {exp.category}
                  </span>
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mt-6">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="relative -left-1">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
