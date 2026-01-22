export interface SubstantialCompletionReport {
  reportId: string;
  projectId: string;
  projectName: string;
  reportDate: Date;
  completionDate: Date;
  contractorName: string;
  architectName: string;
  ownerRepresentative: string;
  
  // Completion Status
  completionStatus: CompletionStatus;
  overallCompletionPercentage: number;
  
  // Punch List Management
  punchList: PunchListSummary;
  punchListItems: PunchListItem[];
  
  // Final Inspections
  finalInspections: FinalInspectionSummary;
  inspectionResults: InspectionResult[];
  
  // Documentation & Closeout
  closeoutDocumentation: CloseoutDocumentation;
  
  // Warranties & Guarantees
  warranties: WarrantyInformation[];
  
  // Final Certifications
  certifications: CompletionCertification[];
  
  // Handover Information
  handoverDetails: HandoverDetails;
  
  generatedBy: string;
  approvedBy?: string;
  approvalDate?: Date;
}

export interface CompletionStatus {
  phase: 'Pre-Substantial' | 'Substantial-Complete' | 'Final-Complete';
  milestonesMet: number;
  totalMilestones: number;
  criticalItemsRemaining: number;
  estimatedFinalCompletion: Date;
  contractualCompletionDate: Date;
  daysAheadBehind: number;
}

export interface PunchListSummary {
  totalItems: number;
  openItems: number;
  closedItems: number;
  criticalItems: number;
  itemsByTrade: TradeItemCount[];
  itemsByPriority: PriorityItemCount[];
  averageCloseTime: number; // days
  oldestOpenItem: Date;
}

export interface PunchListItem {
  itemId: string;
  description: string;
  location: string;
  trade: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In-Progress' | 'Closed' | 'Verified';
  assignedTo: string;
  dateIdentified: Date;
  targetCloseDate: Date;
  actualCloseDate?: Date;
  photos: string[];
  notes: string;
  costImpact?: number;
  scheduleImpact?: number;
}

export interface FinalInspectionSummary {
  totalInspections: number;
  passedInspections: number;
  failedInspections: number;
  pendingInspections: number;
  inspectionsByType: InspectionTypeCount[];
  averageInspectionScore: number;
  criticalFailures: number;
}

export interface InspectionResult {
  inspectionId: string;
  inspectionType: string;
  inspector: string;
  inspectionDate: Date;
  status: 'Passed' | 'Failed' | 'Conditional' | 'Pending';
  score?: number;
  areas: InspectionArea[];
  deficiencies: InspectionDeficiency[];
  reinspectionRequired: boolean;
  reinspectionDate?: Date;
  certificationIssued: boolean;
}

export interface InspectionArea {
  area: string;
  status: 'Passed' | 'Failed' | 'Conditional';
  score?: number;
  notes: string;
}

export interface InspectionDeficiency {
  deficiencyId: string;
  description: string;
  severity: 'Critical' | 'Major' | 'Minor';
  location: string;
  correctionRequired: string;
  targetDate: Date;
  status: 'Open' | 'Corrected' | 'Verified';
}

export interface CloseoutDocumentation {
  asBuiltDrawings: DocumentStatus;
  operationManuals: DocumentStatus;
  warrantyDocuments: DocumentStatus;
  maintenanceSchedules: DocumentStatus;
  testReports: DocumentStatus;
  certifications: DocumentStatus;
  lienWaivers: DocumentStatus;
  completionPercentage: number;
}

export interface DocumentStatus {
  required: number;
  submitted: number;
  approved: number;
  status: 'Complete' | 'Partial' | 'Missing';
}

export interface WarrantyInformation {
  item: string;
  warrantyType: string;
  warrantyPeriod: string;
  startDate: Date;
  endDate: Date;
  provider: string;
  contactInfo: string;
  coverageDetails: string;
}

export interface CompletionCertification {
  certificationType: string;
  issuingAuthority: string;
  certificationNumber: string;
  issueDate: Date;
  expirationDate?: Date;
  status: 'Valid' | 'Pending' | 'Expired';
  attachments: string[];
}

