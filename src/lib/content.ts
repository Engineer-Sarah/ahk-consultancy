import type { Lang } from "@/lib/i18n";

export type Copy = { en: string; ur: string };

export function tx(lang: Lang, copy: Copy) {
  return copy[lang];
}

export const brand = {
  name: "AHK Consultancy",
  legal: "AHK Consultancy Services",
  email: "hello@ahkconsultant.com",
  city: { en: "Islamabad, Pakistan", ur: "اسلام آباد، پاکستان" } satisfies Copy,
  hours: { en: "Monday to Saturday, 10:00–18:00", ur: "پیر تا ہفتہ، صبح ۱۰ بجے سے شام ۶ بجے" } satisfies Copy,
};

export const nav = [
  { to: "/", label: { en: "Home", ur: "ہوم" } satisfies Copy, exact: true },
  { to: "/about", label: { en: "About", ur: "تعارف" } satisfies Copy, exact: false },
  { to: "/services", label: { en: "Services", ur: "خدمات" } satisfies Copy, exact: false },
  { to: "/countries", label: { en: "Countries", ur: "ممالک" } satisfies Copy, exact: false },
  { to: "/contact", label: { en: "Contact", ur: "رابطہ" } satisfies Copy, exact: false },
] as const;

export type VisaKind = "visit" | "tourist" | "family" | "student" | "work" | "business";

export const kindLabel: Record<VisaKind, Copy> = {
  visit: { en: "Visit", ur: "وزٹ" },
  tourist: { en: "Tourist", ur: "ٹورسٹ" },
  family: { en: "Family", ur: "فیملی" },
  student: { en: "Student", ur: "طالب علم" },
  work: { en: "Work", ur: "ورک" },
  business: { en: "Business", ur: "بزنس" },
};

export type Service = {
  slug: VisaKind;
  title: Copy;
  blurb: Copy;
  lead: Copy;
  fit: Copy[];
  documents: Copy[];
};

