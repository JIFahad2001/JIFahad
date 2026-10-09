"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <div className="mt-12 text-center print:hidden">
      <p className="text-sm text-muted mb-4">You can print this page directly to save a copy.</p>
      <button 
        onClick={() => window.print()}
        className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted/10 hover:text-primary"
      >
        <Printer className="mr-2 h-4 w-4" />
        Print to PDF
      </button>
    </div>
  );
}
