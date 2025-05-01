export type ReportStatus = 'pending' | 'reviewing' | 'in-progress' | 'resolved' | 'rejected';

export type ReportCategory = 
  | 'corruption' 
  | 'misconduct' 
  | 'public-services' 
  | 'infrastructure' 
  | 'safety' 
  | 'other';

export interface Report {
  id: string;
  title: string;
  description: string;
  category: ReportCategory;
  location: string;
  date: string;
  evidence?: string[];
  status: ReportStatus;
  statusUpdates?: {
    date: string;
    status: ReportStatus;
    note?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed';
  category: ReportCategory;
  location: string;
  startDate?: string;
  endDate?: string;
  relatedReports: string[];
  updates?: {
    date: string;
    description: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  role: 'admin' | 'moderator' | 'viewer';
  name: string;
  email: string;
}