export const services: Service[] = [
  {
    slug: "visit",
    title: { en: "Visit visa", ur: "وزٹ ویزا" },
    blurb: {
      en: "Short stays to see family, attend an event, or handle a personal matter.",
      ur: "خاندان سے ملنے، کسی تقریب یا ذاتی کام کے لیے مختصر قیام۔",
    },
    lead: {
      en: "A visit file is judged on purpose, ties to Pakistan, and funds that match the trip. We build that story as one consistent set of papers — not a pile of screenshots.",
      ur: "وزٹ فائل کا فیصلہ مقصد، پاکستان سے تعلق، اور سفر کے مطابق فنڈز پر ہوتا ہے۔ ہم یہ کہانی ایک ہی ہم آہنگ فائل میں سجاتے ہیں، بکھرے اسکرین شاٹس میں نہیں۔",
    },
    fit: [
      { en: "Family visits and personal invitations", ur: "خاندانی ملاقات اور ذاتی دعوت" },
      { en: "First-time travellers who need a document map", ur: "پہلی بار سفر کرنے والے جنہیں دستاویز کا نقشہ چاہیے" },
      { en: "Applicants refused before for a weak explanation", ur: "جن کی پہلے کمزور وضاحت کی وجہ سے درخواست مسترد ہوئی" },
    ],
    documents: [
      { en: "Passport and previous visas", ur: "پاسپورٹ اور پرانے ویزے" },
      { en: "Bank statements that match the declared income", ur: "بینک سٹیٹمنٹ جو بتائی گئی آمدن سے میل کھائیں" },
      { en: "Purpose letter and invitation, if the embassy asks", ur: "مقصد کا خط اور دعوت نامہ، اگر سفارت مانگے" },
      { en: "Travel plan: where you will stay and for how long", ur: "سفر کا منصوبہ: قیام کہاں اور کتنے دن" },
      { en: "Proof of ties: job, business, study, or family in Pakistan", ur: "پاکستان سے تعلق کا ثبوت: نوکری، کاروبار، تعلیم یا خاندان" },
    ],
  },
  {
    slug: "tourist",
    title: { en: "Tourist visa", ur: "ٹورسٹ ویزا" },
    blurb: {
      en: "Leisure travel planned around a real itinerary and a budget that holds up.",
      ur: "تفریحی سفر جس کا شیڈول اور بجٹ دونوں قابلِ بھروسہ ہوں۔",
    },
    lead: {
      en: "Tourist applications fail when the holiday looks copied. We pressure-test the route, the stay, and the money trail before you pay an embassy fee.",
      ur: "ٹورسٹ درخواست اکثر اس لیے رک جاتی ہے کہ چھٹی نقل شدہ لگتی ہے۔ سفارت کی فیس سے پہلے ہم راستہ، قیام اور پیسے کا سلسلہ جانچتے ہیں۔",
    },
    fit: [
      { en: "Schengen and other holiday routes", ur: "شینگن اور دیگر تفریحی راستے" },
      { en: "Couples and families travelling together", ur: "جوڑے اور خاندان جو ساتھ سفر کریں" },
      { en: "Applicants who already have a rough city list", ur: "جن کے پاس شہروں کی ابتدائی فہرست موجود ہو" },
    ],
    documents: [
      { en: "Day-by-day outline, not a fantasy tour", ur: "دن بہ دن خاکہ، خیالی ٹور نہیں" },
      { en: "Stay bookings only where the embassy requires them", ur: "قیام کی بکنگ صرف جہاں سفارت لازمی کرے" },
      { en: "Employment or business leave letter", ur: "نوکری یا کاروبار کی چھٹی کا خط" },
      { en: "Funds covering the stated trip length", ur: "بتائی گئی مدت کے لیے فنڈز" },
    ],
  },
  {
    slug: "family",
    title: { en: "Family visa", ur: "فیملی ویزا" },
    blurb: {
      en: "Spouse, parents, and children — relationship evidence laid out cleanly.",
      ur: "میاں بیوی، والدین اور بچے — رشتے کے ثبوت صاف ترتیب میں۔",
    },
    lead: {
      en: "Family files are won or lost on relationship proof and sponsorship. We separate what the sponsor must show from what the applicant must show, so nothing contradicts.",
      ur: "فیملی فائل رشتے کے ثبوت اور سپانسرشپ پر کھڑی ہوتی ہے۔ ہم سپانسر اور درخواست دہندہ کے کاغذات الگ کرتے ہیں تاکہ کچھ ٹکرائے نہیں۔",
    },
    fit: [
      { en: "Spouse and dependent children", ur: "شریکِ حیات اور زیرِ کفالت بچے" },
      { en: "Parents visiting children abroad", ur: "والدین جو بچوں سے ملنے جا رہے ہوں" },
      { en: "Families joining a student or worker", ur: "خاندان جو طالب علم یا ورکر کے ساتھ جڑ رہا ہو" },
    ],
    documents: [
      { en: "Marriage, birth, or family registration records", ur: "نکاح، پیدائش یا خاندانی رجسٹریشن" },
      { en: "Sponsor status in the destination country", ur: "منزل کے ملک میں سپانسر کا اسٹیٹس" },
      { en: "Correspondence and shared history, where relevant", ur: "خط و کتابت اور مشترکہ تاریخ، جہاں متعلق ہو" },
      { en: "Financial support that matches household size", ur: "مالی سہارا جو گھر کے سائز سے میل کھائے" },
    ],
  },
  {
    slug: "student",
    title: { en: "Student visa", ur: "سٹوڈنٹ ویزا" },
    blurb: {
      en: "From course choice to funds and interview — a study file with a point.",
      ur: "کورس کے انتخاب سے فنڈز اور انٹرویو تک — ایک واضح تعلیمی فائل۔",
    },
    lead: {
      en: "We do not sell admissions. We help you explain why this course, why this country, and how you will pay for it, then line the papers up with that explanation.",
      ur: "ہم ایڈمیشن نہیں بیچتے۔ ہم یہ واضح کرنے میں مدد کرتے ہیں کہ یہ کورس کیوں، یہ ملک کیوں، اور خرچ کیسے پورا ہوگا، پھر کاغزات اسی وضاحت کے ساتھ جوڑتے ہیں۔",
    },
    fit: [
      { en: "Undergraduate, master, and pathway programmes", ur: "انڈرگریجویٹ، ماسٹرز اور پاتھ وے پروگرام" },
      { en: "Applicants comparing two or three countries", ur: "جو دو یا تین ممالک کا موازنہ کر رہے ہوں" },
      { en: "Students preparing for a credibility interview", ur: "طلبہ جو انٹرویو کی تیاری کر رہے ہوں" },
    ],
    documents: [
      { en: "Offer or application evidence", ur: "آفر یا درخواست کا ثبوت" },
      { en: "Transcripts and language-test results, if required", ur: "ٹرانسکرپٹ اور لینگویج ٹیسٹ، اگر ضروری ہو" },
      { en: "Tuition and living-cost plan", ur: "فیس اور رہائش کے خرچ کا منصوبہ" },
      { en: "Statement of purpose review", ur: "سٹیٹمنٹ آف پرپز کی جانچ" },
      { en: "Interview practice against your own file", ur: "آپ کی اپنی فائل پر انٹرویو کی مشق" },
    ],
  },
  {
    slug: "work",
    title: { en: "Work visa", ur: "ورک ویزا" },
    blurb: {
      en: "Job-based routes where the offer, the role, and your history must agree.",
      ur: "نوکری پر مبنی راستے جہاں آفر، عہدہ اور آپ کا تجربہ آپس میں ملیں۔",
    },
    lead: {
      en: "A work visa follows the employer’s route, not a shortcut. We read the offer against your CV and flag gaps the case officer will see anyway.",
      ur: "ورک ویزا آجر کے راستے پر چلتا ہے، شارٹ کٹ پر نہیں۔ ہم آفر کو آپ کے سی وی سے ملاتے ہیں اور وہ خلا بتاتے ہیں جو افسر خود دیکھ لے گا۔",
    },
    fit: [
      { en: "Applicants with a signed or draft job offer", ur: "جن کے پاس نوکری کی آفر ہو" },
      { en: "Skilled roles that need a qualification match", ur: "ہنر مند عہدے جن میں قابلیت کا میل چاہیے" },
      { en: "Families who will travel after the principal visa", ur: "خاندان جو مرکزی ویزے کے بعد سفر کرے گا" },
    ],
    documents: [
      { en: "Offer letter and role description", ur: "آفر لیٹر اور عہدے کی تفصیل" },
      { en: "CV, references, and qualification copies", ur: "سی وی، حوالہ جات اور ڈگریوں کی نقول" },
      { en: "Employer paperwork the route asks for", ur: "آجر کے وہ کاغذات جو راستہ مانگے" },
      { en: "Police or medical steps, only when required", ur: "پولیس یا میڈیکل، صرف جب ضروری ہوں" },
    ],
  },
  {
    slug: "business",
    title: { en: "Business visa", ur: "بزنس ویزا" },
    blurb: {
      en: "Meetings, trade visits, and short commercial trips with a real counterpart.",
      ur: "میٹنگز، تجارتی دورے، اور مختصر کاروباری سفر جس کا حقیقی فریق ہو۔",
    },
    lead: {
      en: "Business visas need a company on both sides. We organise registration papers, the invitation, and your role so the trip reads as work, not a disguised holiday.",
      ur: "بزنس ویزے میں دونوں طرف کمپنی ہونی چاہیے۔ ہم رجسٹریشن، دعوت اور آپ کا کردار اس طرح جوڑتے ہیں کہ سفر کام لگے، چھٹی نہیں۔",
    },
    fit: [
      { en: "Owners visiting a buyer, supplier, or partner", ur: "مالک جو خریدار، سپلائر یا پارٹنر سے مل رہے ہوں" },
      { en: "Employees sent for a specific meeting", ur: "ملازم جنہیں مخصوص میٹنگ کے لیے بھیجا گیا ہو" },
      { en: "Trade visits that are not a job application", ur: "تجارتی دورہ جو نوکری کی درخواست نہ ہو" },
    ],
    documents: [
      { en: "Company registration and your authority to travel", ur: "کمپنی رجسٹریشن اور سفر کا اختیار" },
      { en: "Invitation from the host company", ur: "میزبان کمپنی کا دعوت نامہ" },
      { en: "Recent business bank activity", ur: "کاروباری بینک کی حالیہ سرگرمی" },
      { en: "Meeting agenda tied to dates", ur: "تاریخوں سے جڑی میٹنگ کا ایجنڈا" },
    ],
  },
];

