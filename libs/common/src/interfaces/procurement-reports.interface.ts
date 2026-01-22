export interface ProcurementReport {
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
  };
  procurementSummary: ProcurementSummary;
  purchaseOrders: PurchaseOrderSummary[];
  vendorPerformance: VendorPerformance[];
  savingsAnalysis: SavingsAnalysis;
  categoryAnalysis: CategoryAnalysis[];
  deliveryPerformance: DeliveryPerformance;
  qualityMetrics: QualityMetrics;
  riskAssessment: ProcurementRisk[];
  recommendations: string[];
  preparedBy: string;
  reviewedBy?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProcurementSummary {
  totalPurchaseOrders: number;
  totalProcurementValue: number;
  averageOrderValue: number;
  activeVendors: number;
  onTimeDeliveryRate: number;
  qualityAcceptanceRate: number;
  totalSavings: number;
  savingsPercentage: number;
  budgetUtilization: number;
}

export interface PurchaseOrderSummary {
  poNumber: string;
  vendor: string;
  description: string;
  category: ProcurementCategory;
  orderDate: Date;
  requestedDeliveryDate: Date;
  actualDeliveryDate?: Date;
  orderValue: number;
  receivedValue: number;
  status: PurchaseOrderStatus;
  deliveryStatus: DeliveryStatus;
  qualityStatus: QualityStatus;
  paymentStatus: PaymentStatus;
}

export interface VendorPerformance {
  vendorId: string;
  vendorName: string;
  category: ProcurementCategory;
  totalOrders: number;
  totalValue: number;
  averageOrderValue: number;
  onTimeDeliveryRate: number;
  qualityScore: number;
  responsiveness: number;
  costCompetitiveness: number;
  overallRating: number;
  performanceTrend: PerformanceTrend;
  issues: VendorIssue[];
  strengths: string[];
  improvementAreas: string[];
}

export interface VendorIssue {
  issueType: VendorIssueType;
  description: string;
  severity: IssueSeverity;
  dateReported: Date;
  status: IssueStatus;
  resolutionDate?: Date;
  impact: string;
}

export interface SavingsAnalysis {
  targetSavings: number;
  actualSavings: number;
  savingsVariance: number;
  savingsRate: number;
  savingsByCategory: CategorySavings[];
  savingsByVendor: VendorSavings[];
  savingsInitiatives: SavingsInitiative[];
  costAvoidance: number;
}

export interface CategorySavings {
  category: ProcurementCategory;
  budgetedAmount: number;
  actualAmount: number;
  savings: number;
  savingsPercentage: number;
  savingsSource: SavingsSource;
}

export interface VendorSavings {
  vendorName: string;
  category: ProcurementCategory;
  originalQuote: number;
  finalPrice: number;
  savings: number;
  savingsPercentage: number;
  negotiationDetails: string;
}

export interface SavingsInitiative {
  initiative: string;
  description: string;
  targetSavings: number;
  actualSavings: number;
  status: InitiativeStatus;
  implementationDate: Date;
  owner: string;
}

export interface CategoryAnalysis {
  category: ProcurementCategory;
  totalSpend: number;
  budgetAllocation: number;
  budgetUtilization: number;
  numberOfOrders: number;
  averageOrderValue: number;
  topVendors: string[];
  performanceMetrics: CategoryMetrics;
  trends: CategoryTrend[];
}

export interface CategoryMetrics {
  onTimeDelivery: number;
  qualityScore: number;
  costVariance: number;
  leadTime: number;
  defectRate: number;
}

export interface CategoryTrend {
  period: string;
  spend: number;
  orders: number;
  performance: number;
  trend: TrendDirection;
}

export interface DeliveryPerformance {
  totalDeliveries: number;
  onTimeDeliveries: number;
  lateDeliveries: number;
  earlyDeliveries: number;
  onTimeRate: number;
  averageLeadTime: number;
  averageDelay: number;
  criticalDelays: DeliveryDelay[];
}

export interface DeliveryDelay {
  poNumber: string;
  vendor: string;
  item: string;
  plannedDate: Date;
  actualDate: Date;
  delayDays: number;
  reason: string;
  impact: string;
  mitigation: string;
}

export interface QualityMetrics {
  totalInspections: number;
  passedInspections: number;
  failedInspections: number;
  acceptanceRate: number;
  defectRate: number;
  reworkRate: number;
  qualityIssues: QualityIssue[];
  qualityTrends: QualityTrend[];
}

export interface QualityIssue {
  poNumber: string;
  vendor: string;
  item: string;
  issueType: QualityIssueType;
  description: string;
  severity: IssueSeverity;
  dateIdentified: Date;
  resolution: string;
  cost: number;
}

