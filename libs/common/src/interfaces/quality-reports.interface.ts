// Quality Control Inspection Report Interfaces

export interface QualityControlInspectionReport {
  reportDate: Date;
  inspections: QualityInspection[];
  defects: QualityDefect[];
  correctiveActions: CorrectiveAction[];
}

export interface QualityInspection {
  inspectionId: string;
  inspectionType: string;
  area: string;
  inspector: string;
  inspectionDate: Date;
  status: 'passed' | 'failed' | 'conditional' | 'pending';
  score: number;
  checklistItems: ChecklistItem[];
}

export interface ChecklistItem {
  itemId: string;
  description: string;
  requirement: string;
  status: 'compliant' | 'non-compliant' | 'not-applicable';
  notes?: string;
}

export interface QualityDefect {
  defectId: string;
  inspectionId: string;
  defectType: string;
  severity: 'minor' | 'major' | 'critical';
  location: string;
  description: string;
  discoveredDate: Date;
  responsibleParty: string;
  status: 'open' | 'in-progress' | 'resolved' | 'verified';
}

export interface CorrectiveAction {
  actionId: string;
  defectId: string;
  description: string;
  assignedTo: string;
  dueDate: Date;
  completedDate?: Date;
  status: 'assigned' | 'in-progress' | 'completed' | 'verified';
  verifiedBy?: string;
}