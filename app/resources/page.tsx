import { resourcesData } from "@/content/resources";
import { ResourcesClient } from "./ResourcesClient";

export const metadata = {
  title: "Resources | JI Fahad",
  description: "Educational materials, presentations, and other resources by JI Fahad.",
};

export default function Resources() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Resources</h1>
        <p className="text-lg text-foreground/80 max-w-3xl">
          A library of presentations, case studies, educational materials, and other downloadable resources.
        </p>
      </div>
      
      <ResourcesClient initialResources={resourcesData} />
    </div>
  );
}
