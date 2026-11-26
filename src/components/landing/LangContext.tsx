"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { COPY, type Copy, type Lang } from "@/lib/i18n";
import { PATHS } from "@/lib/site";

type LangCtx = { lang: Lang; t: Copy; setLang: (l: Lang) => void };

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({
  initialLang,
  paths = PATHS.home,
  children,
}: {
  initialLang: Lang;
  /** URL de cada idioma para la página actual (se actualiza al cambiar de idioma). */
  paths?: Record<Lang, string>;
  children: ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    // Cambio instantáneo sin recargar; la URL queda compartible (/ o /en).
    const url = paths[l] + window.location.search + window.location.hash;
    window.history.replaceState(window.history.state, "", url);
  }, [paths]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, t: COPY[lang], setLang }), [lang, setLang]);
  return (
    <Ctx.Provider value={value}>
      {/* `lang` correcto desde el HTML del servidor también en /en. */}
      <div lang={lang} style={{ display: "contents" }}>
        {children}
      </div>
    </Ctx.Provider>
  );
}

export function useLang(): LangCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLang debe usarse dentro de <LangProvider>");
  return v;
}
