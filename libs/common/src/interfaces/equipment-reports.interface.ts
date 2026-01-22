export interface EquipmentUtilizationReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportStartDate: Date;
  reportEndDate: Date;
  reportPeriod: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'project-to-date';
  equipmentManager: {
    name: string;
    certification: string;
    contact: string;
  };
  
  equipmentSummary: {
    totalEquipment: number;
    activeEquipment: number;
    idleEquipment: number;
    maintenanceEquipment: number;
    totalAvailableHours: number;
    totalWorkingHours: number;
    totalIdleHours: number;
    totalMaintenanceHours: number;
    overallUtilizationRate: number;
    targetUtilizationRate: number;
    utilizationVariance: number;
  };
  
  equipmentDetails: {
    equipmentId: string;
    equipmentType: 'excavator' | 'bulldozer' | 'crane' | 'loader' | 'dump-truck' | 'compactor' | 'generator' | 'pump' | 'concrete-mixer' | 'other';
    make: string;
    model: string;
    year: number;
    operator: string;
    location: string;
    status: 'active' | 'idle' | 'maintenance' | 'repair' | 'out-of-service';
    availableHours: number;
    workingHours: number;
    idleHours: number;
    maintenanceHours: number;
    utilizationRate: number;
    targetUtilization: number;
    utilizationVariance: number;
    productivityRate: number;
    fuelConsumption: number;
    fuelEfficiency: number;
    operatingCost: number;
    revenueGenerated: number;
    profitability: number;
  }[];
  
  downtimeAnalysis: {
    equipmentId: string;
    downtimeType: 'scheduled-maintenance' | 'unscheduled-maintenance' | 'breakdown' | 'repair' | 'weather' | 'operator-unavailable' | 'waiting-for-work' | 'other';
    startTime: Date;
    endTime: Date;
    duration: number;
    reason: string;
    description: string;
    impact: 'low' | 'medium' | 'high' | 'critical';
    costImpact: number;
    preventable: boolean;
    rootCause: string;
    correctiveAction: string;
    preventiveAction: string;
    responsibleParty: string;
  }[];
  
  maintenanceTracking: {
    equipmentId: string;
    maintenanceType: 'preventive' | 'corrective' | 'predictive' | 'emergency';
    scheduledDate: Date;
    actualDate: Date;
    duration: number;
    cost: number;
    description: string;
    technician: string;
    partsUsed: {
      partNumber: string;
      description: string;
      quantity: number;
      cost: number;
    }[];
    status: 'scheduled' | 'in-progress' | 'completed' | 'overdue';
    nextMaintenanceDate: Date;
    maintenanceNotes: string;
  }[];
  
  utilizationTrends: {
    period: string;
    equipmentType: string;
    utilizationRate: number;
    workingHours: number;
    idleHours: number;
    maintenanceHours: number;
    trend: 'improving' | 'stable' | 'declining';
    benchmarkComparison: number;
  }[];
  
  costAnalysis: {
    equipmentId: string;
    ownershipCost: number;
    operatingCost: number;
    maintenanceCost: number;
    fuelCost: number;
    laborCost: number;
    totalCost: number;
    costPerHour: number;
    revenuePerHour: number;
    profitPerHour: number;
    roi: number;
    paybackPeriod: number;
  }[];
  
  performanceMetrics: {
    equipmentType: string;
    averageUtilization: number;
    peakUtilization: number;
    minimumUtilization: number;
    utilizationVariability: number;
    mtbf: number; // Mean Time Between Failures
    mttr: number; // Mean Time To Repair
    availability: number;
    reliability: number;
    oee: number; // Overall Equipment Effectiveness
    benchmarkOEE: number;
  }[];
  
  operatorPerformance: {
    operatorId: string;
    operatorName: string;
    equipmentTypes: string[];
    totalHours: number;
    productivityRate: number;
    fuelEfficiency: number;
    safetyScore: number;
    maintenanceCompliance: number;
    incidentCount: number;
    trainingStatus: string;
    certifications: string[];
    performanceRating: 'excellent' | 'good' | 'average' | 'needs-improvement';
  }[];
  
  fuelAnalysis: {
    equipmentId: string;
    fuelType: string;
    totalConsumption: number;
    consumptionRate: number;
    efficiency: number;
    benchmarkEfficiency: number;
    efficiencyVariance: number;
    fuelCost: number;
    costPerHour: number;
    trend: 'improving' | 'stable' | 'worsening';
    optimizationOpportunities: string[];
  }[];
  
  recommendations: {
    recommendationId: string;
    category: 'utilization' | 'maintenance' | 'operator' | 'fuel' | 'cost' | 'replacement';
    priority: 'critical' | 'high' | 'medium' | 'low';
    equipmentId?: string;
    description: string;
    expectedBenefit: string;
    implementationCost: number;
    paybackPeriod: number;
    timeline: string;
    responsibleParty: string;
    successMetrics: string[];
  }[];
  
  alerts: {
    alertId: string;
    alertType: 'low-utilization' | 'high-downtime' | 'maintenance-overdue' | 'fuel-inefficiency' | 'cost-overrun' | 'safety-concern';
    equipmentId: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    threshold: number;
    actualValue: number;
    actionRequired: string;
    dueDate: Date;
    assignedTo: string;
    status: 'open' | 'in-progress' | 'resolved';
  }[];
  
  actionItems: string[];
  nextReviewDate: Date;
}