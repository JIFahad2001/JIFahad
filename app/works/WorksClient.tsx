"use client";

import { useState } from "react";
import { Search, ExternalLink, BookOpen } from "lucide-react";
import { Work, WorkCategory } from "@/content/works";

const categories: ("All" | WorkCategory)[] = ["All", "Article", "Research Work", "Review Paper", "Seminar Paper"];

export function WorksClient({ initialWorks }: { initialWorks: Work[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | WorkCategory>("All");

  const filteredWorks = initialWorks.filter((work) => {
    const matchesSearch = work.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          work.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || work.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted" />
          </div>
          <input
            type="text"
            placeholder="Search works..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-border rounded-md leading-5 bg-card text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:bg-muted/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredWorks.length > 0 ? (
        <div className="space-y-6">
          {filteredWorks.map((work) => (
            <div key={work.id} className="bg-card rounded-xl p-6 border border-border shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
              <div className="md:w-1/4 shrink-0">
                <div className="inline-flex items-center justify-center rounded bg-secondary/10 px-2.5 py-1 text-xs font-medium text-secondary mb-3">
                  {work.category}
                </div>
                {work.date && <p className="text-sm text-muted font-medium mb-1">{work.date}</p>}
                {work.venue && <p className="text-sm text-foreground/80 italic">{work.venue}</p>}
              </div>
              <div className="md:w-3/4 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-2">{work.title}</h3>
                {work.authors && <p className="text-sm text-foreground/80 mb-3">{work.authors}</p>}
                <p className="text-foreground/90 leading-relaxed mb-6 flex-grow">{work.description}</p>
                
                {work.url && (
                  <div className="mt-auto">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Publication
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card rounded-xl border border-border border-dashed">
          <BookOpen className="mx-auto h-12 w-12 text-muted/50 mb-4" />
          <h3 className="text-lg font-medium text-foreground">No works found</h3>
          <p className="text-muted mt-1">Try adjusting your search or category filters.</p>
          <button 
            onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
            className="mt-4 text-primary hover:underline text-sm font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
