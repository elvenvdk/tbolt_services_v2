// Material Testing Report Interfaces

export interface MaterialTestingReport {
  reportDate: Date;
  concreteTests: ConcreteTest[];
  soilReports: SoilReport[];
  materialCertifications: MaterialCertification[];
}

export interface ConcreteTest {
  testId: string;
  sampleId: string;
  testType: 'compressive-strength' | 'slump' | 'air-content' | 'temperature' | 'density';
  testDate: Date;
  sampleDate: Date;
  location: string;
  mixDesign: string;
  supplier: string;
  testingLab: string;
  technician: string;
  testResults: TestResult[];
  specification: TestSpecification;
  status: 'passed' | 'failed' | 'pending' | 'retested';
  cost: number;
}

export interface TestResult {
  parameter: string;
  measuredValue: number;
  unit: string;
  requiredValue: number;
  tolerance: number;
  passed: boolean;
}

export interface TestSpecification {
  standard: string;
  requirements: TestRequirement[];
}

export interface TestRequirement {
  parameter: string;
  minimumValue?: number;
  maximumValue?: number;
  targetValue?: number;
  unit: string;
}

export interface SoilReport {
  reportId: string;
  reportType: 'geotechnical' | 'environmental' | 'bearing-capacity' | 'compaction';
  testDate: Date;
  location: string;
  depth: number;
  testingFirm: string;
  engineer: string;
  soilClassification: string;
  testResults: SoilTestResult[];
  recommendations: string[];
  limitations: string[];
  cost: number;
}

export interface SoilTestResult {
  testType: string;
  parameter: string;
  value: number;
  unit: string;
  standard: string;
  acceptanceCriteria?: string;
  passed: boolean;
}

export interface MaterialCertification {
  certificationId: string;
  materialType: string;
  supplier: string;
  manufacturer: string;
  productName: string;
  batchNumber: string;
  certificationDate: Date;
  expirationDate?: Date;
  certifyingBody: string;
  standard: string;
  properties: MaterialProperty[];
  status: 'valid' | 'expired' | 'pending' | 'rejected';
  cost: number;
}

export interface MaterialProperty {
  property: string;
  value: string;
  unit?: string;
  testMethod: string;
  specification: string;
}