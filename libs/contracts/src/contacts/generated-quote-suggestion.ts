// libs/contracts/src/contacts/generated-quote-suggestion.ts
export interface IGeneratedQuoteSuggestion {
  orgId?: string;
  equipmentRequestId?: string;
  vendorId?: string;
  vendorName?: string;
  equipmentType?: string;
  contactEmail?: string;
  equipmentModel?: string;
  rate?: number;
  rateUnit?: string;
  availability?: boolean;
  estimatedDeliveryDays?: number;
  quoteValidityDate?: Date;
  notes?: string;
}