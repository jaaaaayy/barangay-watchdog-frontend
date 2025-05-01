"use client";

import { DataTable } from "@/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { columns } from "./columns";
import { getAllProjects, getAllReports } from "@/action";

const ReportList = () => {
  const {
    isLoading,
    isPending,
    isError,
    error,
    data,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: () => getAllReports(),
  });

  if (isLoading || isPending) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center">
        <LoaderCircle className="animate-spin" />
        <p>Loading reports...</p>
      </div>
    );
  }

  return <DataTable columns={columns} data={data} />;
};

export default ReportList;
