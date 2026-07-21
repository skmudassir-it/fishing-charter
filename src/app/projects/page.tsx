import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Browse our gallery of recent Gulf Coast fishing catches, happy anglers, and stunning on-the-water moments from ReelTime Fishing Charters.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
