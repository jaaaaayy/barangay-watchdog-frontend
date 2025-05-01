import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CategoryBadge } from "@/components/ui/category-badge";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

const statusColors = {
  'planned': 'bg-blue-100 text-blue-800 hover:bg-blue-100',
  'in-progress': 'bg-amber-100 text-amber-800 hover:bg-amber-100',
  'completed': 'bg-green-100 text-green-800 hover:bg-green-100',
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="space-y-1.5">
          <CategoryBadge category={project.category} />
          <h3 className="font-semibold text-lg line-clamp-1">{project.title}</h3>
        </div>
        <Badge 
          variant="outline" 
          className={`border-transparent ${statusColors[project.status as keyof typeof statusColors]}`}
        >
          {project.status === 'in-progress' ? 'In Progress' : 
            project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {project.description}
        </p>
        <div className="flex flex-col space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>
              {project.startDate && (
                <>Started {format(new Date(project.startDate), "MMM d, yyyy")}</>
              )}
              {project.endDate && project.startDate && " • "}
              {project.endDate && (
                <>Completed {format(new Date(project.endDate), "MMM d, yyyy")}</>
              )}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link 
          href={`/projects/${project.id}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          View project details →
        </Link>
      </CardFooter>
    </Card>
  );
}