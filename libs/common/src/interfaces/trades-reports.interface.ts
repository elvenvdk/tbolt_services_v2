export interface ConcreteMixDesign {
  id: string;
  mixId: string;
  designStrength: number;
  cementType: string;
  cementContent: number;
  waterCementRatio: number;
  aggregateType: string;
  fineAggregateContent: number;
  coarseAggregateContent: number;
  admixtures: {
    type: string;
    dosage: number;
    purpose: string;
  }[];
  slumpTarget: number;
  airContentTarget: number;
  supplier: string;
  approvedBy: string;
  approvalDate: Date;
}

export interface ConcreteTest {
  id: string;
  testType: 'slump' | 'air-content' | 'temperature' | 'compressive-strength' | 'flexural-strength' | 'density' | 'chloride-content';
  testDate: Date;
  testTime: string;
  sampleLocation: string;
  testResult: number;
  targetValue: number;
  tolerance: number;
  passed: boolean;
  testMethod: string;
  technician: string;
  labName?: string;
  certificateNumber?: string;
  notes?: string;
}

export interface WeatherCondition {
  time: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  conditions: 'clear' | 'cloudy' | 'overcast' | 'light-rain' | 'heavy-rain' | 'snow' | 'fog';
  suitableForPouring: boolean;
  notes?: string;
}

export interface ConcreteTruck {
  truckNumber: string;
  supplier: string;
  driver: string;
  batchTime: Date;
  arrivalTime: Date;
  startPourTime?: Date;
  endPourTime?: Date;
  volume: number;
  mixDesignId: string;
  ticketNumber: string;
  washoutLocation?: string;
  rejected: boolean;
  rejectionReason?: string;
}

export interface CuringMethod {
  method: 'moist-curing' | 'membrane-curing' | 'steam-curing' | 'accelerated-curing' | 'natural-curing';
  startDate: Date;
  endDate?: Date;
  duration: number;
  temperature: number;
  humidity?: number;
  curingCompound?: string;
  applicationRate?: number;
  effectiveness: 'excellent' | 'good' | 'fair' | 'poor';
  notes?: string;
}

export interface ConcretePourReport {
  projectId: string;
  projectName: string;
  pourDate: Date;
  reportDate: Date;
  pourLocation: string;
  elementType: 'foundation' | 'slab' | 'wall' | 'column' | 'beam' | 'stairs' | 'curb' | 'sidewalk' | 'other';
  superintendent: {
    name: string;
    certification: string;
    contact: string;
  };
  
  pourSummary: {
    totalVolume: number;
    plannedVolume: number;
    startTime: Date;
    endTime: Date;
    duration: number;
    trucksUsed: number;
    crewSize: number;
    pourRate: number;
    completed: boolean;
  };
  
  mixDesign: ConcreteMixDesign;
  trucks: ConcreteTruck[];
  tests: ConcreteTest[];
  weatherConditions: WeatherCondition[];
  curingMethods: CuringMethod[];
  
  testsByType: {
    slump: ConcreteTest[];
    airContent: ConcreteTest[];
    temperature: ConcreteTest[];
    compressiveStrength: ConcreteTest[];
    flexuralStrength: ConcreteTest[];
    density: ConcreteTest[];
    chlorideContent: ConcreteTest[];
  };
  
  qualityControl: {
    preInspection: {
      formsInspected: boolean;
      reinforcementInspected: boolean;
      embedsInspected: boolean;
      subgradeInspected: boolean;
      inspector: string;
      inspectionTime: Date;
      deficiencies: string[];
    };
    duringPour: {
      consolidationMethod: string;
      finishingMethod: string;
      jointInstallation: boolean;
      surfaceFinish: string;
      issues: string[];
    };
    postPour: {
      initialCuringStarted: boolean;
      protectionInstalled: boolean;
      curingMethod: string;
      inspector: string;
      inspectionTime: Date;
      observations: string[];
    };
  };
  
  equipment: {
    pumpTruck?: {
      operator: string;
      pumpRate: number;
      lineLength: number;
      issues: string[];
    };
    crane?: {
      operator: string;
      bucketSize: number;
      cycleTime: number;
      issues: string[];
    };
    vibrators: {
      type: string;
      frequency: number;
      operator: string;
      issues: string[];
    }[];
    finishingEquipment: string[];
  };
  
