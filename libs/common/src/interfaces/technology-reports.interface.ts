export interface TechnologyPerformanceReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportStartDate: Date;
  reportEndDate: Date;
  reportPeriod: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'project-to-date';
  technologyManager: {
    name: string;
    certification: string;
    contact: string;
  };
  
  technologySummary: {
    totalSoftwareApplications: number;
    totalHardwareDevices: number;
    overallSystemUptime: number;
    averageResponseTime: number;
    userSatisfactionScore: number;
    totalTechnologyCost: number;
    roi: number;
    productivityGain: number;
    costSavings: number;
    adoptionRate: number;
  };
  
  softwarePerformance: {
    applicationId: string;
    applicationName: string;
    category: 'project-management' | 'design' | 'scheduling' | 'communication' | 'document-management' | 'accounting' | 'safety' | 'quality' | 'bim' | 'field-management' | 'other';
    vendor: string;
    version: string;
    licenseType: 'subscription' | 'perpetual' | 'usage-based' | 'free';
    userCount: number;
    activeUsers: number;
    adoptionRate: number;
    uptime: number;
    responseTime: number;
    errorRate: number;
    performanceScore: number;
    userSatisfaction: number;
    supportTickets: number;
    trainingHours: number;
    licenseCost: number;
    supportCost: number;
    totalCost: number;
    productivityImpact: number;
    timesSaved: number;
    costBenefit: number;
    integrationStatus: 'fully-integrated' | 'partially-integrated' | 'standalone' | 'integration-issues';
    securityCompliance: 'compliant' | 'non-compliant' | 'pending-review';
  }[];
  
  hardwarePerformance: {
    deviceId: string;
    deviceName: string;
    category: 'mobile-device' | 'tablet' | 'laptop' | 'desktop' | 'server' | 'network-equipment' | 'iot-sensor' | 'drone' | 'scanner' | 'printer' | 'other';
    manufacturer: string;
    model: string;
    serialNumber: string;
    location: string;
    assignedUser: string;
    purchaseDate: Date;
    warrantyExpiration: Date;
    uptime: number;
    performanceScore: number;
    batteryLife?: number;
    storageUtilization: number;
    memoryUtilization: number;
    cpuUtilization: number;
    networkConnectivity: number;
    maintenanceFrequency: number;
    repairCost: number;
    replacementCost: number;
    totalCost: number;
    productivityContribution: number;
    utilizationRate: number;
    condition: 'excellent' | 'good' | 'fair' | 'poor' | 'needs-replacement';
  }[];
  
  systemIntegration: {
    integrationId: string;
    systemA: string;
    systemB: string;
    integrationType: 'api' | 'database' | 'file-transfer' | 'real-time-sync' | 'batch-processing' | 'webhook';
    dataFlow: 'bidirectional' | 'unidirectional';
    frequency: string;
    reliability: number;
    latency: number;
    errorRate: number;
    dataAccuracy: number;
    maintenanceEffort: number;
    businessValue: number;
    implementationCost: number;
    operationalCost: number;
    status: 'active' | 'inactive' | 'maintenance' | 'deprecated';
  }[];
  
  userAdoption: {
    applicationName: string;
    targetUsers: number;
    registeredUsers: number;
    activeUsers: number;
    powerUsers: number;
    adoptionRate: number;
    engagementScore: number;
    trainingCompleted: number;
    supportRequests: number;
    userFeedbackScore: number;
    featureUtilization: Record<string, number>;
    barriers: string[];
    successFactors: string[];
  }[];
  
  performanceMetrics: {
    metric: string;
    category: 'availability' | 'performance' | 'security' | 'usability' | 'cost' | 'productivity';
    currentValue: number;
    targetValue: number;
    benchmarkValue: number;
    unit: string;
    trend: 'improving' | 'stable' | 'declining';
    variance: number;
    impactLevel: 'low' | 'medium' | 'high' | 'critical';
  }[];
  
  costAnalysis: {
    category: 'software-licenses' | 'hardware-purchase' | 'maintenance' | 'support' | 'training' | 'integration' | 'infrastructure';
    budgetedCost: number;
    actualCost: number;
    variance: number;
    variancePercent: number;
    costPerUser: number;
    roi: number;
    paybackPeriod: number;
    trend: 'increasing' | 'stable' | 'decreasing';
    optimizationOpportunities: string[];
  }[];
  
  securityAssessment: {
    applicationName: string;
    securityRating: number;
    vulnerabilities: {
      severity: 'low' | 'medium' | 'high' | 'critical';
      count: number;
      description: string[];
    }[];
    complianceStatus: 'compliant' | 'non-compliant' | 'pending-review';
    lastSecurityAudit: Date;
    nextSecurityAudit: Date;
    securityIncidents: number;
    dataBreaches: number;
    mitigationActions: string[];
  }[];
  
  productivityImpact: {
    process: string;
    technologyUsed: string[];
    timeBeforeTechnology: number;
    timeAfterTechnology: number;
    timeSavings: number;
    timeSavingsPercent: number;
    qualityImprovement: number;
    errorReduction: number;
    costSavings: number;
    userSatisfaction: number;
    scalabilityFactor: number;
  }[];
  
  issuesAndDowntime: {
    incidentId: string;
    system: string;
    incidentType: 'outage' | 'performance-degradation' | 'security-breach' | 'data-loss' | 'integration-failure' | 'user-error';
    severity: 'low' | 'medium' | 'high' | 'critical';
    startTime: Date;
    endTime?: Date;
    duration: number;
    affectedUsers: number;
    businessImpact: string;
    rootCause: string;
    resolution: string;
    preventiveActions: string[];
    costImpact: number;
  }[];
  
  upgradeAndMaintenance: {
    system: string;
    maintenanceType: 'routine' | 'preventive' | 'corrective' | 'upgrade' | 'patch';
    scheduledDate: Date;
    actualDate: Date;
    duration: number;
    cost: number;
    impact: string;
    success: boolean;
    issues: string[];
    benefits: string[];
    nextMaintenance: Date;
  }[];
  
  recommendations: {
    recommendationId: string;
    category: 'performance' | 'cost-optimization' | 'security' | 'user-adoption' | 'integration' | 'upgrade' | 'replacement';
    priority: 'critical' | 'high' | 'medium' | 'low';
    system: string;
    description: string;
    expectedBenefit: string;
    implementationCost: number;
    costSavings: number;
    productivityGain: number;
    paybackPeriod: number;
    timeline: string;
    responsibleParty: string;
    successMetrics: string[];
    riskFactors: string[];
  }[];
  
  alerts: {
    alertId: string;
    alertType: 'system-down' | 'performance-degraded' | 'security-threat' | 'license-expiring' | 'maintenance-overdue' | 'cost-overrun';
    system: string;
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