export const steps: { n: string; title: Copy; body: Copy }[] = [
  {
    n: "01",
    title: { en: "Consultation", ur: "مشاورت" },
    body: {
      en: "We listen to the destination, the dates, and what you already have. If the route is a poor fit, we say so.",
      ur: "ہم منزل، تاریخیں اور موجود کاغذات سنتے ہیں۔ اگر راستہ مناسب نہ ہو تو صاف بتا دیتے ہیں۔",
    },
  },
  {
    n: "02",
    title: { en: "Document map", ur: "دستاویز کا نقشہ" },
    body: {
      en: "You get one checklist: what to collect, what to skip, and what must not contradict.",
      ur: "آپ کو ایک چیک لسٹ ملتی ہے: کیا جمع کرنا ہے، کیا چھوڑنا ہے، اور کیا ٹکرانا نہیں چاہیے۔",
    },
  },
  {
    n: "03",
    title: { en: "File review", ur: "فائل کا جائزہ" },
    body: {
      en: "We read the set as a case officer would and mark weak pages before any fee is paid.",
      ur: "ہم فائل ویسے پڑھتے ہیں جیسے کیس آفیسر پڑھے، اور فیس سے پہلے کمزور صفحات نشان زد کرتے ہیں۔",
    },
  },
  {
    n: "04",
    title: { en: "Submission support", ur: "جمع کروانے میں مدد" },
    body: {
      en: "Forms, appointment prep, and a final pack. You submit. The embassy decides.",
      ur: "فارم، اپائنٹمنٹ کی تیاری، اور آخری پیک۔ درخواست آپ جمع کراتے ہیں۔ فیصلہ سفارت کرتی ہے۔",
    },
  },
];

