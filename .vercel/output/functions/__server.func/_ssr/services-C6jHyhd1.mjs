import { K as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as tx, f as useLang, l as services } from "./content-BR60Suq3.mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as Shell, t as PageHero } from "./Shell-DCZBADAY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-C6jHyhd1.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: tx(lang, {
			en: "Services",
			ur: "خدمات"
		}),
		title: tx(lang, {
			en: "Pick the pathway that matches the trip.",
			ur: "وہ راستہ چنیں جو سفر سے میل کھائے۔"
		}),
		lede: tx(lang, {
			en: "Each service below is a way of preparing papers. It is not a visa product you can buy off a shelf.",
			ur: "نیچے ہر خدمت کاغذات تیار کرنے کا طریقہ ہے۔ یہ شیلف سے خریدے جانے والا ویزا نہیں۔"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto grid max-w-6xl gap-4 px-5 py-14 md:grid-cols-2",
		children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/services/$slug",
			params: { slug: service.slug },
			className: "group rounded-card border border-line bg-card p-7 transition-colors hover:border-brass",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-ink",
					children: tx(lang, service.title)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: tx(lang, service.lead)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-6 inline-flex items-center gap-1 text-sm text-brass",
					children: [tx(lang, {
						en: "Documents and fit",
						ur: "دستاویزات اور موزونیت"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
				})
			]
		}, service.slug))
	})] });
}
//#endregion
export { ServicesPage as component };
