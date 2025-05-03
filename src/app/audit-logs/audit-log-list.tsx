"use client";

import { getAllAuditLogs } from "@/action";
import { DataTable } from "@/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { columns } from "./columns";

const AuditLogList = () => {
  const {
    isLoading,
    isPending,
    isError,
    error,
    data,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllAuditLogs(),
  });

  if (isLoading || isPending) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center">
        <LoaderCircle className="animate-spin" />
        <p>Loading audit logs...</p>
      </div>
    );
  }

  return <DataTable columns={columns} data={data} />;
};

export default AuditLogList;
