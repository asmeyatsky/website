
import { getProjects } from '@/lib/contentful';
import ProjectsClientPage from './ProjectsClientPage';

// Revalidate this page every hour
export const revalidate = 3600; // seconds

export default async function ProjectsServerPage() {
  const projects = await getProjects();

  return <ProjectsClientPage initialProjects={projects} />;
}
