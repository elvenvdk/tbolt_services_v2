// libs/contracts/src/budgets/create-equipment-request.dto.ts
export interface CreateEquipmentRequestDto {
  orgId: string;
  jobId?: string;
  taskId?: string;
  requestNumber?: string;
  requestedBy?: string;
  equipmentType?: string;
  quantity?: number;
  startDate?: string;
  endDate?: string;
  deliveryLocation?: string;
  purpose?: string;
  priority?: string;
  status?: string;
}