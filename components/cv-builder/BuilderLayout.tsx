"use client";

import React, { useState, useRef, useEffect } from "react";
import { CvData, sampleCvData } from "@/content/cv-schema";
import { CvForm } from "./CvForm";
import { CvPreview } from "./CvPreview";
import {
  Download,
  FileDown,
  Upload,
  RefreshCw,
  Eye,
  Edit3,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";

export function BuilderLayout() {
  const [cvData, setCvData] = useState<CvData>(sampleCvData);
  const [mobileTab, setMobileTab] = useState<"edit" | "preview">("edit");
  const [notification, setNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ji_fahad_cv_builder_data");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.personalInfo && parsed?.education) {
          setCvData(parsed);
        }
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Save to localStorage upon edits
  const handleDataChange = (updated: CvData) => {
    setCvData(updated);
    try {
      localStorage.setItem("ji_fahad_cv_builder_data", JSON.stringify(updated));
    } catch {
      // Ignore quota errors
    }
  };

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // PDF Export via native print styling
  const handleExportPdf = () => {
    window.print();
  };

  // JSON Export
  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cvData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${cvData.personalInfo.fullName.replace(/\s+/g, "_") || "CV"}_Data.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("CV data exported to JSON successfully!");
  };

  // JSON Import
  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed && typeof parsed === "object" && parsed.personalInfo) {
            handleDataChange(parsed);
            showToast("CV data imported successfully!");
          } else {
            alert("Invalid CV JSON file structure.");
          }
        } catch {
          alert("Failed to parse JSON file.");
        }
      };
    }
  };

  // Reset to Sample Data
  const handleResetSample = () => {
    if (confirm("Reset CV content back to verified sample academic data?")) {
      handleDataChange(sampleCvData);
      showToast("Reset to sample academic CV!");
    }
  };

  // Clear Form
  const handleClear = () => {
    if (confirm("Clear all entries to start with an empty CV?")) {
      const emptyData: CvData = {
        personalInfo: {
          fullName: "",
          title: "",
          email: "",
          phone: "",
          location: "",
          website: "",
          linkedin: "",
          github: "",
          orcid: "",
          summary: "",
        },
        education: [],
        experience: [],
        publications: [],
        projects: [],
        skills: [],
        extracurriculars: [],
        awards: [],
        references: [],
        settings: {
          template: "academic-minimalist",
          fontFamily: "serif",
          accentColor: "#173F35",
          paperSize: "a4",
          spacing: "normal",
        },
      };
      handleDataChange(emptyData);
      showToast("Form cleared.");
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] overflow-hidden">
      {/* Print-specific style block to isolate CV paper during window.print() */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }
          body {
            background: white !important;
            color: black !important;
          }
          body * {
            visibility: hidden;
          }
          .site-header, .site-navbar, .site-footer, footer, nav, .print\\:hidden, #builder-controls {
            display: none !important;
          }
          #cv-print-area, #cv-print-area * {
            visibility: visible !important;
          }
          #cv-print-area {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            transform: none !important;
            background: white !important;
            color: black !important;
          }
          #cv-print-area .cv-header,
          #cv-print-area .cv-header * {
            display: block !important;
            visibility: visible !important;
          }
        }
      `}</style>

      {/* Top Action Bar */}
      <div id="builder-controls" className="shrink-0 border-b border-border bg-card/60 backdrop-blur px-4 sm:px-6 py-2.5 print:hidden">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-bold text-foreground flex items-center gap-2">
                Dynamic CV / Resume Builder
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-accent" /> ATS Ready
                </span>
              </h1>
              <p className="text-xs text-muted">
                Academic formats modeled after Stanford, MIT, Peking University, and University of Sydney
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Mobile Tab Switcher */}
            <div className="flex lg:hidden bg-muted/15 p-1 rounded-lg border border-border">
              <button
                type="button"
                onClick={() => setMobileTab("edit")}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  mobileTab === "edit" ? "bg-background text-primary shadow-xs" : "text-muted"
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                Edit
              </button>
              <button
                type="button"
                onClick={() => setMobileTab("preview")}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  mobileTab === "preview" ? "bg-background text-primary shadow-xs" : "text-muted"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                Preview
              </button>
            </div>

            {/* Hidden file input for JSON import */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportJson}
              accept=".json"
              className="hidden"
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border bg-background text-xs font-medium text-foreground hover:bg-muted/10 transition-colors"
              title="Import previously saved CV JSON"
            >
              <Upload className="w-3.5 h-3.5 text-muted" />
              <span className="hidden sm:inline">Import JSON</span>
            </button>

            <button
              type="button"
              onClick={handleExportJson}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border bg-background text-xs font-medium text-foreground hover:bg-muted/10 transition-colors"
              title="Save structured CV JSON data file"
            >
              <FileDown className="w-3.5 h-3.5 text-muted" />
              <span className="hidden sm:inline">Save JSON</span>
            </button>

            <button
              type="button"
              onClick={handleResetSample}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border bg-background text-xs font-medium text-muted hover:text-foreground hover:bg-muted/10 transition-colors"
              title="Reset back to sample academic data"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sample Data</span>
            </button>

            <button
              type="button"
              onClick={handleExportPdf}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold shadow hover:bg-primary/90 transition-all"
              title="Export high-resolution ATS-optimized PDF"
            >
              <Download className="w-4 h-4" />
              Export to PDF
            </button>
          </div>
        </div>

        {/* Status Toast */}
        {notification && (
          <div className="container mx-auto mt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary/15 text-secondary text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{notification}</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Split-Screen Workspace */}
      <div className="flex-1 min-h-0 container mx-auto px-4 sm:px-6 py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-0">
          {/* Left Pane: Dynamic Form Editor */}
          <div
            className={`lg:col-span-6 h-full min-h-0 ${
              mobileTab === "edit" ? "block" : "hidden lg:block"
            }`}
          >
            <CvForm data={cvData} onChange={handleDataChange} />
          </div>

          {/* Right Pane: Live Document Preview */}
          <div
            className={`lg:col-span-6 h-full min-h-0 ${
              mobileTab === "preview" ? "block" : "hidden lg:block"
            }`}
          >
            <CvPreview data={cvData} />
          </div>
        </div>
      </div>
    </div>
  );
}
