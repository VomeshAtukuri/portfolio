import { skillIcons } from "../data/icons";

export function Skill({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  const Icon: React.ComponentType<any> = skillIcons[icon];

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 card-hover group cursor-default">
      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
