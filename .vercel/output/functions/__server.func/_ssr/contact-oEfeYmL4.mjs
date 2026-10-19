import { i as __toESM } from "../_runtime.mjs";
import { K as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as tx, f as useLang, l as services, n as brand } from "./content-BR60Suq3.mjs";
import { n as Shell, t as PageHero } from "./Shell-DCZBADAY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-oEfeYmL4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { lang } = useLang();
	const [sent, setSent] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const pathway = String(data.get("pathway") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		if (name.length < 2 || phone.length < 7) {
			setError(tx(lang, {
				en: "Name and a reachable phone are required.",
				ur: "نام اور قابلِ رابطہ فون ضروری ہے۔"
			}));
			setSent(null);
			return;
		}
		const body = [
			`Name: ${name}`,
			`Phone: ${phone}`,
			`Email: ${email || "—"}`,
			`Pathway: ${pathway}`,
			"",
			message || "(no extra note)"
		].join("\n");
		setError("");
		setSent(body);
		window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(`File review · ${pathway || "general"} · ${name}`)}&body=${encodeURIComponent(body)}`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: tx(lang, {
			en: "Contact",
			ur: "رابطہ"
		}),
		title: tx(lang, {
			en: "Tell us the country and the purpose.",
			ur: "ملک اور مقصد بتائیں۔"
		}),
		lede: tx(lang, {
			en: "Send a short note. A coordinator replies with what to bring to the first review. This form opens your email app — it does not store the message on our server.",
			ur: "مختصر نوٹ بھیجیں۔ کوآرڈینیٹر بتائے گا کہ پہلے جائزے میں کیا لانا ہے۔ یہ فارم آپ کی ای میل کھولتا ہے — پیغام ہمارے سرور پر محفوظ نہیں ہوتا۔"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "grid gap-4 rounded-card border border-line bg-card p-6 md:col-span-3",
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: tx(lang, {
						en: "Full name",
						ur: "پورا نام"
					}),
					name: "name",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: tx(lang, {
						en: "Phone / WhatsApp",
						ur: "فون / واٹس ایپ"
					}),
					name: "phone",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: tx(lang, {
						en: "Email",
						ur: "ای میل"
					}),
					name: "email",
					type: "email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-2 text-sm text-ink",
					children: [tx(lang, {
						en: "Pathway",
						ur: "راستہ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						name: "pathway",
						className: "min-h-11 rounded-xl border border-line bg-paper px-3 text-ink",
						defaultValue: "visit",
						children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: service.slug,
							children: tx(lang, service.title)
						}, service.slug))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-2 text-sm text-ink",
					children: [tx(lang, {
						en: "Country, dates, and anything already refused",
						ur: "ملک، تاریخیں، اور پہلے کوئی انکار"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						rows: 5,
						className: "rounded-xl border border-line bg-paper px-3 py-3 text-ink"
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink",
					role: "alert",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "min-h-11 rounded-full bg-brass px-5 text-sm font-medium text-ink hover:bg-brass-soft",
					children: tx(lang, {
						en: "Open email to send",
						ur: "بھیجنے کے لیے ای میل کھولیں"
					})
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-parchment p-4 text-sm text-ink-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-ink",
						children: tx(lang, {
							en: "If your mail app did not open, copy this and send it to the office:",
							ur: "اگر ای میل نہ کھلی تو یہ نقل کر کے دفتر کو بھیج دیں:"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 whitespace-pre-wrap font-sans text-xs",
						children: sent
					})]
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "md:col-span-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card bg-ink p-6 text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-brass-soft uppercase",
						children: tx(lang, {
							en: "Office",
							ur: "دفتر"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-3xl",
						children: tx(lang, brand.city)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-parchment/80",
						children: tx(lang, brand.hours)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-4 inline-block text-brass-soft",
						href: `mailto:${brand.email}`,
						children: brand.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-parchment/70",
						children: tx(lang, {
							en: "Street address and WhatsApp line will be placed here when the owner confirms them. Do not post original passports until the desk asks.",
							ur: "پتہ اور واٹس ایپ نمبر مالک کی تصدیق کے بعد یہاں آئیں گے۔ اصل پاسپورٹ اس وقت تک نہ بھیجیں جب تک دفتر نہ کہے۔"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/still-life.jpg",
				alt: "",
				className: "mt-4 aspect-photo w-full rounded-card object-cover"
			})]
		})]
	})] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2 text-sm text-ink",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: "min-h-11 rounded-xl border border-line bg-paper px-3 text-ink"
		})]
	});
}
//#endregion
export { ContactPage as component };
