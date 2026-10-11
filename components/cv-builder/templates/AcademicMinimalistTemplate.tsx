import React from "react";
import { CvData } from "@/content/cv-schema";

interface TemplateProps {
  data: CvData;
}

export function AcademicMinimalistTemplate({ data }: TemplateProps) {
  const { personalInfo, education, experience, publications, projects, skills, extracurriculars, awards, references, settings } = data;

  const fontClass =
    settings.fontFamily === "serif"
      ? "font-serif"
      : settings.fontFamily === "mono"
      ? "font-mono"
      : "font-sans";

  const spacingClass =
    settings.spacing === "compact"
      ? "space-y-3 text-[12px] leading-snug"
      : settings.spacing === "spacious"
      ? "space-y-5 text-[13.5px] leading-relaxed"
      : "space-y-4 text-[13px] leading-normal";

  const contactItems: React.ReactNode[] = [];
  if (personalInfo.email) {
    contactItems.push(
      <a key="email" href={`mailto:${personalInfo.email}`} className="hover:underline text-gray-800">
        {personalInfo.email}
      </a>
    );
  }
  if (personalInfo.phone) {
    contactItems.push(<span key="phone">{personalInfo.phone}</span>);
  }
  if (personalInfo.location) {
    contactItems.push(<span key="location">{personalInfo.location}</span>);
  }
  if (personalInfo.website) {
    contactItems.push(
      <a key="website" href={personalInfo.website} target="_blank" rel="noreferrer" className="hover:underline text-gray-800">
        {personalInfo.website.replace(/^https?:\/\//, "")}
      </a>
    );
  }
  if (personalInfo.linkedin) {
    contactItems.push(
      <a key="linkedin" href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-gray-800">
        LinkedIn
      </a>
    );
  }
  if (personalInfo.orcid) {
    contactItems.push(<span key="orcid">ORCID: {personalInfo.orcid}</span>);
  }

  return (
    <div className={`w-full max-w-[210mm] mx-auto bg-white text-gray-900 p-8 sm:p-12 print:p-0 ${fontClass} ${spacingClass}`}>
      {/* Header (Stanford/Ivy Centered Header) */}
      <div className="cv-header text-center pb-3 border-b-2 border-gray-900 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-gray-900">
          {personalInfo.fullName || "Your Full Name"}
        </h1>
        {personalInfo.title && (
          <p className="text-sm italic font-medium text-gray-700 mt-0.5">
            {personalInfo.title}
          </p>
        )}
        
        {contactItems.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-gray-700 mt-2 font-sans">
            {contactItems.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-gray-400 select-none">•</span>}
                <span className="inline-flex items-center whitespace-nowrap">{item}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Summary / Research Statement */}
      {personalInfo.summary && (
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5">
            Research Interests & Profile
          </h2>
          <p className="text-gray-800 text-justify">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-2">
            Education
          </h2>
          <div className="space-y-2.5">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline font-bold text-gray-900">
                  <span>{edu.institution}</span>
                  <span className="text-xs font-normal text-gray-700 font-sans">
                    {edu.location ? `${edu.location} | ` : ""}{edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-gray-800 italic">
                  <span>{edu.degree}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}</span>
                  {edu.gpa && <span className="text-xs font-sans not-italic text-gray-700">{edu.gpa}</span>}
                </div>
                {edu.honors && (
                  <p className="text-xs text-gray-600 font-sans mt-0.5">
                    <span className="font-semibold">Honors:</span> {edu.honors}
                  </p>
                )}
                {edu.advisor && (
                  <p className="text-xs text-gray-600 font-sans mt-0.5">
                    <span className="font-semibold">Advisor:</span> {edu.advisor}
                  </p>
                )}
                {edu.bullets && edu.bullets.length > 0 && (
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-gray-800">
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
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-2">
            Publications & Preprints
          </h2>
          <div className="space-y-2">
            {publications.map((pub, idx) => (
              <div key={pub.id} className="text-xs leading-relaxed">
                <span className="font-semibold text-gray-900">[{idx + 1}]</span>{" "}
                <span className="text-gray-900">{pub.authors}</span> ({pub.year}).{" "}
                <span className="font-semibold italic">"{pub.title}"</span>.{" "}
                <span className="text-gray-800">{pub.venue}</span>.
                {pub.doiOrUrl && (
                  <div className="mt-0.5 font-sans">
                    <a href={pub.doiOrUrl} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                      {pub.doiOrUrl}
                    </a>
                  </div>
                )}
                {pub.description && (
                  <p className="text-gray-600 mt-0.5 italic">{pub.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Research & Professional Experience */}
      {experience.length > 0 && (
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-2">
            Research & Professional Experience
          </h2>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline font-bold text-gray-900">
                  <span>{exp.organization}</span>
                  <span className="text-xs font-normal text-gray-700 font-sans">
                    {exp.location ? `${exp.location} | ` : ""}{exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <div className="text-gray-800 italic flex justify-between items-baseline">
                  <span>{exp.role}</span>
                  {exp.category && (
                    <span className="text-xs not-italic font-sans text-gray-500 uppercase tracking-wider">
                      [{exp.category}]
                    </span>
                  )}
                </div>
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-gray-800">
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
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-2">
            Research Projects & Case Studies
          </h2>
          <div className="space-y-2.5">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline font-bold text-gray-900">
                  <span>{proj.title}</span>
                  {proj.date && <span className="text-xs font-normal text-gray-700 font-sans">{proj.date}</span>}
                </div>
                {(proj.role || proj.tools) && (
                  <p className="text-xs text-gray-600 font-sans italic">
                    {proj.role ? `${proj.role}` : ""}
                    {proj.role && proj.tools ? " | " : ""}
                    {proj.tools ? `Methodology: ${proj.tools}` : ""}
                  </p>
                )}
                <p className="text-xs text-gray-800 mt-0.5">{proj.description}</p>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noreferrer" className="text-xs text-blue-700 hover:underline font-sans">
                    {proj.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-2">
            Technical & Methodological Competencies
          </h2>
          <div className="space-y-1 text-xs">
            {skills.map((sk) => (
              <div key={sk.id} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-bold text-gray-900 sm:col-span-1">{sk.category}:</span>
                <span className="text-gray-800 sm:col-span-3">{sk.items}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Leadership & Extracurriculars */}
      {extracurriculars.length > 0 && (
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-2">
            Leadership, Service & Extracurriculars
          </h2>
          <div className="space-y-2">
            {extracurriculars.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between items-baseline font-bold text-gray-900">
                  <span>{item.organization}</span>
                  <span className="text-xs font-normal text-gray-700 font-sans">{item.date}</span>
                </div>
                <div className="text-xs italic text-gray-700">{item.role}</div>
                <p className="text-xs text-gray-800 mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Awards & Honors */}
      {awards.length > 0 && (
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-2">
            Honors, Awards & Fellowships
          </h2>
          <div className="space-y-1.5 text-xs">
            {awards.map((aw) => (
              <div key={aw.id} className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-gray-900">{aw.title}</span>
                  {aw.issuer && <span className="text-gray-700">, {aw.issuer}</span>}
                  {aw.description && <span className="text-gray-600 block text-[11px]">{aw.description}</span>}
                </div>
                <span className="text-gray-600 font-sans font-medium shrink-0 ml-2">{aw.year}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* References */}
      {references && references.length > 0 && (
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-0.5 mb-2">
            Academic & Professional References
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {references.map((ref) => (
              <div key={ref.id} className="space-y-0.5">
                <p className="font-bold text-gray-900">{ref.name}</p>
                <p className="italic text-gray-700">{ref.title}</p>
                <p className="text-gray-800">{ref.institution}</p>
                {ref.relationship && (
                  <p className="text-[11px] text-gray-600 font-sans">Role: {ref.relationship}</p>
                )}
                <div className="text-[11px] text-gray-600 font-sans pt-0.5">
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