  safetyObservations: {
    hazardsIdentified: string[];
    mitigationMeasures: string[];
    incidents: string[];
    ppeCompliance: boolean;
    safetyBriefing: boolean;
  };
  
  environmentalConsiderations: {
    washoutManagement: string;
    wasteDisposal: string;
    spillPrevention: string[];
    environmentalCompliance: boolean;
  };
  
  issues: {
    issue: string;
    severity: 'minor' | 'moderate' | 'major' | 'critical';
    resolution: string;
    preventiveMeasures: string[];
  }[];
  
  photos: {
    description: string;
    timestamp: Date;
    location: string;
    url: string;
  }[];
  
  nextSteps: string[];
  recommendations: string[];
}

export interface SteelMember {
  id: string;
  pieceNumber: string;
  memberType: 'beam' | 'column' | 'girder' | 'brace' | 'joist' | 'truss' | 'plate' | 'angle' | 'channel' | 'other';
  size: string;
  weight: number;
  length: number;
  grade: string;
  location: string;
  gridLine: string;
  elevation: number;
  status: 'not-started' | 'in-progress' | 'erected' | 'connected' | 'inspected' | 'rejected';
  erectionDate?: Date;
  connectionDate?: Date;
  inspectionDate?: Date;
  crew: string;
  crane: string;
  issues: string[];
}

export interface SteelConnection {
  id: string;
  connectionId: string;
  connectionType: 'bolted' | 'welded' | 'bolted-welded' | 'pinned' | 'moment' | 'shear' | 'tension' | 'compression';
  memberA: string;
  memberB: string;
  location: string;
  boltType?: string;
  boltSize?: string;
  boltQuantity?: number;
  weldType?: string;
  weldSize?: string;
  weldLength?: number;
  status: 'not-started' | 'in-progress' | 'completed' | 'inspected' | 'rejected' | 'rework-required';
  installer: string;
  installDate?: Date;
  inspector?: string;
  inspectionDate?: Date;
  inspectionResult?: 'pass' | 'fail' | 'conditional';
  deficiencies: string[];
  corrections: string[];
  torqueValues?: number[];
  weldQuality?: 'acceptable' | 'marginal' | 'unacceptable';
}

export interface SteelSafetyItem {
  id: string;
  category: 'fall-protection' | 'crane-safety' | 'rigging' | 'ppe' | 'housekeeping' | 'weather' | 'coordination' | 'training';
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'identified' | 'mitigated' | 'ongoing' | 'resolved';
  responsiblePerson: string;
  dueDate: Date;
  completedDate?: Date;
  mitigationActions: string[];
  verificationRequired: boolean;
}

export interface QualityInspection {
  id: string;
  inspectionType: 'dimensional' | 'visual' | 'bolt-tension' | 'weld-inspection' | 'plumbness' | 'alignment' | 'final';
  inspector: string;
  inspectionDate: Date;
  location: string;
  scope: string;
  result: 'pass' | 'fail' | 'conditional';
  deficiencies: string[];
  correctiveActions: string[];
  reinspectionRequired: boolean;
  reinspectionDate?: Date;
  photos: string[];
  certifications: string[];
}

