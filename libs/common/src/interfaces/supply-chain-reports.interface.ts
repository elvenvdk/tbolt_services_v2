export interface SupplyChainDisruption {
  id: string;
  materialId: string;
  materialName: string;
  materialCategory: 'concrete' | 'steel' | 'lumber' | 'electrical' | 'plumbing' | 'hvac' | 'roofing' | 'insulation' | 'drywall' | 'flooring' | 'fixtures' | 'equipment';
  disruptionType: 'supplier-issue' | 'manufacturing-delay' | 'transportation-delay' | 'quality-issue' | 'shortage' | 'price-increase' | 'force-majeure' | 'regulatory-change';
  severity: 'minor' | 'moderate' | 'major' | 'critical';
  status: 'identified' | 'investigating' | 'mitigating' | 'resolved' | 'ongoing';
  identifiedDate: Date;
  expectedResolutionDate?: Date;
  actualResolutionDate?: Date;
  originalSupplier: string;
  affectedQuantity: number;
  unitOfMeasure: string;
  originalDeliveryDate: Date;
  revisedDeliveryDate?: Date;
  delayDays: number;
  costImpact: number;
  scheduleImpact: number;
  criticalPath: boolean;
  rootCause: string;
  impactDescription: string;
  mitigationActions: string[];
  alternativeSources: {
    supplierId: string;
    supplierName: string;
    availability: 'available' | 'limited' | 'unavailable';
    leadTime: number;
    priceVariance: number;
    qualityRating: number;
    deliveryReliability: number;
    contacted: boolean;
    response: string;
    selected: boolean;
  }[];
}

export interface SupplyChainReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  supplyChainManager: {
    name: string;
    title: string;
    organization: string;
  };
  
  disruptionSummary: {
    totalDisruptions: number;
    criticalDisruptions: number;
    majorDisruptions: number;
    moderateDisruptions: number;
    minorDisruptions: number;
    resolvedDisruptions: number;
    ongoingDisruptions: number;
    averageDelayDays: number;
  };
  
  disruptions: SupplyChainDisruption[];
  
  disruptionsByCategory: {
    concrete: SupplyChainDisruption[];
    steel: SupplyChainDisruption[];
    lumber: SupplyChainDisruption[];
    electrical: SupplyChainDisruption[];
    plumbing: SupplyChainDisruption[];
    hvac: SupplyChainDisruption[];
    roofing: SupplyChainDisruption[];
    insulation: SupplyChainDisruption[];
    drywall: SupplyChainDisruption[];
    flooring: SupplyChainDisruption[];
    fixtures: SupplyChainDisruption[];
    equipment: SupplyChainDisruption[];
  };
  
  disruptionsByType: {
    supplierIssue: SupplyChainDisruption[];
    manufacturingDelay: SupplyChainDisruption[];
    transportationDelay: SupplyChainDisruption[];
    qualityIssue: SupplyChainDisruption[];
    shortage: SupplyChainDisruption[];
    priceIncrease: SupplyChainDisruption[];
    forceMajeure: SupplyChainDisruption[];
    regulatoryChange: SupplyChainDisruption[];
  };
  
  criticalPathImpacts: SupplyChainDisruption[];
  
  supplierPerformance: {
    supplierId: string;
    supplierName: string;
    totalOrders: number;
    onTimeDeliveries: number;
    delayedDeliveries: number;
    qualityIssues: number;
    averageDelayDays: number;
    reliabilityScore: number;
    riskLevel: 'low' | 'medium' | 'high' | 'critical';
  }[];
  
  alternativeSourceAnalysis: {
    materialCategory: string;
    primarySuppliers: number;
    alternativeSuppliers: number;
    diversificationScore: number;
    riskLevel: 'low' | 'medium' | 'high' | 'critical';
    recommendations: string[];
  }[];
  
  costImpact: {
    totalCostImpact: number;
    materialCostIncrease: number;
    expeditingCosts: number;
    alternativeSourceCosts: number;
    storageAndHandlingCosts: number;
    scheduleAccelerationCosts: number;
  };
  
  scheduleImpact: {
    totalDelayDays: number;
    criticalPathDelays: number;
    milestoneImpacts: {
      milestoneName: string;
      originalDate: Date;
      revisedDate: Date;
      delayDays: number;
    }[];
  };
  
  mitigationStrategies: {
    implemented: string[];
    planned: string[];
    effectiveness: string[];
  };
  
  riskAssessment: {
    highRiskMaterials: string[];
    vulnerableSuppliers: string[];
    geographicRisks: string[];
    seasonalRisks: string[];
  };
  
  recommendations: string[];
  actionItems: string[];
}