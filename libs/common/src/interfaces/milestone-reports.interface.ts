export interface PhaseCompletionReport {
  id: string;
  jobId: string;
  reportDate: Date;
  phaseInfo: PhaseInfo;
  projectInfo: {
    name: string;
    totalPhases: number;
    overallProgress: number;
  };
  phaseDeliverables: PhaseDeliverable[];
  handoverDocumentation: HandoverDocumentation;
  qualityAssurance: QualityAssurance;
  phaseMetrics: PhaseMetrics;
  stakeholderSignoffs: StakeholderSignoff[];
  lessonsLearned: LessonLearned[];
  nextPhaseReadiness: NextPhaseReadiness;
  recommendations: string[];
  preparedBy: string;
  reviewedBy?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PhaseInfo {
  phaseName: string;
  phaseNumber: number;
  startDate: Date;
  plannedEndDate: Date;
  actualEndDate: Date;
  duration: number;
  status: PhaseStatus;
  completionPercentage: number;
  description: string;
}

export interface PhaseDeliverable {
  id: string;
  name: string;
  description: string;
  category: DeliverableCategory;
  status: DeliverableStatus;
  plannedDate: Date;
  actualDate?: Date;
  responsibleParty: string;
  acceptanceCriteria: string[];
  deliverableItems: DeliverableItem[];
  qualityChecks: QualityCheck[];
  approvals: DeliverableApproval[];
}

export interface DeliverableItem {
  name: string;
  type: DeliverableType;
  location: string;
  version: string;
  size?: number;
  format?: string;
  description: string;
}

export interface QualityCheck {
  checkType: QualityCheckType;
  inspector: string;
  checkDate: Date;
  result: QualityResult;
  comments?: string;
  correctionRequired: boolean;
}

export interface DeliverableApproval {
  approver: string;
  role: string;
  approvalDate: Date;
  status: ApprovalStatus;
  comments?: string;
  conditions?: string[];
}

export interface HandoverDocumentation {
  handoverPackage: HandoverPackage;
  technicalDocuments: TechnicalDocument[];
  operationalDocuments: OperationalDocument[];
  complianceDocuments: ComplianceDocument[];
  warranties: WarrantyDocument[];
  trainingMaterials: TrainingMaterial[];
  maintenanceDocuments: MaintenanceDocument[];
}

export interface HandoverPackage {
  packageId: string;
  packageName: string;
  version: string;
  createdDate: Date;
  totalDocuments: number;
  packageSize: number;
  location: string;
  checksum: string;
}

export interface TechnicalDocument {
  name: string;
  type: TechnicalDocumentType;
  version: string;
  author: string;
  reviewedBy: string;
  approvedBy: string;
  date: Date;
  location: string;
  description: string;
}

export interface OperationalDocument {
  name: string;
  type: OperationalDocumentType;
  version: string;
  effectiveDate: Date;
  reviewDate: Date;
  owner: string;
  location: string;
  description: string;
}

export interface ComplianceDocument {
  name: string;
  type: ComplianceDocumentType;
  regulatoryBody: string;
  complianceDate: Date;
  expiryDate?: Date;
  certificateNumber?: string;
  location: string;
  status: ComplianceStatus;
}

export interface WarrantyDocument {
  item: string;
  vendor: string;
  warrantyType: WarrantyType;
  startDate: Date;
  endDate: Date;
  coverage: string;
  terms: string[];
  contactInfo: string;
  documentLocation: string;
}

export interface TrainingMaterial {
  title: string;
  type: TrainingType;
  targetAudience: string;
  duration: number;
  format: TrainingFormat;
  instructor?: string;
  completionCriteria: string;
  location: string;
}

export interface MaintenanceDocument {
  equipment: string;
  documentType: MaintenanceDocumentType;
  frequency: string;
  procedures: string[];
  safetyRequirements: string[];
  requiredTools: string[];
  location: string;
}

export interface QualityAssurance {
  overallQualityScore: number;
  qualityMetrics: QualityMetric[];
  defectsFound: number;
  defectsResolved: number;
  reworkRequired: number;
  inspectionResults: InspectionResult[];
  testResults: TestResult[];
}

export interface QualityMetric {
  metric: string;
  target: number;
  actual: number;
  variance: number;
  status: MetricStatus;
}

export interface InspectionResult {
  inspectionType: string;
  inspector: string;
  date: Date;
  result: InspectionResultType;
  findings: string[];
  recommendations: string[];
}

export interface TestResult {
  testName: string;
  testType: TestType;
  date: Date;
  result: TestResultType;
  parameters: TestParameter[];
  certification?: string;
}

export interface TestParameter {
  parameter: string;
  expected: string;
  actual: string;
  tolerance: string;
  status: ParameterStatus;
}

export interface PhaseMetrics {
  budgetPerformance: BudgetPerformance;
  schedulePerformance: SchedulePerformance;
  resourceUtilization: ResourceUtilization;
  riskMetrics: RiskMetrics;
  changeMetrics: ChangeMetrics;
}

export interface BudgetPerformance {
  budgetedCost: number;
  actualCost: number;
  variance: number;
  variancePercentage: number;
  costPerformanceIndex: number;
}

export interface SchedulePerformance {
  plannedDuration: number;
  actualDuration: number;
  variance: number;
  schedulePerformanceIndex: number;
  criticalPathDelay: number;
}

export interface ResourceUtilization {
  laborUtilization: number;
  equipmentUtilization: number;
  materialUtilization: number;
  overallEfficiency: number;
}

export interface RiskMetrics {
  risksIdentified: number;
  risksMitigated: number;
  risksRealized: number;
  riskImpact: number;
}

export interface ChangeMetrics {
  changeRequestsReceived: number;
  changeRequestsApproved: number;
  changeImpactCost: number;
  changeImpactSchedule: number;
}

export interface StakeholderSignoff {
  stakeholder: string;
  role: string;
  organization: string;
  signoffDate: Date;
  signoffType: SignoffType;
  conditions?: string[];
  comments?: string;
}

export interface LessonLearned {
  category: LessonCategory;
  description: string;
  impact: LessonImpact;
  recommendation: string;
  applicability: string[];
  reportedBy: string;
  date: Date;
}

export interface NextPhaseReadiness {
  readinessScore: number;
  readinessCriteria: ReadinessCriteria[];
  prerequisites: Prerequisite[];
  risks: NextPhaseRisk[];
  recommendations: string[];
}

export interface ReadinessCriteria {
  criteria: string;
  status: CriteriaStatus;
  evidence: string;
  verifiedBy: string;
  verificationDate: Date;
}

export interface Prerequisite {
  prerequisite: string;
  status: PrerequisiteStatus;
  dueDate: Date;
  owner: string;
  dependencies: string[];
}

export interface NextPhaseRisk {
  risk: string;
  probability: RiskProbability;
  impact: RiskImpact;
  mitigation: string;
  owner: string;
}

export enum PhaseStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ON_HOLD = 'ON_HOLD',
  CANCELLED = 'CANCELLED'
}

