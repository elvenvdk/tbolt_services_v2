// counter.service.ts
import { Injectable } from '@nestjs/common';
import { CounterRepository } from './counter.repository';

type Scope = 'ORD' | 'REQ' | 'QT' | 'USE' | 'RET' | 'TS' | 'PER' | 'SAF' | 'QC' | 'INS' | 'INC' | 'INVG' | 'RPT' | 'EQ' | 'DL' | 'ML' | 'ER' | 'SI' | 'HR' | 'INV' | 'TPL' | 'BIM' | 'DWG' | 'BGT' | 'JOB' | 'VEN' | 'SUB' | 'MT' | 'ADOC' | 'ESIG' | 'DBAK' | 'FPROG' | 'ES' | 'CM' | 'NT' | 'CUR' | 'CH' | 'JOB' | 'CO' | 'OC' | 'OS' | 'SC' | 'PE' | 'LT' | 'VC' | 'SR' | 'EE'
  | 'RPT'
  | 'DPR' // Daily Progress Report
  | 'DSR' // Daily Safety Report
  | 'DMR' // Daily Material Report
  | 'DER' // Daily Equipment Report
  | 'DLR' // Daily Labor Report
  | 'JE' // Journal Entry
  | 'TXM' // Transmittal
  | 'DOC'; // Document Control

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