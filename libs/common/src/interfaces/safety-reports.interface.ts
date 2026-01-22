// Safety Incident Report Interfaces

export interface SafetyIncidentReport {
  reportDate: Date;
  incidentDetails: IncidentDetails;
  investigation: IncidentInvestigation;
  preventionMeasures: PreventionMeasure[];
}

export interface IncidentDetails {
  incidentId: string;
  incidentType: 'injury' | 'near-miss' | 'property-damage' | 'environmental' | 'security';
  severity: 'minor' | 'moderate' | 'serious' | 'critical' | 'fatal';
  location: string;
  dateTime: Date;
  description: string;
  injuredPerson?: InjuredPerson;
  witnesses: Witness[];
  immediateActions: string;
  oshaRecordable: boolean;
}

export interface InjuredPerson {
  name: string;
  position: string;
  company: string;
  bodyPart: string;
  injuryType: string;
  medicalTreatment: string;
  daysAway: number;
  daysRestricted: number;
}

export interface Witness {
  name: string;
  position: string;
  company: string;
  contactInfo: string;
  statement: string;
}

export interface IncidentInvestigation {
  investigator: string;
  investigationDate: Date;
  rootCause: string;
  contributingFactors: string[];
  timeline: InvestigationTimeline[];
  findings: string;
  recommendations: string[];
}

export interface InvestigationTimeline {
  time: string;
  event: string;
  source: string;
}

export interface PreventionMeasure {
  measureId: string;
  description: string;
  type: 'engineering' | 'administrative' | 'ppe' | 'training' | 'policy';
  priority: 'immediate' | 'short-term' | 'long-term';
  assignedTo: string;
  dueDate: Date;
  status: 'planned' | 'in-progress' | 'completed' | 'verified';
  completedDate?: Date;
}