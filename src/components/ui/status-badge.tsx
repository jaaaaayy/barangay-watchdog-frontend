import { cn } from "@/lib/utils";
import { REPORT_STATUS } from "@/lib/data";
import { ReportStatus } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: ReportStatus;
  className?: string;
}

const statusColors: Record<ReportStatus, string> = {
  'pending': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
  'reviewing': 'bg-blue-100 text-blue-800 hover:bg-blue-100',
  'in-progress': 'bg-purple-100 text-purple-800 hover:bg-purple-100',
  'resolved': 'bg-green-100 text-green-800 hover:bg-green-100',
  'rejected': 'bg-red-100 text-red-800 hover:bg-red-100',
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusInfo = REPORT_STATUS.find(s => s.value === status);
  
  if (!statusInfo) return null;
  
  return (
    <Badge 
      variant="outline"
      className={cn(
        statusColors[status],
        "border-transparent",
        className
      )}
    >
      {statusInfo.label}
    </Badge>
  );
}