import { create } from 'zustand';

export type UserProfile = {
  id: string;
  name: string;
  email?: string;
};

type State = {
  profile?: UserProfile;
};

type Actions = {
  setProfile: (p?: UserProfile) => void;
  reset: () => void;
};

export const useUserProfileStore = create<State & Actions>((set) => ({
  profile: undefined,
  setProfile: (p) => set({ profile: p }),
  reset: () => set({ profile: undefined })
}));

export const selectUserName = (s: State) => s.profile?.name ?? 'Guest';