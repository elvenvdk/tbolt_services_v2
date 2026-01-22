export interface DelayItem {
  id: string;
  taskId: string;
  taskName: string;
  delayType: 'weather' | 'material' | 'labor' | 'equipment' | 'design' | 'permit' | 'client' | 'subcontractor' | 'coordination' | 'force-majeure';
  delayCategory: 'excusable' | 'non-excusable' | 'compensable' | 'concurrent';
  plannedStartDate: Date;
  actualStartDate: Date;
  plannedEndDate: Date;
  actualEndDate: Date;
  delayDays: number;
  criticalPath: boolean;
  cause: string;
  responsibleParty: string;
  impactDescription: string;
  costImpact: number;
  recoveryPlan: string;
  recoveryActions: string[];
  recoveryDuration: number;
  recoveryStatus: 'planned' | 'in-progress' | 'completed' | 'failed';
  mitigationMeasures: string[];
  documentation: string[];
}

export interface DelayAnalysisReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  analysisDate: Date;
  analysisPeriod: {
    startDate: Date;
    endDate: Date;
  };
  analyst: {
    name: string;
    title: string;
    organization: string;
  };
  
  delaySummary: {
    totalDelays: number;
    totalDelayDays: number;
    criticalPathDelays: number;
    criticalPathDays: number;
    excusableDelays: number;
    nonExcusableDelays: number;
    compensableDelays: number;
    concurrentDelays: number;
  };
  
  delaysByType: {
    weather: DelayItem[];
    material: DelayItem[];
    labor: DelayItem[];
    equipment: DelayItem[];
    design: DelayItem[];
    permit: DelayItem[];
    client: DelayItem[];
    subcontractor: DelayItem[];
    coordination: DelayItem[];
    forceMajeure: DelayItem[];
  };
  
  criticalPathDelays: DelayItem[];
  
  scheduleImpact: {
    originalCompletionDate: Date;
    currentCompletionDate: Date;
    totalProjectDelay: number;
    milestoneImpacts: {
      milestoneName: string;
      originalDate: Date;
      revisedDate: Date;
      delayDays: number;
    }[];
  };
  
  costImpact: {
    totalCostImpact: number;
    directCosts: number;
    indirectCosts: number;
    liquidatedDamages: number;
    accelerationCosts: number;
  };
  
  recoveryPlans: {
    totalRecoveryActions: number;
    plannedRecovery: number;
    inProgressRecovery: number;
    completedRecovery: number;
    failedRecovery: number;
    estimatedRecoveryDays: number;
  };
  
  recommendations: string[];
  preventiveMeasures: string[];
}