// libs/auth-types/src/user.ts
export interface AuthUser {
  _id: string;
  email: string;
  orgId: string;
  role?: string; // Role as string to avoid import issues
  teamIds?: string[];
  roles?: string[]; // Legacy field for backward compatibility
  name?: string;
}