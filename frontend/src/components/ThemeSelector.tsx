import React from 'react';
import { useThemeStore } from '../store/themeStore';

const themes = [
  { id: 'gamer', name: 'Gamer (Neon)' },
  { id: 'hacker', name: 'Hacker (Matrix)' },
  { id: 'light', name: 'Light' },
  { id: 'dark', name: 'Dark' },
  { id: 'cartoon', name: 'Cartoon' },
  { id: 'vegetable', name: 'Vegetable' },
  { id: 'dreamhouse', name: 'Dream House' },
  { id: 'luxury', name: 'Luxury' },
  { id: 'universal', name: 'Universal Modern' },
  { id: 'cyberpunk', name: 'Cyberpunk' },
] as const;

const ThemeSelector = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="bg-panel p-6 rounded-2xl shadow-xl border border-secondary/20 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
        <span className="bg-primary w-2 h-8 rounded-full block"></span> Select Theme
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id as any)}
            className={`px-4 py-3 rounded-xl border-2 transition-all duration-300 font-medium text-sm
              ${theme === t.id 
                ? 'border-primary bg-primary/10 text-primary scale-105 shadow-lg shadow-primary/20' 
                : 'border-secondary/30 text-foreground hover:border-primary/50 hover:bg-secondary/5'}`}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
