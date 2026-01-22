// Commissioning Report Interfaces

export interface CommissioningReport {
  reportDate: Date;
  systemTesting: SystemTest[];
  performanceVerification: PerformanceVerification[];
  commissioningStatus: CommissioningStatus;
}

export interface SystemTest {
  testId: string;
  systemName: string;
  systemType: 'hvac' | 'electrical' | 'plumbing' | 'fire-safety' | 'security' | 'lighting' | 'controls';
  testType: 'functional' | 'performance' | 'integration' | 'safety' | 'operational';
  testDate: Date;
  testEngineer: string;
  contractor: string;
  testProcedure: string;
  testResults: SystemTestResult[];
  overallResult: 'passed' | 'failed' | 'conditional' | 'pending';
  deficiencies: TestDeficiency[];
  cost: number;
}

export interface SystemTestResult {
  parameter: string;
  expectedValue: string;
  actualValue: string;
  unit?: string;
  tolerance?: string;
  passed: boolean;
  notes?: string;
}

export interface TestDeficiency {
  deficiencyId: string;
  description: string;
  severity: 'minor' | 'major' | 'critical';
  correctiveAction: string;
  responsibleParty: string;
  dueDate: Date;
  status: 'open' | 'in-progress' | 'resolved' | 'verified';
}

export interface PerformanceVerification {
  verificationId: string;
  systemName: string;
  verificationDate: Date;
  verificationEngineer: string;
  performanceMetrics: PerformanceMetric[];
  energyEfficiency: EnergyEfficiency;
  operationalReadiness: OperationalReadiness;
  overallPerformance: 'excellent' | 'good' | 'acceptable' | 'poor';
  cost: number;
}

export interface PerformanceMetric {
  metric: string;
  designValue: number;
  actualValue: number;
  unit: string;
  variance: number;
  acceptanceCriteria: string;
  meetsRequirement: boolean;
}

export interface EnergyEfficiency {
  designEfficiency: number;
  actualEfficiency: number;
  efficiencyRating: string;
  energyConsumption: number;
  costSavings: number;
  environmentalImpact: string;
}

export interface OperationalReadiness {
  systemAvailability: number;
  reliabilityScore: number;
  maintenanceRequirements: string[];
  operatorTrainingStatus: 'complete' | 'in-progress' | 'pending';
  documentationStatus: 'complete' | 'in-progress' | 'pending';
}

export interface CommissioningStatus {
  overallProgress: number;
  systemsCommissioned: number;
  totalSystems: number;
  criticalDeficiencies: number;
  minorDeficiencies: number;
  completionDate?: Date;
  certificateOfOccupancy: boolean;
}