export const principles: { title: Copy; body: Copy }[] = [
  {
    title: { en: "No guaranteed visa", ur: "ویزے کی گارنٹی نہیں" },
    body: {
      en: "No consultancy can promise an approval. We promise a complete, consistent file and a straight answer when something is missing.",
      ur: "کوئی کنسلٹنسی منظوری کا وعدہ نہیں کر سکتی۔ ہم مکمل، ہم آہنگ فائل اور سیدھی بات کا وعدہ کرتے ہیں جب کچھ کم ہو۔",
    },
  },
  {
    title: { en: "One thread, not ten chats", ur: "ایک سلسلہ، دس چیٹس نہیں" },
    body: {
      en: "Your coordinator keeps the checklist in one place so parents, sponsors, and applicants are not guessing.",
      ur: "آپ کا کوآرڈینیٹر چیک لسٹ ایک جگہ رکھتا ہے تاکہ والدین، سپانسر اور درخواست دہندہ اندازے نہ لگائیں۔",
    },
  },
  {
    title: { en: "Weak files are paused", ur: "کمزور فائل روک دی جاتی ہے" },
    body: {
      en: "If funds, purpose, or ties do not hold, we stop and fix the story. A rushed refusal costs more than a delay.",
      ur: "اگر فنڈز، مقصد یا تعلق کمزور ہوں تو ہم رک کر کہانی ٹھیک کرتے ہیں۔ جلدی انکار، تاخیر سے مہنگا پڑتا ہے۔",
    },
  },
];

