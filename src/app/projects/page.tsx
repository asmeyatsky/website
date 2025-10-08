import ProjectsClientPage from './ProjectsClientPage';

// Revalidate this page every 5 minutes for testing
export const revalidate = 300; // seconds

export default function ProjectsServerPage() {
  return <ProjectsClientPage />;
}