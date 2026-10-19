import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Shell } from "@/components/site/Shell";
import { services, tx } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Visa services · AHK Consultancy" },
      {
        name: "description",
        content: "Visit, tourist, family, student, work, and business visa file preparation in Islamabad.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { lang } = useLang();
  return (
    <Shell>
      <PageHero
        kicker={tx(lang, { en: "Services", ur: "خدمات" })}
        title={tx(lang, { en: "Pick the pathway that matches the trip.", ur: "وہ راستہ چنیں جو سفر سے میل کھائے۔" })}
        lede={tx(lang, {
          en: "Each service below is a way of preparing papers. It is not a visa product you can buy off a shelf.",
          ur: "نیچے ہر خدمت کاغذات تیار کرنے کا طریقہ ہے۔ یہ شیلف سے خریدے جانے والا ویزا نہیں۔",
        })}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-14 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="group rounded-card border border-line bg-card p-7 transition-colors hover:border-brass"
          >
            <h2 className="font-display text-3xl text-ink">{tx(lang, service.title)}</h2>
            <p className="mt-3 text-muted">{tx(lang, service.lead)}</p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm text-brass">
              {tx(lang, { en: "Documents and fit", ur: "دستاویزات اور موزونیت" })}
              <ArrowUpRight size={16} />
            </span>
          </Link>
        ))}
      </section>
    </Shell>
  );
}