export enum DeliverableCategory {
  DESIGN = 'DESIGN',
  CONSTRUCTION = 'CONSTRUCTION',
  TESTING = 'TESTING',
  DOCUMENTATION = 'DOCUMENTATION',
  TRAINING = 'TRAINING',
  HANDOVER = 'HANDOVER'
}

export enum DeliverableStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export enum DeliverableType {
  DOCUMENT = 'DOCUMENT',
  DRAWING = 'DRAWING',
  SPECIFICATION = 'SPECIFICATION',
  REPORT = 'REPORT',
  CERTIFICATE = 'CERTIFICATE',
  MANUAL = 'MANUAL',
  SOFTWARE = 'SOFTWARE',
  PHYSICAL_ITEM = 'PHYSICAL_ITEM'
}

export enum QualityCheckType {
  VISUAL_INSPECTION = 'VISUAL_INSPECTION',
  DIMENSIONAL_CHECK = 'DIMENSIONAL_CHECK',
  FUNCTIONAL_TEST = 'FUNCTIONAL_TEST',
  DOCUMENT_REVIEW = 'DOCUMENT_REVIEW',
  COMPLIANCE_CHECK = 'COMPLIANCE_CHECK'
}

export enum QualityResult {
  PASS = 'PASS',
  FAIL = 'FAIL',
  CONDITIONAL_PASS = 'CONDITIONAL_PASS',
  PENDING = 'PENDING'
}

export enum ApprovalStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CONDITIONAL = 'CONDITIONAL'
}

export enum TechnicalDocumentType {
  AS_BUILT_DRAWINGS = 'AS_BUILT_DRAWINGS',
  SPECIFICATIONS = 'SPECIFICATIONS',
  CALCULATIONS = 'CALCULATIONS',
  TEST_REPORTS = 'TEST_REPORTS',
  COMMISSIONING_REPORTS = 'COMMISSIONING_REPORTS'
}

