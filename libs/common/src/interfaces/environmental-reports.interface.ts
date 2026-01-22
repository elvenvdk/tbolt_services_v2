// Environmental Compliance Report Interfaces

export interface EnvironmentalComplianceReport {
  reportDate: Date;
  environmentalImpacts: EnvironmentalImpact[];
  mitigationMeasures: MitigationMeasure[];
  complianceStatus: ComplianceStatus;
}

export interface EnvironmentalImpact {
  impactId: string;
  impactType: 'air-quality' | 'water-quality' | 'noise' | 'waste' | 'soil' | 'wildlife' | 'vegetation';
  severity: 'low' | 'moderate' | 'high' | 'critical';
  location: string;
  description: string;
  measuredValue?: number;
  unit?: string;
  regulatoryLimit?: number;
  exceedsLimit: boolean;
  identifiedDate: Date;
  status: 'active' | 'mitigated' | 'resolved' | 'monitoring';
}

export interface MitigationMeasure {
  measureId: string;
  impactId: string;
  measureType: 'prevention' | 'control' | 'remediation' | 'monitoring';
  description: string;
  implementationDate: Date;
  assignedTo: string;
  cost: number;
  effectiveness: 'not-assessed' | 'low' | 'moderate' | 'high' | 'very-high';
  status: 'planned' | 'in-progress' | 'completed' | 'verified';
  completedDate?: Date;
}

export interface ComplianceStatus {
  overallStatus: 'compliant' | 'non-compliant' | 'under-review';
  permits: EnvironmentalPermit[];
  violations: EnvironmentalViolation[];
  inspections: EnvironmentalInspection[];
}

export interface EnvironmentalPermit {
  permitId: string;
  permitType: string;
  issuingAgency: string;
  issueDate: Date;
  expirationDate: Date;
  status: 'active' | 'expired' | 'pending-renewal' | 'suspended';
  conditions: string[];
  complianceStatus: 'compliant' | 'non-compliant' | 'pending';
}

export interface EnvironmentalViolation {
  violationId: string;
  violationType: string;
  issuingAgency: string;
  violationDate: Date;
  description: string;
  penalty?: number;
  correctiveActions: string[];
  dueDate: Date;
  status: 'open' | 'in-progress' | 'resolved' | 'appealed';
}

export interface EnvironmentalInspection {
  inspectionId: string;
  inspectionType: string;
  inspector: string;
  agency: string;
  inspectionDate: Date;
  result: 'passed' | 'failed' | 'conditional' | 'pending';
  findings: string[];
  recommendations: string[];
}