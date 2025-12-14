import ProjectsClientPage from './ProjectsClientPage';

// Make this page fully static to avoid server-side rendering issues in production
export const dynamic = 'error'; // Prevents any dynamic server-side rendering
export const revalidate = false; // Makes this a fully static page

export default function ProjectsServerPage() {
  return <ProjectsClientPage />;
}