export interface SteelErectionReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  erectionDate: Date;
  area: string;
  phase: string;
  superintendent: {
    name: string;
    certification: string;
    contact: string;
  };
  
  erectionSummary: {
    totalMembers: number;
    membersErected: number;
    membersConnected: number;
    membersInspected: number;
    totalConnections: number;
    connectionsCompleted: number;
    connectionsInspected: number;
    crewSize: number;
    hoursWorked: number;
    productivity: number;
  };
  
  steelMembers: SteelMember[];
  connections: SteelConnection[];
  safetyItems: SteelSafetyItem[];
  qualityInspections: QualityInspection[];
  
  membersByType: {
    beam: SteelMember[];
    column: SteelMember[];
    girder: SteelMember[];
    brace: SteelMember[];
    joist: SteelMember[];
    truss: SteelMember[];
    plate: SteelMember[];
    angle: SteelMember[];
    channel: SteelMember[];
    other: SteelMember[];
  };
  
  connectionsByType: {
    bolted: SteelConnection[];
    welded: SteelConnection[];
    boltedWelded: SteelConnection[];
    pinned: SteelConnection[];
    moment: SteelConnection[];
    shear: SteelConnection[];
    tension: SteelConnection[];
    compression: SteelConnection[];
  };
  
  safetyByCategory: {
    fallProtection: SteelSafetyItem[];
    craneSafety: SteelSafetyItem[];
    rigging: SteelSafetyItem[];
    ppe: SteelSafetyItem[];
    housekeeping: SteelSafetyItem[];
    weather: SteelSafetyItem[];
    coordination: SteelSafetyItem[];
    training: SteelSafetyItem[];
  };
  
  rejectedMembers: SteelMember[];
  failedConnections: SteelConnection[];
  criticalSafetyItems: SteelSafetyItem[];
  failedInspections: QualityInspection[];
  
  equipment: {
    cranes: {
      craneId: string;
      operator: string;
      capacity: number;
      hoursUsed: number;
      liftsCompleted: number;
      issues: string[];
    }[];
    riggingEquipment: string[];
    safetyEquipment: string[];
    toolsUsed: string[];
  };
  
  weatherConditions: {
    temperature: number;
    windSpeed: number;
    windDirection: string;
    precipitation: number;
    visibility: number;
    suitableForErection: boolean;
    restrictions: string[];
  };
  
  progress: {
    plannedCompletion: number;
    actualCompletion: number;
    variance: number;
    criticalPath: boolean;
    delayReasons: string[];
    recoveryActions: string[];
  };
  
  materialDelivery: {
    deliveredToday: {
      pieceNumbers: string[];
      weight: number;
      supplier: string;
      deliveryTime: Date;
    }[];
    pendingDeliveries: {
      pieceNumbers: string[];
      expectedDate: Date;
      supplier: string;
    }[];
    materialIssues: string[];
  };
  
  issues: {
    issue: string;
    category: 'safety' | 'quality' | 'progress' | 'material' | 'equipment' | 'weather' | 'coordination';
    severity: 'minor' | 'moderate' | 'major' | 'critical';
    status: 'open' | 'in-progress' | 'resolved';
    responsibleParty: string;
    resolution?: string;
    preventiveMeasures: string[];
  }[];
  
  photos: {
    description: string;
    timestamp: Date;
    location: string;
    category: 'progress' | 'safety' | 'quality' | 'issue' | 'completion';
    url: string;
  }[];
  
  nextDayPlan: {
    plannedActivities: string[];
    requiredResources: string[];
    safetyFocus: string[];
    materialNeeds: string[];
  };
  
  actionItems: string[];
  recommendations: string[];
}

export interface MEPSystem {
  id: string;
  systemId: string;
  systemType: 'electrical' | 'plumbing' | 'hvac' | 'fire-protection' | 'low-voltage' | 'security' | 'telecommunications' | 'controls';
  systemName: string;
  location: string;
  floor: string;
  zone: string;
  status: 'not-started' | 'rough-in' | 'installed' | 'tested' | 'commissioned' | 'operational' | 'rejected';
  contractor: string;
  foreman: string;
  installDate?: Date;
  testDate?: Date;
  commissionDate?: Date;
  progress: number;
  issues: string[];
  dependencies: string[];
}

export interface MEPComponent {
  id: string;
  componentId: string;
  componentType: string;
  systemId: string;
  manufacturer: string;
  model: string;
  specifications: string;
  location: string;
  status: 'not-delivered' | 'delivered' | 'installed' | 'connected' | 'tested' | 'operational' | 'defective';
  installer: string;
  installDate?: Date;
  testResults?: {
    testType: string;
    result: 'pass' | 'fail' | 'conditional';
    value?: number;
    unit?: string;
    notes?: string;
  }[];
  warranties: {
    type: string;
    duration: number;
    startDate: Date;
    provider: string;
  }[];
  documentation: string[];
}

export interface MEPTest {
  id: string;
  testId: string;
  testType: 'functional' | 'performance' | 'safety' | 'integration' | 'commissioning' | 'startup' | 'acceptance';
  systemId: string;
  componentId?: string;
  testProcedure: string;
  testDate: Date;
  tester: string;
  result: 'pass' | 'fail' | 'conditional' | 'pending';
  measurements: {
    parameter: string;
    expected: number;
    actual: number;
    unit: string;
    tolerance: number;
    passed: boolean;
  }[];
  deficiencies: string[];
  correctiveActions: string[];
  retestRequired: boolean;
  retestDate?: Date;
  certifications: string[];
  photos: string[];
}

