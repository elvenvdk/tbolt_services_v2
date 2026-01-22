export interface ClaimItem {
  id: string;
  claimNumber: string;
  title: string;
  description: string;
  claimType: 'time-extension' | 'additional-compensation' | 'change-order' | 'delay-damages' | 'acceleration' | 'disruption' | 'defective-work' | 'breach-of-contract';
  claimCategory: 'contractor-claim' | 'owner-claim' | 'subcontractor-claim' | 'third-party-claim';
  status: 'potential' | 'submitted' | 'under-review' | 'negotiating' | 'disputed' | 'resolved' | 'rejected' | 'withdrawn';
  priority: 'low' | 'medium' | 'high' | 'critical';
  claimant: string;
  respondent: string;
  submittedDate?: Date;
  identifiedDate: Date;
  dueDate?: Date;
  resolvedDate?: Date;
  claimAmount: number;
  timeExtension: number;
  basis: string;
  entitlement: string;
  causation: string;
  quantification: string;
  supportingDocuments: string[];
  correspondence: string[];
  negotiations: {
    date: Date;
    participants: string[];
    summary: string;
    outcome: string;
  }[];
  resolutionMethod?: 'negotiation' | 'mediation' | 'arbitration' | 'litigation' | 'expert-determination';
  resolutionAmount?: number;
  resolutionTime?: number;
  legalCounsel?: string;
  expert?: string;
}

export interface ClaimsReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  preparedBy: {
    name: string;
    title: string;
    organization: string;
  };
  
  claimsSummary: {
    totalClaims: number;
    potentialClaims: number;
    submittedClaims: number;
    underReviewClaims: number;
    negotiatingClaims: number;
    disputedClaims: number;
    resolvedClaims: number;
    rejectedClaims: number;
    withdrawnClaims: number;
  };
  
  claimsByType: {
    timeExtension: ClaimItem[];
    additionalCompensation: ClaimItem[];
    changeOrder: ClaimItem[];
    delayDamages: ClaimItem[];
    acceleration: ClaimItem[];
    disruption: ClaimItem[];
    defectiveWork: ClaimItem[];
    breachOfContract: ClaimItem[];
  };
  
  claimsByCategory: {
    contractorClaims: ClaimItem[];
    ownerClaims: ClaimItem[];
    subcontractorClaims: ClaimItem[];
    thirdPartyClaims: ClaimItem[];
  };
  
  highPriorityClaims: ClaimItem[];
  potentialClaims: ClaimItem[];
  
  financialImpact: {
    totalClaimAmount: number;
    potentialExposure: number;
    resolvedAmount: number;
    outstandingAmount: number;
    contingencyReserve: number;
  };
  
  scheduleImpact: {
    totalTimeExtensionClaimed: number;
    approvedTimeExtension: number;
    pendingTimeExtension: number;
    projectDelayRisk: number;
  };
  
  documentationStatus: {
    wellDocumented: number;
    partiallyDocumented: number;
    poorlyDocumented: number;
    documentationGaps: string[];
  };
  
  resolutionMetrics: {
    averageResolutionTime: number;
    successfulNegotiations: number;
    mediationCases: number;
    arbitrationCases: number;
    litigationCases: number;
  };
  
  riskAssessment: string[];
  recommendations: string[];
  actionItems: string[];
}