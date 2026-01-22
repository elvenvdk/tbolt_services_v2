import { registerEnumType } from '@nestjs/graphql';

export enum TaskDependencyType {
  FS = 'FS', // Finish-to-Start
  SS = 'SS', // Start-to-Start
  FF = 'FF', // Finish-to-Finish
  SF = 'SF', // Start-to-Finish
}

export enum TaskHealth {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}

export enum TaskCategory {
  GENERAL = 'General',
  STRUCTURAL = 'Structural',
  FINISHING = 'Finishing',
  ELECTRICAL = 'Electrical',
  MECHANICAL = 'Mechanical',
  PLUMBING = 'Plumbing',
}

export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical',
}

export enum TaskStatus {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  BLOCKED = 'Blocked',
  COMPLETE = 'Complete',
}



export enum TaskRiskLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export const registerTaskEnums = () => {
  registerEnumType(TaskDependencyType, { name: 'TaskDependencyType' });
  registerEnumType(TaskHealth, { name: 'TaskHealth' });
  registerEnumType(TaskCategory, { name: 'TaskCategory' });
  registerEnumType(TaskPriority, { name: 'TaskPriority' });
  registerEnumType(TaskRiskLevel, { name: 'TaskRiskLevel' });
  registerEnumType(TaskStatus, { name: 'TaskStatus' });
};