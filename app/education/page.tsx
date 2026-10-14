import { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  Award, 
  FileCheck2, 
  ArrowRight,
  Info
} from "lucide-react";
import { educationData, academicDocuments } from "@/content/education";

export const metadata: Metadata = {
  title: "Education & Academic Credentials | JI Fahad",
  description: "Academic degrees, official transcripts, and examination certificates of JI Fahad - University of Dhaka, Govt. Tolaram College, Narayanganj High School.",
};

export default function EducationPage() {
  const duDegree = educationData.find((e) => e.id === "edu-1");
  const hscDegree = educationData.find((e) => e.id === "edu-2");
  const sscDegree = educationData.find((e) => e.id === "edu-3");

  const duTranscripts = academicDocuments.filter((d) => d.id.startsWith("doc-du"));
  const hscDocs = academicDocuments.filter((d) => d.id === "doc-hsc");
  const sscDocs = academicDocuments.filter((d) => d.id === "doc-ssc");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
      {/* Page Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Records & Credentials</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4">
          Education & Academic Transcripts
        </h1>
        <p className="text-base sm:text-lg text-foreground/80 max-w-3xl leading-relaxed">
          Comprehensive academic credentials, university degree records, official year-by-year examination transcripts from the University of Dhaka, and secondary education certificates.
        </p>

        {/* Quick summary bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-card border border-border shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Latest Qualification</span>
            <p className="text-lg font-bold text-foreground mt-1">B.S. (Hons.) Soil, Water & Env.</p>
            <p className="text-xs text-primary font-medium mt-0.5">University of Dhaka (CGPA: 3.44)</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Higher Secondary</span>
            <p className="text-lg font-bold text-foreground mt-1">HSC (Science)</p>
            <p className="text-xs text-primary font-medium mt-0.5">Govt. Tolaram College (GPA: 5.00)</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Verified Documents</span>
            <p className="text-lg font-bold text-foreground mt-1">6 Academic Records</p>
            <p className="text-xs text-accent font-medium mt-0.5">Transcripts & Certificates Available</p>
          </div>
        </div>
      </div>

      {/* SECTION 1: Transcripts & Documents Library */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <FileCheck2 className="w-6 h-6 text-primary" />
              Academic Transcripts & Official Certificates
            </h2>
            <p className="text-sm text-muted mt-1">
              Direct access to view and download official examination result archives and certificates
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <span>View Full Curriculum Vitae</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* University of Dhaka Transcripts Grid */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <h3 className="text-lg font-bold text-primary">
              University of Dhaka &mdash; B.S. (Hons.) Annual Examination Transcripts
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {duTranscripts.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col justify-between p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      {doc.year}
                    </span>
                    <span className="text-xs font-mono text-muted">{doc.fileSize}</span>
                  </div>

                  <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-muted mt-1">{doc.institution} &bull; {doc.degreeOrExam}</p>

                  <div className="flex flex-wrap items-center gap-3 my-3">
                    {doc.gpa && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-secondary/10 text-secondary px-2.5 py-1 rounded-md">
                        Term GPA: <strong className="text-foreground">{doc.gpa}</strong>
                      </span>
                    )}
                    {doc.cgpa && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold bg-accent/20 text-accent-foreground px-2.5 py-1 rounded-md">
                        Cumulative CGPA: <strong className="text-foreground">{doc.cgpa}</strong>
                      </span>
                    )}
                  </div>

                  {doc.note && (
                    <p className="text-xs text-foreground/75 leading-relaxed bg-muted/5 p-2 rounded-md border border-border/60">
                      {doc.note}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border/80">
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Transcript</span>
                  </a>
                  <a
                    href={doc.fileUrl}
                    download
                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-border bg-background text-xs font-semibold text-foreground hover:bg-muted/10 transition-colors"
                    title="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-muted" />
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary & Higher Secondary Certificates Grid */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <h3 className="text-lg font-bold text-primary">
              Secondary & Higher Secondary Education Certificates & Records
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* HSC Card */}
            {hscDocs.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col justify-between p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Exam 2020
                    </span>
                    <span className="text-xs font-mono text-muted">{doc.fileSize}</span>
                  </div>

                  <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-muted mt-1">{doc.institution} &bull; {doc.degreeOrExam}</p>

                  <div className="flex flex-wrap items-center gap-3 my-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-md">
                      Official Grade: <strong>GPA 5.00 / 5.00</strong> (Golden)
                    </span>
                  </div>

                  {doc.note && (
                    <p className="text-xs text-foreground/75 leading-relaxed bg-muted/5 p-2 rounded-md border border-border/60">
                      {doc.note}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border/80">
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Result Sheet</span>
                  </a>
                  <a
                    href={doc.fileUrl}
                    download
                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-border bg-background text-xs font-semibold text-foreground hover:bg-muted/10 transition-colors"
                    title="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-muted" />
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            ))}

            {/* SSC Card */}
            {sscDocs.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col justify-between p-5 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400">
                      <Info className="w-3 h-3 text-amber-600" />
                      Exam 2018
                    </span>
                    <span className="text-xs font-mono text-muted">Verified on Record</span>
                  </div>

                  <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-muted mt-1">{doc.institution} &bull; {doc.degreeOrExam}</p>

                  <div className="my-3">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-500/10 p-2.5 rounded-md border border-amber-200 dark:border-amber-900/40">
                      <Info className="w-4 h-4 shrink-0" />
                      <span>SSC result that I could not attach here. Official academic certificate and marksheet are verified on record and available upon request.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border/80">
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-background text-xs font-semibold text-foreground hover:bg-muted/10 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-muted" />
                    <span>View Record Notice</span>
                  </a>
                  <a
                    href={doc.fileUrl}
                    download
                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-border bg-background text-xs font-semibold text-foreground hover:bg-muted/10 transition-colors"
                    title="Download Record PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-muted" />
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Academic Timeline & Details */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2 pb-4 border-b border-border">
          <Building2 className="w-6 h-6 text-primary" />
          Academic Degrees & Institutions
        </h2>

        <div className="space-y-8">
          {/* University of Dhaka */}
          {duDegree && (
            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {duDegree.degree}
                </h3>
                <span className="text-xs font-semibold text-muted bg-muted/10 px-3 py-1 rounded-full shrink-0">
                  {duDegree.startDate} &ndash; {duDegree.endDate}
                </span>
              </div>

              <div className="text-sm font-semibold text-primary mb-3">
                <a 
                  href={duDegree.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline inline-flex items-center gap-1"
                >
                  {duDegree.institution}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-muted font-normal"> &bull; {duDegree.location}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-foreground/85 bg-muted/5 p-4 rounded-xl border border-border/60 mb-4">
                <div>
                  <p className="font-semibold text-foreground">Field of Study:</p>
                  <p className="text-muted mt-0.5">{duDegree.fieldOfStudy}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Degree Evaluation:</p>
                  <p className="text-muted mt-0.5">{duDegree.grade} (European Qualifications Framework Level 6)</p>
                </div>
              </div>

              {/* Annual Progression Cards */}
              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  Academic Progress & Year-by-Year Transcripts
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-lg border border-border bg-background text-center">
                    <span className="text-[11px] font-semibold text-muted block">1st Year (2021)</span>
                    <span className="text-sm font-bold text-foreground block mt-0.5">GPA: 3.45</span>
                    <a
                      href="/documents/DU_BS_1st_Year_Transcript_2021.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-primary hover:underline font-medium inline-flex items-center gap-0.5 mt-1"
                    >
                      <span>Transcript</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-3 rounded-lg border border-border bg-background text-center">
                    <span className="text-[11px] font-semibold text-muted block">2nd Year (2022)</span>
                    <span className="text-sm font-bold text-foreground block mt-0.5">GPA: 3.56</span>
                    <a
                      href="/documents/DU_BS_2nd_Year_Transcript_2022.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-primary hover:underline font-medium inline-flex items-center gap-0.5 mt-1"
                    >
                      <span>Transcript</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-3 rounded-lg border border-border bg-background text-center">
                    <span className="text-[11px] font-semibold text-muted block">3rd Year (2023)</span>
                    <span className="text-sm font-bold text-foreground block mt-0.5">GPA: 3.38</span>
                    <a
                      href="/documents/DU_BS_3rd_Year_Transcript_2023.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-primary hover:underline font-medium inline-flex items-center gap-0.5 mt-1"
                    >
                      <span>Transcript</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-3 rounded-lg border border-primary/30 bg-primary/5 text-center">
                    <span className="text-[11px] font-semibold text-primary block">4th Year Final</span>
                    <span className="text-sm font-bold text-primary block mt-0.5">CGPA: 3.44</span>
                    <a
                      href="/documents/DU_BS_4th_Year_Transcript_2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-primary hover:underline font-bold inline-flex items-center gap-0.5 mt-1"
                    >
                      <span>Final Transcript</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Govt. Tolaram College */}
          {hscDegree && (
            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {hscDegree.degree}
                </h3>
                <span className="text-xs font-semibold text-muted bg-muted/10 px-3 py-1 rounded-full shrink-0">
                  {hscDegree.startDate} &ndash; {hscDegree.endDate}
                </span>
              </div>

              <div className="text-sm font-semibold text-secondary mb-3">
                <a 
                  href={hscDegree.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline inline-flex items-center gap-1"
                >
                  {hscDegree.institution}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-muted font-normal"> &bull; {hscDegree.location}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-foreground/85 bg-muted/5 p-4 rounded-xl border border-border/60 mb-3">
                <div>
                  <p className="font-semibold text-foreground">Discipline / Group:</p>
                  <p className="text-muted mt-0.5">{hscDegree.fieldOfStudy}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Final Result:</p>
                  <p className="text-muted mt-0.5">{hscDegree.grade} (EQF Level 5)</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/documents/HSC_Result_Certificate_2020.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View HSC Examination Result & Marksheet (PDF)</span>
                </a>
              </div>
            </div>
          )}

          {/* Narayanganj High School */}
          {sscDegree && (
            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {sscDegree.degree}
                </h3>
                <span className="text-xs font-semibold text-muted bg-muted/10 px-3 py-1 rounded-full shrink-0">
                  {sscDegree.startDate} &ndash; {sscDegree.endDate}
                </span>
              </div>

              <div className="text-sm font-semibold text-foreground/80 mb-3">
                {sscDegree.institution}
                <span className="text-muted font-normal"> &bull; {sscDegree.location}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-foreground/85 bg-muted/5 p-4 rounded-xl border border-border/60 mb-3">
                <div>
                  <p className="font-semibold text-foreground">Discipline / Group:</p>
                  <p className="text-muted mt-0.5">Science</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Status / Verification:</p>
                  <p className="text-muted mt-0.5">SSC result that I could not attach here (Verified on record)</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/documents/SSC_Result.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View SSC Examination Record Notice (PDF)</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: Key Coursework & Scientific Training */}
      <section className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-xs">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Core Coursework & Scientific Training</h2>
            <p className="text-xs text-muted mt-0.5">Curricular subjects verified from official examination archives</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Soil Physics & Dynamics",
            "Water Chemistry & Hydrology",
            "Soil & Environmental Microbiology",
            "Fundamentals of GIS & Remote Sensing",
            "Pedology & Soil Mineralogy",
            "Plant Biochemistry",
            "Soil Fertility & Plant Nutrition",
            "Atmospheric Science",
            "Ecology & Ecosystem Services",
            "Bio-Statistics & Calculus",
            "Soil Pollution & Waste Management",
            "Climate Change Mitigation & Adaptation"
          ].map((course, idx) => (
            <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border/60 text-xs font-medium text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{course}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