export interface HandoverDetails {
  handoverDate: Date;
  keyTransfer: boolean;
  systemTraining: TrainingStatus[];
  operationalReadiness: number; // percentage
  ownerAcceptance: boolean;
  finalPaymentStatus: 'Released' | 'Pending' | 'Withheld';
  retainageAmount: number;
  retainageReleaseDate?: Date;
}

export interface TrainingStatus {
  system: string;
  trainingRequired: boolean;
  trainingCompleted: boolean;
  trainingDate?: Date;
  attendees: string[];
  materials: string[];
}

export interface TradeItemCount {
  trade: string;
  count: number;
}

export interface PriorityItemCount {
  priority: string;
  count: number;
}

export interface InspectionTypeCount {
  inspectionType: string;
  count: number;
}

export interface FinalProjectReport {
  reportId: string;
  projectId: string;
  projectName: string;
  reportDate: Date;
  projectStartDate: Date;
  projectEndDate: Date;
  
  // Project Summary
  projectSummary: ProjectSummary;
  
  // Performance Metrics
  performanceMetrics: ProjectPerformanceMetrics;
  
  // Financial Summary
  financialSummary: ProjectFinancialSummary;
  
  // Lessons Learned
  lessonsLearned: LessonsLearned;
  
  // Handover Documentation
  handoverPackage: HandoverPackage;
  
  // Team Recognition
  teamRecognition: TeamRecognition[];
  
  // Future Recommendations
  recommendations: ProjectRecommendation[];
  
  generatedBy: string;
  approvedBy?: string;
  approvalDate?: Date;
}

export interface ProjectSummary {
  description: string;
  scope: string;
  location: string;
  contractValue: number;
  finalValue: number;
  duration: number; // days
  actualDuration: number; // days
  keyStakeholders: Stakeholder[];
  majorMilestones: CompletedMilestone[];
  projectType: string;
  deliveryMethod: string;
}

export interface ProjectPerformanceMetrics {
  schedulePerformance: SchedulePerformance;
  costPerformance: CostPerformance;
  qualityPerformance: QualityPerformance;
  safetyPerformance: SafetyPerformance;
  overallRating: number; // 1-10
}

export interface SchedulePerformance {
  plannedDuration: number;
  actualDuration: number;
  varianceDays: number;
  variancePercentage: number;
  milestonesOnTime: number;
  totalMilestones: number;
  criticalPathVariance: number;
}

export interface CostPerformance {
  originalBudget: number;
  finalBudget: number;
  actualCost: number;
  costVariance: number;
  costVariancePercentage: number;
  changeOrderValue: number;
  changeOrderCount: number;
  costPerformanceIndex: number;
}

export interface QualityPerformance {
  defectRate: number;
  reworkPercentage: number;
  inspectionPassRate: number;
  clientSatisfactionScore: number;
  qualityIncidents: number;
  correctiveActions: number;
}

export interface SafetyPerformance {
  totalWorkHours: number;
  lostTimeIncidents: number;
  recordableIncidents: number;
  nearMisses: number;
  safetyTrainingHours: number;
  incidentRate: number;
  safetyScore: number;
}

export interface ProjectFinancialSummary {
  contractValue: number;
  finalValue: number;
  totalCosts: CostBreakdown;
  profitMargin: number;
  profitMarginPercentage: number;
  cashFlow: CashFlowSummary;
  finalPayments: PaymentSummary;
}

export interface CostBreakdown {
  labor: number;
  materials: number;
  equipment: number;
  subcontractors: number;
  overhead: number;
  other: number;
  total: number;
}

export interface CashFlowSummary {
  totalInvoiced: number;
  totalReceived: number;
  outstandingAmount: number;
  retainageHeld: number;
  retainageReleased: number;
}

export interface PaymentSummary {
  finalInvoiceAmount: number;
  finalPaymentDate: Date;
  retainageAmount: number;
  retainageReleaseDate?: Date;
  closeoutComplete: boolean;
}

export interface LessonsLearned {
  successes: LessonItem[];
  challenges: LessonItem[];
  improvements: LessonItem[];
  bestPractices: LessonItem[];
  riskMitigation: LessonItem[];
  processImprovements: LessonItem[];
}

