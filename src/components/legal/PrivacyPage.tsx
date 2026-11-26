import Image from "next/image";
import logoWhite from "@/assets/brand/grupo-stf-white.png";
import { CircleLink, Eyebrow } from "@/components/ds";
import { Footer } from "@/components/landing/Footer";
import { LangProvider } from "@/components/landing/LangContext";
import { COPY, LANGS, type Lang } from "@/lib/i18n";
import { PATHS, SITE } from "@/lib/site";
import { currentYear } from "@/lib/year";
import { privacySections } from "./privacyContent";
import l from "./legal.module.css";

const HEAD: Record<Lang, { title: string; emph: string; lead: string; toc: string }> = {
  es: {
    title: "Aviso de",
    emph: "privacidad.",
    lead: "En Grupo STF respetamos tu privacidad. Este aviso explica qué datos personales recabamos a través de este sitio, para qué los usamos y cómo puedes ejercer tus derechos.",
    toc: "Contenido",
  },
  en: {
    title: "Privacy",
    emph: "notice.",
    lead: "At Grupo STF we respect your privacy. This notice explains what personal data we collect through this website, what we use it for and how you can exercise your rights.",
    toc: "Contents",
  },
};

export async function PrivacyPage({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const head = HEAD[lang];
  const sections = privacySections(lang);
  const year = await currentYear();
  const home = PATHS.home[lang];

  return (
    <LangProvider initialLang={lang} paths={PATHS.privacy}>
      <header className={l.bar}>
        <a href={home} className={l.logo} aria-label={`Grupo STF — ${t.backHome}`}>
          <Image src={logoWhite} alt="Grupo STF" className={l.logoImg} sizes="90px" />
        </a>
        <div className={l.barRight}>
          <nav className={l.langs} aria-label={t.langLabel}>
            {LANGS.map((code, i) => (
              <span key={code} className={l.langItem}>
                {i > 0 && <span className={l.langSep} aria-hidden="true" />}
                <a
                  href={PATHS.privacy[code]}
                  hrefLang={code}
                  lang={code}
                  className={l.langLink}
                  aria-current={code === lang ? "page" : undefined}
                >
                  {code.toUpperCase()}
                </a>
              </span>
            ))}
          </nav>
          <CircleLink href={home} label={t.backHome} aria-label={t.backHome} icon="←" className={l.back} />
        </div>
      </header>

      <main>
        <section className={l.hero} aria-labelledby="legal-title">
          <Eyebrow rule tone="gold">
            {t.legalEyebrow}
          </Eyebrow>
          <h1 id="legal-title" className={l.title}>
            {head.title} <em>{head.emph}</em>
          </h1>
          <p className={l.updated}>
            {t.updated}: {SITE.legal.updated[lang]}
          </p>
          <p className={l.lead}>{head.lead}</p>
        </section>

        <div className={l.body}>
          <nav className={l.toc} aria-label={head.toc}>
            <p className={l.tocTitle}>{head.toc}</p>
            <ol>
              {sections.map((sec, i) => (
                <li key={sec.id}>
                  <a href={`#${sec.id}`}>
                    <span className={l.tocNum}>{String(i + 1).padStart(2, "0")}</span>
                    {sec.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className={l.article}>
            {sections.map((sec, i) => (
              <section key={sec.id} id={sec.id} className={l.section} aria-labelledby={`${sec.id}-h`}>
                <h2 id={`${sec.id}-h`} className={l.h2}>
                  <span className={l.num} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {sec.title}
                </h2>
                <div className={l.prose}>{sec.body}</div>
              </section>
            ))}
          </article>
        </div>
      </main>

      <Footer year={year} />
    </LangProvider>
  );
}
