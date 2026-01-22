export interface RiskItem {
  id: string;
  category: 'safety' | 'financial' | 'schedule' | 'quality' | 'environmental' | 'regulatory' | 'technical' | 'operational';
  description: string;
  probability: 'low' | 'medium' | 'high' | 'critical';
  impact: 'low' | 'medium' | 'high' | 'critical';
  riskScore: number;
  mitigationStrategy: string;
  responsibleParty: string;
  targetDate: Date;
  status: 'identified' | 'mitigating' | 'monitoring' | 'closed';
  contingencyPlan?: string;
}

export interface RiskAssessmentReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  assessmentPeriod: {
    startDate: Date;
    endDate: Date;
  };
  assessor: {
    name: string;
    title: string;
    organization: string;
  };
  
  riskSummary: {
    totalRisks: number;
    criticalRisks: number;
    highRisks: number;
    mediumRisks: number;
    lowRisks: number;
    newRisks: number;
    closedRisks: number;
  };
  
  risksByCategory: {
    safety: RiskItem[];
    financial: RiskItem[];
    schedule: RiskItem[];
    quality: RiskItem[];
    environmental: RiskItem[];
    regulatory: RiskItem[];
    technical: RiskItem[];
    operational: RiskItem[];
  };
  
  topRisks: RiskItem[];
  mitigationActions: {
    completed: number;
    inProgress: number;
    overdue: number;
    planned: number;
  };
  
  recommendations: string[];
  nextAssessmentDate: Date;
}