export enum OperationalDocumentType {
  OPERATING_PROCEDURES = 'OPERATING_PROCEDURES',
  MAINTENANCE_SCHEDULES = 'MAINTENANCE_SCHEDULES',
  EMERGENCY_PROCEDURES = 'EMERGENCY_PROCEDURES',
  USER_MANUALS = 'USER_MANUALS'
}

export enum ComplianceDocumentType {
  PERMITS = 'PERMITS',
  CERTIFICATES = 'CERTIFICATES',
  APPROVALS = 'APPROVALS',
  INSPECTIONS = 'INSPECTIONS'
}

export enum ComplianceStatus {
  COMPLIANT = 'COMPLIANT',
  NON_COMPLIANT = 'NON_COMPLIANT',
  PENDING = 'PENDING',
  EXPIRED = 'EXPIRED'
}

export enum WarrantyType {
  MANUFACTURER = 'MANUFACTURER',
  CONTRACTOR = 'CONTRACTOR',
  EXTENDED = 'EXTENDED',
  SERVICE = 'SERVICE'
}

export enum TrainingType {
  OPERATION = 'OPERATION',
  MAINTENANCE = 'MAINTENANCE',
  SAFETY = 'SAFETY',
  EMERGENCY = 'EMERGENCY'
}

export enum TrainingFormat {
  CLASSROOM = 'CLASSROOM',
  HANDS_ON = 'HANDS_ON',
  ONLINE = 'ONLINE',
  DOCUMENTATION = 'DOCUMENTATION'
}

export enum MaintenanceDocumentType {
  PREVENTIVE = 'PREVENTIVE',
  CORRECTIVE = 'CORRECTIVE',
  PREDICTIVE = 'PREDICTIVE',
  EMERGENCY = 'EMERGENCY'
}

export enum MetricStatus {
  MET = 'MET',
  NOT_MET = 'NOT_MET',
  EXCEEDED = 'EXCEEDED'
}

export enum InspectionResultType {
  PASSED = 'PASSED',
  FAILED = 'FAILED',
  CONDITIONAL = 'CONDITIONAL'
}

export enum TestType {
  FUNCTIONAL = 'FUNCTIONAL',
  PERFORMANCE = 'PERFORMANCE',
  SAFETY = 'SAFETY',
  ENVIRONMENTAL = 'ENVIRONMENTAL'
}

export enum TestResultType {
  PASS = 'PASS',
  FAIL = 'FAIL',
  INCONCLUSIVE = 'INCONCLUSIVE'
}

export enum ParameterStatus {
  WITHIN_TOLERANCE = 'WITHIN_TOLERANCE',
  OUT_OF_TOLERANCE = 'OUT_OF_TOLERANCE',
  MARGINAL = 'MARGINAL'
}

export enum SignoffType {
  TECHNICAL = 'TECHNICAL',
  COMMERCIAL = 'COMMERCIAL',
  REGULATORY = 'REGULATORY',
  OPERATIONAL = 'OPERATIONAL'
}

export enum LessonCategory {
  TECHNICAL = 'TECHNICAL',
  MANAGEMENT = 'MANAGEMENT',
  COMMUNICATION = 'COMMUNICATION',
  QUALITY = 'QUALITY',
  SAFETY = 'SAFETY',
  PROCUREMENT = 'PROCUREMENT'
}

