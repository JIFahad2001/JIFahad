import React from "react";
import { CvData } from "@/content/cv-schema";

interface TemplateProps {
  data: CvData;
}

export function InternationalScholarTemplate({ data }: TemplateProps) {
  const { personalInfo, education, experience, publications, projects, skills, extracurriculars, awards, references, settings } = data;

  const accentColor = settings.accentColor || "#173F35";

  const fontClass =
    settings.fontFamily === "serif"
      ? "font-serif"
      : settings.fontFamily === "mono"
      ? "font-mono"
      : "font-sans";

  const spacingClass =
    settings.spacing === "compact"
      ? "space-y-3.5 text-[12px] leading-snug"
      : settings.spacing === "spacious"
      ? "space-y-6 text-[13.5px] leading-relaxed"
      : "space-y-4.5 text-[12.5px] leading-normal";

  const contactLines: React.ReactNode[] = [];
  if (personalInfo.email) {
    contactLines.push(
      <a key="email" href={`mailto:${personalInfo.email}`} className="hover:underline text-zinc-800">
        {personalInfo.email}
      </a>
    );
  }
  const phoneAndLoc = [personalInfo.phone, personalInfo.location].filter(Boolean).join(" • ");
  if (phoneAndLoc) {
    contactLines.push(<span key="phoneloc">{phoneAndLoc}</span>);
  }
  if (personalInfo.website) {
    contactLines.push(
      <a key="website" href={personalInfo.website} target="_blank" rel="noreferrer" className="hover:underline text-zinc-800">
        {personalInfo.website.replace(/^https?:\/\//, "")}
      </a>
    );
  }
  if (personalInfo.linkedin) {
    contactLines.push(
      <a key="linkedin" href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-zinc-800">
        LinkedIn Profile
      </a>
    );
  }
  if (personalInfo.orcid) {
    contactLines.push(<span key="orcid">ORCID: {personalInfo.orcid}</span>);
  }

  return (
    <div className={`w-full max-w-[210mm] mx-auto bg-white text-zinc-900 p-8 sm:p-12 print:p-0 ${fontClass} ${spacingClass}`}>
      {/* Header (Sydney / Peking University Style with sophisticated elegance) */}
      <div className="cv-header pb-4 mb-4 border-b-2" style={{ borderColor: accentColor }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-serif">
              {personalInfo.fullName || "Your Full Name"}
            </h1>
            {personalInfo.title && (
              <p className="text-sm font-medium tracking-wide mt-0.5" style={{ color: accentColor }}>
                {personalInfo.title}
              </p>
            )}
          </div>

          {contactLines.length > 0 && (
            <div className="text-xs text-zinc-600 space-y-0.5 md:text-right font-sans">
              {contactLines.map((line, idx) => (
                <div key={idx} className="whitespace-nowrap">{line}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Executive Academic Summary */}
      {personalInfo.summary && (
        <section>
          <div className="flex items-center gap-2 mb-1.5">
            <h2 className="text-xs font-bold uppercase tracking-widest font-sans" style={{ color: accentColor }}>
              Executive Summary
            </h2>
            <div className="flex-1 h-[1px] bg-zinc-200"></div>
          </div>
          <p className="text-zinc-700 text-justify italic leading-relaxed">
            "{personalInfo.summary}"
          </p>
        </section>
      )}

      {/* Education & Qualifications */}
      {education.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest font-sans" style={{ color: accentColor }}>
              Academic Qualifications
            </h2>
            <div className="flex-1 h-[1px] bg-zinc-200"></div>
          </div>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="group">
                <div className="flex justify-between items-baseline font-bold text-zinc-900">
                  <span className="font-serif text-sm">{edu.institution}</span>
                  <span className="text-xs font-sans text-zinc-500 font-normal">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-zinc-700">
                  <span className="font-semibold">{edu.degree} &bull; {edu.fieldOfStudy}</span>
                  <span className="text-zinc-500 font-sans">{edu.location}</span>
                </div>
                {edu.gpa && (
                  <p className="text-xs text-zinc-600 mt-0.5">
                    <span className="font-medium text-zinc-800">Evaluation:</span> {edu.gpa}
                  </p>
                )}
                {edu.honors && (
                  <p className="text-xs text-zinc-600 mt-0.5">
                    <span className="font-medium text-zinc-800">Honors:</span> {edu.honors}
                  </p>
                )}
                {edu.bullets && edu.bullets.length > 0 && (
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-zinc-600">
                    {edu.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Publications */}
      {publications.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest font-sans" style={{ color: accentColor }}>
              Publications & Scholarly Contributions
            </h2>
            <div className="flex-1 h-[1px] bg-zinc-200"></div>
          </div>
          <div className="space-y-2">
            {publications.map((pub, idx) => (
              <div key={pub.id} className="text-xs text-zinc-800 leading-relaxed pl-3 border-l-2" style={{ borderColor: accentColor }}>
                <p>
                  <span className="font-bold">{pub.authors}</span> ({pub.year}).{" "}
                  <span className="font-semibold italic">"{pub.title}"</span>.{" "}
                  <span className="text-zinc-700">{pub.venue}</span>.
                </p>
                {pub.doiOrUrl && (
                  <a href={pub.doiOrUrl} target="_blank" rel="noreferrer" className="text-xs text-blue-700 hover:underline block font-sans mt-0.5">
                    DOI / Link: {pub.doiOrUrl}
                  </a>
                )}
                {pub.description && (
                  <p className="text-zinc-500 text-[11.5px] mt-0.5 italic">{pub.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional & Research Appointments */}
      {experience.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest font-sans" style={{ color: accentColor }}>
              Research & Professional Appointments
            </h2>
            <div className="flex-1 h-[1px] bg-zinc-200"></div>
          </div>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline font-bold text-zinc-900">
                  <span className="text-sm font-serif">{exp.role}</span>
                  <span className="text-xs font-sans text-zinc-500 font-normal">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-zinc-700 font-medium">
                  <span style={{ color: accentColor }}>{exp.organization}</span>
                  <span className="text-zinc-500 font-sans">{exp.location}</span>
                </div>
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-zinc-600">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest font-sans" style={{ color: accentColor }}>
              Research Projects & Field Work
            </h2>
            <div className="flex-1 h-[1px] bg-zinc-200"></div>
          </div>
          <div className="space-y-2.5">
            {projects.map((proj) => (
              <div key={proj.id} className="text-xs">
                <div className="flex justify-between items-baseline font-bold text-zinc-900">
                  <span className="font-serif">{proj.title}</span>
                  {proj.date && <span className="text-zinc-500 font-normal font-sans">{proj.date}</span>}
                </div>
                {(proj.role || proj.tools) && (
                  <p className="text-zinc-500 text-[11px] font-sans">
                    {proj.role ? `${proj.role} • ` : ""}Tools: {proj.tools}
                  </p>
                )}
                <p className="text-zinc-700 mt-0.5">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Competencies */}
      {skills.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest font-sans" style={{ color: accentColor }}>
              Academic & Technical Competencies
            </h2>
            <div className="flex-1 h-[1px] bg-zinc-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {skills.map((sk) => (
              <div key={sk.id} className="bg-zinc-50 p-2 rounded border border-zinc-200">
                <p className="font-bold text-zinc-900">{sk.category}</p>
                <p className="text-zinc-700 text-[11.5px] mt-0.5">{sk.items}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Extracurriculars & Awards */}
      {(extracurriculars.length > 0 || awards.length > 0) && (
        <section>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest font-sans" style={{ color: accentColor }}>
              Civic Engagement & Awards
            </h2>
            <div className="flex-1 h-[1px] bg-zinc-200"></div>
          </div>
          <div className="space-y-2 text-xs">
            {awards.map((aw) => (
              <div key={aw.id} className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-zinc-900">{aw.title}</span>
                  {aw.issuer && <span className="text-zinc-600"> &mdash; {aw.issuer}</span>}
                </div>
                <span className="text-zinc-500 font-sans">{aw.year}</span>
              </div>
            ))}
            {extracurriculars.map((item) => (
              <div key={item.id} className="text-zinc-700">
                <span className="font-bold text-zinc-900">{item.role}</span>, {item.organization} ({item.date}) &mdash; {item.description}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* References */}
      {references && references.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xs font-bold uppercase tracking-widest font-sans" style={{ color: accentColor }}>
              Referees & Academic Supervisors
            </h2>
            <div className="flex-1 h-[1px] bg-zinc-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {references.map((ref) => (
              <div key={ref.id} className="pl-3 border-l-2 space-y-0.5" style={{ borderColor: accentColor }}>
                <p className="font-bold text-zinc-900 font-serif">{ref.name}</p>
                <p className="text-zinc-700">{ref.title}</p>
                <p className="text-zinc-600">{ref.institution}</p>
                {ref.relationship && (
                  <p className="text-[11px] text-zinc-500 font-sans">Role: {ref.relationship}</p>
                )}
                <div className="text-[11px] text-zinc-600 font-sans pt-1">
                  {ref.email && <div>Email: {ref.email}</div>}
                  {ref.phone && <div>Phone: {ref.phone}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
