
export interface UserData {
  id: number;
  email: string;
  role: 'admin' | 'user';
  name?: string;
}

export class User {
  static async me(): Promise<UserData | null> {
    // Mock implementation - replace with actual Supabase auth
    // For now, return null to indicate no user is logged in
    return null;
  }
}
