// counter.service.ts
import { Injectable } from '@nestjs/common';
import { CounterRepository } from './counter.repository';

type Scope = 'ORD' | 'REQ' | 'QT' | 'USE' | 'RET' | 'TS' | 'PER' | 'SAF' | 'QC' | 'INS' | 'INC' | 'RPT' | 'EQ' | 'DL' | 'ML' | 'ER' | 'SI' | 'HR' | 'INV';

@Injectable()
export class CounterService {
  constructor(private readonly counterRepo: CounterRepository) { }

  async next(scope: Scope, orgId: string, date = new Date()) {
    const year = date.getUTCFullYear();
    const key = `${scope}:${orgId}:${year}`;

    const doc = await this.counterRepo
      .findOneAndUpdate({ key }, { $inc: { seq: 1 } }, { upsert: true, new: true })
      .lean();

    // Shouldn't be null with upsert+new, but guard anyway:
    const seq = doc?.seq ?? 1;
    const code = `${scope}-${year}-${String(seq).padStart(5, '0')}`;
    return { seq, code };
  }
}