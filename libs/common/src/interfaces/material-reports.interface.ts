export interface MaterialWasteReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportStartDate: Date;
  reportEndDate: Date;
  reportPeriod: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'project-to-date';
  wasteCoordinator: {
    name: string;
    certification: string;
    contact: string;
  };
  
  wasteSummary: {
    totalWasteGenerated: number;
    totalWasteCost: number;
    wastePercentage: number;
    recycledWaste: number;
    recyclingRate: number;
    disposedWaste: number;
    reusedWaste: number;
    wasteReductionTarget: number;
    wasteReductionAchieved: number;
    costSavingsFromReduction: number;
  };
  
  wasteByMaterial: {
    materialId: string;
    materialType: 'concrete' | 'steel' | 'wood' | 'drywall' | 'insulation' | 'roofing' | 'flooring' | 'electrical' | 'plumbing' | 'packaging' | 'other';
    materialName: string;
    totalPurchased: number;
    totalUsed: number;
    wasteGenerated: number;
    wastePercentage: number;
    unit: string;
    purchaseCost: number;
    wasteCost: number;
    wasteReason: 'overordering' | 'damage' | 'cutting-waste' | 'defective' | 'design-change' | 'theft' | 'weather-damage' | 'expiration' | 'other';
    disposalMethod: 'landfill' | 'recycle' | 'reuse' | 'donate' | 'return-supplier' | 'hazardous-disposal';
    disposalCost: number;
    recyclingRevenue: number;
    netWasteCost: number;
  }[];
  
  recyclingTracking: {
    materialType: string;
    wasteGenerated: number;
    recycledAmount: number;
    recyclingRate: number;
    recyclingFacility: string;
    recyclingCost: number;
    recyclingRevenue: number;
    netRecyclingBenefit: number;
    co2Reduction: number;
    landfillDiversion: number;
    certifications: string[];
  }[];
  
  wasteStreams: {
    streamId: string;
    streamType: 'construction' | 'demolition' | 'packaging' | 'hazardous' | 'organic' | 'mixed';
    description: string;
    volume: number;
    weight: number;
    unit: string;
    generationRate: number;
    source: string;
    collectionFrequency: string;
    containerType: string;
    disposalMethod: string;
    cost: number;
    contractor: string;
    complianceStatus: 'compliant' | 'non-compliant' | 'pending';
  }[];
  
  costAnalysis: {
    category: 'material-waste' | 'disposal-fees' | 'transportation' | 'labor' | 'equipment' | 'recycling' | 'penalties';
    budgetedCost: number;
    actualCost: number;
    variance: number;
    variancePercent: number;
    costPerUnit: number;
    trend: 'increasing' | 'stable' | 'decreasing';
    driverFactors: string[];
    optimizationOpportunities: string[];
  }[];
  
  wasteReduction: {
    initiativeId: string;
    initiative: string;
    category: 'design-optimization' | 'material-planning' | 'procurement' | 'handling' | 'storage' | 'training' | 'technology';
    description: string;
    implementationDate: Date;
    targetReduction: number;
    actualReduction: number;
    costSavings: number;
    implementationCost: number;
    roi: number;
    status: 'planned' | 'in-progress' | 'completed' | 'on-hold';
    responsibleParty: string;
    successMetrics: string[];
  }[];
  
  complianceTracking: {
    regulationType: 'federal' | 'state' | 'local' | 'industry';
    regulation: string;
    requirement: string;
    complianceStatus: 'compliant' | 'non-compliant' | 'pending-review';
    lastInspection: Date;
    nextInspection: Date;
    violations: string[];
    correctiveActions: string[];
    penalties: number;
    certifications: string[];
  }[];
  
  environmentalImpact: {
    metric: string;
    value: number;
    unit: string;
    baseline: number;
    target: number;
    improvement: number;
    calculationMethod: string;
    verificationStatus: 'verified' | 'estimated' | 'pending';
    reportingPeriod: string;
  }[];
  
  supplierPerformance: {
    supplierId: string;
    supplierName: string;
    materialTypes: string[];
    packagingWaste: number;
    returnablePackaging: number;
    packagingReduction: number;
    sustainabilityRating: number;
    wasteReductionInitiatives: string[];
    collaborationLevel: 'high' | 'medium' | 'low';
    performanceRating: 'excellent' | 'good' | 'average' | 'poor';
  }[];
  
  trends: {
    period: string;
    totalWaste: number;
    wastePercentage: number;
    recyclingRate: number;
    wasteCost: number;
    costPerUnit: number;
    trend: 'improving' | 'stable' | 'worsening';
    benchmarkComparison: number;
  }[];
  
  recommendations: {
    recommendationId: string;
    category: 'reduction' | 'recycling' | 'cost-optimization' | 'compliance' | 'supplier' | 'process';
    priority: 'critical' | 'high' | 'medium' | 'low';
    description: string;
    expectedBenefit: string;
    implementationCost: number;
    costSavings: number;
    paybackPeriod: number;
    timeline: string;
    responsibleParty: string;
    successMetrics: string[];
    riskFactors: string[];
  }[];
  
  alerts: {
    alertId: string;
    alertType: 'high-waste-rate' | 'cost-overrun' | 'compliance-violation' | 'recycling-target-miss' | 'disposal-capacity';
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