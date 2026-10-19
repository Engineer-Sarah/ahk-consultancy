import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Shell, btnGhost, btnPrimary } from "@/components/site/Shell";
import { brand, destinations, faqs, principles, services, steps, tx } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AHK Consultancy Services · Islamabad visa guidance" },
      {
        name: "description",
        content:
          "Prepare visit, study, work, and family visa files with a clear checklist. Based in Islamabad. No guaranteed approvals.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { lang } = useLang();

  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-6">
          <p className="text-xs tracking-widest text-brass uppercase">
            {tx(lang, { en: "Islamabad · Visa guidance", ur: "اسلام آباد · ویزا رہنمائی" })}
          </p>
          <h1 className="mt-4 font-display text-5xl text-ink md:text-6xl">
            {tx(lang, {
              en: "Prepare the file before you book the appointment.",
              ur: "اپائنٹمنٹ سے پہلے فائل تیار کریں۔",
            })}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            {tx(lang, {
              en: "AHK Consultancy Services helps families, students, and professionals organise visit, study, work, and business visa papers — one checklist, one coordinator, and no promise that an embassy must say yes.",
              ur: "اے ایچ کے کنسلٹنسی سروسز خاندانوں، طلبہ اور پیشہ ور افراد کی وزٹ، تعلیم، ورک اور بزنس ویزا کی فائل سنوارتی ہے — ایک چیک لسٹ، ایک کوآرڈینیٹر، اور یہ وعدہ نہیں کہ سفارت ضرور ہاں کہے گی۔",
            })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className={btnPrimary}>
              {tx(lang, { en: "Book a file review", ur: "فائل کا جائزہ بک کریں" })}
            </Link>
            <Link to="/services" className={btnGhost}>
              {tx(lang, { en: "See the pathways", ur: "راستے دیکھیں" })}
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {[
              { k: { en: "First review", ur: "پہلا جائزہ" }, v: { en: "2 working days", ur: "۲ کام کے دن" } },
              { k: { en: "Pathways", ur: "راستے" }, v: { en: "6 visa types", ur: "۶ اقسام" } },
              { k: { en: "Desk", ur: "دفتر" }, v: { en: "Islamabad", ur: "اسلام آباد" } },
            ].map((item) => (
              <div key={item.k.en}>
                <dt className="text-xs text-muted">{tx(lang, item.k)}</dt>
                <dd className="mt-1 font-display text-lg text-ink">{tx(lang, item.v)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative md:col-span-6">
          <div className="overflow-hidden rounded-card ring-1 ring-brass ring-offset-4 ring-offset-paper">
            <img
              src="/images/hero.jpg"
              alt={tx(lang, {
                en: "Advisor reviewing a passport with a couple in a quiet Islamabad office",
                ur: "مشیر ایک جوڑے کے ساتھ پاسپورٹ دیکھ رہے ہیں",
              })}
              className="aspect-wide w-full object-cover"
            />
          </div>
          <p className="absolute start-4 bottom-4 max-w-xs rounded-2xl bg-paper/95 px-4 py-3 text-sm text-ink shadow-sm">
            {tx(lang, {
              en: "We read the file the way a case officer will — before the fee is paid.",
              ur: "ہم فائل ویسے پڑھتے ہیں جیسے کیس آفیسر پڑھے گا — فیس سے پہلے۔",
            })}
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-parchment">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5 py-4 text-sm text-ink-soft">
          <span className="text-brass">{tx(lang, { en: "Destinations", ur: "منزلیں" })}</span>
          {destinations.map((d) => (
            <span key={d.id}>{tx(lang, d.name)}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-brass uppercase">
              {tx(lang, { en: "Services", ur: "خدمات" })}
            </p>
            <h2 className="mt-2 max-w-xl font-display text-4xl text-ink">
              {tx(lang, { en: "Six pathways. One standard of file.", ur: "چھ راستے۔ فائل کا ایک معیار۔" })}
            </h2>
          </div>
          <Link to="/services" className="text-sm text-ink underline decoration-brass underline-offset-4">
            {tx(lang, { en: "All services", ur: "تمام خدمات" })}
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="group flex min-h-44 flex-col justify-between rounded-card border border-line bg-card p-6 transition-colors hover:border-brass"
            >
              <div>
                <p className="font-display text-sm text-brass">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl text-ink">{tx(lang, service.title)}</h3>
                <p className="mt-2 text-sm text-muted">{tx(lang, service.blurb)}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-ink">
                {tx(lang, { en: "Open", ur: "کھولیں" })}
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="text-xs tracking-widest text-brass-soft uppercase">
              {tx(lang, { en: "How it works", ur: "طریقہ" })}
            </p>
            <h2 className="mt-3 font-display text-4xl">
              {tx(lang, { en: "Four steps. Then the embassy.", ur: "چار قدم۔ پھر سفارت۔" })}
            </h2>
          </div>
          <ol className="md:col-span-8">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-5 border-t border-navy py-6">
                <span className="font-display text-2xl text-brass-soft">{step.n}</span>
                <div>
                  <h3 className="font-display text-2xl">{tx(lang, step.title)}</h3>
                  <p className="mt-2 max-w-xl text-sm text-parchment/80">{tx(lang, step.body)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <img
          src="/images/advisor.jpg"
          alt={tx(lang, { en: "AHK advisor with a document folder", ur: "مشیر دستاویز کے فولڈر کے ساتھ" })}
          className="aspect-photo w-full rounded-card object-cover"
        />
        <div>
          <p className="text-xs tracking-widest text-brass uppercase">
            {tx(lang, { en: "About the desk", ur: "دفتر کے بارے میں" })}
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink">
            {tx(lang, {
              en: "A private desk in Islamabad, not an embassy window.",
              ur: "اسلام آباد میں ایک نجی میز، سفارت کی کھڑکی نہیں۔",
            })}
          </h2>
          <p className="mt-4 text-muted">
            {tx(lang, {
              en: "People come to AHK when the WhatsApp advice has become contradictory. We slow the file down just enough to make the purpose, the money, and the ties say the same thing.",
              ur: "لوگ اے ایچ کے تب آتے ہیں جب واٹس ایپ کے مشورے آپس میں ٹکرانے لگیں۔ ہم فائل کو اتنا سست کرتے ہیں کہ مقصد، پیسہ اور تعلق ایک ہی بات کہیں۔",
            })}
          </p>
          <Link to="/about" className={`${btnGhost} mt-6`}>
            {tx(lang, { en: "Read how we work", ur: "ہمارا طریقہ پڑھیں" })}
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-parchment">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3 md:py-20">
          {principles.map((item) => (
            <article key={item.title.en} className="rounded-card bg-card p-6">
              <h3 className="font-display text-2xl text-ink">{tx(lang, item.title)}</h3>
              <p className="mt-3 text-sm text-muted">{tx(lang, item.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs tracking-widest text-brass uppercase">
            {tx(lang, { en: "Questions", ur: "سوالات" })}
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink">
            {tx(lang, { en: "Asked before the first meeting.", ur: "پہلی ملاقات سے پہلے پوچھے جاتے ہیں۔" })}
          </h2>
          <img
            src="/images/still-life.jpg"
            alt={tx(lang, { en: "Passport, pen, and seal on linen", ur: "پاسپورٹ، قلم اور مہر" })}
            className="mt-8 hidden aspect-photo w-full rounded-card object-cover md:block"
          />
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q.en} className="group py-4">
              <summary className="cursor-pointer list-none font-medium text-ink">
                <span className="flex items-center justify-between gap-4">
                  {tx(lang, item.q)}
                  <span className="text-brass group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <p className="pt-3 text-sm text-muted">{tx(lang, item.a)}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-card">
          <img src="/images/airport.jpg" alt="" className="h-72 w-full object-cover md:h-80" />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <h2 className="max-w-xl font-display text-4xl text-paper">
              {tx(lang, {
                en: "Bring the passport page. Leave with a checklist.",
                ur: "پاسپورٹ کا صفحہ لائیں۔ چیک لسٹ لے کر جائیں۔",
              })}
            </h2>
            <p className="mt-3 text-sm text-parchment/80">{tx(lang, brand.city)} · {brand.email}</p>
            <Link to="/contact" className={`${btnPrimary} mt-6 w-fit`}>
              {tx(lang, { en: "Start a consultation", ur: "مشاورت شروع کریں" })}
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
