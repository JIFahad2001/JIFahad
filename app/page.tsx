import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, Download, ExternalLink } from "lucide-react";
import { profileData } from "@/content/profile";
import { worksData } from "@/content/works";
import { resourcesData } from "@/content/resources";
import { experienceData } from "@/content/experience";

export default function Home() {
  const featuredWorks = worksData.slice(0, 3);
  const featuredResources = resourcesData.slice(0, 2);
  const recentExperience = experienceData[0];

  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Section A: Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            {profileData.name}
          </h1>
          <p className="text-xl sm:text-2xl text-foreground mb-8 leading-relaxed">
            {profileData.headline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/cv" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              View My CV
            </Link>
            <Link 
              href="/works" 
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-muted/10 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              Explore My Works
            </Link>
            <Link 
              href="/resources" 
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-muted/10 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Section B: Short introduction */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <h2 className="text-2xl font-bold text-primary mb-4">About Me</h2>
          <div className="space-y-4 text-foreground/90 max-w-3xl leading-relaxed">
            <p>{profileData.bio[0]}</p>
            <p>{profileData.bio[1]}</p>
          </div>
          <div className="mt-6">
            <Link href="/about" className="text-secondary font-medium hover:underline inline-flex items-center">
              Read full biography <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section C: Areas of interest */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Areas of Interest</h2>
        <div className="flex flex-wrap gap-3">
          {profileData.interests.map((interest) => (
            <span 
              key={interest} 
              className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Section D: Featured works */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-primary">Featured Works</h2>
          <Link href="/works" className="text-secondary font-medium hover:underline hidden sm:inline-flex items-center">
            View All Works <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorks.map((work) => (
            <div key={work.id} className="bg-card rounded-xl p-6 border border-border shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-2.5 py-0.5 rounded text-xs font-medium bg-10 text-primary-foreground mb-3">
                  {work.category}
                </span>
                <h3 className="text-lg font-bold text-foreground leading-snug line-clamp-2" title={work.title}>
                  {work.title}
                </h3>
                {work.date && <p className="text-sm text-base mt-2">{work.date}</p>}
              </div>
              <p className="text-sm text-foreground/80 line-clamp-3 mb-6 flex-grow">
                {work.description}
              </p>
              <Link href="/works" className="text-secondary text-sm font-medium hover:underline inline-flex items-center mt-auto">
                Read more <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link href="/works" className="text-secondary font-medium hover:underline inline-flex items-center">
            View All Works <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Section E: Featured resources */}
      {featuredResources.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 bg-5 py-12 rounded-3xl">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-primary">Featured Resources</h2>
            <Link href="/resources" className="text-secondary font-medium hover:underline hidden sm:inline-flex items-center">
              Browse All Resources <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-card rounded-xl p-6 border border-border shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-secondary/10 p-3 rounded-lg text-secondary flex-shrink-0">
                  <Download className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-foreground/80 mb-4">
                    {resource.description}
                  </p>
                  <Link href="/resources" className="text-secondary text-sm font-medium hover:underline inline-flex items-center">
                    Access resource <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section F: Professional experience preview */}
      {recentExperience && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Recent Experience</h2>
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">{recentExperience.role}</h3>
                <p className="text-muted font-medium">{recentExperience.organization}</p>
              </div>
              <div className="text-sm text-muted/80 mt-2 md:mt-0 font-medium">
                {recentExperience.startDate} — {recentExperience.endDate}
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80 mb-6">
              {recentExperience.responsibilities.slice(0, 2).map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
            <Link href="/experience" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted/10 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
              <Briefcase className="mr-2 h-4 w-4" />
              View Full Experience
            </Link>
          </div>
        </section>
      )}

      {/* Section G: Contact call to action */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interested in collaboration?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            I am open to academic communication, research discussions, and collaborations in environmental science and sustainability.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-bold text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
