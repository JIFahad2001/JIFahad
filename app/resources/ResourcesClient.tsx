"use client";

import { useState } from "react";
import { Search, BookOpen, ExternalLink, FileText } from "lucide-react";
import { Resource } from "@/content/resources";

// Generate categories dynamically from data or define fixed ones
const categories = ["All", "Presentations", "Case Studies", "Educational Materials"];

export function ResourcesClient({ initialResources }: { initialResources: Resource[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = initialResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
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
            placeholder="Search resources..."
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

      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-card rounded-xl p-6 border border-border shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-2.5 py-0.5 rounded text-xs font-medium bg-secondary/10 text-secondary">
                  {resource.category}
                </span>
                <div className="bg-muted/10 p-2 rounded-full text-muted">
                  <FileText className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                {resource.title}
              </h3>
              <p className="text-sm text-foreground/80 mb-6 flex-grow">
                {resource.description}
              </p>
              
              {resource.url && (
                <div className="mt-auto pt-4 border-t border-border">
                  <a
                    href={resource.url}
                    target={resource.isExternal ? "_blank" : undefined}
                    rel={resource.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center w-full rounded-md bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  >
                    {resource.isExternal ? (
                      <>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Resource
                      </>
                    ) : (
                      <>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Read Here
                      </>
                    )}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card rounded-xl border border-border border-dashed">
          <FileText className="mx-auto h-12 w-12 text-muted/50 mb-4" />
          <h3 className="text-lg font-medium text-foreground">No resources found</h3>
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
