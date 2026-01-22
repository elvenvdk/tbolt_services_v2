// Code Compliance Report Interfaces

export interface CodeComplianceReport {
  reportDate: Date;
  buildingCodeAdherence: BuildingCodeAdherence;
  violations: CodeViolation[];
  inspections: CodeInspection[];
}

export interface BuildingCodeAdherence {
  overallComplianceRate: number;
  codeCategories: CodeCategory[];
  criticalNonCompliances: number;
  minorNonCompliances: number;
  complianceStatus: 'compliant' | 'non-compliant' | 'conditional';
}

export interface CodeCategory {
  categoryId: string;
  categoryName: string;
  codeType: 'building' | 'fire' | 'electrical' | 'plumbing' | 'mechanical' | 'accessibility' | 'zoning';
  complianceRate: number;
  totalRequirements: number;
  compliantRequirements: number;
  nonCompliantRequirements: number;
}

export interface CodeViolation {
  violationId: string;
  violationType: string;
  codeSection: string;
  severity: 'minor' | 'major' | 'critical';
  location: string;
  description: string;
  discoveredDate: Date;
  inspector: string;
  correctiveActions: CorrectiveAction[];
  status: 'open' | 'in-progress' | 'resolved' | 'appealed';
  dueDate: Date;
  penalty?: number;
}

export interface CorrectiveAction {
  actionId: string;
  description: string;
  assignedTo: string;
  dueDate: Date;
  completedDate?: Date;
  status: 'assigned' | 'in-progress' | 'completed' | 'verified';
  cost?: number;
}

export interface CodeInspection {
  inspectionId: string;
  inspectionType: string;
  codeType: 'building' | 'fire' | 'electrical' | 'plumbing' | 'mechanical' | 'accessibility' | 'zoning';
  inspector: string;
  inspectionDate: Date;
  result: 'passed' | 'failed' | 'conditional' | 'pending';
  violationsFound: number;
  reinspectionRequired: boolean;
  nextInspectionDate?: Date;
  notes: string;
}

export interface ThirdPartyInspectionReport {
  reportDate: Date;
  externalInspections: ExternalInspection[];
  certifications: ThirdPartyCertification[];
}

export interface ExternalInspection {
  inspectionId: string;
  inspectionType: string;
  inspectionAgency: string;
  inspector: InspectorDetails;
  inspectionDate: Date;
  scope: string;
  standards: string[];
  result: 'passed' | 'failed' | 'conditional' | 'pending';
  findings: InspectionFinding[];
  recommendations: string[];
  cost: number;
  reportDeliveryDate: Date;
}

export interface InspectorDetails {
  name: string;
  credentials: string;
  licenseNumber: string;
  contactInfo: string;
}

export interface InspectionFinding {
  findingId: string;
  category: string;
  severity: 'minor' | 'major' | 'critical';
  description: string;
  standard: string;
  location: string;
  correctiveAction: string;
  dueDate?: Date;
}

export interface ThirdPartyCertification {
  certificationId: string;
  certificationType: string;
  certifyingBody: string;
  standard: string;
  scope: string;
  issueDate: Date;
  expirationDate: Date;
  status: 'active' | 'expired' | 'suspended' | 'pending';
  certificateNumber: string;
  cost: number;
  renewalRequired: boolean;
}