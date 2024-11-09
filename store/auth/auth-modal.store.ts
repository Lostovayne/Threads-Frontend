// /src/store/test/test.store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const useAuthModalStore = create<State>()(
  persist(
    (set) => ({
      isOpen: false,
      setIsOpen: () => {
        set({ isOpen: !useAuthModalStore.getState().isOpen });
      },
    }),
    {
      name: "auth-modal-storage",
    }
  )
);
