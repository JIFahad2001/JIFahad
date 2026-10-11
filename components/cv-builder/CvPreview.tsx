"use client";

import React, { useState } from "react";
import { CvData } from "@/content/cv-schema";
import { AcademicMinimalistTemplate } from "./templates/AcademicMinimalistTemplate";
import { ModernStemTemplate } from "./templates/ModernStemTemplate";
import { InternationalScholarTemplate } from "./templates/InternationalScholarTemplate";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface CvPreviewProps {
  data: CvData;
}

export function CvPreview({ data }: CvPreviewProps) {
  const [zoom, setZoom] = useState<number>(100);

  const renderTemplate = () => {
    switch (data.settings.template) {
      case "modern-stem":
        return <ModernStemTemplate data={data} />;
      case "international-scholar":
        return <InternationalScholarTemplate data={data} />;
      case "academic-minimalist":
      default:
        return <AcademicMinimalistTemplate data={data} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-100/90 dark:bg-zinc-900/40 rounded-xl border border-border overflow-hidden">
      {/* Zoom and Preview Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-background border-b border-border text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">Live Document Preview</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-muted/15 text-muted">
            {data.settings.template === "academic-minimalist"
              ? "Stanford Academic"
              : data.settings.template === "modern-stem"
              ? "MIT STEM"
              : "Sydney International"}
          </span>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1.5 print:hidden">
          <button
            type="button"
            onClick={() => setZoom((prev) => Math.max(prev - 10, 60))}
            className="p-1 rounded text-muted hover:text-foreground hover:bg-muted/15 transition-colors"
            title="Zoom out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-mono text-muted w-10 text-center">{zoom}%</span>
          <button
            type="button"
            onClick={() => setZoom((prev) => Math.min(prev + 10, 140))}
            className="p-1 rounded text-muted hover:text-foreground hover:bg-muted/15 transition-colors"
            title="Zoom in"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setZoom(100)}
            className="p-1 rounded text-muted hover:text-foreground hover:bg-muted/15 transition-colors ml-1"
            title="Reset zoom"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Preview Canvas Area */}
      <div className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center items-start">
        <div
          id="cv-print-area"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "top center",
            transition: "transform 0.15s ease-out",
          }}
          className="w-full max-w-[210mm] min-h-[297mm] bg-white text-zinc-900 shadow-xl rounded-sm print:shadow-none print:transform-none print:m-0 print:p-0 print:w-full print:max-w-none transition-shadow"
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}
