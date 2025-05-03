type ProjectEvidence = {
  id: number;
  type: "blueprint" | "contract" | "permit" | "budget" | "report";
  file_url: string;
  description: string;
  project_id: number;
  created_at: string;
  updated_at: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  budget: string;
  contractor: string;
  start_date: string;
  end_date: string;
  status: "planned" | "ongoing" | "completed" | "delayed";
  created_by: number;
  creator: {
    first_name: string;
    middle_name: string;
    last_name: string;
  };
  created_at: string;
  updated_at: string;
  evidences: ProjectEvidence[];
};

type ReportEvidence = {
  id: number;
  type: "image" | "video" | "document" | "audio";
  file_url: string;
  description: string;
  report_id: number;
  created_at: string;
  updated_at: string;
};

export type Report = {
  id: number;
  title: string;
  description: string;
  type: "bribery" | "nepotism" | "theft" | "quality_violation" | "delayed";
  status: "submitted" | "under_review" | "resolved" | "dismissed";
  project_id: number;
  created_at: string;
  updated_at: string;
  project: Project;
  evidences: ReportEvidence[];
};

export type User = {
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  phone_number: string;
  role: string;
  email: string;
  password: string;
};

export type AuditLog = {
  type: string;
  description: string;
  entity_type: string;
  entity_id: number;
  user_id: number;
};
