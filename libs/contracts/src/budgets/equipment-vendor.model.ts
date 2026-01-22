// libs/contracts/src/budgets/equipment-vendor.model.ts
export interface EquipmentVendor {
  _id?: string;
  orgId: string;
  jobId?: string;
  name: string;
  contactName?: string;
  email?: string;
  phone?: string;
  equipmentTypes?: string[];
  deliveryZones?: string;
  address?: string;
  website?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}