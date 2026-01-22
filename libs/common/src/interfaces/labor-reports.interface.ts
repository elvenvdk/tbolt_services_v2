export interface LaborCostAnalysisReport {
  id: string;
  jobId: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  projectInfo: {
    name: string;
    phase: string;
    completionPercentage: number;
  };
  laborSummary: LaborSummary;
  productivityAnalysis: ProductivityAnalysis[];
  overtimeAnalysis: OvertimeAnalysis;
  crewPerformance: CrewPerformance[];
  tradeAnalysis: TradeAnalysis[];
  costAnalysis: LaborCostAnalysis;
  efficiencyMetrics: EfficiencyMetrics;
  benchmarkComparison: BenchmarkComparison;
  recommendations: LaborRecommendation[];
  preparedBy: string;
  reviewedBy?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LaborSummary {
  totalLaborHours: number;
  regularHours: number;
  overtimeHours: number;
  totalLaborCost: number;
  regularCost: number;
  overtimeCost: number;
  averageHourlyRate: number;
  totalWorkers: number;
  averageCrewSize: number;
  laborProductivityIndex: number;
}

export interface ProductivityAnalysis {
  trade: LaborTrade;
  activity: string;
  plannedProductivity: number;
  actualProductivity: number;
  productivityVariance: number;
  productivityIndex: number;
  unitsCompleted: number;
  hoursWorked: number;
  costPerUnit: number;
  benchmarkProductivity: number;
  factors: ProductivityFactor[];
}

export interface ProductivityFactor {
  factor: ProductivityFactorType;
  impact: FactorImpact;
  description: string;
  quantifiedImpact: number;
}

export interface OvertimeAnalysis {
  totalOvertimeHours: number;
  overtimePercentage: number;
  overtimeCost: number;
  overtimePremium: number;
  overtimeByTrade: OvertimeByTrade[];
  overtimeByReason: OvertimeByReason[];
  overtimeTrends: OvertimeTrend[];
  overtimeEfficiency: number;
  recommendations: string[];
}

export interface OvertimeByTrade {
  trade: LaborTrade;
  regularHours: number;
  overtimeHours: number;
  overtimePercentage: number;
  overtimeCost: number;
  efficiency: number;
}

export interface OvertimeByReason {
  reason: OvertimeReason;
  hours: number;
  cost: number;
  percentage: number;
  frequency: number;
}

export interface OvertimeTrend {
  period: string;
  overtimeHours: number;
  overtimePercentage: number;
  trend: TrendDirection;
}

export interface CrewPerformance {
  crewId: string;
  crewName: string;
  foreman: string;
  trade: LaborTrade;
  crewSize: number;
  hoursWorked: number;
  productivity: number;
  efficiency: number;
  qualityScore: number;
  safetyScore: number;
  overtimeHours: number;
  costPerHour: number;
  performanceRating: PerformanceRating;
  strengths: string[];
  improvementAreas: string[];
}

export interface TradeAnalysis {
  trade: LaborTrade;
  totalHours: number;
  totalCost: number;
  averageHourlyRate: number;
  productivity: number;
  efficiency: number;
  overtimePercentage: number;
  workerCount: number;
  costVariance: number;
  productivityVariance: number;
  benchmarkComparison: TradeBenchmark;
}

export interface TradeBenchmark {
  industryAverage: number;
  companyAverage: number;
  projectTarget: number;
  variance: number;
  ranking: BenchmarkRanking;
}

export interface LaborCostAnalysis {
  budgetedLaborCost: number;
  actualLaborCost: number;
  costVariance: number;
  costVariancePercentage: number;
  costPerHour: number;
  costPerUnit: number;
  laborCostTrend: CostTrend[];
  costDrivers: CostDriver[];
}

export interface CostTrend {
  period: string;
  budgetedCost: number;
  actualCost: number;
  variance: number;
  cumulativeVariance: number;
}

export interface CostDriver {
  driver: CostDriverType;
  impact: number;
  percentage: number;
  description: string;
}

export interface EfficiencyMetrics {
  overallEfficiency: number;
  plannedVsActualHours: number;
  workCompletionRate: number;
  reworkRate: number;
  idleTime: number;
  utilizationRate: number;
  efficiencyTrends: EfficiencyTrend[];
}

export interface EfficiencyTrend {
  period: string;
  efficiency: number;
  utilization: number;
  trend: TrendDirection;
}

export interface BenchmarkComparison {
  projectProductivity: number;
  industryBenchmark: number;
  companyBenchmark: number;
  varianceFromIndustry: number;
  varianceFromCompany: number;
  ranking: BenchmarkRanking;
  improvementPotential: number;
}

export interface LaborRecommendation {
  category: RecommendationCategory;
  priority: RecommendationPriority;
  description: string;
  expectedImpact: string;
  implementationCost: number;
  paybackPeriod: number;
  owner: string;
  targetDate: Date;
  status: RecommendationStatus;
}

export enum LaborTrade {
  GENERAL_LABOR = 'GENERAL_LABOR',
  CARPENTRY = 'CARPENTRY',
  CONCRETE = 'CONCRETE',
  ELECTRICAL = 'ELECTRICAL',
  PLUMBING = 'PLUMBING',
  HVAC = 'HVAC',
  MASONRY = 'MASONRY',
  ROOFING = 'ROOFING',
  DRYWALL = 'DRYWALL',
  PAINTING = 'PAINTING',
  FLOORING = 'FLOORING',
  LANDSCAPING = 'LANDSCAPING',
  DEMOLITION = 'DEMOLITION',
  EXCAVATION = 'EXCAVATION',
  STEEL_WORK = 'STEEL_WORK',
  WELDING = 'WELDING',
  INSULATION = 'INSULATION',
  GLAZING = 'GLAZING',
  TILE_WORK = 'TILE_WORK',
  OTHER = 'OTHER'
}

export enum ProductivityFactorType {
  WEATHER = 'WEATHER',
  MATERIAL_AVAILABILITY = 'MATERIAL_AVAILABILITY',
  EQUIPMENT_AVAILABILITY = 'EQUIPMENT_AVAILABILITY',
  CREW_EXPERIENCE = 'CREW_EXPERIENCE',
  WORK_COMPLEXITY = 'WORK_COMPLEXITY',
  SITE_CONDITIONS = 'SITE_CONDITIONS',
  DESIGN_CHANGES = 'DESIGN_CHANGES',
  COORDINATION_ISSUES = 'COORDINATION_ISSUES',
  SAFETY_REQUIREMENTS = 'SAFETY_REQUIREMENTS',
  QUALITY_REQUIREMENTS = 'QUALITY_REQUIREMENTS'
}

export enum FactorImpact {
  VERY_POSITIVE = 'VERY_POSITIVE',
  POSITIVE = 'POSITIVE',
  NEUTRAL = 'NEUTRAL',
  NEGATIVE = 'NEGATIVE',
  VERY_NEGATIVE = 'VERY_NEGATIVE'
}

export enum OvertimeReason {
  SCHEDULE_ACCELERATION = 'SCHEDULE_ACCELERATION',
  WEATHER_DELAYS = 'WEATHER_DELAYS',
  MATERIAL_DELAYS = 'MATERIAL_DELAYS',
  DESIGN_CHANGES = 'DESIGN_CHANGES',
  REWORK = 'REWORK',
  EMERGENCY_WORK = 'EMERGENCY_WORK',
  CREW_SHORTAGE = 'CREW_SHORTAGE',
  CLIENT_REQUEST = 'CLIENT_REQUEST',
  COORDINATION_ISSUES = 'COORDINATION_ISSUES',
  OTHER = 'OTHER'
}

export enum TrendDirection {
  IMPROVING = 'IMPROVING',
  STABLE = 'STABLE',
  DETERIORATING = 'DETERIORATING'
}

export enum PerformanceRating {
  EXCELLENT = 'EXCELLENT',
  GOOD = 'GOOD',
  SATISFACTORY = 'SATISFACTORY',
  NEEDS_IMPROVEMENT = 'NEEDS_IMPROVEMENT',
  POOR = 'POOR'
}

export enum BenchmarkRanking {
  TOP_QUARTILE = 'TOP_QUARTILE',
  ABOVE_AVERAGE = 'ABOVE_AVERAGE',
  AVERAGE = 'AVERAGE',
  BELOW_AVERAGE = 'BELOW_AVERAGE',
  BOTTOM_QUARTILE = 'BOTTOM_QUARTILE'
}

export enum CostDriverType {
  OVERTIME_PREMIUM = 'OVERTIME_PREMIUM',
  SKILL_SHORTAGE = 'SKILL_SHORTAGE',
  INEFFICIENCY = 'INEFFICIENCY',
  REWORK = 'REWORK',
  IDLE_TIME = 'IDLE_TIME',
  TRAINING_COSTS = 'TRAINING_COSTS',
  SAFETY_COMPLIANCE = 'SAFETY_COMPLIANCE',
  EQUIPMENT_DOWNTIME = 'EQUIPMENT_DOWNTIME'
}

export enum RecommendationCategory {
  PRODUCTIVITY_IMPROVEMENT = 'PRODUCTIVITY_IMPROVEMENT',
  COST_REDUCTION = 'COST_REDUCTION',
  OVERTIME_MANAGEMENT = 'OVERTIME_MANAGEMENT',
  CREW_OPTIMIZATION = 'CREW_OPTIMIZATION',
  TRAINING = 'TRAINING',
  PROCESS_IMPROVEMENT = 'PROCESS_IMPROVEMENT',
  TECHNOLOGY = 'TECHNOLOGY',
  SCHEDULING = 'SCHEDULING'
}

export enum RecommendationPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum RecommendationStatus {
  PROPOSED = 'PROPOSED',
  APPROVED = 'APPROVED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED'
}

export interface EquipmentCostReport {
  id: string;
  jobId: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  projectInfo: {
    name: string;
    phase: string;
    completionPercentage: number;
  };
  equipmentSummary: EquipmentSummary;
  equipmentAnalysis: EquipmentAnalysis[];
  utilizationAnalysis: UtilizationAnalysis;
  efficiencyMetrics: EquipmentEfficiencyMetrics;
  costAnalysis: EquipmentCostAnalysis;
  rentalAnalysis: RentalAnalysis;
  maintenanceAnalysis: MaintenanceAnalysis;
  performanceMetrics: EquipmentPerformanceMetrics;
  recommendations: EquipmentRecommendation[];
  preparedBy: string;
  reviewedBy?: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EquipmentSummary {
  totalEquipmentCount: number;
  ownedEquipmentCount: number;
  rentedEquipmentCount: number;
  totalEquipmentCost: number;
  rentalCost: number;
  maintenanceCost: number;
  fuelCost: number;
  averageUtilization: number;
  averageEfficiency: number;
  totalOperatingHours: number;
}

export interface EquipmentAnalysis {
  equipmentId: string;
  equipmentName: string;
  equipmentType: EquipmentType;
  category: EquipmentCategory;
  ownershipType: OwnershipType;
  operatingHours: number;
  availableHours: number;
  utilizationRate: number;
  efficiency: number;
  totalCost: number;
  costPerHour: number;
  rentalRate?: number;
  maintenanceCost: number;
  fuelCost: number;
  downtime: number;
  downtimeReasons: DowntimeReason[];
  performanceRating: PerformanceRating;
}

export interface DowntimeReason {
  reason: DowntimeReasonType;
  hours: number;
  cost: number;
  description: string;
}

export interface UtilizationAnalysis {
  overallUtilization: number;
  utilizationByCategory: CategoryUtilization[];
  utilizationTrends: UtilizationTrend[];
  underutilizedEquipment: UnderutilizedEquipment[];
  overutilizedEquipment: OverutilizedEquipment[];
  utilizationBenchmarks: UtilizationBenchmark;
}

export interface CategoryUtilization {
  category: EquipmentCategory;
  totalHours: number;
  operatingHours: number;
  utilizationRate: number;
  equipmentCount: number;
  averageCostPerHour: number;
}

export interface UtilizationTrend {
  period: string;
  utilizationRate: number;
  operatingHours: number;
  trend: TrendDirection;
}

export interface UnderutilizedEquipment {
  equipmentId: string;
  equipmentName: string;
  utilizationRate: number;
  potentialSavings: number;
  recommendation: string;
}

export interface OverutilizedEquipment {
  equipmentId: string;
  equipmentName: string;
  utilizationRate: number;
  riskLevel: RiskLevel;
  recommendation: string;
}

export interface UtilizationBenchmark {
  industryAverage: number;
  companyAverage: number;
  projectTarget: number;
  variance: number;
}

export interface EquipmentEfficiencyMetrics {
  overallEfficiency: number;
  efficiencyByCategory: CategoryEfficiency[];
  efficiencyTrends: EfficiencyTrend[];
  productivityMetrics: ProductivityMetrics;
  fuelEfficiency: FuelEfficiency;
}

export interface CategoryEfficiency {
  category: EquipmentCategory;
  efficiency: number;
  productivityIndex: number;
  fuelConsumption: number;
  maintenanceFrequency: number;
}

export interface ProductivityMetrics {
  unitsPerHour: number;
  costPerUnit: number;
  qualityIndex: number;
  reliabilityIndex: number;
}

export interface FuelEfficiency {
  totalFuelConsumption: number;
  fuelCostPerHour: number;
  fuelEfficiencyRating: number;
  fuelConsumptionTrend: TrendDirection;
}

export interface EquipmentCostAnalysis {
  budgetedCost: number;
  actualCost: number;
  costVariance: number;
  costVariancePercentage: number;
  costBreakdown: CostBreakdown;
  costTrends: CostTrend[];
  costDrivers: EquipmentCostDriver[];
}

export interface CostBreakdown {
  rentalCosts: number;
  maintenanceCosts: number;
  fuelCosts: number;
  operatorCosts: number;
  insuranceCosts: number;
  depreciationCosts: number;
  otherCosts: number;
}

export interface EquipmentCostDriver {
  driver: EquipmentCostDriverType;
  impact: number;
  percentage: number;
  description: string;
}

export interface RentalAnalysis {
  totalRentalCost: number;
  rentalVsOwnership: RentalVsOwnership[];
  rentalRateAnalysis: RentalRateAnalysis[];
  rentalEfficiency: RentalEfficiency;
  rentalRecommendations: string[];
}

export interface RentalVsOwnership {
  equipmentType: EquipmentType;
  rentalCost: number;
  ownershipCost: number;
  breakEvenPoint: number;
  recommendation: OwnershipRecommendation;
  justification: string;
}

export interface RentalRateAnalysis {
  vendor: string;
  equipmentType: EquipmentType;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  marketRate: number;
  variance: number;
  rating: VendorRating;
}

export interface RentalEfficiency {
  utilizationRate: number;
  costEffectiveness: number;
  flexibilityBenefit: number;
  maintenanceReduction: number;
}

export interface MaintenanceAnalysis {
  totalMaintenanceCost: number;
  preventiveMaintenance: number;
  correctiveMaintenance: number;
  emergencyMaintenance: number;
  maintenanceFrequency: MaintenanceFrequency[];
  maintenanceTrends: MaintenanceTrend[];
  maintenanceEfficiency: number;
}

export interface MaintenanceFrequency {
  equipmentType: EquipmentType;
  scheduledMaintenance: number;
  unscheduledMaintenance: number;
  averageCost: number;
  frequency: number;
}

export interface MaintenanceTrend {
  period: string;
  cost: number;
  frequency: number;
  trend: TrendDirection;
}

export interface EquipmentPerformanceMetrics {
  reliability: number;
  availability: number;
  maintainability: number;
  overallEquipmentEffectiveness: number;
  performanceByCategory: CategoryPerformance[];
  benchmarkComparison: PerformanceBenchmark;
}

export interface CategoryPerformance {
  category: EquipmentCategory;
  reliability: number;
  availability: number;
  efficiency: number;
  costPerformance: number;
}

export interface PerformanceBenchmark {
  industryStandard: number;
  companyAverage: number;
  bestInClass: number;
  currentPerformance: number;
  improvementPotential: number;
}

export interface EquipmentRecommendation {
  category: EquipmentRecommendationCategory;
  priority: RecommendationPriority;
  equipmentId?: string;
  description: string;
  expectedBenefit: string;
  implementationCost: number;
  paybackPeriod: number;
  riskLevel: RiskLevel;
  owner: string;
  targetDate: Date;
  status: RecommendationStatus;
}

export enum EquipmentType {
  EXCAVATOR = 'EXCAVATOR',
  BULLDOZER = 'BULLDOZER',
  CRANE = 'CRANE',
  LOADER = 'LOADER',
  DUMP_TRUCK = 'DUMP_TRUCK',
  CONCRETE_MIXER = 'CONCRETE_MIXER',
  COMPACTOR = 'COMPACTOR',
  GENERATOR = 'GENERATOR',
  PUMP = 'PUMP',
  FORKLIFT = 'FORKLIFT',
  SCAFFOLDING = 'SCAFFOLDING',
  TOOLS = 'TOOLS',
  OTHER = 'OTHER'
}

export enum EquipmentCategory {
  EARTHMOVING = 'EARTHMOVING',
  LIFTING = 'LIFTING',
  HAULING = 'HAULING',
  CONCRETE = 'CONCRETE',
  COMPACTION = 'COMPACTION',
  POWER_GENERATION = 'POWER_GENERATION',
  MATERIAL_HANDLING = 'MATERIAL_HANDLING',
  SAFETY = 'SAFETY',
  TOOLS = 'TOOLS',
  OTHER = 'OTHER'
}

export enum OwnershipType {
  OWNED = 'OWNED',
  RENTED = 'RENTED',
  LEASED = 'LEASED'
}

export enum DowntimeReasonType {
  SCHEDULED_MAINTENANCE = 'SCHEDULED_MAINTENANCE',
  BREAKDOWN = 'BREAKDOWN',
  WEATHER = 'WEATHER',
  NO_WORK_AVAILABLE = 'NO_WORK_AVAILABLE',
  OPERATOR_UNAVAILABLE = 'OPERATOR_UNAVAILABLE',
  FUEL_SHORTAGE = 'FUEL_SHORTAGE',
  REPAIR = 'REPAIR',
  INSPECTION = 'INSPECTION',
  OTHER = 'OTHER'
}

export enum RiskLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum OwnershipRecommendation {
  RENT = 'RENT',
  BUY = 'BUY',
  LEASE = 'LEASE',
  EVALUATE = 'EVALUATE'
}

export enum VendorRating {
  EXCELLENT = 'EXCELLENT',
  GOOD = 'GOOD',
  FAIR = 'FAIR',
  POOR = 'POOR'
}

export enum EquipmentCostDriverType {
  FUEL_COSTS = 'FUEL_COSTS',
  MAINTENANCE_COSTS = 'MAINTENANCE_COSTS',
  RENTAL_RATES = 'RENTAL_RATES',
  OPERATOR_COSTS = 'OPERATOR_COSTS',
  DOWNTIME = 'DOWNTIME',
  INEFFICIENCY = 'INEFFICIENCY',
  OVERUTILIZATION = 'OVERUTILIZATION',
  UNDERUTILIZATION = 'UNDERUTILIZATION'
}

export enum EquipmentRecommendationCategory {
  COST_REDUCTION = 'COST_REDUCTION',
  UTILIZATION_IMPROVEMENT = 'UTILIZATION_IMPROVEMENT',
  EFFICIENCY_ENHANCEMENT = 'EFFICIENCY_ENHANCEMENT',
  MAINTENANCE_OPTIMIZATION = 'MAINTENANCE_OPTIMIZATION',
  RENTAL_OPTIMIZATION = 'RENTAL_OPTIMIZATION',
  REPLACEMENT = 'REPLACEMENT',
  ACQUISITION = 'ACQUISITION',
  DISPOSAL = 'DISPOSAL'
}