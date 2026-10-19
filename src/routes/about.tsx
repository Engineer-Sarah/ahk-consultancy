import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell, btnPrimary } from "@/components/site/Shell";
import { principles, tx } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · AHK Consultancy Services" },
      {
        name: "description",
        content: "AHK is a private visa consultancy in Islamabad. We prepare files. We do not issue visas.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { lang } = useLang();
  return (
    <Shell>
      <PageHero
        kicker={tx(lang, { en: "About", ur: "تعارف" })}
        title={tx(lang, {
          en: "Guidance with a refusal in mind.",
          ur: "رہنمائی، انکار کو سامنے رکھ کر۔",
        })}
        lede={tx(lang, {
          en: "Most weak files are not missing a magic letter. They contradict themselves. AHK exists to catch that before an appointment does.",
          ur: "زیادہ تر کمزور فائلوں میں کوئی جادوئی خط کم نہیں ہوتا۔ وہ خود سے ٹکراتی ہیں۔ اے ایچ کے اسی ٹکراؤ کو اپائنٹمنٹ سے پہلے پکڑنے کے لیے ہے۔",
        })}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <img
          src="/images/campus.jpg"
          alt={tx(lang, { en: "Students crossing a university courtyard", ur: "یونیورسٹی کے صحن میں طلبہ" })}
          className="aspect-video w-full rounded-card object-cover"
        />
        <div className="space-y-8">
          <article>
            <h2 className="font-display text-3xl text-ink">{tx(lang, { en: "Mission", ur: "مقصد" })}</h2>
            <p className="mt-3 text-muted">
              {tx(lang, {
                en: "Give applicants in Pakistan a file they can explain out loud: why this trip, why this money, why they will return or why they qualify to stay.",
                ur: "پاکستان کے درخواست دہندگان کو ایسی فائل دینا جسے وہ زبانی سمجھا سکیں: یہ سفر کیوں، یہ رقم کیوں، واپسی کیوں، یا قیام کی اہلیت کیوں۔",
              })}
            </p>
          </article>
          <article>
            <h2 className="font-display text-3xl text-ink">{tx(lang, { en: "What we will not do", ur: "جو ہم نہیں کریں گے" })}</h2>
            <ul className="mt-3 space-y-2 text-muted">
              <li>{tx(lang, { en: "Promise an approval or a ‘done’ visa.", ur: "منظوری یا ‘ڈن’ ویزے کا وعدہ۔" })}</li>
              <li>{tx(lang, { en: "Invent funds, jobs, or invitations.", ur: "فرضی فنڈز، نوکری یا دعوت نامہ بنانا۔" })}</li>
              <li>{tx(lang, { en: "Claim we can speak to an officer for you.", ur: "یہ کہنا کہ ہم افسر سے آپ کے لیے بات کروا دیں گے۔" })}</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="bg-parchment">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title.en}>
              <h3 className="font-display text-2xl text-ink">{tx(lang, item.title)}</h3>
              <p className="mt-3 text-sm text-muted">{tx(lang, item.body)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-4xl text-ink">
          {tx(lang, { en: "Who sits with you", ur: "آپ کے ساتھ کون بیٹھتا ہے" })}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          {tx(lang, {
            en: "A case coordinator owns your checklist from the first call to submission day. Advisors review purpose, funds, and ties. You always know the next paper. Names and direct lines can be added here once the owner confirms the team.",
            ur: "ایک کیس کوآرڈینیٹر پہلی کال سے جمع کروانے کے دن تک آپ کی چیک لسٹ سنبھالتا ہے۔ مشیر مقصد، فنڈز اور تعلق دیکھتے ہیں۔ اگلا کاغذ ہمیشہ واضح ہوتا ہے۔ ٹیم کے نام اور نمبر مالک کی تصدیق کے بعد یہاں لگائے جا سکتے ہیں۔",
          })}
        </p>
        <Link to="/contact" className={`${btnPrimary} mt-8`}>
          {tx(lang, { en: "Talk to the desk", ur: "دفتر سے بات کریں" })}
        </Link>
      </section>
    </Shell>
  );
}