export const faqs: { q: Copy; a: Copy }[] = [
  {
    q: { en: "Do you guarantee the visa?", ur: "کیا آپ ویزے کی گارنٹی دیتے ہیں؟" },
    a: {
      en: "No. The embassy or immigration authority decides. AHK prepares and reviews the file. Anyone promising a sure approval is not telling the truth.",
      ur: "نہیں۔ فیصلہ سفارت یا امیگریشن اتھارٹی کرتی ہے۔ اے ایچ کے فائل تیار اور جانچتا ہے۔ جو شخص پکی منظوری کا وعدہ کرے وہ سچ نہیں بول رہا۔",
    },
  },
  {
    q: { en: "How long does a file take?", ur: "فائل میں کتنا وقت لگتا ہے؟" },
    a: {
      en: "A first review is usually within two working days of receiving your papers. Embassy queues after that are outside our control and differ by country.",
      ur: "پہلا جائزہ عموماً کاغذات ملنے کے دو کام کے دنوں میں ہوتا ہے۔ اس کے بعد سفارت کی قطار ہمارے اختیار میں نہیں اور ملک کے حساب سے بدلتی ہے۔",
    },
  },
  {
    q: { en: "Are you the embassy?", ur: "کیا آپ سفارت ہیں؟" },
    a: {
      en: "No. We are a private consultancy in Islamabad. We do not issue visas, and we do not take payment to ‘influence’ an officer.",
      ur: "نہیں۔ ہم اسلام آباد میں ایک نجی کنسلٹنسی ہیں۔ ہم ویزا جاری نہیں کرتے، اور کسی افسر پر اثر ڈالنے کے لیے رقم نہیں لیتے۔",
    },
  },
  {
    q: { en: "What should I send first?", ur: "پہلے کیا بھیجوں؟" },
    a: {
      en: "Passport bio page, the country you want, rough travel dates, and whether you were refused before. Do not send original documents by post until we ask.",
      ur: "پاسپورٹ کا بائیو صفحہ، مطلوبہ ملک، اندازاً تاریخیں، اور یہ کہ پہلے انکار ہوا تھا یا نہیں۔ اصل دستاویزات ڈاک سے نہ بھیجیں جب تک ہم نہ کہیں۔",
    },
  },
];

