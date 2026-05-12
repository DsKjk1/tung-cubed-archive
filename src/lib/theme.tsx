import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "cyber" | "light" | "vintage";

interface ThemeCtx {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const Ctx = createContext<ThemeCtx>({ theme: "cyber", setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("cyber");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("tung-theme")) as Theme | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-vintage");
    if (theme === "light") root.classList.add("theme-light");
    if (theme === "vintage") root.classList.add("theme-vintage");
    localStorage.setItem("tung-theme", theme);
  }, [theme]);

  return <Ctx.Provider value={{ theme, setTheme }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
