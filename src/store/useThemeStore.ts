import { create } from "zustand";

type ThemeState = {
  isNight: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  isNight: false,
  toggleTheme: () => set((state) => ({ isNight: !state.isNight })),
}));
