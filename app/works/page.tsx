import { worksData } from "@/content/works";
import { WorksClient } from "./WorksClient";

export const metadata = {
  title: "Works | JI Fahad",
  description: "Academic and research works by JI Fahad.",
};

export default function Works() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Works</h1>
        <p className="text-lg text-foreground/80 max-w-3xl">
          A collection of my academic articles, research works, review papers, and seminar papers.
        </p>
      </div>
      
      <WorksClient initialWorks={worksData} />
    </div>
  );
}
