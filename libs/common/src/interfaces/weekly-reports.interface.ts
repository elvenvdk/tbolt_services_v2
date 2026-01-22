// Weekly Report Interfaces for Construction Management

export interface WeeklyBudgetReport {
  weekOf: Date;
  totalBudget: number;
  actualSpent: number;
  variance: number;
  categories: BudgetCategory[];
}

export interface BudgetCategory {
  name: string;
  budgeted: number;
  actual: number;
  variance: number;
}

export interface WeeklyQualityReport {
  weekOf: Date;
  inspections: QualityInspections;
  defects: QualityDefects;
  rework: QualityRework;
  compliance: QualityCompliance;
}

export interface QualityInspections {
  totalConducted: number;
  passed: number;
  failed: number;
  passRate: number;
}

export interface QualityDefects {
  totalFound: number;
  resolved: number;
  pending: number;
  critical: number;
}

export interface QualityRework {
  totalHours: number;
  cost: number;
  items: number;
}

export interface QualityCompliance {
  score: number;
  violations: number;
  correctedViolations: number;
}

export interface WeeklyScheduleUpdate {
  weekOf: Date;
  milestoneProgress: MilestoneProgress[];
  criticalPathChanges: CriticalPathChange[];
}

export interface MilestoneProgress {
  milestoneId: string;
  name: string;
  plannedDate: Date;
  actualDate?: Date;
  percentComplete: number;
  status: 'on-track' | 'at-risk' | 'delayed' | 'completed';
}

export interface CriticalPathChange {
  taskId: string;
  taskName: string;
  changeType: 'added' | 'removed' | 'delayed' | 'accelerated';
  impactDays: number;
  newCriticalPath: boolean;
}

export interface WeeklyMaterialForecast {
  weekOf: Date;
  upcomingDeliveries: UpcomingDelivery[];
  procurementNeeds: ProcurementNeed[];
}

export interface UpcomingDelivery {
  deliveryId: string;
  supplier: string;
  materialName: string;
  quantity: number;
  unit: string;
  scheduledDate: Date;
  estimatedValue: number;
  status: 'confirmed' | 'pending' | 'at-risk';
}

export interface ProcurementNeed {
  materialId: string;
  materialName: string;
  requiredQuantity: number;
  unit: string;
  requiredBy: Date;
  estimatedCost: number;
  priority: 'critical' | 'high' | 'medium' | 'low';
  supplier?: string;
}

export interface WeeklySubcontractorPerformance {
  weekOf: Date;
  subcontractorEvaluations: SubcontractorEvaluation[];
  payments: SubcontractorPayment[];
  issues: SubcontractorIssue[];
}

export interface SubcontractorEvaluation {
  subcontractorId: string;
  companyName: string;
  trade: string;
  qualityScore: number;
  schedulePerformance: number;
  safetyCompliance: number;
  overallRating: number;
  workCompleted: number;
}

export interface SubcontractorPayment {
  paymentId: string;
  subcontractorId: string;
  companyName: string;
  invoiceAmount: number;
  amountPaid: number;
  paymentDate: Date;
  status: 'pending' | 'approved' | 'paid' | 'disputed';
}

export interface SubcontractorIssue {
  issueId: string;
  subcontractorId: string;
  companyName: string;
  issueType: 'quality' | 'schedule' | 'safety' | 'contract' | 'payment';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  reportedDate: Date;
}