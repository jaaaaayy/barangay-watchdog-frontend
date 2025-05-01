import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Report } from "@/types";
import Link from "next/link";

const ViewReport = ({ report }: { report: Report }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          View Report
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-h-[90svh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Report Details</DialogTitle>
        </DialogHeader>
        <div className="text-sm space-y-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <p className="text-muted-foreground">{report.title}</p>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <p className="text-muted-foreground">{report.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Type</Label>
              <p className="text-muted-foreground">{report.type}</p>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <p className="text-muted-foreground">{report.status}</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Reported Project</Label>
            <div className="border rounded-md p-2">
              <div className="space-y-2">
                <Label>Title</Label>
                <p className="text-muted-foreground">{report.project.title}</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Report Evidences</Label>
            {report.evidences.map((evidence, index) => (
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewReport;
