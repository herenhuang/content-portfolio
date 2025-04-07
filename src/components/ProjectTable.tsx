import { Project } from '../types/project';

interface ProjectTableProps {
  projects: Project[];
  selectedProjectId?: string;
  onProjectSelect: (project: Project) => void;
}

export default function ProjectTable({ projects, selectedProjectId, onProjectSelect }: ProjectTableProps) {
  return (
    <div className="w-full">
      <table className="w-full border-separate border-spacing-y-2">
        <tbody>
          {projects.map((project) => (
            <tr 
              key={project.id}
              onClick={() => onProjectSelect(project)}
              className={`group cursor-pointer ${
                selectedProjectId === project.id ? 'text-neutral-900' : 'text-neutral-600'
              }`}
            >
              <td className="pr-6 text-xs align-baseline w-16">{project.year}</td>
              <td className="align-baseline">
                <span className="text-xs hover:text-neutral-900 transition-colors">
                  {project.name}
                </span>
              </td>
              <td className="text-right text-xs text-neutral-500 align-baseline">{project.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 