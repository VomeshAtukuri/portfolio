import { ExternalLink } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-5 card-hover group h-full">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <IoLogoGithub className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