export interface QualityTrend {
  period: string;
  acceptanceRate: number;
  defectRate: number;
  trend: TrendDirection;
}

export interface ProcurementRisk {
  riskType: ProcurementRiskType;
  description: string;
  probability: RiskProbability;
  impact: RiskImpact;
  category: ProcurementCategory;
  vendor?: string;
  mitigation: string;
  owner: string;
  status: RiskStatus;
}

export enum ProcurementCategory {
  MATERIALS = 'MATERIALS',
  EQUIPMENT = 'EQUIPMENT',
  SERVICES = 'SERVICES',
  SUBCONTRACTORS = 'SUBCONTRACTORS',
  TOOLS = 'TOOLS',
  SUPPLIES = 'SUPPLIES',
  UTILITIES = 'UTILITIES',
  OTHER = 'OTHER'
}

export enum PurchaseOrderStatus {
  DRAFT = 'DRAFT',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  APPROVED = 'APPROVED',
  SENT_TO_VENDOR = 'SENT_TO_VENDOR',
  ACKNOWLEDGED = 'ACKNOWLEDGED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum DeliveryStatus {
  PENDING = 'PENDING',
  SHIPPED = 'SHIPPED',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
  PARTIALLY_DELIVERED = 'PARTIALLY_DELIVERED',
  DELAYED = 'DELAYED',
  CANCELLED = 'CANCELLED'
}

export enum QualityStatus {
  PENDING_INSPECTION = 'PENDING_INSPECTION',
  PASSED = 'PASSED',
  FAILED = 'FAILED',
  CONDITIONAL_ACCEPTANCE = 'CONDITIONAL_ACCEPTANCE',
  REJECTED = 'REJECTED'
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PARTIAL = 'PARTIAL',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
  DISPUTED = 'DISPUTED'
}

export enum PerformanceTrend {
  IMPROVING = 'IMPROVING',
  STABLE = 'STABLE',
  DECLINING = 'DECLINING'
}

export enum VendorIssueType {
  DELIVERY_DELAY = 'DELIVERY_DELAY',
  QUALITY_ISSUE = 'QUALITY_ISSUE',
  PRICING_DISPUTE = 'PRICING_DISPUTE',
  COMMUNICATION = 'COMMUNICATION',
  COMPLIANCE = 'COMPLIANCE',
  SERVICE_LEVEL = 'SERVICE_LEVEL'
}

export enum IssueSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum IssueStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED'
}

export enum SavingsSource {
  NEGOTIATION = 'NEGOTIATION',
  COMPETITIVE_BIDDING = 'COMPETITIVE_BIDDING',
  VOLUME_DISCOUNT = 'VOLUME_DISCOUNT',
  ALTERNATIVE_SOURCING = 'ALTERNATIVE_SOURCING',
  SPECIFICATION_CHANGE = 'SPECIFICATION_CHANGE',
  PROCESS_IMPROVEMENT = 'PROCESS_IMPROVEMENT'
}

export enum InitiativeStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  IMPLEMENTED = 'IMPLEMENTED',
  ON_HOLD = 'ON_HOLD',
  CANCELLED = 'CANCELLED'
}

export enum TrendDirection {
  IMPROVING = 'IMPROVING',
  STABLE = 'STABLE',
  DETERIORATING = 'DETERIORATING'
}

export enum QualityIssueType {
  DEFECTIVE_MATERIAL = 'DEFECTIVE_MATERIAL',
  WRONG_SPECIFICATION = 'WRONG_SPECIFICATION',
  DAMAGED_DELIVERY = 'DAMAGED_DELIVERY',
  INCOMPLETE_DELIVERY = 'INCOMPLETE_DELIVERY',
  NON_COMPLIANCE = 'NON_COMPLIANCE'
}

export enum ProcurementRiskType {
  SUPPLIER_FAILURE = 'SUPPLIER_FAILURE',
  DELIVERY_RISK = 'DELIVERY_RISK',
  QUALITY_RISK = 'QUALITY_RISK',
  PRICE_VOLATILITY = 'PRICE_VOLATILITY',
  SUPPLY_SHORTAGE = 'SUPPLY_SHORTAGE',
  COMPLIANCE_RISK = 'COMPLIANCE_RISK'
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

export enum RiskStatus {
  IDENTIFIED = 'IDENTIFIED',
  MITIGATED = 'MITIGATED',
  ACCEPTED = 'ACCEPTED',
  CLOSED = 'CLOSED'
}