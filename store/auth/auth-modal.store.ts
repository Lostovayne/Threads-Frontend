// /src/store/test/test.store.ts
import HeartIcon from "@/components/features/posts/icons/heart";
import {
  AuthModal,
  AuthModalActivateType,
} from "@/interfaces/auth/auth-modal.interface";
import { info } from "console";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  isOpen: boolean;
  infoModal: AuthModal;
  setIsOpen: () => void;
  setInfoModal: (infoModal: AuthModal) => void;
}

export const useAuthModalStore = create<State>()(
  persist(
    (set) => ({
      isOpen: false,
      setIsOpen: () => {
        set({ isOpen: !useAuthModalStore.getState().isOpen });
      },

      infoModal: {
        title: "",
        description: "",
        icon: "heart",
        iconColor: "",
        textButton: "",
        iconButton: "heart",
      },

      setInfoModal: (infoModal: AuthModal) =>
        set((state) => ({ infoModal: { ...state.infoModal, ...infoModal } })),
    }),

    {
      name: "auth-modal-storage",
    }
  )
);
