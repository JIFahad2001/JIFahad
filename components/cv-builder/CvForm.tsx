"use client";

import React, { useState } from "react";
import {
  CvData,
  EducationItem,
  ExperienceItem,
  PublicationItem,
  ProjectItem,
  SkillCategory,
  ExtracurricularItem,
  AwardItem,
  ReferenceItem,
  TemplateStyle,
  FontFamilyStyle,
  SpacingStyle,
} from "@/content/cv-schema";
import {
  User,
  GraduationCap,
  Briefcase,
  BookOpen,
  FolderGit2,
  Wrench,
  Award,
  Users,
  BookUser,
  Settings,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface CvFormProps {
  data: CvData;
  onChange: (updated: CvData) => void;
}

export function CvForm({ data, onChange }: CvFormProps) {
  const [activeSection, setActiveSection] = useState<string>("personal");

  // Helper updater
  const updatePersonalInfo = (field: keyof CvData["personalInfo"], value: string) => {
    onChange({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: value,
      },
    });
  };

  const updateSettings = (field: keyof CvData["settings"], value: any) => {
    onChange({
      ...data,
      settings: {
        ...data.settings,
        [field]: value,
      },
    });
  };

  // Education Helpers
  const addEducation = () => {
    const newItem: EducationItem = {
      id: `edu-${Date.now()}`,
      institution: "",
      degree: "",
      fieldOfStudy: "",
      location: "",
      startDate: "",
      endDate: "",
      gpa: "",
      honors: "",
      bullets: [""],
    };
    onChange({ ...data, education: [newItem, ...data.education] });
  };

  const updateEducation = (id: string, field: keyof EducationItem, val: any) => {
    onChange({
      ...data,
      education: data.education.map((item) => (item.id === id ? { ...item, [field]: val } : item)),
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((item) => item.id !== id),
    });
  };

  // Experience Helpers
  const addExperience = () => {
    const newItem: ExperienceItem = {
      id: `exp-${Date.now()}`,
      role: "",
      organization: "",
      location: "",
      startDate: "",
      endDate: "",
      category: "Research",
      bullets: [""],
    };
    onChange({ ...data, experience: [newItem, ...data.experience] });
  };

  const updateExperience = (id: string, field: keyof ExperienceItem, val: any) => {
    onChange({
      ...data,
      experience: data.experience.map((item) => (item.id === id ? { ...item, [field]: val } : item)),
    });
  };

  const removeExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter((item) => item.id !== id),
    });
  };

  // Publications Helpers
  const addPublication = () => {
    const newItem: PublicationItem = {
      id: `pub-${Date.now()}`,
      title: "",
      authors: "",
      venue: "",
      year: new Date().getFullYear().toString(),
      doiOrUrl: "",
      type: "Journal",
      description: "",
    };
    onChange({ ...data, publications: [newItem, ...data.publications] });
  };

  const updatePublication = (id: string, field: keyof PublicationItem, val: any) => {
    onChange({
      ...data,
      publications: data.publications.map((item) => (item.id === id ? { ...item, [field]: val } : item)),
    });
  };

  const removePublication = (id: string) => {
    onChange({
      ...data,
      publications: data.publications.filter((item) => item.id !== id),
    });
  };

  // Projects Helpers
  const addProject = () => {
    const newItem: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: "",
      role: "",
      tools: "",
      date: "",
      description: "",
      link: "",
    };
    onChange({ ...data, projects: [newItem, ...data.projects] });
  };

  const updateProject = (id: string, field: keyof ProjectItem, val: any) => {
    onChange({
      ...data,
      projects: data.projects.map((item) => (item.id === id ? { ...item, [field]: val } : item)),
    });
  };

  const removeProject = (id: string) => {
    onChange({
      ...data,
      projects: data.projects.filter((item) => item.id !== id),
    });
  };

  // Skills Helpers
  const addSkill = () => {
    const newItem: SkillCategory = {
      id: `skill-${Date.now()}`,
      category: "",
      items: "",
    };
    onChange({ ...data, skills: [...data.skills, newItem] });
  };

  const updateSkill = (id: string, field: keyof SkillCategory, val: any) => {
    onChange({
      ...data,
      skills: data.skills.map((item) => (item.id === id ? { ...item, [field]: val } : item)),
    });
  };

  const removeSkill = (id: string) => {
    onChange({
      ...data,
      skills: data.skills.filter((item) => item.id !== id),
    });
  };

  // Extracurriculars Helpers
  const addExtracurricular = () => {
    const newItem: ExtracurricularItem = {
      id: `extra-${Date.now()}`,
      role: "",
      organization: "",
      date: "",
      description: "",
    };
    onChange({ ...data, extracurriculars: [...data.extracurriculars, newItem] });
  };

  const updateExtracurricular = (id: string, field: keyof ExtracurricularItem, val: any) => {
    onChange({
      ...data,
      extracurriculars: data.extracurriculars.map((item) => (item.id === id ? { ...item, [field]: val } : item)),
    });
  };

  const removeExtracurricular = (id: string) => {
    onChange({
      ...data,
      extracurriculars: data.extracurriculars.filter((item) => item.id !== id),
    });
  };

  // Awards Helpers
  const addAward = () => {
    const newItem: AwardItem = {
      id: `aw-${Date.now()}`,
      title: "",
      issuer: "",
      year: new Date().getFullYear().toString(),
      description: "",
    };
    onChange({ ...data, awards: [...data.awards, newItem] });
  };

  const updateAward = (id: string, field: keyof AwardItem, val: any) => {
    onChange({
      ...data,
      awards: data.awards.map((item) => (item.id === id ? { ...item, [field]: val } : item)),
    });
  };

  const removeAward = (id: string) => {
    onChange({
      ...data,
      awards: data.awards.filter((item) => item.id !== id),
    });
  };

  // References Helpers
  const addReference = () => {
    const newItem: ReferenceItem = {
      id: `ref-${Date.now()}`,
      name: "",
      title: "",
      institution: "",
      email: "",
      phone: "",
      relationship: "",
    };
    onChange({ ...data, references: [...(data.references || []), newItem] });
  };

  const updateReference = (id: string, field: keyof ReferenceItem, val: any) => {
    onChange({
      ...data,
      references: (data.references || []).map((item) => (item.id === id ? { ...item, [field]: val } : item)),
    });
  };

  const removeReference = (id: string) => {
    onChange({
      ...data,
      references: (data.references || []).filter((item) => item.id !== id),
    });
  };

  const navSections = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "publications", label: "Publications", icon: BookOpen },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "references", label: "References", icon: BookUser },
    { id: "extracurriculars", label: "Leadership", icon: Users },
    { id: "awards", label: "Awards", icon: Award },
    { id: "settings", label: "Styles & Layout", icon: Settings },
  ];

  return (
    <div className="flex flex-col h-full bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      {/* Tab Navigation header - wrapping pills so all 10 sections are directly visible and accessible */}
      <div className="flex flex-wrap p-2.5 bg-muted/10 border-b border-border gap-1.5">
        {navSections.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "bg-background/80 border border-border/60 text-muted hover:text-foreground hover:bg-muted/20"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </div>

      {/* Form Content body */}
      <div className="flex-1 p-5 overflow-y-auto space-y-6">
        {/* PERSONAL INFO */}
        {activeSection === "personal" && (
          <div className="space-y-4">
            <div className="border-b border-border pb-3">
              <h3 className="text-base font-bold text-foreground">Personal Information</h3>
              <p className="text-xs text-muted">Primary contact details and academic title</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Full Name</label>
                <input
                  type="text"
                  value={data.personalInfo.fullName}
                  onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
                  placeholder="e.g. Jannatul Islam Fahad"
                  className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Academic Title / Headline</label>
                <input
                  type="text"
                  value={data.personalInfo.title}
                  onChange={(e) => updatePersonalInfo("title", e.target.value)}
                  placeholder="e.g. Environmental Science Researcher"
                  className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Email Address</label>
                <input
                  type="email"
                  value={data.personalInfo.email}
                  onChange={(e) => updatePersonalInfo("email", e.target.value)}
                  placeholder="e.g. jifahad2072@gmail.com"
                  className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Phone Number</label>
                <input
                  type="text"
                  value={data.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                  placeholder="e.g. (+880) 1861758255"
                  className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Location / City</label>
                <input
                  type="text"
                  value={data.personalInfo.location}
                  onChange={(e) => updatePersonalInfo("location", e.target.value)}
                  placeholder="e.g. Dhaka, Bangladesh"
                  className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Portfolio / Website</label>
                <input
                  type="text"
                  value={data.personalInfo.website || ""}
                  onChange={(e) => updatePersonalInfo("website", e.target.value)}
                  placeholder="https://..."
                  className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">LinkedIn Profile</label>
                <input
                  type="text"
                  value={data.personalInfo.linkedin || ""}
                  onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
                  placeholder="https://linkedin.com/in/..."
                  className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">ORCID ID (Optional)</label>
                <input
                  type="text"
                  value={data.personalInfo.orcid || ""}
                  onChange={(e) => updatePersonalInfo("orcid", e.target.value)}
                  placeholder="0000-0002-..."
                  className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Executive Profile / Research Statement
              </label>
              <textarea
                rows={4}
                value={data.personalInfo.summary}
                onChange={(e) => updatePersonalInfo("summary", e.target.value)}
                placeholder="Brief summary of your academic field, research focus, and core competencies..."
                className="w-full text-xs px-3 py-2 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* EDUCATION */}
        {activeSection === "education" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <div>
                <h3 className="text-base font-bold text-foreground">Education</h3>
                <p className="text-xs text-muted">Universities, degrees, and academic honors</p>
              </div>
              <button
                type="button"
                onClick={addEducation}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Degree
              </button>
            </div>

            {data.education.map((edu, idx) => (
              <div key={edu.id} className="p-4 rounded-xl border border-border bg-background space-y-3 relative group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">#{idx + 1} Degree Entry</span>
                  <button
                    type="button"
                    onClick={() => removeEducation(edu.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                    title="Remove entry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                      placeholder="e.g. University of Dhaka"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Degree Title</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                      placeholder="e.g. Bachelor of Science (Hons.)"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Major / Field of Study</label>
                    <input
                      type="text"
                      value={edu.fieldOfStudy}
                      onChange={(e) => updateEducation(edu.id, "fieldOfStudy", e.target.value)}
                      placeholder="e.g. Soil, Water and Environment"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Location</label>
                    <input
                      type="text"
                      value={edu.location}
                      onChange={(e) => updateEducation(edu.id, "location", e.target.value)}
                      placeholder="e.g. Dhaka, Bangladesh"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Start Date</label>
                    <input
                      type="text"
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                      placeholder="e.g. Jan 2022"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">End Date</label>
                    <input
                      type="text"
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                      placeholder="e.g. Apr 2026 (or Expected)"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">GPA / Grade</label>
                    <input
                      type="text"
                      value={edu.gpa || ""}
                      onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                      placeholder="e.g. 3.44 / 4.00"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Honors / Thesis</label>
                    <input
                      type="text"
                      value={edu.honors || ""}
                      onChange={(e) => updateEducation(edu.id, "honors", e.target.value)}
                      placeholder="e.g. Dean's List / Thesis topic"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">
                    Key Highlights / Coursework (One per line)
                  </label>
                  <textarea
                    rows={2}
                    value={(edu.bullets || []).join("\n")}
                    onChange={(e) => updateEducation(edu.id, "bullets", e.target.value.split("\n"))}
                    placeholder="Relevant coursework: Environmental modeling, hydrogeology..."
                    className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EXPERIENCE */}
        {activeSection === "experience" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <div>
                <h3 className="text-base font-bold text-foreground">Experience</h3>
                <p className="text-xs text-muted">Research, teaching, and professional roles</p>
              </div>
              <button
                type="button"
                onClick={addExperience}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Position
              </button>
            </div>

            {data.experience.map((exp, idx) => (
              <div key={exp.id} className="p-4 rounded-xl border border-border bg-background space-y-3 relative group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">#{idx + 1} Position</span>
                  <button
                    type="button"
                    onClick={() => removeExperience(exp.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Role / Position</label>
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                      placeholder="e.g. Research Podcast Host"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Organization / Institution</label>
                    <input
                      type="text"
                      value={exp.organization}
                      onChange={(e) => updateExperience(exp.id, "organization", e.target.value)}
                      placeholder="e.g. University of Oxford Partnership"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Start Date</label>
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                      placeholder="e.g. May 2025"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">End Date</label>
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                      placeholder="e.g. Present"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Location</label>
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                      placeholder="e.g. Dhaka, Bangladesh"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Category</label>
                    <select
                      value={exp.category || "Research"}
                      onChange={(e) => updateExperience(exp.id, "category", e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="Research">Research</option>
                      <option value="Academic">Academic</option>
                      <option value="Teaching">Teaching</option>
                      <option value="Professional">Professional</option>
                      <option value="Leadership">Leadership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">
                    Bullet Points / Impact Responsibilities (One per line)
                  </label>
                  <textarea
                    rows={3}
                    value={exp.bullets.join("\n")}
                    onChange={(e) => updateExperience(exp.id, "bullets", e.target.value.split("\n"))}
                    placeholder="Conducted laboratory assays...&#10;Mentored students in..."
                    className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PUBLICATIONS */}
        {activeSection === "publications" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <div>
                <h3 className="text-base font-bold text-foreground">Publications & Preprints</h3>
                <p className="text-xs text-muted">Journal papers, conference proceedings, working papers</p>
              </div>
              <button
                type="button"
                onClick={addPublication}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Publication
              </button>
            </div>

            {data.publications.map((pub, idx) => (
              <div key={pub.id} className="p-4 rounded-xl border border-border bg-background space-y-3 relative group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">#{idx + 1} Publication</span>
                  <button
                    type="button"
                    onClick={() => removePublication(pub.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Title</label>
                  <input
                    type="text"
                    value={pub.title}
                    onChange={(e) => updatePublication(pub.id, "title", e.target.value)}
                    placeholder="e.g. Heavy metals in dates (Phoenix dactylifera L.)..."
                    className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Authors (Formatted)</label>
                    <input
                      type="text"
                      value={pub.authors}
                      onChange={(e) => updatePublication(pub.id, "authors", e.target.value)}
                      placeholder="e.g. Chamon, A. S., Fahad, J. I., et al."
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Journal / Venue</label>
                    <input
                      type="text"
                      value={pub.venue}
                      onChange={(e) => updatePublication(pub.id, "venue", e.target.value)}
                      placeholder="e.g. Environmental Systems Research 13:27"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Year</label>
                    <input
                      type="text"
                      value={pub.year}
                      onChange={(e) => updatePublication(pub.id, "year", e.target.value)}
                      placeholder="e.g. 2024"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">DOI / Link</label>
                    <input
                      type="text"
                      value={pub.doiOrUrl || ""}
                      onChange={(e) => updatePublication(pub.id, "doiOrUrl", e.target.value)}
                      placeholder="https://doi.org/..."
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">
                    Brief Abstract / Scientific Contribution
                  </label>
                  <textarea
                    rows={2}
                    value={pub.description || ""}
                    onChange={(e) => updatePublication(pub.id, "description", e.target.value)}
                    placeholder="Short summary of key findings..."
                    className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PROJECTS */}
        {activeSection === "projects" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <div>
                <h3 className="text-base font-bold text-foreground">Research Projects & Case Studies</h3>
                <p className="text-xs text-muted">Field studies, seminar research, environmental assessments</p>
              </div>
              <button
                type="button"
                onClick={addProject}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Project
              </button>
            </div>

            {data.projects.map((proj, idx) => (
              <div key={proj.id} className="p-4 rounded-xl border border-border bg-background space-y-3 relative group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">#{idx + 1} Project</span>
                  <button
                    type="button"
                    onClick={() => removeProject(proj.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Project Title</label>
                    <input
                      type="text"
                      value={proj.title}
                      onChange={(e) => updateProject(proj.id, "title", e.target.value)}
                      placeholder="e.g. Dhaleshwari River Basin Environmental Quality"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Role / Capacity</label>
                    <input
                      type="text"
                      value={proj.role || ""}
                      onChange={(e) => updateProject(proj.id, "role", e.target.value)}
                      placeholder="e.g. Lead Field Volunteer & Analyst"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Methodology / Tools Used</label>
                    <input
                      type="text"
                      value={proj.tools || ""}
                      onChange={(e) => updateProject(proj.id, "tools", e.target.value)}
                      placeholder="e.g. ArcGIS, SPSS, Field Hydrometry"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Date / Period</label>
                    <input
                      type="text"
                      value={proj.date || ""}
                      onChange={(e) => updateProject(proj.id, "date", e.target.value)}
                      placeholder="e.g. Jan 2025 - Jul 2025"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Description & Findings</label>
                  <textarea
                    rows={2}
                    value={proj.description}
                    onChange={(e) => updateProject(proj.id, "description", e.target.value)}
                    placeholder="Objectives, methods, and outcomes..."
                    className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SKILLS */}
        {activeSection === "skills" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <div>
                <h3 className="text-base font-bold text-foreground">Skills & Competencies</h3>
                <p className="text-xs text-muted">Geospatial tools, laboratory methodologies, languages</p>
              </div>
              <button
                type="button"
                onClick={addSkill}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Skill Category
              </button>
            </div>

            {data.skills.map((sk) => (
              <div key={sk.id} className="p-4 rounded-xl border border-border bg-background space-y-3 relative group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">Skill Category</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(sk.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-medium text-foreground mb-1">Category Title</label>
                    <input
                      type="text"
                      value={sk.category}
                      onChange={(e) => updateSkill(sk.id, "category", e.target.value)}
                      placeholder="e.g. Geospatial & Computational"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-foreground mb-1">Items / Tools (comma-separated)</label>
                    <input
                      type="text"
                      value={sk.items}
                      onChange={(e) => updateSkill(sk.id, "items", e.target.value)}
                      placeholder="e.g. ArcGIS, Python, SPSS, LaTeX"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* REFERENCES */}
        {activeSection === "references" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <div>
                <h3 className="text-base font-bold text-foreground">References & Referees</h3>
                <p className="text-xs text-muted">Academic advisors, thesis supervisors, and professional mentors</p>
              </div>
              <button
                type="button"
                onClick={addReference}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Reference
              </button>
            </div>

            {(!data.references || data.references.length === 0) ? (
              <div className="p-8 text-center border border-dashed border-border rounded-xl">
                <BookUser className="w-8 h-8 text-muted mx-auto mb-2 opacity-50" />
                <p className="text-xs text-muted font-medium">No references added yet.</p>
                <button
                  type="button"
                  onClick={addReference}
                  className="mt-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add First Reference
                </button>
              </div>
            ) : (
              (data.references || []).map((ref, idx) => (
                <div key={ref.id} className="p-4 rounded-xl border border-border bg-background space-y-3 relative group">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-primary">#{idx + 1} Reference</span>
                    <button
                      type="button"
                      onClick={() => removeReference(ref.id)}
                      className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                      title="Remove reference"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Full Name & Title</label>
                      <input
                        type="text"
                        value={ref.name}
                        onChange={(e) => updateReference(ref.id, "name", e.target.value)}
                        placeholder="e.g. Prof. Dr. [Full Name]"
                        className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Position / Designation</label>
                      <input
                        type="text"
                        value={ref.title}
                        onChange={(e) => updateReference(ref.id, "title", e.target.value)}
                        placeholder="e.g. Professor & Chairman"
                        className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Department & Institution</label>
                      <input
                        type="text"
                        value={ref.institution}
                        onChange={(e) => updateReference(ref.id, "institution", e.target.value)}
                        placeholder="e.g. Dept of Soil, Water & Environment, University of Dhaka"
                        className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Academic Relationship</label>
                      <input
                        type="text"
                        value={ref.relationship || ""}
                        onChange={(e) => updateReference(ref.id, "relationship", e.target.value)}
                        placeholder="e.g. Thesis Supervisor / Former Mentor"
                        className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Email Address</label>
                      <input
                        type="email"
                        value={ref.email}
                        onChange={(e) => updateReference(ref.id, "email", e.target.value)}
                        placeholder="e.g. supervisor@du.ac.bd"
                        className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Phone Number (Optional)</label>
                      <input
                        type="text"
                        value={ref.phone || ""}
                        onChange={(e) => updateReference(ref.id, "phone", e.target.value)}
                        placeholder="e.g. (+880) 17..."
                        className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* LEADERSHIP & EXTRACURRICULARS */}
        {activeSection === "extracurriculars" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <div>
                <h3 className="text-base font-bold text-foreground">Leadership & Service</h3>
                <p className="text-xs text-muted">Community initiatives, student clubs, public speaking</p>
              </div>
              <button
                type="button"
                onClick={addExtracurricular}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Entry
              </button>
            </div>

            {data.extracurriculars.map((item) => (
              <div key={item.id} className="p-4 rounded-xl border border-border bg-background space-y-3 relative group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">Activity</span>
                  <button
                    type="button"
                    onClick={() => removeExtracurricular(item.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Role / Title</label>
                    <input
                      type="text"
                      value={item.role}
                      onChange={(e) => updateExtracurricular(item.id, "role", e.target.value)}
                      placeholder="e.g. Organizing Secretary"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Organization</label>
                    <input
                      type="text"
                      value={item.organization}
                      onChange={(e) => updateExtracurricular(item.id, "organization", e.target.value)}
                      placeholder="e.g. 'Ananda' Student Body"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Dates</label>
                    <input
                      type="text"
                      value={item.date}
                      onChange={(e) => updateExtracurricular(item.id, "date", e.target.value)}
                      placeholder="e.g. 2024 - Present"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Contribution / Activities</label>
                  <textarea
                    rows={2}
                    value={item.description}
                    onChange={(e) => updateExtracurricular(item.id, "description", e.target.value)}
                    placeholder="Organized seminars, facilitated community meetings..."
                    className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AWARDS */}
        {activeSection === "awards" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border pb-3">
              <div>
                <h3 className="text-base font-bold text-foreground">Awards & Honors</h3>
                <p className="text-xs text-muted">Scholarships, competition prizes, merit recognition</p>
              </div>
              <button
                type="button"
                onClick={addAward}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Award
              </button>
            </div>

            {data.awards.map((aw) => (
              <div key={aw.id} className="p-4 rounded-xl border border-border bg-background space-y-3 relative group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">Award Entry</span>
                  <button
                    type="button"
                    onClick={() => removeAward(aw.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Award Title</label>
                    <input
                      type="text"
                      value={aw.title}
                      onChange={(e) => updateAward(aw.id, "title", e.target.value)}
                      placeholder="e.g. Board Merit Scholarship"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Conferring Organization</label>
                    <input
                      type="text"
                      value={aw.issuer}
                      onChange={(e) => updateAward(aw.id, "issuer", e.target.value)}
                      placeholder="e.g. Dhaka Education Board"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">Year</label>
                    <input
                      type="text"
                      value={aw.year}
                      onChange={(e) => updateAward(aw.id, "year", e.target.value)}
                      placeholder="e.g. 2021"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Details (Optional)</label>
                  <input
                    type="text"
                    value={aw.description || ""}
                    onChange={(e) => updateAward(aw.id, "description", e.target.value)}
                    placeholder="e.g. Ranked in the top 1% of candidates"
                    className="w-full text-xs px-3 py-2 rounded border border-border bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SETTINGS */}
        {activeSection === "settings" && (
          <div className="space-y-5">
            <div className="border-b border-border pb-3">
              <h3 className="text-base font-bold text-foreground">Styles & University Templates</h3>
              <p className="text-xs text-muted">Customize layout standards, typography, and density</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-2">CV Template Style</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "academic-minimalist" as TemplateStyle,
                    name: "Minimalist Academic",
                    desc: "Stanford & Ivy League ATS standard. Refined serif typography with formal divider rules.",
                  },
                  {
                    id: "modern-stem" as TemplateStyle,
                    name: "Modern STEM",
                    desc: "MIT & Caltech engineering standard. Left-aligned accents, skills matrix & quantified bullets.",
                  },
                  {
                    id: "international-scholar" as TemplateStyle,
                    name: "International Scholar",
                    desc: "Sydney & Peking University style. Sophisticated header, citation badges & global qualifications.",
                  },
                ].map((tpl) => (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => updateSettings("template", tpl.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      data.settings.template === tpl.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary shadow-xs"
                        : "border-border bg-background hover:bg-muted/10"
                    }`}
                  >
                    <div className="font-bold text-xs text-foreground mb-1">{tpl.name}</div>
                    <div className="text-[11px] text-muted leading-relaxed">{tpl.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">Typography Family</label>
                <select
                  value={data.settings.fontFamily}
                  onChange={(e) => updateSettings("fontFamily", e.target.value as FontFamilyStyle)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                >
                  <option value="serif">Academic Serif (Georgia / Times)</option>
                  <option value="sans">Modern Sans-Serif (Helvetica / Arial)</option>
                  <option value="mono">Technical Monospace</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">Accent Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={data.settings.accentColor}
                    onChange={(e) => updateSettings("accentColor", e.target.value)}
                    className="w-9 h-9 rounded cursor-pointer border border-border"
                  />
                  <div className="flex gap-1.5">
                    {["#173F35", "#1E3A8A", "#0F172A", "#7F1D1D", "#397D70"].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => updateSettings("accentColor", c)}
                        className="w-5 h-5 rounded-full border border-black/10 transition-transform hover:scale-110"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">Content Density / Spacing</label>
                <select
                  value={data.settings.spacing}
                  onChange={(e) => updateSettings("spacing", e.target.value as SpacingStyle)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                >
                  <option value="compact">Compact (Fit more onto 1-2 pages)</option>
                  <option value="normal">Normal (Standard Academic Margins)</option>
                  <option value="spacious">Spacious (Expanded line height)</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Form Navigation Step Footer */}
      <div className="px-4 py-2.5 border-t border-border bg-muted/5 flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={() => {
            const currIdx = navSections.findIndex((s) => s.id === activeSection);
            if (currIdx > 0) setActiveSection(navSections[currIdx - 1].id);
          }}
          disabled={activeSection === navSections[0].id}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-muted/15 disabled:opacity-40 disabled:pointer-events-none transition-all font-medium text-foreground"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        <span className="text-muted text-[11px] font-medium hidden sm:inline">
          Section {navSections.findIndex((s) => s.id === activeSection) + 1} of {navSections.length}
        </span>

        <button
          type="button"
          onClick={() => {
            const currIdx = navSections.findIndex((s) => s.id === activeSection);
            if (currIdx < navSections.length - 1) setActiveSection(navSections[currIdx + 1].id);
          }}
          disabled={activeSection === navSections[navSections.length - 1].id}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:pointer-events-none transition-all font-medium shadow-xs"
        >
          <span>Next</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
