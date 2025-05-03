"use client";

import { AuditLog } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<AuditLog>[] = [
  {
    accessorKey: "type",
    header: "Type",
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
    accessorKey: "entity_type",
    header: "Entity_type",
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
  {
    accessorKey: "entity_id",
    header: "Entity ID",
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
  {
    accessorKey: "user_id",
    header: "User_id",
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
];
