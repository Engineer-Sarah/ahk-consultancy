import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell, btnPrimary } from "@/components/site/Shell";
import { disclaimer, services, tx } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);
    return {
      meta: [
        { title: service ? `${service.title.en} · AHK Consultancy` : "Service · AHK Consultancy" },
        { name: "description", content: service?.blurb.en ?? "Visa file preparation." },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <Shell>
        <section className="mx-auto max-w-3xl px-5 py-24">
          <h1 className="font-display text-4xl">{tx(lang, { en: "That pathway is not listed.", ur: "یہ راستہ درج نہیں۔" })}</h1>
          <Link to="/services" className={`${btnPrimary} mt-6`}>
            {tx(lang, { en: "Back to services", ur: "خدمات پر واپس" })}
          </Link>
        </section>
      </Shell>
    );
  }

  return (
    <Shell>
      <PageHero kicker={tx(lang, { en: "Service", ur: "خدمت" })} title={tx(lang, service.title)} lede={tx(lang, service.lead)} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-ink">{tx(lang, { en: "A good fit when", ur: "موزوں ہے جب" })}</h2>
          <ul className="mt-4 space-y-3">
            {service.fit.map((item) => (
              <li key={item.en} className="border-s-2 border-brass ps-4 text-ink-soft">
                {tx(lang, item)}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-card bg-parchment p-6">
          <h2 className="font-display text-3xl text-ink">{tx(lang, { en: "Usually on the desk", ur: "عموماً میز پر" })}</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            {service.documents.map((item) => (
              <li key={item.en}>{tx(lang, item)}</li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted">{tx(lang, disclaimer)}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <Link to="/contact" className={btnPrimary}>
          {tx(lang, { en: "Ask about this pathway", ur: "اس راستے کے بارے میں پوچھیں" })}
        </Link>
      </section>
    </Shell>
  );
}
