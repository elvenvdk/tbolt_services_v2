export interface BudgetVarianceReport {
  id: string;
  jobId: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  projectInfo: {
    name: string;
    phase: string;
    completionPercentage: number;
  };
  budgetSummary: BudgetSummary;
  categoryVariances: CategoryVariance[];
  significantVariances: SignificantVariance[];
  forecastToCompletion: ForecastToCompletion;
  cashFlowAnalysis: CashFlowAnalysis;
  recommendations: string[];
  preparedBy: string;
  reviewedBy?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BudgetSummary {
  originalBudget: number;
  approvedChanges: number;
  revisedBudget: number;
  actualCosts: number;
  commitments: number;
  totalCostToDate: number;
  variance: number;
  variancePercentage: number;
}

export interface CategoryVariance {
  category: BudgetCategory;
  subcategory?: string;
  plannedCost: number;
  actualCost: number;
  variance: number;
  variancePercentage: number;
  explanation: string;
  impactLevel: VarianceImpactLevel;
  correctiveAction?: string;
  responsibleParty?: string;
  targetResolutionDate?: Date;
}

export interface SignificantVariance {
  description: string;
  category: BudgetCategory;
  amount: number;
  percentage: number;
  rootCause: string;
  explanation: string;
  impactOnProject: string;
  mitigationPlan: string;
  preventionMeasures: string[];
  status: VarianceStatus;
}

export interface ForecastToCompletion {
  estimatedTotalCost: number;
  projectedVariance: number;
  projectedVariancePercentage: number;
  confidenceLevel: ConfidenceLevel;
  assumptions: string[];
  risks: ForecastRisk[];
}

export interface CashFlowAnalysis {
  currentPeriodInflow: number;
  currentPeriodOutflow: number;
  netCashFlow: number;
  cumulativeCashFlow: number;
  projectedCashFlow: MonthlyProjection[];
  paymentSchedule: PaymentScheduleItem[];
}

export interface MonthlyProjection {
  month: string;
  projectedInflow: number;
  projectedOutflow: number;
  netProjection: number;
}

export interface PaymentScheduleItem {
  description: string;
  dueDate: Date;
  amount: number;
  status: PaymentStatus;
  vendor?: string;
}

export interface ForecastRisk {
  description: string;
  probability: RiskProbability;
  impact: number;
  mitigation: string;
}

export enum BudgetCategory {
  LABOR = 'LABOR',
  MATERIALS = 'MATERIALS',
  EQUIPMENT = 'EQUIPMENT',
  SUBCONTRACTORS = 'SUBCONTRACTORS',
  PERMITS = 'PERMITS',
  OVERHEAD = 'OVERHEAD',
  CONTINGENCY = 'CONTINGENCY',
  OTHER = 'OTHER'
}

export enum VarianceImpactLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum VarianceStatus {
  IDENTIFIED = 'IDENTIFIED',
  INVESTIGATING = 'INVESTIGATING',
  ACTION_PLANNED = 'ACTION_PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
  ACCEPTED = 'ACCEPTED'
}

export enum ConfidenceLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum RiskProbability {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  SCHEDULED = 'SCHEDULED',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE'
}

export interface ChangeOrderReport {
  id: string;
  jobId: string;
  changeOrderNumber: string;
  reportDate: Date;
  projectInfo: {
    name: string;
    phase: string;
    originalContractValue: number;
  };
  changeOrderDetails: ChangeOrderDetails;
  scopeChanges: ScopeChange[];
  costImpacts: CostImpact;
  scheduleImpacts: ScheduleImpact;
  approvalWorkflow: ApprovalWorkflow;
  documentation: ChangeOrderDocumentation;
  riskAssessment: ChangeOrderRisk[];
  recommendations: string[];
  preparedBy: string;
  reviewedBy?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChangeOrderDetails {
  title: string;
  description: string;
  requestedBy: string;
  requestDate: Date;
  reason: ChangeOrderReason;
  priority: ChangeOrderPriority;
  category: ChangeOrderCategory;
  status: ChangeOrderStatus;
  urgency: ChangeOrderUrgency;
}

export interface ScopeChange {
  id: string;
  description: string;
  type: ScopeChangeType;
  originalScope: string;
  revisedScope: string;
  justification: string;
  impactedTrades: string[];
  impactedSystems: string[];
  drawings: DrawingReference[];
  specifications: SpecificationReference[];
}

export interface CostImpact {
  laborCosts: CostBreakdown;
  materialCosts: CostBreakdown;
  equipmentCosts: CostBreakdown;
  subcontractorCosts: CostBreakdown;
  overheadCosts: CostBreakdown;
  totalDirectCosts: number;
  markup: number;
  totalChangeOrderValue: number;
  cumulativeChangeOrders: number;
  percentageOfOriginalContract: number;
}

export interface CostBreakdown {
  description: string;
  quantity: number;
  unit: string;
  unitCost: number;
  totalCost: number;
  notes?: string;
}

export interface ScheduleImpact {
  originalCompletionDate: Date;
  revisedCompletionDate: Date;
  timeExtension: number;
  criticalPathImpact: boolean;
  impactedMilestones: MilestoneImpact[];
  mitigationMeasures: string[];
  accelerationOptions: AccelerationOption[];
}

export interface MilestoneImpact {
  milestone: string;
  originalDate: Date;
  revisedDate: Date;
  impact: number;
  criticality: MilestoneCriticality;
}

export interface AccelerationOption {
  description: string;
  timeReduction: number;
  additionalCost: number;
  feasibility: AccelerationFeasibility;
  risks: string[];
}

export interface ApprovalWorkflow {
  currentStep: ApprovalStep;
  approvalHistory: ApprovalHistoryItem[];
  requiredApprovals: RequiredApproval[];
  pendingApprovals: PendingApproval[];
  finalApprovalDate?: Date;
  rejectionReason?: string;
}

export interface ApprovalHistoryItem {
  step: ApprovalStep;
  approver: string;
  action: ApprovalAction;
  date: Date;
  comments?: string;
  conditions?: string[];
}

export interface RequiredApproval {
  role: string;
  threshold: number;
  required: boolean;
  completed: boolean;
}

export interface PendingApproval {
  approver: string;
  role: string;
  dueDate: Date;
  escalationDate: Date;
  notificationsSent: number;
}

export interface ChangeOrderDocumentation {
  originalRequest: DocumentReference;
  costEstimate: DocumentReference;
  drawings: DrawingReference[];
  specifications: SpecificationReference[];
  correspondence: CorrespondenceItem[];
  photos: PhotoReference[];
  supportingDocuments: DocumentReference[];
}

export interface DocumentReference {
  id: string;
  name: string;
  type: string;
  version: string;
  date: Date;
  author: string;
}

export interface DrawingReference {
  number: string;
  title: string;
  revision: string;
  date: Date;
  impactedAreas: string[];
}

export interface SpecificationReference {
  section: string;
  title: string;
  revision: string;
  changes: string[];
}

export interface CorrespondenceItem {
  date: Date;
  from: string;
  to: string;
  subject: string;
  summary: string;
  type: CorrespondenceType;
}

export interface PhotoReference {
  id: string;
  description: string;
  location: string;
  date: Date;
  photographer: string;
}

export interface ChangeOrderRisk {
  description: string;
  category: RiskCategory;
  probability: RiskProbability;
  impact: RiskImpact;
  mitigation: string;
  owner: string;
  status: RiskStatus;
}

export enum ChangeOrderReason {
  DESIGN_CHANGE = 'DESIGN_CHANGE',
  SITE_CONDITIONS = 'SITE_CONDITIONS',
  CODE_REQUIREMENT = 'CODE_REQUIREMENT',
  CLIENT_REQUEST = 'CLIENT_REQUEST',
  VALUE_ENGINEERING = 'VALUE_ENGINEERING',
  UNFORESEEN_CONDITIONS = 'UNFORESEEN_CONDITIONS',
  MATERIAL_SUBSTITUTION = 'MATERIAL_SUBSTITUTION',
  SCHEDULE_ACCELERATION = 'SCHEDULE_ACCELERATION',
  OTHER = 'OTHER'
}

export enum ChangeOrderPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum ChangeOrderCategory {
  ADDITION = 'ADDITION',
  DELETION = 'DELETION',
  MODIFICATION = 'MODIFICATION',
  SUBSTITUTION = 'SUBSTITUTION'
}

export enum ChangeOrderStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  IMPLEMENTED = 'IMPLEMENTED',
  CLOSED = 'CLOSED'
}

export enum ChangeOrderUrgency {
  ROUTINE = 'ROUTINE',
  URGENT = 'URGENT',
  EMERGENCY = 'EMERGENCY'
}

export enum ScopeChangeType {
  ADDITION = 'ADDITION',
  DELETION = 'DELETION',
  MODIFICATION = 'MODIFICATION',
  CLARIFICATION = 'CLARIFICATION'
}

export enum MilestoneCriticality {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum AccelerationFeasibility {
  FEASIBLE = 'FEASIBLE',
  CHALLENGING = 'CHALLENGING',
  NOT_FEASIBLE = 'NOT_FEASIBLE'
}

export enum ApprovalStep {
  PROJECT_MANAGER = 'PROJECT_MANAGER',
  DESIGN_TEAM = 'DESIGN_TEAM',
  CLIENT = 'CLIENT',
  FINANCIAL_CONTROLLER = 'FINANCIAL_CONTROLLER',
  EXECUTIVE = 'EXECUTIVE',
  LEGAL = 'LEGAL'
}

export enum ApprovalAction {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  APPROVED_WITH_CONDITIONS = 'APPROVED_WITH_CONDITIONS',
  RETURNED_FOR_REVISION = 'RETURNED_FOR_REVISION'
}

export enum CorrespondenceType {
  EMAIL = 'EMAIL',
  LETTER = 'LETTER',
  MEETING_MINUTES = 'MEETING_MINUTES',
  PHONE_CALL = 'PHONE_CALL',
  SITE_VISIT = 'SITE_VISIT'
}

export enum RiskCategory {
  FINANCIAL = 'FINANCIAL',
  SCHEDULE = 'SCHEDULE',
  QUALITY = 'QUALITY',
  SAFETY = 'SAFETY',
  REGULATORY = 'REGULATORY',
  TECHNICAL = 'TECHNICAL'
}

export enum RiskImpact {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum RiskStatus {
  IDENTIFIED = 'IDENTIFIED',
  MITIGATED = 'MITIGATED',
  ACCEPTED = 'ACCEPTED',
  CLOSED = 'CLOSED'
}

export interface PaymentApplicationReport {
  id: string;
  jobId: string;
  applicationNumber: number;
  reportDate: Date;
  billingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  projectInfo: {
    name: string;
    contractNumber: string;
    originalContractAmount: number;
    revisedContractAmount: number;
  };
  workCompleted: WorkCompletedSummary;
  scheduleOfValues: ScheduleOfValuesItem[];
  changeOrders: ChangeOrderSummary[];
  materialStoredOnSite: StoredMaterial[];
  retainage: RetainageCalculation;
  paymentSummary: PaymentSummary;
  previousApplications: PreviousApplication[];
  supportingDocumentation: PaymentDocumentation;
  certifications: PaymentCertification[];
  preparedBy: string;
  reviewedBy?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkCompletedSummary {
  totalPercentComplete: number;
  workCompletedThisPeriod: number;
  workCompletedToDate: number;
  workRemaining: number;
  majorAccomplishments: string[];
  workInProgress: WorkInProgressItem[];
}

export interface WorkInProgressItem {
  description: string;
  percentComplete: number;
  scheduledValue: number;
  earnedValue: number;
  status: WorkStatus;
}

export interface ScheduleOfValuesItem {
  id: string;
  description: string;
  scheduledValue: number;
  workCompletedPreviousPeriods: number;
  workCompletedThisPeriod: number;
  totalWorkCompleted: number;
  percentComplete: number;
  balanceToFinish: number;
  retainageRate: number;
  retainageAmount: number;
  earnedLessRetainage: number;
}

export interface ChangeOrderSummary {
  changeOrderNumber: string;
  description: string;
  approvedAmount: number;
  workCompletedPreviousPeriods: number;
  workCompletedThisPeriod: number;
  totalWorkCompleted: number;
  percentComplete: number;
  balanceToFinish: number;
  status: ChangeOrderStatus;
}

export interface StoredMaterial {
  description: string;
  quantity: number;
  unit: string;
  unitCost: number;
  totalValue: number;
  deliveryDate: Date;
  storageLocation: string;
  invoiceNumber?: string;
  supplier: string;
}

export interface RetainageCalculation {
  retainageRate: number;
  currentPeriodRetainage: number;
  totalRetainageHeld: number;
  retainageReleased: number;
  netRetainageHeld: number;
  retainagePolicy: string;
  releaseConditions: string[];
}

export interface PaymentSummary {
  originalContractAmount: number;
  netChangeOrders: number;
  revisedContractAmount: number;
  totalCompletedAndStored: number;
  retainageHeld: number;
  totalEarned: number;
  lessAmountsPreviouslyPaid: number;
  currentPaymentDue: number;
  balanceToFinish: number;
}

export interface PreviousApplication {
  applicationNumber: number;
  date: Date;
  amountRequested: number;
  amountApproved: number;
  amountPaid: number;
  status: ApplicationStatus;
}

export interface PaymentDocumentation {
  payrollRecords: DocumentReference[];
  materialInvoices: DocumentReference[];
  subcontractorInvoices: DocumentReference[];
  lienWaivers: LienWaiver[];
  insuranceCertificates: DocumentReference[];
  progressPhotos: PhotoReference[];
  inspectionReports: DocumentReference[];
}

export interface LienWaiver {
  type: LienWaiverType;
  amount: number;
  throughDate: Date;
  vendor: string;
  status: LienWaiverStatus;
  documentReference: DocumentReference;
}

export interface PaymentCertification {
  certifierName: string;
  certifierTitle: string;
  certificationDate: Date;
  certificationText: string;
  signature?: string;
  licenseNumber?: string;
}

export enum WorkStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ON_HOLD = 'ON_HOLD'
}

export enum ApplicationStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PAID = 'PAID'
}

export enum LienWaiverType {
  CONDITIONAL_PROGRESS = 'CONDITIONAL_PROGRESS',
  UNCONDITIONAL_PROGRESS = 'UNCONDITIONAL_PROGRESS',
  CONDITIONAL_FINAL = 'CONDITIONAL_FINAL',
  UNCONDITIONAL_FINAL = 'UNCONDITIONAL_FINAL'
}

export enum LienWaiverStatus {
  PENDING = 'PENDING',
  RECEIVED = 'RECEIVED',
  EXECUTED = 'EXECUTED'
}

export interface CostForecastReport {
  id: string;
  jobId: string;
  reportDate: Date;
  forecastPeriod: {
    startDate: Date;
    endDate: Date;
  };
  projectInfo: {
    name: string;
    phase: string;
    completionPercentage: number;
    originalCompletionDate: Date;
    forecastCompletionDate: Date;
  };
  costSummary: CostForecastSummary;
  categoryForecasts: CategoryForecast[];
  riskAssessment: CostRisk[];
  scenarioAnalysis: ForecastScenario[];
  contingencyAnalysis: ContingencyAnalysis;
  trendAnalysis: CostTrend[];
  recommendations: ForecastRecommendation[];
  assumptions: string[];
  preparedBy: string;
  reviewedBy?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CostForecastSummary {
  originalBudget: number;
  approvedChangeOrders: number;
  pendingChangeOrders: number;
  revisedBudget: number;
  actualCostsToDate: number;
  commitments: number;
  estimatedCostToComplete: number;
  forecastAtCompletion: number;
  varianceAtCompletion: number;
  variancePercentage: number;
  confidenceLevel: ForecastConfidence;
}

export interface CategoryForecast {
  category: BudgetCategory;
  subcategory?: string;
  originalBudget: number;
  revisedBudget: number;
  actualToDate: number;
  commitments: number;
  estimatedToComplete: number;
  forecastAtCompletion: number;
  variance: number;
  variancePercentage: number;
  completionPercentage: number;
  riskLevel: ForecastRiskLevel;
  keyDrivers: string[];
  assumptions: string[];
}

export interface CostRisk {
  id: string;
  description: string;
  category: RiskCategory;
  probability: RiskProbability;
  impact: number;
  impactPercentage: number;
  timing: RiskTiming;
  mitigation: string;
  contingencyRequired: number;
  owner: string;
  status: RiskStatus;
  lastReviewed: Date;
}

export interface ForecastScenario {
  name: string;
  description: string;
  probability: number;
  forecastAtCompletion: number;
  varianceFromBaseline: number;
  keyAssumptions: string[];
  riskFactors: string[];
  mitigationStrategies: string[];
}

export interface ContingencyAnalysis {
  originalContingency: number;
  usedContingency: number;
  remainingContingency: number;
  recommendedContingency: number;
  contingencyGap: number;
  utilizationRate: number;
  burnRate: number;
  projectedDepletion: Date;
  recommendations: string[];
}

export interface CostTrend {
  period: string;
  actualCosts: number;
  budgetedCosts: number;
  variance: number;
  variancePercentage: number;
  cumulativeVariance: number;
  performanceIndex: number;
  trend: TrendDirection;
}

export interface ForecastRecommendation {
  priority: RecommendationPriority;
  category: string;
  description: string;
  impact: number;
  timeframe: string;
  owner: string;
  status: RecommendationStatus;
}

export enum ForecastConfidence {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  VERY_HIGH = 'VERY_HIGH'
}

export enum ForecastRiskLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum RiskTiming {
  IMMEDIATE = 'IMMEDIATE',
  SHORT_TERM = 'SHORT_TERM',
  MEDIUM_TERM = 'MEDIUM_TERM',
  LONG_TERM = 'LONG_TERM'
}

export enum TrendDirection {
  IMPROVING = 'IMPROVING',
  STABLE = 'STABLE',
  DETERIORATING = 'DETERIORATING'
}

export enum RecommendationPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum RecommendationStatus {
  PROPOSED = 'PROPOSED',
  APPROVED = 'APPROVED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED'
}