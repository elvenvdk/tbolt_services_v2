export interface ProjectMilestone {
  id: string;
  name: string;
  description: string;
  plannedDate: Date;
  actualDate?: Date;
  forecastDate: Date;
  status: 'not-started' | 'in-progress' | 'completed' | 'delayed' | 'at-risk';
  percentComplete: number;
  criticalPath: boolean;
  dependencies: string[];
}

export interface KeyAccomplishment {
  id: string;
  title: string;
  description: string;
  completedDate: Date;
  category: 'construction' | 'design' | 'permits' | 'quality' | 'safety' | 'milestone';
  impact: string;
  photos?: string[];
}

export interface ProjectRisk {
  id: string;
  title: string;
  description: string;
  category: 'schedule' | 'budget' | 'quality' | 'safety' | 'regulatory' | 'weather' | 'supply-chain';
  probability: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  status: 'identified' | 'mitigating' | 'monitoring' | 'resolved';
  mitigationPlan: string;
  owner: string;
}

export interface RFI {
  id: string;
  rfiNumber: string;
  title: string;
  description: string;
  category: 'design-clarification' | 'specification-clarification' | 'material-substitution' | 'construction-method' | 'code-compliance' | 'coordination' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'submitted' | 'under-review' | 'responded' | 'closed' | 'superseded';
  submittedBy: string;
  submittedDate: Date;
  assignedTo: string;
  dueDate: Date;
  responseDate?: Date;
  closedDate?: Date;
  question: string;
  response?: string;
  drawingReferences: string[];
  specificationReferences: string[];
  attachments: string[];
  scheduleImpact: number;
  costImpact: number;
  criticalPath: boolean;
}

export interface Submittal {
  id: string;
  submittalNumber: string;
  title: string;
  description: string;
  category: 'shop-drawings' | 'product-data' | 'samples' | 'mix-designs' | 'test-reports' | 'certificates' | 'warranties' | 'operation-manuals';
  status: 'not-submitted' | 'submitted' | 'under-review' | 'approved' | 'approved-as-noted' | 'rejected' | 'resubmit';
  submittedBy: string;
  submittedDate?: Date;
  reviewedBy?: string;
  reviewDate?: Date;
  dueDate: Date;
  specificationSection: string;
  drawingReferences: string[];
  vendor: string;
  manufacturer: string;
  productModel: string;
  reviewComments?: string;
  revisionNumber: number;
  scheduleImpact: number;
  criticalPath: boolean;
  attachments: string[];
}

export interface DesignIssue {
  id: string;
  issueNumber: string;
  title: string;
  description: string;
  category: 'design-error' | 'design-omission' | 'design-conflict' | 'constructability' | 'code-compliance' | 'coordination' | 'field-condition';
  severity: 'minor' | 'moderate' | 'major' | 'critical';
  status: 'identified' | 'investigating' | 'design-in-progress' | 'resolved' | 'closed';
  identifiedBy: string;
  identifiedDate: Date;
  assignedTo: string;
  dueDate: Date;
  resolvedDate?: Date;
  location: string;
  drawingReferences: string[];
  specificationReferences: string[];
  proposedSolution?: string;
  approvedSolution?: string;
  scheduleImpact: number;
  costImpact: number;
  criticalPath: boolean;
  attachments: string[];
}

export interface ArchitectEngineerCoordinationReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  coordinationManager: {
    name: string;
    title: string;
    organization: string;
  };
  designTeam: {
    architect: string;
    structuralEngineer: string;
    mechanicalEngineer: string;
    electricalEngineer: string;
    civilEngineer: string;
  };
  
  coordinationSummary: {
    totalRFIs: number;
    openRFIs: number;
    overdueRFIs: number;
    totalSubmittals: number;
    pendingSubmittals: number;
    overdueSubmittals: number;
    totalDesignIssues: number;
    openDesignIssues: number;
    criticalIssues: number;
  };
  
  rfis: RFI[];
  submittals: Submittal[];
  designIssues: DesignIssue[];
  
  rfisByCategory: {
    designClarification: RFI[];
    specificationClarification: RFI[];
    materialSubstitution: RFI[];
    constructionMethod: RFI[];
    codeCompliance: RFI[];
    coordination: RFI[];
    other: RFI[];
  };
  
  submittalsByCategory: {
    shopDrawings: Submittal[];
    productData: Submittal[];
    samples: Submittal[];
    mixDesigns: Submittal[];
    testReports: Submittal[];
    certificates: Submittal[];
    warranties: Submittal[];
    operationManuals: Submittal[];
  };
  
  designIssuesByCategory: {
    designError: DesignIssue[];
    designOmission: DesignIssue[];
    designConflict: DesignIssue[];
    constructability: DesignIssue[];
    codeCompliance: DesignIssue[];
    coordination: DesignIssue[];
    fieldCondition: DesignIssue[];
  };
  
  criticalPathItems: {
    rfis: RFI[];
    submittals: Submittal[];
    designIssues: DesignIssue[];
  };
  
  overdueItems: {
    rfis: RFI[];
    submittals: Submittal[];
    designIssues: DesignIssue[];
  };
  
  scheduleImpact: {
    totalDelayDays: number;
    rfiDelays: number;
    submittalDelays: number;
    designIssueDelays: number;
  };
  
  costImpact: {
    totalCostImpact: number;
    rfiCosts: number;
    submittalCosts: number;
    designIssueCosts: number;
  };
  
  upcomingDeadlines: {
    rfis: RFI[];
    submittals: Submittal[];
    designIssues: DesignIssue[];
  };
  
  recommendations: string[];
  actionItems: string[];
}

export interface ClientProgressReport {
  projectId: string;
  projectName: string;
  projectDescription: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  projectManager: {
    name: string;
    title: string;
    organization: string;
    contact: string;
  };
  client: {
    name: string;
    organization: string;
    representative: string;
  };
  
  executiveSummary: {
    overallStatus: 'on-track' | 'at-risk' | 'delayed' | 'ahead-of-schedule';
    overallProgress: number;
    keyHighlights: string[];
    majorConcerns: string[];
    nextPeriodFocus: string[];
  };
  
  schedulePerformance: {
    originalCompletionDate: Date;
    currentForecastDate: Date;
    scheduleVariance: number;
    overallProgress: number;
    criticalPathStatus: 'on-track' | 'at-risk' | 'delayed';
    upcomingMilestones: ProjectMilestone[];
    completedMilestones: ProjectMilestone[];
  };
  
  budgetPerformance: {
    originalBudget: number;
    currentBudget: number;
    spentToDate: number;
    forecastAtCompletion: number;
    budgetVariance: number;
    budgetVariancePercent: number;
    contingencyRemaining: number;
    changeOrdersToDate: number;
  };
  
  qualityAndSafety: {
    safetyRecord: {
      daysWithoutIncident: number;
      totalIncidents: number;
      safetyScore: number;
    };
    qualityMetrics: {
      inspectionsPassed: number;
      inspectionsFailed: number;
      reworkItems: number;
      qualityScore: number;
    };
    complianceStatus: 'compliant' | 'minor-issues' | 'major-issues';
  };
  
  keyAccomplishments: KeyAccomplishment[];
  
  currentRisks: ProjectRisk[];
  
  upcomingActivities: {
    activity: string;
    startDate: Date;
    endDate: Date;
    description: string;
    impact: string;
  }[];
  
  changeOrders: {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'approved' | 'rejected' | 'implemented';
    costImpact: number;
    scheduleImpact: number;
    submittedDate: Date;
    approvedDate?: Date;
  }[];
  
  photos: {
    title: string;
    description: string;
    location: string;
    dateTaken: Date;
    url: string;
  }[];
  
  nextSteps: string[];
  clientActions: string[];
  questionsForClient: string[];
}

export interface Permit {
  id: string;
  permitNumber: string;
  permitType: 'building' | 'electrical' | 'plumbing' | 'mechanical' | 'fire' | 'environmental' | 'demolition' | 'excavation' | 'occupancy' | 'special';
  description: string;
  status: 'not-applied' | 'application-submitted' | 'under-review' | 'approved' | 'issued' | 'expired' | 'rejected' | 'cancelled';
  authority: string;
  applicationDate?: Date;
  approvalDate?: Date;
  issuedDate?: Date;
  expirationDate?: Date;
  fee: number;
  conditions: string[];
  attachments: string[];
  inspector?: string;
  contactPerson: string;
  phoneNumber: string;
  scheduleImpact: number;
}

