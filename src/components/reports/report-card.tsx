import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CategoryBadge } from "@/components/ui/category-badge";
import { StatusBadge } from "@/components/ui/status-badge";
import { Report } from "@/lib/types";

interface ReportCardProps {
  report: Report;
}

export function ReportCard({ report }: ReportCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1.5">
          <CategoryBadge category={report.category} />
          <h3 className="font-semibold text-lg leading-tight line-clamp-2">
            {report.title}
          </h3>
        </div>
        <StatusBadge status={report.status} />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {report.description}
          </p>
          <div className="flex flex-col space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="line-clamp-1">{report.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
              <span>Reported on {format(new Date(report.date), "PPP")}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t mt-auto">
        <Link 
          href={`/reports/${report.id}`}
          className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 transition-colors"
        >
          View details
          <span aria-hidden="true" className="text-xs">→</span>
        </Link>
      </CardFooter>
    </Card>
  );
}