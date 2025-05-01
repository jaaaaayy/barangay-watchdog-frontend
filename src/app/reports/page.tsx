import Link from "next/link";
import { FileBarChart, FileText, Search } from "lucide-react";

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
import { ReportCard } from "@/components/reports/report-card";
import { SAMPLE_REPORTS, REPORT_CATEGORIES } from "@/lib/data";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-xl shadow-sm border p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Public Reports</h1>
              <p className="text-muted-foreground max-w-2xl">
                Browse anonymously submitted reports and track their progress. All reports are verified 
                and handled with complete confidentiality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href="/reports/stats">
                <Button variant="outline" className="h-10 w-full sm:w-auto justify-center">
                  <FileBarChart className="h-4 w-4 mr-2" />
                  Statistics
                </Button>
              </Link>
              <Link href="/create-report" className="sm:ml-2">
                <Button className="h-10 w-full sm:w-auto justify-center bg-red-600 hover:bg-red-700">
                  <FileText className="h-4 w-4 mr-2" />
                  Submit Report
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_200px_140px] mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search reports by title, location, or description..."
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
                  <SelectItem 
                    key={category.value} 
                    value={category.value}
                    className="flex flex-col items-start py-3"
                  >
                    <span className="font-medium">{category.label}</span>
                    <span className="text-xs text-muted-foreground mt-0.5">
                      {category.description}
                    </span>
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
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewing">Reviewing</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator className="my-8" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_REPORTS.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-[200px] font-medium"
            >
              Load More Reports
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}