export interface RegulatoryInspection {
  id: string;
  inspectionNumber: string;
  inspectionType: 'foundation' | 'framing' | 'electrical-rough' | 'plumbing-rough' | 'mechanical-rough' | 'insulation' | 'drywall' | 'electrical-final' | 'plumbing-final' | 'mechanical-final' | 'fire-safety' | 'occupancy' | 'final';
  permitId: string;
  permitNumber: string;
  status: 'scheduled' | 'in-progress' | 'passed' | 'failed' | 'conditional' | 'cancelled' | 'rescheduled';
  scheduledDate: Date;
  actualDate?: Date;
  inspector: string;
  authority: string;
  location: string;
  scope: string;
  result?: 'pass' | 'fail' | 'conditional';
  deficiencies: string[];
  corrections: string[];
  reinspectionRequired: boolean;
  reinspectionDate?: Date;
  notes: string;
  photos: string[];
  scheduleImpact: number;
}

export interface ComplianceItem {
  id: string;
  category: 'building-code' | 'fire-code' | 'electrical-code' | 'plumbing-code' | 'mechanical-code' | 'environmental' | 'safety' | 'accessibility' | 'zoning';
  requirement: string;
  description: string;
  status: 'compliant' | 'non-compliant' | 'pending-review' | 'conditional' | 'not-applicable';
  codeReference: string;
  inspector?: string;
  inspectionDate?: Date;
  deficiency?: string;
  correctiveAction?: string;
  completionDate?: Date;
  verificationRequired: boolean;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

export interface RegulatoryAuthorityReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  complianceOfficer: {
    name: string;
    title: string;
    organization: string;
    license?: string;
  };
  
  regulatorySummary: {
    totalPermits: number;
    approvedPermits: number;
    pendingPermits: number;
    expiredPermits: number;
    totalInspections: number;
    passedInspections: number;
    failedInspections: number;
    pendingInspections: number;
    complianceIssues: number;
    criticalViolations: number;
  };
  
  permits: Permit[];
  inspections: RegulatoryInspection[];
  complianceItems: ComplianceItem[];
  
  permitsByType: {
    building: Permit[];
    electrical: Permit[];
    plumbing: Permit[];
    mechanical: Permit[];
    fire: Permit[];
    environmental: Permit[];
    demolition: Permit[];
    excavation: Permit[];
    occupancy: Permit[];
    special: Permit[];
  };
  
  inspectionsByType: {
    foundation: RegulatoryInspection[];
    framing: RegulatoryInspection[];
    electricalRough: RegulatoryInspection[];
    plumbingRough: RegulatoryInspection[];
    mechanicalRough: RegulatoryInspection[];
    insulation: RegulatoryInspection[];
    drywall: RegulatoryInspection[];
    electricalFinal: RegulatoryInspection[];
    plumbingFinal: RegulatoryInspection[];
    mechanicalFinal: RegulatoryInspection[];
    fireSafety: RegulatoryInspection[];
    occupancy: RegulatoryInspection[];
    final: RegulatoryInspection[];
  };
  
  complianceByCategory: {
    buildingCode: ComplianceItem[];
    fireCode: ComplianceItem[];
    electricalCode: ComplianceItem[];
    plumbingCode: ComplianceItem[];
    mechanicalCode: ComplianceItem[];
    environmental: ComplianceItem[];
    safety: ComplianceItem[];
    accessibility: ComplianceItem[];
    zoning: ComplianceItem[];
  };
  
  failedInspections: RegulatoryInspection[];
  expiredPermits: Permit[];
  criticalViolations: ComplianceItem[];
  
  upcomingInspections: RegulatoryInspection[];
  upcomingExpirations: Permit[];
  
  scheduleImpact: {
    totalDelayDays: number;
    permitDelays: number;
    inspectionDelays: number;
    complianceDelays: number;
  };
  
  regulatoryContacts: {
    authority: string;
    department: string;
    contactPerson: string;
    phone: string;
    email: string;
  }[];
  
  actionItems: string[];
  recommendations: string[];
}

export interface NoiseIncident {
  id: string;
  date: Date;
  time: string;
  noiseType: 'construction-equipment' | 'demolition' | 'drilling' | 'hammering' | 'machinery' | 'truck-traffic' | 'backup-alarms' | 'other';
  decibelLevel?: number;
  duration: number;
  location: string;
  source: string;
  complainant?: string;
  contactInfo?: string;
  description: string;
  mitigationTaken: string[];
  resolved: boolean;
  followUpRequired: boolean;
}

