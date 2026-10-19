import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand, disclaimer, nav, tx } from "@/lib/content";
import { useLang, type Lang } from "@/lib/i18n";

const linkClass =
  "text-sm text-ink-soft transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass";

export function Shell({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:bg-card focus:px-4 focus:py-2"
      >
        {tx(lang, { en: "Skip to content", ur: "مواد پر جائیں" })}
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-brass font-display text-sm text-ink">
              AHK
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg text-ink">{brand.name}</span>
              <span className="block text-xs tracking-wide text-muted">
                {tx(lang, { en: "Visa guidance · Islamabad", ur: "ویزا رہنمائی · اسلام آباد" })}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                className={linkClass}
                activeProps={{ className: `${linkClass} text-brass` }}
              >
                {tx(lang, item.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LangSwitch lang={lang} setLang={setLang} />
            <Link
              to="/contact"
              className="hidden min-h-11 items-center rounded-full bg-brass px-4 text-sm font-medium text-ink transition-colors hover:bg-brass-soft sm:inline-flex"
            >
              {tx(lang, { en: "Book a review", ur: "جائزہ بک کریں" })}
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
              aria-expanded={open}
              aria-label={tx(lang, { en: "Menu", ur: "مینو" })}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-line bg-paper px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="min-h-11 rounded-xl px-3 py-2 text-ink hover:bg-parchment"
                >
                  {tx(lang, item.label)}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-brass px-4 text-sm font-medium text-ink"
              >
                {tx(lang, { en: "Book a review", ur: "جائزہ بک کریں" })}
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl">{brand.legal}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-parchment/80">{tx(lang, disclaimer)}</p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-brass-soft uppercase">
              {tx(lang, { en: "Visit", ur: "صفحات" })}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-parchment hover:text-brass-soft">
                    {tx(lang, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest text-brass-soft uppercase">
              {tx(lang, { en: "Office", ur: "دفتر" })}
            </p>
            <p className="mt-4 text-sm text-parchment">{tx(lang, brand.city)}</p>
            <p className="mt-2 text-sm text-parchment/80">{tx(lang, brand.hours)}</p>
            <a className="mt-3 inline-block text-sm text-brass-soft hover:underline" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
          </div>
        </div>
        <div className="border-t border-navy px-5 py-4 text-center text-xs text-parchment/60">
          © {new Date().getFullYear()} {brand.legal}
        </div>
      </footer>
    </div>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="flex rounded-full border border-line p-1 text-xs" role="group" aria-label="Language">
      {(
        [
          ["en", "EN"],
          ["ur", "اردو"],
        ] as const
      ).map(([code, label]) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`min-h-9 rounded-full px-3 ${lang === code ? "bg-ink text-paper" : "text-ink-soft"}`}
          aria-pressed={lang === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line bg-parchment">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-xs tracking-widest text-brass uppercase">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{lede}</p>
      </div>
    </section>
  );
}

export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-colors hover:bg-brass-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

export const btnGhost =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-card px-5 text-sm font-medium text-ink transition-colors hover:border-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";