export enum LessonImpact {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum CriteriaStatus {
  MET = 'MET',
  NOT_MET = 'NOT_MET',
  PARTIALLY_MET = 'PARTIALLY_MET'
}

export enum PrerequisiteStatus {
  COMPLETED = 'COMPLETED',
  IN_PROGRESS = 'IN_PROGRESS',
  NOT_STARTED = 'NOT_STARTED',
  BLOCKED = 'BLOCKED'
}

export enum RiskProbability {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum RiskImpact {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export interface MilestoneAchievementReport {
  id: string;
  jobId: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  projectInfo: {
    name: string;
    totalMilestones: number;
    overallProgress: number;
    projectStartDate: Date;
    projectEndDate: Date;
  };
  milestonesSummary: MilestonesSummary;
  keyMilestones: KeyMilestone[];
  scheduleImpact: MilestoneScheduleImpact;
  criticalPath: CriticalPathAnalysis;
  upcomingMilestones: UpcomingMilestone[];
  delayedMilestones: DelayedMilestone[];
  performanceMetrics: MilestonePerformanceMetrics;
  riskAssessment: MilestoneRisk[];
  recommendations: string[];
  preparedBy: string;
  reviewedBy?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MilestonesSummary {
  totalMilestones: number;
  completedMilestones: number;
  onTrackMilestones: number;
  atRiskMilestones: number;
  delayedMilestones: number;
  completionRate: number;
  averageDelay: number;
  schedulePerformanceIndex: number;
}

export interface KeyMilestone {
  id: string;
  name: string;
  description: string;
  category: MilestoneCategory;
  priority: MilestonePriority;
  status: MilestoneStatus;
  plannedDate: Date;
  forecastDate: Date;
  actualDate?: Date;
  variance: number;
  varianceReason?: string;
  dependencies: MilestoneDependency[];
  deliverables: string[];
  successCriteria: string[];
  owner: string;
  stakeholders: string[];
  budgetImpact: number;
  scheduleImpact: number;
}

export interface MilestoneDependency {
  dependentMilestone: string;
  dependencyType: DependencyType;
  lag: number;
  status: DependencyStatus;
}

export interface MilestoneScheduleImpact {
  overallScheduleVariance: number;
  criticalPathDelay: number;
  projectEndDateImpact: number;
  milestoneDelayAnalysis: DelayAnalysis[];
  recoveryOptions: RecoveryOption[];
  scheduleOptimization: ScheduleOptimization;
}

export interface DelayAnalysis {
  milestone: string;
  delayDays: number;
  delayReason: DelayReason;
  impactOnSuccessors: number;
  costImpact: number;
  mitigationActions: string[];
}

export interface RecoveryOption {
  option: string;
  description: string;
  timeRecovery: number;
  cost: number;
  feasibility: RecoveryFeasibility;
  risks: string[];
  prerequisites: string[];
}

export interface ScheduleOptimization {
  fastTrackingOpportunities: FastTrackingOpportunity[];
  crashingOptions: CrashingOption[];
  resourceReallocation: ResourceReallocation[];
  scopeAdjustments: ScopeAdjustment[];
}

export interface FastTrackingOpportunity {
  activity: string;
  timeReduction: number;
  riskLevel: RiskLevel;
  requirements: string[];
}

export interface CrashingOption {
  activity: string;
  timeReduction: number;
  additionalCost: number;
  resourceRequirements: string[];
  feasibility: CrashingFeasibility;
}

export interface ResourceReallocation {
  fromActivity: string;
  toActivity: string;
  resourceType: string;
  quantity: number;
  impact: string;
}

export interface ScopeAdjustment {
  item: string;
  adjustmentType: ScopeAdjustmentType;
  timeImpact: number;
  costImpact: number;
  qualityImpact: string;
}

export interface CriticalPathAnalysis {
  totalDuration: number;
  criticalActivities: CriticalActivity[];
  nearCriticalPaths: NearCriticalPath[];
  floatAnalysis: FloatAnalysis;
  bottlenecks: Bottleneck[];
}

export interface CriticalActivity {
  activity: string;
  duration: number;
  earlyStart: Date;
  earlyFinish: Date;
  lateStart: Date;
  lateFinish: Date;
  totalFloat: number;
  freeFloat: number;
}

export interface NearCriticalPath {
  pathName: string;
  totalFloat: number;
  activities: string[];
  riskLevel: RiskLevel;
}

export interface FloatAnalysis {
  averageFloat: number;
  activitiesWithZeroFloat: number;
  activitiesWithLowFloat: number;
  floatConsumption: number;
}

export interface Bottleneck {
  resource: string;
  utilizationRate: number;
  impactedActivities: string[];
  recommendedActions: string[];
}

export interface UpcomingMilestone {
  milestone: string;
  plannedDate: Date;
  forecastDate: Date;
  daysUntilDue: number;
  readinessScore: number;
  riskLevel: RiskLevel;
  preparationStatus: PreparationStatus;
  blockers: string[];
  actionItems: ActionItem[];
}

export interface ActionItem {
  action: string;
  owner: string;
  dueDate: Date;
  status: ActionStatus;
  priority: ActionPriority;
}

export interface DelayedMilestone {
  milestone: string;
  plannedDate: Date;
  currentForecast: Date;
  delayDays: number;
  delayReason: DelayReason;
  impactLevel: DelayImpactLevel;
  recoveryPlan: string;
  newTargetDate: Date;
  approvalRequired: boolean;
}

export interface MilestonePerformanceMetrics {
  schedulePerformanceIndex: number;
  milestoneCompletionRate: number;
  averageMilestoneDelay: number;
  onTimeDeliveryRate: number;
  milestoneVelocity: number;
  trendAnalysis: MilestoneTrend[];
  benchmarkComparison: MilestoneBenchmark;
}

export interface MilestoneTrend {
  period: string;
  milestonesPlanned: number;
  milestonesCompleted: number;
  averageDelay: number;
  trend: TrendDirection;
}

export interface MilestoneBenchmark {
  industryAverage: number;
  companyAverage: number;
  projectTarget: number;
  currentPerformance: number;
  variance: number;
}

export interface MilestoneRisk {
  milestone: string;
  riskDescription: string;
  probability: RiskProbability;
  impact: RiskImpact;
  scheduleImpact: number;
  costImpact: number;
  mitigation: string;
  contingency: string;
  owner: string;
  status: RiskStatus;
}

export enum MilestoneCategory {
  PROJECT_START = 'PROJECT_START',
  DESIGN_COMPLETION = 'DESIGN_COMPLETION',
  PERMITS_APPROVED = 'PERMITS_APPROVED',
  CONSTRUCTION_START = 'CONSTRUCTION_START',
  PHASE_COMPLETION = 'PHASE_COMPLETION',
  TESTING_COMPLETE = 'TESTING_COMPLETE',
  COMMISSIONING = 'COMMISSIONING',
  HANDOVER = 'HANDOVER',
  PROJECT_COMPLETION = 'PROJECT_COMPLETION',
  WARRANTY_START = 'WARRANTY_START'
}

export enum MilestonePriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum MilestoneStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  AT_RISK = 'AT_RISK',
  DELAYED = 'DELAYED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum DependencyType {
  FINISH_TO_START = 'FINISH_TO_START',
  START_TO_START = 'START_TO_START',
  FINISH_TO_FINISH = 'FINISH_TO_FINISH',
  START_TO_FINISH = 'START_TO_FINISH'
}

export enum DependencyStatus {
  ACTIVE = 'ACTIVE',
  SATISFIED = 'SATISFIED',
  VIOLATED = 'VIOLATED',
  PENDING = 'PENDING'
}

export enum DelayReason {
  WEATHER = 'WEATHER',
  MATERIAL_DELAY = 'MATERIAL_DELAY',
  RESOURCE_UNAVAILABLE = 'RESOURCE_UNAVAILABLE',
  DESIGN_CHANGES = 'DESIGN_CHANGES',
  PERMIT_DELAYS = 'PERMIT_DELAYS',
  QUALITY_ISSUES = 'QUALITY_ISSUES',
  SAFETY_INCIDENTS = 'SAFETY_INCIDENTS',
  CLIENT_CHANGES = 'CLIENT_CHANGES',
  VENDOR_DELAYS = 'VENDOR_DELAYS',
  TECHNICAL_ISSUES = 'TECHNICAL_ISSUES'
}

export enum RecoveryFeasibility {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  NOT_FEASIBLE = 'NOT_FEASIBLE'
}

export enum RiskLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum CrashingFeasibility {
  FEASIBLE = 'FEASIBLE',
  CHALLENGING = 'CHALLENGING',
  NOT_FEASIBLE = 'NOT_FEASIBLE'
}

export enum ScopeAdjustmentType {
  REDUCTION = 'REDUCTION',
  DEFERRAL = 'DEFERRAL',
  ELIMINATION = 'ELIMINATION',
  SUBSTITUTION = 'SUBSTITUTION'
}

export enum PreparationStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  READY = 'READY',
  BLOCKED = 'BLOCKED'
}

export enum ActionStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  OVERDUE = 'OVERDUE'
}

export enum ActionPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}

export enum DelayImpactLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum TrendDirection {
  IMPROVING = 'IMPROVING',
  STABLE = 'STABLE',
  DETERIORATING = 'DETERIORATING'
}

export enum RiskStatus {
  IDENTIFIED = 'IDENTIFIED',
  MITIGATED = 'MITIGATED',
  ACCEPTED = 'ACCEPTED',
  CLOSED = 'CLOSED'
}