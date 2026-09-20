import { useContext, useState, useEffect } from "react";
import { fr } from "./fr";
import { en } from "./en";

export type Lang = "fr" | "en";
export const translations = { fr, en };

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof fr;
}

import { createContext } from "react";
export const LangContext = createContext<LangContextType>({
  lang: "fr",
  setLang: () => {},
  t: fr,
});

export function useLang() {
  return useContext(LangContext);
}

// URL mapping FR <-> EN
export const ROUTE_MAP: Record<string, Record<Lang, string>> = {
  "/": { fr: "/", en: "/" },
  "/a-propos": { fr: "/a-propos", en: "/about" },
  "/about": { fr: "/a-propos", en: "/about" },
  "/activites": { fr: "/activites", en: "/activities" },
  "/activities": { fr: "/activites", en: "/activities" },
  "/services": { fr: "/services", en: "/logistics" },
  "/logistics": { fr: "/services", en: "/logistics" },
  "/assistance-visa": { fr: "/assistance-visa", en: "/mobility" },
  "/mobility": { fr: "/assistance-visa", en: "/mobility" },
  "/contact": { fr: "/contact", en: "/contact" },
  "/mentions-legales": { fr: "/mentions-legales", en: "/legal-notice" },
  "/legal-notice": { fr: "/mentions-legales", en: "/legal-notice" },
  "/politique-confidentialite": { fr: "/politique-confidentialite", en: "/privacy-policy" },
  "/privacy-policy": { fr: "/politique-confidentialite", en: "/privacy-policy" },
  "/conditions-utilisation": { fr: "/conditions-utilisation", en: "/terms-of-use" },
  "/terms-of-use": { fr: "/conditions-utilisation", en: "/terms-of-use" },
};

export function getLangFromPath(path: string): Lang {
  const enPaths = ["/about", "/activities", "/logistics", "/mobility", "/legal-notice", "/privacy-policy", "/terms-of-use"];
  if (enPaths.some(p => path === p || path.startsWith(p + "/"))) return "en";
  return "fr";
}
