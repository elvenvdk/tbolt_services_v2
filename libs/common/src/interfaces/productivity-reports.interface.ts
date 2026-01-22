export interface ProductivityAnalysisReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  analysisStartDate: Date;
  analysisEndDate: Date;
  reportPeriod: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'project-to-date';
  analyst: {
    name: string;
    title: string;
    contact: string;
  };
  
  laborEfficiency: {
    crewId: string;
    crewName: string;
    trade: string;
    totalHours: number;
    productiveHours: number;
    nonproductiveHours: number;
    efficiencyRate: number;
    productivityRate: number;
    unitsProduced: number;
    unitType: string;
    costPerUnit: number;
    budgetedRate: number;
    variance: number;
    performanceRating: 'excellent' | 'good' | 'average' | 'below-average' | 'poor';
  }[];
  
  taskProductivity: {
    taskId: string;
    taskName: string;
    taskType: string;
    plannedDuration: number;
    actualDuration: number;
    plannedUnits: number;
    actualUnits: number;
    plannedRate: number;
    actualRate: number;
    efficiency: number;
    laborHours: number;
    laborCost: number;
    materialCost: number;
    equipmentCost: number;
    totalCost: number;
    costPerUnit: number;
    budgetVariance: number;
    scheduleVariance: number;
  }[];
  
  benchmarking: {
    metric: string;
    currentValue: number;
    industryAverage: number;
    bestPractice: number;
    companyAverage: number;
    previousProject: number;
    unit: string;
    percentileRank: number;
    performanceGap: number;
    improvementTarget: number;
    benchmarkSource: string;
  }[];
  
  equipmentUtilization: {
    equipmentId: string;
    equipmentType: string;
    totalAvailableHours: number;
    actualWorkingHours: number;
    idleHours: number;
    maintenanceHours: number;
    utilizationRate: number;
    productivityRate: number;
    costPerHour: number;
    revenuePerHour: number;
    profitabilityIndex: number;
    benchmarkUtilization: number;
    utilizationVariance: number;
  }[];
  
  weatherImpact: {
    date: Date;
    weatherCondition: string;
    temperatureRange: string;
    precipitation: number;
    windSpeed: number;
    workableHours: number;
    lostHours: number;
    productivityImpact: number;
    affectedCrews: string[];
    mitigationActions: string[];
    costImpact: number;
  }[];
  
  qualityMetrics: {
    metric: string;
    value: number;
    unit: string;
    target: number;
    variance: number;
    trend: 'improving' | 'stable' | 'declining';
    impactOnProductivity: number;
    correctionCost: number;
    preventionCost: number;
  }[];
  
  costAnalysis: {
    category: 'labor' | 'materials' | 'equipment' | 'overhead' | 'subcontractors';
    budgetedCost: number;
    actualCost: number;
    variance: number;
    variancePercent: number;
    costPerUnit: number;
    budgetedCostPerUnit: number;
    efficiency: number;
    trend: 'improving' | 'stable' | 'worsening';
    driverFactors: string[];
  }[];
  
  timeAnalysis: {
    activity: string;
    plannedTime: number;
    actualTime: number;
    variance: number;
    variancePercent: number;
    productiveTime: number;
    nonproductiveTime: number;
    waitTime: number;
    reworkTime: number;
    efficiencyRate: number;
    improvementOpportunities: string[];
  }[];
  
  performanceTrends: {
    period: string;
    laborProductivity: number;
    equipmentUtilization: number;
    qualityIndex: number;
    costEfficiency: number;
    schedulePerformance: number;
    safetyPerformance: number;
    overallPerformance: number;
    trendDirection: 'up' | 'down' | 'stable';
  }[];
  
  improvementOpportunities: {
    opportunityId: string;
    category: 'labor' | 'equipment' | 'process' | 'quality' | 'safety' | 'technology';
    description: string;
    currentState: string;
    proposedState: string;
    estimatedSavings: number;
    implementationCost: number;
    paybackPeriod: number;
    priority: 'high' | 'medium' | 'low';
    implementationComplexity: 'low' | 'medium' | 'high';
    requiredResources: string[];
    timeline: string;
    riskFactors: string[];
  }[];
  
  bestPractices: {
    practiceId: string;
    category: string;
    description: string;
    implementedBy: string;
    results: string;
    applicability: string;
    implementationSteps: string[];
    successFactors: string[];
    potentialBenefits: string[];
  }[];
  
  recommendations: {
    recommendationId: string;
    priority: 'critical' | 'high' | 'medium' | 'low';
    category: string;
    description: string;
    expectedBenefit: string;
    implementationCost: number;
    timeline: string;
    responsibleParty: string;
    successMetrics: string[];
    riskMitigation: string[];
  }[];
  
  executiveSummary: {
    overallProductivity: number;
    productivityTrend: 'improving' | 'stable' | 'declining';
    keyFindings: string[];
    majorConcerns: string[];
    quickWins: string[];
    strategicInitiatives: string[];
    budgetImpact: number;
    scheduleImpact: number;
  };
  
  actionItems: string[];
  nextReviewDate: Date;
}