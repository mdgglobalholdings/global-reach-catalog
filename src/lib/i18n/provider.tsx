import { useState, useEffect, type ReactNode } from "react";
import { LangContext, translations, getLangFromPath, type Lang } from "./index";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    // Détecter la langue depuis l'URL d'abord, puis localStorage
    const pathLang = getLangFromPath(window.location.pathname);
    const stored = localStorage.getItem("mdg_lang") as Lang | null;
    const initial = pathLang === "en" ? "en" : (stored ?? "fr");
    setLangState(initial);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("mdg_lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}
