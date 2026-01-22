// -----------------------------------------------
// common/enums/labor.enums.ts
// -----------------------------------------------
import { registerEnumType } from '@nestjs/graphql';

export enum RateUnit {
  PER_HOUR = 'PER_HOUR',
  PER_WEEK = 'PER_WEEK',
  PER_MONTH = 'PER_MONTH',
}

export enum FringeAllocationMethod {
  CASH_IN_LIEU = 'CASH_IN_LIEU',
  BONA_FIDE_BENEFITS = 'BONA_FIDE_BENEFITS',
  MIXED = 'MIXED',
}

export enum BasisType {
  PERCENT_OF_PAYROLL = 'PERCENT_OF_PAYROLL',
  DOLLAR_PER_HOUR = 'DOLLAR_PER_HOUR',
  DOLLAR_PER_EMPLOYEE_PERIOD = 'DOLLAR_PER_EMPLOYEE_PERIOD',
  DOLLAR_PER_100_PAYROLL = 'DOLLAR_PER_100_PAYROLL',
}

export enum WCBaseType {
  PER_100_PAYROLL = 'PER_100_PAYROLL', // most states
  PER_HOUR = 'PER_HOUR', // monopolistic states like WA/ND
}

export enum PremiumType {
  SHIFT = 'SHIFT',
  FOREMAN = 'FOREMAN',
  LEAD = 'LEAD',
  HAZARD = 'HAZARD',
  ON_CALL = 'ON_CALL',
  OTHER = 'OTHER',
}

registerEnumType(RateUnit, { name: 'RateUnit' });
registerEnumType(FringeAllocationMethod, { name: 'FringeAllocationMethod' });
registerEnumType(BasisType, { name: 'BasisType' });
registerEnumType(WCBaseType, { name: 'WCBaseType' });
registerEnumType(PremiumType, { name: 'PremiumType' });
