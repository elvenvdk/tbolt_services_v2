export interface IssueItem {
  id: string;
  title: string;
  description: string;
  category: 'technical' | 'safety' | 'quality' | 'schedule' | 'budget' | 'regulatory' | 'design' | 'procurement' | 'coordination';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in-progress' | 'pending-review' | 'resolved' | 'closed' | 'escalated';
  reportedBy: string;
  reportedDate: Date;
  assignedTo: string;
  dueDate: Date;
  resolvedDate?: Date;
  closedDate?: Date;
  escalationLevel: 'none' | 'supervisor' | 'manager' | 'executive' | 'client';
  escalationDate?: Date;
  escalationReason?: string;
  resolutionNotes?: string;
  impactArea: string;
  costImpact?: number;
  scheduleImpact?: number;
  attachments?: string[];
}

export interface IssueTrackingReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  reportedBy: {
    name: string;
    title: string;
    organization: string;
  };
  
  issueSummary: {
    totalIssues: number;
    openIssues: number;
    inProgressIssues: number;
    resolvedIssues: number;
    closedIssues: number;
    escalatedIssues: number;
    overdueIssues: number;
    newIssues: number;
  };
  
  issuesByCategory: {
    technical: IssueItem[];
    safety: IssueItem[];
    quality: IssueItem[];
    schedule: IssueItem[];
    budget: IssueItem[];
    regulatory: IssueItem[];
    design: IssueItem[];
    procurement: IssueItem[];
    coordination: IssueItem[];
  };
  
  issuesByPriority: {
    critical: IssueItem[];
    high: IssueItem[];
    medium: IssueItem[];
    low: IssueItem[];
  };
  
  escalatedIssues: IssueItem[];
  overdueIssues: IssueItem[];
  
  resolutionMetrics: {
    averageResolutionTime: number;
    resolutionRate: number;
    escalationRate: number;
    overdueRate: number;
  };
  
  impactAnalysis: {
    totalCostImpact: number;
    totalScheduleImpact: number;
    criticalPathAffected: boolean;
  };
  
  actionItems: string[];
  recommendations: string[];
}