"use client";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { createSelectors } from "./selector";
import { User } from "@/types";

type UserStoreState = {
  user: User | null;
};

type UserStoreActions = {
  setUser: (user: User) => void;
  removeUser: () => void;
};

type UserStore = UserStoreState & UserStoreActions;

export const useUserStoreBase = create<UserStore>()(
  persist(
    immer((set) => ({
      user: null,
      setUser: (user: User) =>
        set((state) => {
          state.user = user;
        }),
      removeUser: () =>
        set((state) => {
          state.user = null;
        }),
    })),
    { name: "user-storage" }
  )
);

export const useUserStore = createSelectors(useUserStoreBase);
