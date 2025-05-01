import Link from "next/link";
import { FileBarChart, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ProjectCard } from "@/components/projects/project-card";
import { SAMPLE_PROJECTS, REPORT_CATEGORIES } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-xl shadow-sm border p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Community Projects</h1>
              <p className="text-muted-foreground mt-1">
                Initiatives and improvements based on community reports
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/projects/stats">
                <Button variant="outline" className="h-9">
                  <FileBarChart className="h-4 w-4 mr-2" />
                  Statistics
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_200px_120px] mb-8">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-9"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {REPORT_CATEGORIES.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="planned">Planned</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator className="my-6" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-auto">
              Load More Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}