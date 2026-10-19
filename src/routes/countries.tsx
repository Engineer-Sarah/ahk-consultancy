import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Shell } from "@/components/site/Shell";
import { destinations, kindLabel, services, tx, type VisaKind } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/countries")({
  head: () => ({
    meta: [
      { title: "Countries · AHK Consultancy" },
      {
        name: "description",
        content: "Destinations AHK prepares visit, study, work, family, and business files for.",
      },
    ],
  }),
  component: CountriesPage,
});

const filters: Array<VisaKind | "all"> = ["all", "visit", "tourist", "family", "student", "work", "business"];

function CountriesPage() {
  const { lang } = useLang();
  const [filter, setFilter] = useState<VisaKind | "all">("all");
  const visible = destinations.filter((item) => filter === "all" || item.kinds.includes(filter));

  return (
    <Shell>
      <PageHero
        kicker={tx(lang, { en: "Countries", ur: "ممالک" })}
        title={tx(lang, { en: "Where the checklist changes.", ur: "جہاں چیک لسٹ بدل جاتی ہے۔" })}
        lede={tx(lang, {
          en: "Rules are not the same in Ottawa and Abu Dhabi. Filter by the kind of trip, then open the matching service.",
          ur: "اوٹاوا اور ابوظہبی کے قواعد ایک نہیں۔ سفر کی قسم سے چھانیں، پھر متعلقہ خدمت کھولیں۔",
        })}
      />
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label={tx(lang, { en: "Filter", ur: "فلٹر" })}>
          {filters.map((item) => {
            const label =
              item === "all" ? tx(lang, { en: "All", ur: "سب" }) : tx(lang, kindLabel[item]);
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item)}
                className={`min-h-11 rounded-full px-4 text-sm ${active ? "bg-ink text-paper" : "border border-line bg-card text-ink"}`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((place) => (
            <article key={place.id} className="rounded-card border border-line bg-card p-6">
              <p className="text-xs tracking-wide text-brass uppercase">{tx(lang, place.region)}</p>
              <h2 className="mt-2 font-display text-3xl text-ink">{tx(lang, place.name)}</h2>
              <p className="mt-2 text-sm text-muted">{tx(lang, place.note)}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {place.kinds.map((kind) => (
                  <Link
                    key={kind}
                    to="/services/$slug"
                    params={{ slug: kind }}
                    className="rounded-full bg-parchment px-3 py-1 text-xs text-ink hover:bg-brass"
                  >
                    {tx(lang, kindLabel[kind])}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="mt-8 text-muted">{tx(lang, { en: "Nothing in this filter.", ur: "اس فلٹر میں کچھ نہیں۔" })}</p>
        ) : null}
        <p className="mt-10 text-sm text-muted">
          {tx(lang, {
            en: `${services.length} pathways · embassy rules change. This list is a map of what we prepare, not an official government menu.`,
            ur: `${services.length} راستے · سفارت کے قواعد بدلتے ہیں۔ یہ فہرست ہماری تیاری کا نقشہ ہے، سرکاری مینو نہیں۔`,
          })}
        </p>
      </section>
    </Shell>
  );
}
