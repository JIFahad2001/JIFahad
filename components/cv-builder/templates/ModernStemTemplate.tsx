import React from "react";
import { CvData } from "@/content/cv-schema";
import { Mail, Phone, MapPin, Globe, ExternalLink } from "lucide-react";

interface TemplateProps {
  data: CvData;
}

export function ModernStemTemplate({ data }: TemplateProps) {
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

  return (
    <div className={`w-full max-w-[210mm] mx-auto bg-white text-slate-800 p-8 sm:p-12 print:p-0 ${fontClass} ${spacingClass}`}>
      {/* Header (MIT / Caltech Modern STEM Header) */}
      <div className="cv-header border-b-2 pb-4" style={{ borderColor: accentColor }}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: accentColor }}>
              {personalInfo.fullName || "Your Full Name"}
            </h1>
            {personalInfo.title && (
              <p className="text-sm font-semibold tracking-wide text-slate-600 uppercase mt-0.5">
                {personalInfo.title}
              </p>
            )}
          </div>
          <div className="flex flex-col text-xs text-slate-600 sm:items-end space-y-0.5">
            {personalInfo.email && (
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline text-slate-700">
                  {personalInfo.email}
                </a>
              </span>
            )}
            {personalInfo.phone && (
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.phone}</span>
              </span>
            )}
            {personalInfo.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </span>
            )}
          </div>
        </div>

        {/* Links bar */}
        {(personalInfo.website || personalInfo.linkedin) && (
          <div className="flex flex-wrap items-center gap-4 mt-2.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
            {personalInfo.website && (
              <a href={personalInfo.website} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-800 transition-colors">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.website.replace(/^https?:\/\//, "")}</span>
              </a>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-800 transition-colors">
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                <span>LinkedIn Profile</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: accentColor }}></span>
            Summary & Objectives
          </h2>
          <p className="text-slate-700 text-justify bg-slate-50/70 p-2.5 rounded border border-slate-200/60">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: accentColor }}></span>
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="relative pl-3 border-l-2 border-slate-200">
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span className="text-sm">{edu.institution}</span>
                  <span className="text-xs font-medium text-slate-500">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-slate-700 font-medium">
                  <span>{edu.degree} &mdash; <span className="text-slate-600">{edu.fieldOfStudy}</span></span>
                  {edu.location && <span className="text-slate-500">{edu.location}</span>}
                </div>
                {edu.gpa && (
                  <span className="inline-block px-1.5 py-0.5 bg-slate-100 rounded text-[11px] font-semibold text-slate-700 mt-1">
                    Grade: {edu.gpa}
                  </span>
                )}
                {edu.honors && (
                  <p className="text-xs text-slate-600 mt-0.5">
                    <span className="font-semibold">Honors:</span> {edu.honors}
                  </p>
                )}
                {edu.bullets && edu.bullets.length > 0 && (
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-0.5 text-xs text-slate-600">
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

      {/* Technical Skills Matrix */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: accentColor }}></span>
            Technical & Analytical Skills
          </h2>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/80 space-y-1.5 text-xs">
            {skills.map((sk) => (
              <div key={sk.id} className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <span className="font-bold text-slate-800">{sk.category}</span>
                <span className="sm:col-span-2 text-slate-700">{sk.items}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: accentColor }}></span>
            Professional & Research Experience
          </h2>
          <div className="space-y-3.5">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span className="text-sm">{exp.role}</span>
                  <span className="text-xs font-medium text-slate-500">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-slate-700 font-medium">
                  <span style={{ color: accentColor }}>{exp.organization}</span>
                  {exp.location && <span className="text-slate-500">{exp.location}</span>}
                </div>
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-0.5 text-xs text-slate-600">
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

      {/* Publications */}
      {publications.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: accentColor }}></span>
            Peer-Reviewed Publications & Reports
          </h2>
          <div className="space-y-2.5">
            {publications.map((pub) => (
              <div key={pub.id} className="text-xs bg-slate-50/50 p-2.5 rounded border border-slate-200/60">
                <h3 className="font-bold text-slate-900 mb-0.5">{pub.title}</h3>
                <p className="text-slate-700">
                  {pub.authors} &bull; <span className="italic">{pub.venue}</span> ({pub.year})
                </p>
                {pub.doiOrUrl && (
                  <a href={pub.doiOrUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline block mt-0.5">
                    {pub.doiOrUrl}
                  </a>
                )}
                {pub.description && (
                  <p className="text-slate-600 mt-1 text-[11.5px]">{pub.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: accentColor }}></span>
            Key Engineering & Research Projects
          </h2>
          <div className="space-y-2.5">
            {projects.map((proj) => (
              <div key={proj.id} className="text-xs">
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>{proj.title}</span>
                  {proj.date && <span className="font-medium text-slate-500">{proj.date}</span>}
                </div>
                {proj.tools && (
                  <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                    Tech: {proj.tools}
                  </p>
                )}
                <p className="text-slate-700 mt-1">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Extracurricular & Awards Grid */}
      {(extracurriculars.length > 0 || awards.length > 0) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {extracurriculars.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: accentColor }}></span>
                Leadership & Outreach
              </h2>
              <div className="space-y-1.5 text-xs">
                {extracurriculars.map((item) => (
                  <div key={item.id} className="border-l border-slate-200 pl-2">
                    <p className="font-semibold text-slate-800">{item.role}</p>
                    <p className="text-slate-500 text-[11px]">{item.organization} ({item.date})</p>
                    <p className="text-slate-600 text-[11.5px] mt-0.5">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {awards.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: accentColor }}></span>
                Honors & Scholarships
              </h2>
              <div className="space-y-1.5 text-xs">
                {awards.map((aw) => (
                  <div key={aw.id} className="border-l border-slate-200 pl-2">
                    <div className="flex justify-between items-baseline">
                      <span className="font-semibold text-slate-800">{aw.title}</span>
                      <span className="text-slate-500 text-[11px]">{aw.year}</span>
                    </div>
                    {aw.issuer && <p className="text-slate-500 text-[11px]">{aw.issuer}</p>}
                    {aw.description && <p className="text-slate-600 text-[11.5px] mt-0.5">{aw.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* References */}
      {references && references.length > 0 && (
        <section className="pt-1">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: accentColor }}></span>
            References & Supervisors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {references.map((ref) => (
              <div key={ref.id} className="bg-slate-50 p-3 rounded-lg border border-slate-200/80 space-y-1">
                <p className="font-bold text-slate-900">{ref.name}</p>
                <p className="text-slate-600 font-medium">{ref.title}</p>
                <p className="text-slate-500 text-[11.5px]">{ref.institution}</p>
                {ref.relationship && (
                  <p className="text-[11px] text-slate-500 italic mt-0.5">Role: {ref.relationship}</p>
                )}
                <div className="text-[11.5px] text-slate-600 pt-1 border-t border-slate-200/60 mt-1">
                  {ref.email && <div>Email: <a href={`mailto:${ref.email}`} className="text-blue-600 hover:underline">{ref.email}</a></div>}
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
