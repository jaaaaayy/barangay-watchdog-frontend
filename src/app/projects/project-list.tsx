"use client";

import getAllProjects from "@/action";
import { DataTable } from "@/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { columns } from "./columns";

const ProjectList = () => {
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
    queryFn: () => getAllProjects(),
  });

  if (isLoading || isPending) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center">
        <LoaderCircle className="animate-spin" />
        <p>Loading projects...</p>
      </div>
    );
  }

  return <DataTable columns={columns} data={data} />;
};

export default ProjectList;