export interface LessonItem {
  category: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  applicability: string;
  recommendations: string;
  contributedBy: string;
  dateIdentified: Date;
}

export interface HandoverPackage {
  documentation: HandoverDocumentation;
  training: HandoverTraining;
  warranties: HandoverWarranties;
  maintenance: HandoverMaintenance;
  operations: HandoverOperations;
  completionStatus: number; // percentage
}

export interface HandoverDocumentation {
  asBuiltDrawings: DocumentPackage;
  specifications: DocumentPackage;
  operationManuals: DocumentPackage;
  maintenanceManuals: DocumentPackage;
  warrantyDocuments: DocumentPackage;
  testReports: DocumentPackage;
  certifications: DocumentPackage;
  permits: DocumentPackage;
}

export interface DocumentPackage {
  required: number;
  delivered: number;
  approved: number;
  status: 'Complete' | 'Partial' | 'Pending';
  deliveryDate?: Date;
  location: string;
}

export interface HandoverTraining {
  systemsTraining: TrainingModule[];
  maintenanceTraining: TrainingModule[];
  operationsTraining: TrainingModule[];
  safetyTraining: TrainingModule[];
  overallCompletionRate: number;
}

export interface TrainingModule {
  module: string;
  required: boolean;
  completed: boolean;
  completionDate?: Date;
  attendees: string[];
  trainer: string;
  materials: string[];
  feedback: string;
}

export interface HandoverWarranties {
  equipmentWarranties: WarrantyItem[];
  systemWarranties: WarrantyItem[];
  materialWarranties: WarrantyItem[];
  workmanshipWarranty: WarrantyItem;
  totalWarrantyValue: number;
}

export interface WarrantyItem {
  item: string;
  type: string;
  duration: string;
  startDate: Date;
  endDate: Date;
  provider: string;
  value: number;
  terms: string;
}

export interface HandoverMaintenance {
  maintenanceSchedules: MaintenanceSchedule[];
  serviceContracts: ServiceContract[];
  sparePartsInventory: SparePartsInventory[];
  maintenanceManuals: string[];
}

export interface MaintenanceSchedule {
  system: string;
  frequency: string;
  tasks: string[];
  responsibility: string;
  startDate: Date;
  estimatedCost: number;
}

export interface ServiceContract {
  service: string;
  provider: string;
  contractValue: number;
  duration: string;
  startDate: Date;
  endDate: Date;
  scope: string;
}

export interface SparePartsInventory {
  system: string;
  parts: SparePart[];
  totalValue: number;
  location: string;
}

export interface SparePart {
  partNumber: string;
  description: string;
  quantity: number;
  unitCost: number;
  supplier: string;
}

export interface HandoverOperations {
  operationalProcedures: OperationalProcedure[];
  emergencyProcedures: EmergencyProcedure[];
  contactDirectory: ContactInfo[];
  systemAccess: SystemAccess[];
}

export interface OperationalProcedure {
  system: string;
  procedure: string;
  steps: string[];
  frequency: string;
  responsibility: string;
  documentation: string;
}

export interface EmergencyProcedure {
  scenario: string;
  procedure: string;
  contacts: string[];
  equipment: string[];
  documentation: string;
}

export interface SystemAccess {
  system: string;
  accessLevel: string;
  credentials: string;
  users: string[];
  restrictions: string;
}

export interface TeamRecognition {
  category: 'Individual' | 'Team' | 'Subcontractor' | 'Vendor';
  name: string;
  role: string;
  contribution: string;
  impact: string;
  recognition: string;
}

export interface ProjectRecommendation {
  category: string;
  recommendation: string;
  rationale: string;
  implementation: string;
  expectedBenefit: string;
  priority: 'High' | 'Medium' | 'Low';
  applicability: string;
}

export interface ProjectCloseoutReport {
  reportId: string;
  projectId: string;
  projectName: string;
  reportDate: Date;
  projectCompletionDate: Date;
  
  // Closeout Status
  closeoutStatus: CloseoutStatus;
  
