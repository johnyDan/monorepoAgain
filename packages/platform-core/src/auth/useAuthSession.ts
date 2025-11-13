// Stubbed auth session for UI development. Real Okta integration will replace this.
export type AuthSession = {
  isAuthenticated: boolean;
  user?: { id: string; name: string };
  token?: string;
};

let session: AuthSession = { isAuthenticated: true, user: { id: 'u1', name: 'Demo User' } };

export function getAuthSession(): AuthSession {
  return session;
}

export function setAuthSession(next: AuthSession) {
  session = next;
}