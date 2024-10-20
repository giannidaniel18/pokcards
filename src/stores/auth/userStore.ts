import { create } from "zustand";

type State = {
  userName: string | null;
  firstName: string | null;
  lastName: string | null;
};

type Action = {
  updateFirstName: (firstName: State["firstName"]) => void;
  updateLastName: (lastName: State["lastName"]) => void;
  updateUserName: (userName: State["userName"]) => void;
};

// Create your store, which includes both state and (optionally) actions
const useUserStore = create<State & Action>((set) => ({
  firstName: null,
  lastName: null,
  userName: null,
  updateUserName: (userName) => set(() => ({ userName: userName })),
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

export default useUserStore;