  // Final Documentation
  finalDocumentation: FinalDocumentation;
  
  // As-Built Drawings
  asBuiltDrawings: AsBuiltDrawings;
  
  // Operation & Maintenance Manuals
  operationManuals: OperationManuals;
  maintenanceManuals: MaintenanceManuals;
  
  // Warranties & Certifications
  warranties: CloseoutWarranty[];
  certifications: CloseoutCertification[];
  
  // Final Inspections & Testing
  finalInspections: CloseoutInspection[];
  testingReports: TestingReport[];
  
  // Permits & Approvals
  permits: PermitCloseout[];
  
  // Training & Handover
  training: CloseoutTraining;
  handover: CloseoutHandover;
  
  // Outstanding Items
  outstandingItems: OutstandingItem[];
  
  generatedBy: string;
  approvedBy?: string;
  approvalDate?: Date;
}

export interface CloseoutStatus {
  overallCompletionPercentage: number;
  documentationComplete: boolean;
  inspectionsComplete: boolean;
  trainingComplete: boolean;
  handoverComplete: boolean;
  outstandingItemsCount: number;
  criticalItemsCount: number;
  estimatedCloseoutDate: Date;
  actualCloseoutDate?: Date;
}

export interface FinalDocumentation {
  totalDocuments: number;
  submittedDocuments: number;
  approvedDocuments: number;
  pendingDocuments: number;
  rejectedDocuments: number;
  completionPercentage: number;
  documentCategories: DocumentCategory[];
  submissionDeadline: Date;
  finalSubmissionDate?: Date;
}

export interface DocumentCategory {
  category: string;
  required: number;
  submitted: number;
  approved: number;
  status: 'Complete' | 'Partial' | 'Missing';
  documents: CloseoutDocument[];
}

export interface CloseoutDocument {
  documentId: string;
  title: string;
  type: string;
  version: string;
  submissionDate?: Date;
  approvalDate?: Date;
  status: 'Required' | 'Submitted' | 'Under-Review' | 'Approved' | 'Rejected';
  reviewer: string;
  location: string;
  format: 'Digital' | 'Physical' | 'Both';
  comments?: string;
}

export interface AsBuiltDrawings {
  totalDrawings: number;
  submittedDrawings: number;
  approvedDrawings: number;
  completionPercentage: number;
  drawingSets: DrawingSet[];
  revisionControl: RevisionControl;
  digitalFormat: string;
  physicalCopies: number;
  deliveryDate?: Date;
}

export interface DrawingSet {
  setName: string;
  discipline: string;
  totalSheets: number;
  submittedSheets: number;
  approvedSheets: number;
  status: 'Complete' | 'Partial' | 'Missing';
  lastRevisionDate: Date;
  drawings: AsBuiltDrawing[];
}

export interface AsBuiltDrawing {
  drawingNumber: string;
  title: string;
  discipline: string;
  revisionNumber: string;
  revisionDate: Date;
  status: 'Submitted' | 'Under-Review' | 'Approved' | 'Rejected';
  changes: string;
  reviewer: string;
  location: string;
}

export interface RevisionControl {
  revisionProcess: string;
  approvalWorkflow: string;
  versionControl: string;
  changeTracking: boolean;
  finalRevisionDate: Date;
}

export interface OperationManuals {
  totalManuals: number;
  submittedManuals: number;
  approvedManuals: number;
  completionPercentage: number;
  manualTypes: ManualType[];
  deliveryFormat: string;
  language: string;
  deliveryDate?: Date;
}

export interface MaintenanceManuals {
  totalManuals: number;
  submittedManuals: number;
  approvedManuals: number;
  completionPercentage: number;
  manualTypes: ManualType[];
  deliveryFormat: string;
  language: string;
  deliveryDate?: Date;
}

export interface ManualType {
  type: string;
  system: string;
  required: number;
  submitted: number;
  approved: number;
  status: 'Complete' | 'Partial' | 'Missing';
  manuals: Manual[];
}

