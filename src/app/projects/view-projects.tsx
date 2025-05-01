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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report Project</DialogTitle>
        </DialogHeader>
        <div className="text-sm space-y-4">
          <div>
            <Label>Title</Label>
            <p className="text-muted-foreground">{project.title}</p>
          </div>
          <div>
            <Label>Description</Label>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Budget</Label>
              <p className="text-muted-foreground">{project.budget}</p>
            </div>
            <div>
              <Label>Contractor</Label>
              <p className="text-muted-foreground">{project.contractor}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Start Date</Label>
            <p className="text-muted-foreground">{project.start_date}</p>
          </div>
          <div>
            <Label>End Date</Label>
            <p className="text-muted-foreground">{project.end_date}</p>
          </div>
        </div>
        <div>
          <Label>Creator</Label>
          <p className="text-muted-foreground">
            {project.creator.last_name} {project.creator.first_name},{" "}
            {project.creator.middle_name}
          </p>
        </div>
        <div className="space-y-2">
          <Label>Evidences</Label>
          {project.evidences.map((evidence, index) => (
            <div key={index} className="border rounded-md p-2">
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
