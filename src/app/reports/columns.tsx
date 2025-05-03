"use client";

import { Project, Report } from "@/types";
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
import ViewReport from "./view-report";

export const columns: ColumnDef<Report>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ getValue }) => (
      <p className="whitespace-pre-wrap break-words">{getValue<string>()}</p>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const report = row.original;

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
            <ViewReport report={report} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
