import { Report, Project, ReportCategory, ReportStatus } from './types';

// Mock data for development
export const REPORT_CATEGORIES: { 
  value: ReportCategory; 
  label: string; 
  description: string;
} [] = [
  { 
    value: 'corruption', 
    label: 'Corruption', 
    description: 'Bribery, embezzlement, or misuse of public funds'
  },
  { 
    value: 'misconduct', 
    label: 'Official Misconduct', 
    description: 'Abuse of power, negligence, or unprofessional behavior'
  },
  { 
    value: 'public-services', 
    label: 'Public Services', 
    description: 'Issues with healthcare, education, or other public services'
  },
  { 
    value: 'infrastructure', 
    label: 'Infrastructure', 
    description: 'Roads, bridges, public buildings, or utilities problems'
  },
  { 
    value: 'safety', 
    label: 'Public Safety', 
    description: 'Crime, emergency response, or environmental hazards'
  },
  { 
    value: 'other', 
    label: 'Other', 
    description: 'Any other community concern not listed above'
  }
];

export const REPORT_STATUS: {
  value: ReportStatus;
  label: string;
  description: string;
  color: string;
} [] = [
  {
    value: 'pending',
    label: 'Pending Review',
    description: 'Report has been submitted and is awaiting initial review',
    color: 'bg-yellow-500'
  },
  {
    value: 'reviewing',
    label: 'Under Review',
    description: 'Report is being reviewed by authorities',
    color: 'bg-blue-500'
  },
  {
    value: 'in-progress',
    label: 'In Progress',
    description: 'Investigation or action is currently underway',
    color: 'bg-purple-500'
  },
  {
    value: 'resolved',
    label: 'Resolved',
    description: 'Issue has been addressed and resolved',
    color: 'bg-green-500'
  },
  {
    value: 'rejected',
    label: 'Rejected',
    description: 'Report was reviewed but determined to not require action',
    color: 'bg-red-500'
  }
];

// Sample reports for development
export const SAMPLE_REPORTS: Report[] = [
  {
    id: '1',
    title: 'Road repair funds misused',
    description: 'The funds allocated for repairing the main road in Barangay 123 appear to have been misused. The project was reported as completed but the road remains in poor condition.',
    category: 'corruption',
    location: 'Barangay 123, Main Road',
    date: '2025-04-10',
    status: 'reviewing',
    statusUpdates: [
      {
        date: '2025-04-10',
        status: 'pending',
      },
      {
        date: '2025-04-12',
        status: 'reviewing',
        note: 'Initial investigation started'
      }
    ],
    createdAt: '2025-04-10T08:30:00Z',
    updatedAt: '2025-04-12T14:15:00Z'
  },
  {
    id: '2',
    title: 'Unsafe construction site near elementary school',
    description: 'There is an unsecured construction site next to the elementary school that poses significant safety risks to children. There are no proper barriers or warning signs.',
    category: 'safety',
    location: 'Barangay 456, near Elementary School',
    date: '2025-04-05',
    status: 'resolved',
    statusUpdates: [
      {
        date: '2025-04-05',
        status: 'pending',
      },
      {
        date: '2025-04-06',
        status: 'reviewing',
      },
      {
        date: '2025-04-07',
        status: 'in-progress',
        note: 'Site inspection conducted'
      },
      {
        date: '2025-04-09',
        status: 'resolved',
        note: 'Proper barriers installed and safety measures implemented'
      }
    ],
    createdAt: '2025-04-05T10:45:00Z',
    updatedAt: '2025-04-09T16:30:00Z'
  },
  {
    id: '3',
    title: 'Health center staff requesting informal payments',
    description: 'Several staff members at the barangay health center are requesting "fees" for services that should be free according to government policy.',
    category: 'misconduct',
    location: 'Barangay 789 Health Center',
    date: '2025-04-08',
    status: 'in-progress',
    statusUpdates: [
      {
        date: '2025-04-08',
        status: 'pending',
      },
      {
        date: '2025-04-10',
        status: 'reviewing',
      },
      {
        date: '2025-04-15',
        status: 'in-progress',
        note: 'Investigation team assigned'
      }
    ],
    createdAt: '2025-04-08T09:15:00Z',
    updatedAt: '2025-04-15T11:20:00Z'
  }
];

// Sample projects for development
export const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Health Center Transparency Initiative',
    description: 'Implementation of transparent fee structure and monitoring system at all barangay health centers to prevent informal payments and ensure equal access to healthcare.',
    status: 'in-progress',
    category: 'misconduct',
    location: 'All Barangay Health Centers',
    startDate: '2025-04-20',
    relatedReports: ['3'],
    updates: [
      {
        date: '2025-04-20',
        description: 'Project initiated based on multiple reports of informal payments'
      },
      {
        date: '2025-04-25',
        description: 'Monitoring team established and initial assessment conducted'
      }
    ],
    createdAt: '2025-04-20T08:00:00Z',
    updatedAt: '2025-04-25T15:30:00Z'
  },
  {
    id: '2',
    title: 'School Zone Safety Program',
    description: 'Comprehensive safety improvements around all schools including proper barriers, signage, and crossing guards to ensure student safety.',
    status: 'completed',
    category: 'safety',
    location: 'All Barangay School Zones',
    startDate: '2025-04-10',
    endDate: '2025-04-30',
    relatedReports: ['2'],
    updates: [
      {
        date: '2025-04-10',
        description: 'Project initiated in response to safety concerns'
      },
      {
        date: '2025-04-20',
        description: 'Safety barriers and signage installed at 5 school zones'
      },
      {
        date: '2025-04-30',
        description: 'Project completed with all school zones secured and crossing guards trained'
      }
    ],
    createdAt: '2025-04-10T09:00:00Z',
    updatedAt: '2025-04-30T16:45:00Z'
  }
];