export interface Manual {
  manualId: string;
  title: string;
  system: string;
  version: string;
  submissionDate?: Date;
  approvalDate?: Date;
  status: 'Required' | 'Submitted' | 'Under-Review' | 'Approved' | 'Rejected';
  pageCount: number;
  format: 'Digital' | 'Physical' | 'Both';
  location: string;
  contents: string[];
}

export interface CloseoutWarranty {
  warrantyId: string;
  item: string;
  type: string;
  duration: string;
  startDate: Date;
  endDate: Date;
  provider: string;
  documentSubmitted: boolean;
  documentApproved: boolean;
  status: 'Complete' | 'Pending' | 'Missing';
}

export interface CloseoutCertification {
  certificationId: string;
  type: string;
  issuingAuthority: string;
  certificationNumber?: string;
  issueDate?: Date;
  expirationDate?: Date;
  status: 'Issued' | 'Pending' | 'Required';
  documentLocation: string;
}

export interface CloseoutInspection {
  inspectionId: string;
  type: string;
  inspector: string;
  inspectionDate?: Date;
  status: 'Scheduled' | 'Completed' | 'Passed' | 'Failed' | 'Conditional';
  reportSubmitted: boolean;
  certificateIssued: boolean;
  deficiencies: string[];
  reinspectionRequired: boolean;
}

export interface TestingReport {
  reportId: string;
  testType: string;
  system: string;
  testDate?: Date;
  status: 'Required' | 'Scheduled' | 'Completed' | 'Passed' | 'Failed';
  reportSubmitted: boolean;
  reportApproved: boolean;
  testingAgency: string;
  results: string;
  certificateIssued: boolean;
}

export interface PermitCloseout {
  permitId: string;
  permitType: string;
  issuingAuthority: string;
  issueDate: Date;
  status: 'Active' | 'Closed' | 'Expired';
  closeoutRequired: boolean;
  closeoutSubmitted: boolean;
  closeoutApproved: boolean;
  finalInspectionDate?: Date;
}

export interface CloseoutTraining {
  totalSessions: number;
  completedSessions: number;
  completionPercentage: number;
  trainingSessions: TrainingSession[];
  trainingMaterials: TrainingMaterial[];
  certificationRequired: boolean;
  certificationsIssued: number;
}

export interface TrainingSession {
  sessionId: string;
  topic: string;
  system: string;
  scheduledDate: Date;
  actualDate?: Date;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  attendees: string[];
  trainer: string;
  duration: number;
  materialsProvided: boolean;
  feedback: string;
}

export interface TrainingMaterial {
  materialId: string;
  title: string;
  type: string;
  system: string;
  status: 'Required' | 'Submitted' | 'Approved';
  format: 'Digital' | 'Physical' | 'Both';
  location: string;
}

export interface CloseoutHandover {
  handoverDate?: Date;
  keyTransfer: boolean;
  systemAccess: boolean;
  documentTransfer: boolean;
  trainingComplete: boolean;
  ownerAcceptance: boolean;
  finalWalkthrough: boolean;
  punchListComplete: boolean;
  finalPaymentReleased: boolean;
  projectClosed: boolean;
}

export interface OutstandingItem {
  itemId: string;
  description: string;
  category: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  assignedTo: string;
  dueDate: Date;
  status: 'Open' | 'In-Progress' | 'Completed';
  impact: string;
  resolution?: string;
  completionDate?: Date;
}

export interface Stakeholder {
  name: string;
  organization: string;
  role: string;
  contact: string;
}

export interface CompletedMilestone {
  milestone: string;
  plannedDate: Date;
  actualDate: Date;
  variance: number;
  status: 'Completed' | 'Delayed' | 'Cancelled';
}

export interface ContactInfo {
  name: string;
  role: string;
  organization: string;
  phone: string;
  email: string;
  availability: string;
}

export interface WarrantyReport {
  reportId: string;
  projectId: string;
  projectName: string;
  reportDate: Date;
  projectCompletionDate: Date;
  
  // Warranty Summary
  warrantySummary: WarrantySummary;
  
  // Warranty Items
  warrantyItems: WarrantyReportItem[];
  
  // Defect Liability
  defectLiability: DefectLiabilityPeriod;
  
