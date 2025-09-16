
import { getProjects } from '@/lib/contentful';
import ProjectsClientPage from './ProjectsClientPage';

// Revalidate this page every 5 minutes for testing
export const revalidate = 300; // seconds

export default async function ProjectsServerPage() {
  const projects = await getProjects();

  return <ProjectsClientPage initialProjects={projects} />;
}