export interface CoordinationIssue {
  id: string;
  issueType: 'conflict' | 'interference' | 'access' | 'sequencing' | 'design' | 'material' | 'coordination';
  systems: string[];
  contractors: string[];
  location: string;
  description: string;
  severity: 'minor' | 'moderate' | 'major' | 'critical';
  status: 'identified' | 'investigating' | 'resolving' | 'resolved' | 'escalated';
  identifiedBy: string;
  identifiedDate: Date;
  assignedTo: string;
  dueDate: Date;
  resolution?: string;
  resolvedDate?: Date;
  preventiveMeasures: string[];
  impactedTrades: string[];
}

export interface MEPInstallationReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  installationDate: Date;
  area: string;
  phase: string;
  mepCoordinator: {
    name: string;
    certification: string;
    contact: string;
  };
  
  installationSummary: {
    totalSystems: number;
    systemsInstalled: number;
    systemsTested: number;
    systemsCommissioned: number;
    totalComponents: number;
    componentsInstalled: number;
    componentsTested: number;
    testsCompleted: number;
    testsPassed: number;
    testsFailed: number;
    coordinationIssues: number;
    resolvedIssues: number;
  };
  
  mepSystems: MEPSystem[];
  mepComponents: MEPComponent[];
  mepTests: MEPTest[];
  coordinationIssues: CoordinationIssue[];
  
  systemsByType: {
    electrical: MEPSystem[];
    plumbing: MEPSystem[];
    hvac: MEPSystem[];
    fireProtection: MEPSystem[];
    lowVoltage: MEPSystem[];
    security: MEPSystem[];
    telecommunications: MEPSystem[];
    controls: MEPSystem[];
  };
  
  testsByType: {
    functional: MEPTest[];
    performance: MEPTest[];
    safety: MEPTest[];
    integration: MEPTest[];
    commissioning: MEPTest[];
    startup: MEPTest[];
    acceptance: MEPTest[];
  };
  
  coordinationByType: {
    conflict: CoordinationIssue[];
    interference: CoordinationIssue[];
    access: CoordinationIssue[];
    sequencing: CoordinationIssue[];
    design: CoordinationIssue[];
    material: CoordinationIssue[];
    coordination: CoordinationIssue[];
  };
  
  rejectedSystems: MEPSystem[];
  failedTests: MEPTest[];
  criticalIssues: CoordinationIssue[];
  defectiveComponents: MEPComponent[];
  
  progress: {
    electrical: {
      roughIn: number;
      installation: number;
      testing: number;
      commissioning: number;
    };
    plumbing: {
      roughIn: number;
      installation: number;
      testing: number;
      commissioning: number;
    };
    hvac: {
      installation: number;
      ductwork: number;
      equipment: number;
      testing: number;
      balancing: number;
    };
    fireProtection: {
      installation: number;
      testing: number;
      commissioning: number;
    };
  };
  
  qualityControl: {
    inspections: {
      inspector: string;
      inspectionDate: Date;
      system: string;
      result: 'pass' | 'fail' | 'conditional';
      deficiencies: string[];
      correctiveActions: string[];
    }[];
    materialApprovals: {
      material: string;
      manufacturer: string;
      model: string;
      status: 'approved' | 'rejected' | 'pending';
      approvedBy?: string;
      approvalDate?: Date;
      rejectionReason?: string;
    }[];
  };
  
  safetyObservations: {
    lockoutTagout: boolean;
    electricalSafety: boolean;
    confinedSpace: boolean;
    hotWork: boolean;
    hazardsIdentified: string[];
    mitigationMeasures: string[];
    incidents: string[];
    trainingRequired: string[];
  };
  
  materialStatus: {
    delivered: {
      system: string;
      components: string[];
      deliveryDate: Date;
      supplier: string;
      inspectionStatus: 'pending' | 'approved' | 'rejected';
    }[];
    pending: {
      system: string;
      components: string[];
      expectedDate: Date;
      supplier: string;
      criticalPath: boolean;
    }[];
    issues: string[];
  };
  
  nextPhaseRequirements: {
    prerequisites: string[];
    dependencies: string[];
    materialNeeds: string[];
    coordinationNeeded: string[];
    testingRequired: string[];
  };
  
  issues: {
    issue: string;
    system: string;
    severity: 'minor' | 'moderate' | 'major' | 'critical';
    status: 'open' | 'in-progress' | 'resolved';
    responsibleParty: string;
    resolution?: string;
    preventiveMeasures: string[];
  }[];
  
  photos: {
    description: string;
    timestamp: Date;
    location: string;
    system: string;
    category: 'installation' | 'testing' | 'issue' | 'completion';
    url: string;
  }[];
  
  actionItems: string[];
  recommendations: string[];
}
export interface RoofingReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  workDate: Date;
  area: string;
  roofSection: string;
  superintendent: {
    name: string;
    certification: string;
    contact: string;
  };
  
  weatherConditions: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    windDirection: string;
    precipitation: 'none' | 'light' | 'moderate' | 'heavy';
    conditions: 'clear' | 'cloudy' | 'overcast' | 'stormy';
    suitableForWork: boolean;
    weatherNotes?: string;
    restrictions: string[];
  };
  
  materials: {
    materialId: string;
    materialType: 'membrane' | 'shingles' | 'tiles' | 'metal' | 'insulation' | 'flashing' | 'sealant' | 'fasteners' | 'underlayment' | 'vapor-barrier';
    brand: string;
    model: string;
    quantity: number;
    unit: string;
    deliveryDate: Date;
    qualityGrade: string;
    batchNumber?: string;
    storageCondition: 'proper' | 'compromised';
    usageStatus: 'pending' | 'in-use' | 'completed';
    wasteGenerated: number;
    supplier: string;
  }[];
  
  workProgress: {
    areaId: string;
    areaDescription: string;
    plannedArea: number;
    completedArea: number;
    workType: 'preparation' | 'installation' | 'sealing' | 'inspection' | 'repair' | 'cleanup';
    status: 'not-started' | 'in-progress' | 'completed' | 'on-hold';
    crew: string[];
    startTime?: Date;
    endTime?: Date;
    productivity: number;
    issues: string[];
  }[];
  
  qualityChecks: {
    checkId: string;
    checkType: 'slope' | 'drainage' | 'seam-integrity' | 'fastener-pattern' | 'flashing' | 'penetrations' | 'edge-detail' | 'membrane-adhesion' | 'overlap';
    location: string;
    inspector: string;
    checkDate: Date;
    result: 'pass' | 'fail' | 'conditional';
    measurements?: {
      parameter: string;
      expected: number;
      actual: number;
      unit: string;
      tolerance: number;
      passed: boolean;
    }[];
    deficiencies: string[];
    correctiveActions: string[];
    retestRequired: boolean;
    retestDate?: Date;
    photos: string[];
  }[];
  
  safetyObservations: {
    observationId: string;
    type: 'fall-protection' | 'equipment' | 'weather-hazard' | 'material-handling' | 'hot-work' | 'general';
    description: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    actionTaken: string;
    reportedBy: string;
    status: 'open' | 'resolved';
    dueDate?: Date;
  }[];
  
  dailySummary: {
    totalCrewHours: number;
    areasCompleted: string[];
    materialsUsed: Record<string, number>;
    qualityIssues: number;
    safetyIncidents: number;
    weatherDelays: number;
    productivityRate: number;
    nextDayPlans: string[];
  };
  
  issues: {
    issue: string;
    category: 'material' | 'weather' | 'quality' | 'safety' | 'equipment' | 'coordination';
    severity: 'minor' | 'moderate' | 'major' | 'critical';
    status: 'open' | 'in-progress' | 'resolved';
    responsibleParty: string;
    resolution?: string;
    preventiveMeasures: string[];
  }[];
  
  photos: {
    description: string;
    timestamp: Date;
    location: string;
    category: 'progress' | 'quality' | 'safety' | 'issue' | 'material';
    url: string;
  }[];
  
  actionItems: string[];
  recommendations: string[];
}
export interface ExcavationReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  workDate: Date;
  area: string;
  excavationZone: string;
  superintendent: {
    name: string;
    certification: string;
    contact: string;
  };
  
  soilConditions: {
    soilType: 'clay' | 'sand' | 'silt' | 'gravel' | 'rock' | 'mixed' | 'organic' | 'fill';
    moisture: 'dry' | 'moist' | 'wet' | 'saturated';
    stability: 'stable' | 'unstable' | 'requires-shoring' | 'cave-in-risk';
    bearingCapacity: number;
    classification: string;
    colorDescription: string;
    contamination: 'none' | 'suspected' | 'confirmed';
    contaminationType?: string;
    testResults: {
      testId: string;
      testType: 'bearing-capacity' | 'moisture-content' | 'density' | 'gradation' | 'contamination';
      result: number;
      unit: string;
      standard: string;
      passed: boolean;
      testDate: Date;
      lab?: string;
    }[];
  };
  
  utilities: {
    utilityId: string;
    utilityType: 'electric' | 'gas' | 'water' | 'sewer' | 'telecom' | 'cable' | 'steam' | 'unknown';
    status: 'marked' | 'located' | 'exposed' | 'damaged' | 'relocated' | 'protected';
    depth: number;
    location: string;
    owner: string;
    contactInfo?: string;
    clearance: number;
    protectionMethod?: string;
    damageRisk: 'low' | 'medium' | 'high' | 'critical';
    notes?: string;
  }[];
  
  excavationProgress: {
    areaId: string;
    areaDescription: string;
    plannedDepth: number;
    currentDepth: number;
    plannedVolume: number;
    excavatedVolume: number;
    remainingVolume: number;
    status: 'not-started' | 'in-progress' | 'completed' | 'on-hold' | 'backfilled';
    crew: string[];
    equipment: string[];
    startTime?: Date;
    endTime?: Date;
    productivity: number;
    issues: string[];
  }[];
  
  safetyMeasures: {
    measureId: string;
    measureType: 'shoring' | 'sloping' | 'benching' | 'trench-box' | 'ladder' | 'ventilation' | 'monitoring' | 'barriers';
    location: string;
    description: string;
    status: 'installed' | 'inspected' | 'maintained' | 'removed' | 'deficient';
    inspector: string;
    inspectionDate: Date;
    nextInspection?: Date;
    deficiencies: string[];
    correctiveActions: string[];
  }[];
  
  safetyObservations: {
    observationId: string;
    type: 'cave-in-risk' | 'utility-strike' | 'equipment-safety' | 'fall-hazard' | 'atmospheric' | 'traffic-control' | 'general';
    description: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    location: string;
    actionTaken: string;
    reportedBy: string;
    status: 'open' | 'resolved';
    dueDate?: Date;
  }[];
  
  equipment: {
    equipmentId: string;
    equipmentType: 'excavator' | 'bulldozer' | 'backhoe' | 'loader' | 'compactor' | 'dump-truck' | 'trencher' | 'other';
    operator: string;
    hoursWorked: number;
    fuelUsed: number;
    productivity: number;
    breakdowns: string[];
    maintenance: string[];
    inspections: {
      inspector: string;
      inspectionDate: Date;
      result: 'pass' | 'fail' | 'conditional';
      deficiencies: string[];
    }[];
  }[];
  
  weatherConditions: {
    temperature: number;
    precipitation: 'none' | 'light' | 'moderate' | 'heavy';
    conditions: 'clear' | 'cloudy' | 'overcast' | 'rain' | 'snow' | 'fog';
    windSpeed: number;
    suitableForWork: boolean;
    restrictions: string[];
    weatherNotes?: string;
  };
  
  spoilManagement: {
    spoilType: string;
    volume: number;
    location: string;
    disposition: 'stockpile' | 'haul-off' | 'reuse' | 'disposal' | 'treatment';
    testingRequired: boolean;
    testResults?: {
      testType: string;
      result: string;
      disposition: 'approved' | 'rejected' | 'treatment-required';
    }[];
    haulingContractor?: string;
    disposalSite?: string;
  }[];
  
  dailySummary: {
    totalCrewHours: number;
    totalEquipmentHours: number;
    volumeExcavated: number;
    areasCompleted: string[];
    utilitiesExposed: number;
    safetyIncidents: number;
    equipmentBreakdowns: number;
    weatherDelays: number;
    productivityRate: number;
    nextDayPlans: string[];
  };
  
  issues: {
    issue: string;
    category: 'soil' | 'utilities' | 'safety' | 'equipment' | 'weather' | 'environmental' | 'coordination';
    severity: 'minor' | 'moderate' | 'major' | 'critical';
    status: 'open' | 'in-progress' | 'resolved';
    responsibleParty: string;
    resolution?: string;
    preventiveMeasures: string[];
  }[];
  
  photos: {
    description: string;
    timestamp: Date;
    location: string;
    category: 'progress' | 'soil-conditions' | 'utilities' | 'safety' | 'equipment' | 'issue';
    url: string;
  }[];
  
  actionItems: string[];
  recommendations: string[];
}