export interface TrafficImpact {
  id: string;
  date: Date;
  impactType: 'lane-closure' | 'detour' | 'heavy-truck-traffic' | 'parking-restriction' | 'delivery-congestion' | 'equipment-movement' | 'other';
  location: string;
  duration: number;
  affectedRoutes: string[];
  trafficVolume: 'light' | 'moderate' | 'heavy' | 'severe';
  peakHours: string[];
  mitigationMeasures: string[];
  coordinationRequired: string[];
  permits: string[];
  complaints: number;
}

export interface CommunityComplaint {
  id: string;
  complaintNumber: string;
  date: Date;
  complainantType: 'resident' | 'business' | 'visitor' | 'official' | 'anonymous';
  complainant?: string;
  contactInfo?: string;
  complaintCategory: 'noise' | 'dust' | 'traffic' | 'parking' | 'safety' | 'property-damage' | 'access' | 'hours-of-operation' | 'other';
  severity: 'minor' | 'moderate' | 'major' | 'critical';
  description: string;
  location: string;
  timeOfIncident?: Date;
  responseActions: string[];
  resolution?: string;
  resolvedDate?: Date;
  followUpRequired: boolean;
  escalated: boolean;
  satisfactionRating?: number;
}

export interface CommunityEngagement {
  id: string;
  engagementType: 'meeting' | 'notification' | 'survey' | 'open-house' | 'newsletter' | 'website-update' | 'social-media' | 'door-to-door' | 'other';
  date: Date;
  audience: string;
  participants: number;
  topics: string[];
  feedback: string[];
  concerns: string[];
  commitments: string[];
  followUpActions: string[];
}

export interface CommunityImpactReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  communityLiaison: {
    name: string;
    title: string;
    organization: string;
    contact: string;
  };
  
  impactSummary: {
    totalComplaints: number;
    resolvedComplaints: number;
    pendingComplaints: number;
    escalatedComplaints: number;
    noiseIncidents: number;
    trafficImpacts: number;
    communityEngagements: number;
    satisfactionRating: number;
  };
  
  noiseIncidents: NoiseIncident[];
  trafficImpacts: TrafficImpact[];
  communityComplaints: CommunityComplaint[];
  communityEngagements: CommunityEngagement[];
  
  noiseByType: {
    constructionEquipment: NoiseIncident[];
    demolition: NoiseIncident[];
    drilling: NoiseIncident[];
    hammering: NoiseIncident[];
    machinery: NoiseIncident[];
    truckTraffic: NoiseIncident[];
    backupAlarms: NoiseIncident[];
    other: NoiseIncident[];
  };
  
  trafficByType: {
    laneClosure: TrafficImpact[];
    detour: TrafficImpact[];
    heavyTruckTraffic: TrafficImpact[];
    parkingRestriction: TrafficImpact[];
    deliveryCongestion: TrafficImpact[];
    equipmentMovement: TrafficImpact[];
    other: TrafficImpact[];
  };
  
  complaintsByCategory: {
    noise: CommunityComplaint[];
    dust: CommunityComplaint[];
    traffic: CommunityComplaint[];
    parking: CommunityComplaint[];
    safety: CommunityComplaint[];
    propertyDamage: CommunityComplaint[];
    access: CommunityComplaint[];
    hoursOfOperation: CommunityComplaint[];
    other: CommunityComplaint[];
  };
  
  unresolvedComplaints: CommunityComplaint[];
  escalatedComplaints: CommunityComplaint[];
  
  mitigationMeasures: {
    implemented: string[];
    planned: string[];
    effectiveness: string[];
  };
  
  workingHours: {
    standardHours: string;
    weekendWork: boolean;
    holidayWork: boolean;
    emergencyWork: string[];
    noiseRestrictions: string[];
  };
  
  communicationPlan: {
    notificationMethods: string[];
    updateFrequency: string;
    contactInformation: string[];
    emergencyContacts: string[];
  };
  
  upcomingActivities: {
    activity: string;
    startDate: Date;
    endDate: Date;
    expectedImpacts: string[];
    mitigationPlanned: string[];
    notificationPlan: string;
  }[];
  
  actionItems: string[];
  recommendations: string[];
}