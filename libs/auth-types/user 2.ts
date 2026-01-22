// libs/auth-types/src/user.ts
export interface AuthUser {
  _id: string;
  email: string;
  orgId: string;
  roles?: string[];
  name?: string;
}