  // Claims and Issues
  warrantyClaims: WarrantyClaim[];
  
  // Maintenance Requirements
  maintenanceRequirements: MaintenanceRequirement[];
  
  // Expiring Warranties
  expiringWarranties: ExpiringWarranty[];
  
  generatedBy: string;
  approvedBy?: string;
  approvalDate?: Date;
}

export interface WarrantySummary {
  totalWarrantyItems: number;
  totalWarrantyValue: number;
  activeWarranties: number;
  expiredWarranties: number;
  expiringWithin30Days: number;
  expiringWithin90Days: number;
  totalClaims: number;
  openClaims: number;
  resolvedClaims: number;
  claimsValue: number;
}

export interface WarrantyReportItem {
  warrantyId: string;
  item: string;
  category: string;
  description: string;
  warrantyType: 'Manufacturer' | 'Contractor' | 'Extended' | 'Service';
  warrantyProvider: string;
  contactInfo: WarrantyContact;
  startDate: Date;
  endDate: Date;
  duration: string;
  remainingDays: number;
  status: 'Active' | 'Expired' | 'Expiring' | 'Claimed';
  warrantyValue: number;
  location: string;
  installationDate: Date;
  serialNumber?: string;
  modelNumber?: string;
  terms: string;
  exclusions: string[];
  maintenanceRequired: boolean;
  transferable: boolean;
  claimsHistory: WarrantyClaimHistory[];
}

export interface WarrantyContact {
  company: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  website?: string;
  serviceHours: string;
}

export interface DefectLiabilityPeriod {
  startDate: Date;
  endDate: Date;
  duration: string;
  remainingDays: number;
  status: 'Active' | 'Expired';
  coverageScope: string;
  exclusions: string[];
  contractor: string;
  contactInfo: WarrantyContact;
  defectReports: DefectReport[];
  remedialWork: RemedialWork[];
}

export interface DefectReport {
  reportId: string;
  reportDate: Date;
  defectDescription: string;
  location: string;
  severity: 'Critical' | 'Major' | 'Minor';
  reportedBy: string;
  status: 'Open' | 'Under-Investigation' | 'Accepted' | 'Rejected' | 'Resolved';
  responseDate?: Date;
  resolutionDate?: Date;
  resolutionDescription?: string;
  cost?: number;
  photos: string[];
}

export interface RemedialWork {
  workId: string;
  description: string;
  startDate: Date;
  completionDate?: Date;
  contractor: string;
  cost: number;
  status: 'Planned' | 'In-Progress' | 'Completed' | 'On-Hold';
  relatedDefects: string[];
}

export interface WarrantyClaim {
  claimId: string;
  warrantyId: string;
  claimDate: Date;
  claimDescription: string;
  claimType: 'Defect' | 'Failure' | 'Performance' | 'Other';
  claimValue: number;
  claimedBy: string;
  status: 'Submitted' | 'Under-Review' | 'Approved' | 'Rejected' | 'Resolved';
  responseDate?: Date;
  resolutionDate?: Date;
  resolutionDescription?: string;
  replacementProvided: boolean;
  repairCompleted: boolean;
  refundAmount?: number;
  documentation: string[];
}

export interface WarrantyClaimHistory {
  claimDate: Date;
  claimType: string;
  status: string;
  resolution: string;
  cost: number;
}

export interface MaintenanceRequirement {
  warrantyId: string;
  item: string;
  maintenanceType: 'Preventive' | 'Scheduled' | 'Condition-Based';
  frequency: string;
  lastPerformed?: Date;
  nextDue: Date;
  overdue: boolean;
  overdueBy?: number;
  description: string;
  requiredBy: string;
  cost: number;
  warrantyVoidIfSkipped: boolean;
}

export interface ExpiringWarranty {
  warrantyId: string;
  item: string;
  warrantyProvider: string;
  expirationDate: Date;
  daysUntilExpiration: number;
  warrantyValue: number;
  renewalAvailable: boolean;
  renewalCost?: number;
  renewalDeadline?: Date;
  actionRequired: string;
  priority: 'High' | 'Medium' | 'Low';
}