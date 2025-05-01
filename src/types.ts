type Evidence = {
  id: number;
  type: "photo" | "receipt" | "video" | "document";
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
  created_at: string;
  updated_at: string;
  evidences: Evidence[];
};
