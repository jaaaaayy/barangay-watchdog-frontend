import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Project } from "@/types";
import Link from "next/link";

const ViewProject = ({ project }: { project: Project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          View Project
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-h-[90svh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Project Details</DialogTitle>
        </DialogHeader>
        <div className="text-sm space-y-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <p className="text-muted-foreground">{project.title}</p>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Budget</Label>
              <p className="text-muted-foreground">{project.budget}</p>
            </div>
            <div className="space-y-2">
              <Label>Contractor</Label>
              <p className="text-muted-foreground">{project.contractor}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Start Date</Label>
            <p className="text-muted-foreground">{project.start_date}</p>
          </div>
          <div className="space-y-2">
            <Label>End Date</Label>
            <p className="text-muted-foreground">{project.end_date}</p>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Creator</Label>
          <p className="text-muted-foreground">
            {project.creator.last_name} {project.creator.first_name},{" "}
            {project.creator.middle_name}
          </p>
        </div>
        <div className="space-y-2">
          <Label>Project Evidences</Label>
          {project.evidences.map((evidence, index) => (
            <div key={index} className="border rounded-md p-2 space-y-2">
              <Label>{evidence.type}</Label>
              <Link
                href={`http://127.0.0.1:8000/storage/${evidence.file_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground"
              >
                {evidence.file_url}
              </Link>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewProject;
