import { cn } from "@/lib/utils";
import { REPORT_CATEGORIES } from "@/lib/data";
import { ReportCategory } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface CategoryBadgeProps {
  category: ReportCategory;
  showLabel?: boolean;
  className?: string;
}

const categoryColors: Record<ReportCategory, string> = {
  'corruption': 'bg-red-100 text-red-800 hover:bg-red-100',
  'misconduct': 'bg-orange-100 text-orange-800 hover:bg-orange-100',
  'public-services': 'bg-blue-100 text-blue-800 hover:bg-blue-100',
  'infrastructure': 'bg-amber-100 text-amber-800 hover:bg-amber-100',
  'safety': 'bg-purple-100 text-purple-800 hover:bg-purple-100',
  'other': 'bg-gray-100 text-gray-800 hover:bg-gray-100',
};

export function CategoryBadge({ category, showLabel = true, className }: CategoryBadgeProps) {
  const categoryInfo = REPORT_CATEGORIES.find(c => c.value === category);
  
  if (!categoryInfo) return null;
  
  return (
    <Badge 
      variant="outline"
      className={cn(
        categoryColors[category],
        "border-transparent",
        className
      )}
    >
      {showLabel ? categoryInfo.label : category}
    </Badge>
  );
}