import { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  FileText, 
  ExternalLink, 
  Building2, 
  Award,
  ArrowRight
} from "lucide-react";
import { educationData } from "@/content/education";

export const metadata: Metadata = {
  title: "Education & Academic Credentials | JI Fahad",
  description: "Academic degrees, official transcripts, and examination certificates of JI Fahad - University of Dhaka, Govt. Tolaram College, Narayanganj High School.",
};

export default function EducationPage() {
  const duDegree = educationData.find((e) => e.id === "edu-1");
  const hscDegree = educationData.find((e) => e.id === "edu-2");
  const sscDegree = educationData.find((e) => e.id === "edu-3");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
      {/* Page Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Records & Credentials</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4">
              Education & Academic Credentials
            </h1>
            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl leading-relaxed">
              Academic degrees, qualifications, and official annual examination transcripts from the University of Dhaka and secondary education boards.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-xs"
            >
              <span>View Curriculum Vitae</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Quick summary bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-card border border-border shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Latest Degree</span>
            <p className="text-lg font-bold text-foreground mt-1">B.S. (Hons.) Soil, Water & Env.</p>
            <p className="text-xs text-primary font-medium mt-0.5">University of Dhaka (CGPA: 3.44)</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Higher Secondary</span>
            <p className="text-lg font-bold text-foreground mt-1">HSC (Science)</p>
            <p className="text-xs text-primary font-medium mt-0.5">Govt. Tolaram College (GPA: 5.00)</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Secondary Certificate</span>
            <p className="text-lg font-bold text-foreground mt-1">SSC (Science)</p>
            <p className="text-xs text-primary font-medium mt-0.5">Narayanganj High School</p>
          </div>
        </div>
      </div>

      {/* Academic Timeline & Degree Details */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2 pb-4 border-b border-border">
          <Building2 className="w-6 h-6 text-primary" />
          Academic Degrees & Institutions
        </h2>

        <div className="space-y-8">
          {/* University of Dhaka */}
          {duDegree && (
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xs relative overflow-hidden">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-foreground/85 bg-muted/5 p-4 rounded-xl border border-border/60 mb-6">
                <div>
                  <p className="font-semibold text-foreground">Field of Study:</p>
                  <p className="text-muted mt-0.5">{duDegree.fieldOfStudy}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Degree Evaluation:</p>
                  <p className="text-muted mt-0.5">{duDegree.grade} (European Qualifications Framework Level 6)</p>
                </div>
              </div>

              {/* Annual Progression Cards with Transcript Links */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  Academic Transcripts by Examination Year
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl border border-border bg-background flex flex-col justify-between hover:border-primary/40 transition-colors">
                    <div>
                      <span className="text-[11px] font-semibold text-muted block">1st Year (2021)</span>
                      <span className="text-sm font-bold text-foreground block mt-0.5">GPA: 3.45</span>
                    </div>
                    <a
                      href="/documents/DU_BS_1st_Year_Transcript_2021.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline font-semibold inline-flex items-center gap-1 mt-3 pt-2 border-t border-border/60"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Transcript (PDF)</span>
                    </a>
                  </div>

                  <div className="p-3.5 rounded-xl border border-border bg-background flex flex-col justify-between hover:border-primary/40 transition-colors">
                    <div>
                      <span className="text-[11px] font-semibold text-muted block">2nd Year (2022)</span>
                      <span className="text-sm font-bold text-foreground block mt-0.5">GPA: 3.56</span>
                      <span className="text-[11px] text-muted block">CGPA: 3.51</span>
                    </div>
                    <a
                      href="/documents/DU_BS_2nd_Year_Transcript_2022.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline font-semibold inline-flex items-center gap-1 mt-3 pt-2 border-t border-border/60"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Transcript (PDF)</span>
                    </a>
                  </div>

                  <div className="p-3.5 rounded-xl border border-border bg-background flex flex-col justify-between hover:border-primary/40 transition-colors">
                    <div>
                      <span className="text-[11px] font-semibold text-muted block">3rd Year (2023)</span>
                      <span className="text-sm font-bold text-foreground block mt-0.5">GPA: 3.38</span>
                      <span className="text-[11px] text-muted block">CGPA: 3.46</span>
                    </div>
                    <a
                      href="/documents/DU_BS_3rd_Year_Transcript_2023.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline font-semibold inline-flex items-center gap-1 mt-3 pt-2 border-t border-border/60"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Transcript (PDF)</span>
                    </a>
                  </div>

                  <div className="p-3.5 rounded-xl border border-primary/40 bg-primary/5 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-primary block">4th Year Final (2024)</span>
                      <span className="text-sm font-bold text-primary block mt-0.5">Final CGPA: 3.44</span>
                      <span className="text-[11px] text-primary/80 block">Degree Completed</span>
                    </div>
                    <a
                      href="/documents/DU_BS_4th_Year_Transcript_2024.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline font-bold inline-flex items-center gap-1 mt-3 pt-2 border-t border-primary/20"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Final Transcript (PDF)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Govt. Tolaram College */}
          {hscDegree && (
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xs relative overflow-hidden">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-foreground/85 bg-muted/5 p-4 rounded-xl border border-border/60 mb-4">
                <div>
                  <p className="font-semibold text-foreground">Discipline / Group:</p>
                  <p className="text-muted mt-0.5">{hscDegree.fieldOfStudy}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Final Result:</p>
                  <p className="text-muted mt-0.5">{hscDegree.grade} (EQF Level 5)</p>
                </div>
              </div>

              <div>
                <a
                  href="/documents/HSC_Result_Certificate_2020.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary text-xs font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View HSC Examination Result & Marksheet (PDF)</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          )}

          {/* Narayanganj High School */}
          {sscDegree && (
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xs relative overflow-hidden">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-foreground/85 bg-muted/5 p-4 rounded-xl border border-border/60 mb-4">
                <div>
                  <p className="font-semibold text-foreground">Discipline / Group:</p>
                  <p className="text-muted mt-0.5">Science</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Status / Verification:</p>
                  <p className="text-muted mt-0.5">SSC result that I could not attach here (Verified on record)</p>
                </div>
              </div>

              <div>
                <a
                  href="/documents/SSC_Result.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-foreground text-xs font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View SSC Examination Record Notice (PDF)</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Key Coursework & Scientific Training */}
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
