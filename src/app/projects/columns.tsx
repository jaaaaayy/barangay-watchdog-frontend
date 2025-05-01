"use client";

import { Project } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import ReportProject from "./report-project";
import ViewProjects from "./view-project";

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
  {
    accessorKey: "budget",
    header: "Budget",
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
  {
    accessorKey: "creator",
    header: "Creator",
    cell: ({ row }) => {
      const creator = row.original.creator;

      return (
        <p>
          {`${creator.last_name} ${creator.first_name}, ${creator.middle_name}`}
        </p>
      );
    },
  },
  {
    accessorKey: "start_date",
    header: "Start Date",
    cell: ({ getValue }) => (
      <p>{new Date(getValue<string>()).toLocaleString()}</p>
    ),
  },
  {
    accessorKey: "end_date",
    header: "End Date",
    cell: ({ getValue }) => (
      <p>{new Date(getValue<string>()).toLocaleString()}</p>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const project = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ViewProjects project={project} />
            <ReportProject id={project.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
