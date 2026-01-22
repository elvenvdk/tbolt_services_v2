export interface WeatherEvent {
  id: string;
  date: Date;
  weatherType: 'rain' | 'snow' | 'ice' | 'wind' | 'extreme-heat' | 'extreme-cold' | 'fog' | 'thunderstorm' | 'hurricane' | 'tornado';
  severity: 'minor' | 'moderate' | 'severe' | 'extreme';
  duration: number;
  temperature: number;
  precipitation: number;
  windSpeed: number;
  humidity: number;
  visibility: number;
  workStoppageHours: number;
  affectedActivities: string[];
  productivityImpact: number;
  safetyImpact: 'none' | 'low' | 'medium' | 'high' | 'critical';
  costImpact: number;
  recoveryActions: string[];
  documentation: string[];
}

export interface ProductivityImpact {
  activity: string;
  normalProductivity: number;
  actualProductivity: number;
  productivityLoss: number;
  weatherFactor: number;
  crewSize: number;
  hoursAffected: number;
  costImpact: number;
  mitigationMeasures: string[];
}

export interface WeatherImpactReport {
  projectId: string;
  projectName: string;
  reportDate: Date;
  reportingPeriod: {
    startDate: Date;
    endDate: Date;
  };
  meteorologist?: {
    name: string;
    organization: string;
  };
  preparedBy: {
    name: string;
    title: string;
    organization: string;
  };
  
  weatherSummary: {
    totalWeatherEvents: number;
    totalDelayDays: number;
    totalWorkStoppageHours: number;
    averageProductivityLoss: number;
    severeWeatherDays: number;
    workableDays: number;
    totalWorkingDays: number;
  };
  
  weatherEvents: WeatherEvent[];
  
  weatherByType: {
    rain: WeatherEvent[];
    snow: WeatherEvent[];
    ice: WeatherEvent[];
    wind: WeatherEvent[];
    extremeHeat: WeatherEvent[];
    extremeCold: WeatherEvent[];
    fog: WeatherEvent[];
    thunderstorm: WeatherEvent[];
    hurricane: WeatherEvent[];
    tornado: WeatherEvent[];
  };
  
  productivityImpacts: ProductivityImpact[];
  
  scheduleImpact: {
    totalDelayDays: number;
    criticalPathDelays: number;
    milestoneDelays: {
      milestoneName: string;
      originalDate: Date;
      revisedDate: Date;
      weatherDelayDays: number;
    }[];
    recoveryPlan: string;
    makeupStrategies: string[];
  };
  
  costAnalysis: {
    totalWeatherCosts: number;
    directCosts: number;
    indirectCosts: number;
    productivityLossCosts: number;
    equipmentIdleCosts: number;
    laborIdleCosts: number;
    accelerationCosts: number;
    protectionCosts: number;
  };
  
  seasonalAnalysis: {
    spring: {
      events: number;
      delayDays: number;
      productivityLoss: number;
    };
    summer: {
      events: number;
      delayDays: number;
      productivityLoss: number;
    };
    fall: {
      events: number;
      delayDays: number;
      productivityLoss: number;
    };
    winter: {
      events: number;
      delayDays: number;
      productivityLoss: number;
    };
  };
  
  mitigationMeasures: {
    implemented: string[];
    planned: string[];
    effectiveness: string[];
  };
  
  forecast: {
    nextPeriodRisk: 'low' | 'medium' | 'high' | 'extreme';
    anticipatedImpacts: string[];
    preparationActions: string[];
  };
  
  recommendations: string[];
  lessonsLearned: string[];
}