export const destinations: {
  id: string;
  name: Copy;
  region: Copy;
  kinds: VisaKind[];
  note: Copy;
}[] = [
  {
    id: "usa",
    name: { en: "United States", ur: "امریکہ" },
    region: { en: "North America", ur: "شمالی امریکہ" },
    kinds: ["visit", "student", "business"],
    note: { en: "Interview-heavy visitor and student files.", ur: "وزٹر اور سٹوڈنٹ فائلیں جن میں انٹرویو اہم ہوتا ہے۔" },
  },
  {
    id: "canada",
    name: { en: "Canada", ur: "کینیڈا" },
    region: { en: "North America", ur: "شمالی امریکہ" },
    kinds: ["visit", "student", "work", "family"],
    note: { en: "Study, visit, and family sponsorship prep.", ur: "تعلیم، وزٹ اور فیملی سپانسرشپ کی تیاری۔" },
  },
  {
    id: "uk",
    name: { en: "United Kingdom", ur: "برطانیہ" },
    region: { en: "Europe", ur: "یورپ" },
    kinds: ["visit", "student", "work", "family"],
    note: { en: "Standard visitor, student, and dependant routes.", ur: "وزٹر، سٹوڈنٹ اور ڈیپنڈنٹ راستے۔" },
  },
  {
    id: "schengen",
    name: { en: "Schengen area", ur: "شینگن علاقہ" },
    region: { en: "Europe", ur: "یورپ" },
    kinds: ["tourist", "visit", "business"],
    note: { en: "Short stays across much of Europe.", ur: "یورپ کے بیشتر حصے میں مختصر قیام۔" },
  },
  {
    id: "australia",
    name: { en: "Australia", ur: "آسٹریلیا" },
    region: { en: "Oceania", ur: "اوشینیا" },
    kinds: ["visit", "student", "work"],
    note: { en: "Visitor and student files with a funds check.", ur: "وزٹر اور سٹوڈنٹ فائلیں جن میں فنڈز کی جانچ ہو۔" },
  },
  {
    id: "nz",
    name: { en: "New Zealand", ur: "نیوزی لینڈ" },
    region: { en: "Oceania", ur: "اوشینیا" },
    kinds: ["visit", "student", "work"],
    note: { en: "Visit, study, and job-based preparation.", ur: "وزٹ، تعلیم اور نوکری پر مبنی تیاری۔" },
  },
  {
    id: "uae",
    name: { en: "United Arab Emirates", ur: "متحدہ عرب امارات" },
    region: { en: "Gulf", ur: "خلیج" },
    kinds: ["visit", "tourist", "work", "family"],
    note: { en: "Visit, family, and employment entry packs.", ur: "وزٹ، فیملی اور ملازمت کے داخلے کے پیک۔" },
  },
  {
    id: "saudi",
    name: { en: "Saudi Arabia", ur: "سعودی عرب" },
    region: { en: "Gulf", ur: "خلیج" },
    kinds: ["visit", "work", "family", "business"],
    note: { en: "Work, family visit, and business trips.", ur: "ورک، فیملی وزٹ اور کاروباری سفر۔" },
  },
  {
    id: "qatar",
    name: { en: "Qatar", ur: "قطر" },
    region: { en: "Gulf", ur: "خلیج" },
    kinds: ["visit", "work", "family"],
    note: { en: "Employment and family visit files.", ur: "ملازمت اور فیملی وزٹ کی فائلیں۔" },
  },
  {
    id: "turkey",
    name: { en: "Turkey", ur: "ترکی" },
    region: { en: "Europe & Asia", ur: "یورپ اور ایشیا" },
    kinds: ["tourist", "student", "visit"],
    note: { en: "Tourist stays and student routes.", ur: "سیاحتی قیام اور تعلیمی راستے۔" },
  },
  {
    id: "malaysia",
    name: { en: "Malaysia", ur: "ملائیشیا" },
    region: { en: "Asia", ur: "ایشیا" },
    kinds: ["tourist", "student", "visit"],
    note: { en: "Student and short-stay preparation.", ur: "طالب علم اور مختصر قیام کی تیاری۔" },
  },
  {
    id: "korea",
    name: { en: "South Korea", ur: "جنوبی کوریا" },
    region: { en: "Asia", ur: "ایشیا" },
    kinds: ["visit", "student", "work"],
    note: { en: "Study and short-visit document review.", ur: "تعلیم اور مختصر وزٹ کی دستاویز جانچ۔" },
  },
];

export const disclaimer: Copy = {
  en: "AHK Consultancy Services prepares and reviews applications. A visa is issued only by the relevant embassy or immigration authority. Fees, forms, and rules change — confirm the live requirement before you submit.",
  ur: "اے ایچ کے کنسلٹنسی سروسز درخواست تیار اور جانچتی ہے۔ ویزا صرف متعلقہ سفارت یا امیگریشن اتھارٹی جاری کرتی ہے۔ فیس، فارم اور قواعد بدلتے رہتے ہیں — جمع کروانے سے پہلے موجودہ شرط خود تصدیق کریں۔",
};
