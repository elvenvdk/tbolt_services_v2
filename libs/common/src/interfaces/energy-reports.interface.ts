export interface EnergyConsumptionReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportStartDate: Date;
  reportEndDate: Date;
  reportPeriod: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'project-to-date';
  energyManager: {
    name: string;
    certification: string;
    contact: string;
  };
  
  energySummary: {
    totalEnergyConsumption: number;
    totalEnergyCost: number;
    averageDailyConsumption: number;
    peakDemand: number;
    energyIntensity: number;
    efficiencyRating: number;
    targetEfficiency: number;
    efficiencyVariance: number;
    carbonFootprint: number;
    renewableEnergyPercentage: number;
  };
  
  temporaryPower: {
    connectionId: string;
    serviceType: 'single-phase' | 'three-phase' | 'high-voltage';
    voltage: number;
    amperage: number;
    capacity: number;
    location: string;
    supplier: string;
    meterNumber: string;
    connectionDate: Date;
    disconnectionDate?: Date;
    monthlyConsumption: number;
    peakDemand: number;
    loadFactor: number;
    powerFactor: number;
    demandCharges: number;
    energyCharges: number;
    totalCost: number;
    costPerKwh: number;
    efficiency: number;
    downtime: number;
    maintenanceCost: number;
  }[];
  
  fuelUsage: {
    equipmentId: string;
    equipmentType: 'generator' | 'excavator' | 'crane' | 'truck' | 'compressor' | 'pump' | 'heater' | 'other';
    fuelType: 'diesel' | 'gasoline' | 'propane' | 'natural-gas' | 'biodiesel';
    fuelConsumption: number;
    operatingHours: number;
    fuelEfficiency: number;
    benchmarkEfficiency: number;
    efficiencyVariance: number;
    fuelCost: number;
    costPerGallon: number;
    costPerHour: number;
    carbonEmissions: number;
    maintenanceImpact: number;
    supplier: string;
    deliveryFrequency: string;
    storageCapacity: number;
    currentInventory: number;
  }[];
  
  energyEfficiency: {
    category: 'lighting' | 'hvac' | 'equipment' | 'temporary-power' | 'fuel-consumption' | 'overall';
    currentEfficiency: number;
    targetEfficiency: number;
    benchmarkEfficiency: number;
    efficiencyGap: number;
    improvementPotential: number;
    energySavings: number;
    costSavings: number;
    implementationCost: number;
    paybackPeriod: number;
    measures: string[];
  }[];
  
  equipmentPerformance: {
    equipmentId: string;
    equipmentType: string;
    energyConsumption: number;
    operatingHours: number;
    efficiency: number;
    utilizationRate: number;
    energyCostPerHour: number;
    maintenanceStatus: 'good' | 'fair' | 'poor' | 'needs-attention';
    lastMaintenance: Date;
    nextMaintenance: Date;
    performanceRating: 'excellent' | 'good' | 'average' | 'below-average' | 'poor';
    optimizationOpportunities: string[];
  }[];
  
  costAnalysis: {
    category: 'temporary-power' | 'fuel' | 'maintenance' | 'demand-charges' | 'renewable-energy' | 'efficiency-upgrades';
    budgetedCost: number;
    actualCost: number;
    variance: number;
    variancePercent: number;
    costPerUnit: number;
    trend: 'increasing' | 'stable' | 'decreasing';
    driverFactors: string[];
    optimizationOpportunities: string[];
  }[];
  
  sustainabilityMetrics: {
    metric: string;
    value: number;
    unit: string;
    baseline: number;
    target: number;
    improvement: number;
    calculationMethod: string;
    verificationStatus: 'verified' | 'estimated' | 'pending';
    reportingStandard: string;
  }[];
  
  weatherImpact: {
    date: Date;
    temperature: number;
    humidity: number;
    conditions: string;
    heatingDegreeHours: number;
    coolingDegreeHours: number;
    energyConsumption: number;
    baselineConsumption: number;
    weatherAdjustment: number;
    costImpact: number;
  }[];
  
  peakDemandAnalysis: {
    date: Date;
    time: string;
    peakDemand: number;
    duration: number;
    contributingFactors: string[];
    demandCharges: number;
    loadSheddingOpportunities: string[];
    costAvoidancePotential: number;
  }[];
  
  renewableEnergy: {
    sourceType: 'solar' | 'wind' | 'hydro' | 'biomass' | 'geothermal';
    capacity: number;
    generation: number;
    utilizationRate: number;
    costSavings: number;
    carbonOffset: number;
    incentivesReceived: number;
    maintenanceCost: number;
    roi: number;
    paybackPeriod: number;
  }[];
  
  trends: {
    period: string;
    totalConsumption: number;
    totalCost: number;
    efficiency: number;
    carbonFootprint: number;
    renewablePercentage: number;
    trend: 'improving' | 'stable' | 'worsening';
    benchmarkComparison: number;
  }[];
  
  recommendations: {
    recommendationId: string;
    category: 'efficiency' | 'cost-reduction' | 'renewable-energy' | 'demand-management' | 'equipment-upgrade' | 'behavioral';
    priority: 'critical' | 'high' | 'medium' | 'low';
    description: string;
    expectedBenefit: string;
    energySavings: number;
    costSavings: number;
    implementationCost: number;
    paybackPeriod: number;
    timeline: string;
    responsibleParty: string;
    successMetrics: string[];
    riskFactors: string[];
  }[];
  
  alerts: {
    alertId: string;
    alertType: 'high-consumption' | 'peak-demand-exceeded' | 'efficiency-decline' | 'cost-overrun' | 'equipment-failure' | 'fuel-shortage';
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