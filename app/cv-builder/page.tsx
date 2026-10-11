import { Metadata } from "next";
import { BuilderLayout } from "@/components/cv-builder/BuilderLayout";

export const metadata: Metadata = {
  title: "Academic & Professional CV Builder | JI Fahad",
  description:
    "Interactive academic and professional CV builder with live preview, ATS-friendly templates modeled after Stanford, MIT, and Sydney university standards, and instant PDF/JSON export.",
};

export default function CvBuilderPage() {
  return (
    <div className="bg-background min-h-screen">
      <BuilderLayout />
    </div>
  );
}
