import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero, Shell } from "@/components/site/Shell";
import { brand, services, tx } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · AHK Consultancy Services" },
      { name: "description", content: "Book a visa file review with AHK Consultancy Services in Islamabad." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLang();
  const [sent, setSent] = useState<string | null>(null);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const pathway = String(data.get("pathway") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2 || phone.length < 7) {
      setError(tx(lang, { en: "Name and a reachable phone are required.", ur: "نام اور قابلِ رابطہ فون ضروری ہے۔" }));
      setSent(null);
      return;
    }
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "—"}`,
      `Pathway: ${pathway}`,
      "",
      message || "(no extra note)",
    ].join("\n");
    setError("");
    setSent(body);
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(`File review · ${pathway || "general"} · ${name}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <Shell>
      <PageHero
        kicker={tx(lang, { en: "Contact", ur: "رابطہ" })}
        title={tx(lang, { en: "Tell us the country and the purpose.", ur: "ملک اور مقصد بتائیں۔" })}
        lede={tx(lang, {
          en: "Send a short note. A coordinator replies with what to bring to the first review. This form opens your email app — it does not store the message on our server.",
          ur: "مختصر نوٹ بھیجیں۔ کوآرڈینیٹر بتائے گا کہ پہلے جائزے میں کیا لانا ہے۔ یہ فارم آپ کی ای میل کھولتا ہے — پیغام ہمارے سرور پر محفوظ نہیں ہوتا۔",
        })}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-5">
        <form onSubmit={onSubmit} className="grid gap-4 rounded-card border border-line bg-card p-6 md:col-span-3" noValidate>
          <Field label={tx(lang, { en: "Full name", ur: "پورا نام" })} name="name" required />
          <Field label={tx(lang, { en: "Phone / WhatsApp", ur: "فون / واٹس ایپ" })} name="phone" required />
          <Field label={tx(lang, { en: "Email", ur: "ای میل" })} name="email" type="email" />
          <label className="grid gap-2 text-sm text-ink">
            {tx(lang, { en: "Pathway", ur: "راستہ" })}
            <select name="pathway" className="min-h-11 rounded-xl border border-line bg-paper px-3 text-ink" defaultValue="visit">
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {tx(lang, service.title)}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm text-ink">
            {tx(lang, { en: "Country, dates, and anything already refused", ur: "ملک، تاریخیں، اور پہلے کوئی انکار" })}
            <textarea name="message" rows={5} className="rounded-xl border border-line bg-paper px-3 py-3 text-ink" />
          </label>
          {error ? (
            <p className="text-sm text-ink" role="alert">
              {error}
            </p>
          ) : null}
          <button type="submit" className="min-h-11 rounded-full bg-brass px-5 text-sm font-medium text-ink hover:bg-brass-soft">
            {tx(lang, { en: "Open email to send", ur: "بھیجنے کے لیے ای میل کھولیں" })}
          </button>
          {sent ? (
            <div className="rounded-xl bg-parchment p-4 text-sm text-ink-soft">
              <p className="font-medium text-ink">
                {tx(lang, {
                  en: "If your mail app did not open, copy this and send it to the office:",
                  ur: "اگر ای میل نہ کھلی تو یہ نقل کر کے دفتر کو بھیج دیں:",
                })}
              </p>
              <pre className="mt-3 whitespace-pre-wrap font-sans text-xs">{sent}</pre>
            </div>
          ) : null}
        </form>
        <aside className="md:col-span-2">
          <div className="rounded-card bg-ink p-6 text-paper">
            <p className="text-xs tracking-widest text-brass-soft uppercase">
              {tx(lang, { en: "Office", ur: "دفتر" })}
            </p>
            <p className="mt-4 font-display text-3xl">{tx(lang, brand.city)}</p>
            <p className="mt-3 text-sm text-parchment/80">{tx(lang, brand.hours)}</p>
            <a className="mt-4 inline-block text-brass-soft" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            <p className="mt-6 text-sm text-parchment/70">
              {tx(lang, {
                en: "Street address and WhatsApp line will be placed here when the owner confirms them. Do not post original passports until the desk asks.",
                ur: "پتہ اور واٹس ایپ نمبر مالک کی تصدیق کے بعد یہاں آئیں گے۔ اصل پاسپورٹ اس وقت تک نہ بھیجیں جب تک دفتر نہ کہے۔",
              })}
            </p>
          </div>
          <img
            src="/images/still-life.jpg"
            alt=""
            className="mt-4 aspect-photo w-full rounded-card object-cover"
          />
        </aside>
      </section>
    </Shell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm text-ink">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-11 rounded-xl border border-line bg-paper px-3 text-ink"
      />
    </label>
  );
}
