import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark' | 'gamer' | 'hacker' | 'cartoon' | 'vegetable' | 'dreamhouse' | 'luxury' | 'universal' | 'cyberpunk';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'cartoon',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
)
