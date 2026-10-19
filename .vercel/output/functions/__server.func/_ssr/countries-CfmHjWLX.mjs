import { i as __toESM } from "../_runtime.mjs";
import { K as require_jsx_runtime, q as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as tx, f as useLang, l as services, o as kindLabel, r as destinations } from "./content-BR60Suq3.mjs";
import { n as Shell, t as PageHero } from "./Shell-DCZBADAY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/countries-CfmHjWLX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"all",
	"visit",
	"tourist",
	"family",
	"student",
	"work",
	"business"
];
function CountriesPage() {
	const { lang } = useLang();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const visible = destinations.filter((item) => filter === "all" || item.kinds.includes(filter));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: tx(lang, {
			en: "Countries",
			ur: "ممالک"
		}),
		title: tx(lang, {
			en: "Where the checklist changes.",
			ur: "جہاں چیک لسٹ بدل جاتی ہے۔"
		}),
		lede: tx(lang, {
			en: "Rules are not the same in Ottawa and Abu Dhabi. Filter by the kind of trip, then open the matching service.",
			ur: "اوٹاوا اور ابوظہبی کے قواعد ایک نہیں۔ سفر کی قسم سے چھانیں، پھر متعلقہ خدمت کھولیں۔"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": tx(lang, {
					en: "Filter",
					ur: "فلٹر"
				}),
				children: filters.map((item) => {
					const label = item === "all" ? tx(lang, {
						en: "All",
						ur: "سب"
					}) : tx(lang, kindLabel[item]);
					const active = filter === item;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": active,
						onClick: () => setFilter(item),
						className: `min-h-11 rounded-full px-4 text-sm ${active ? "bg-ink text-paper" : "border border-line bg-card text-ink"}`,
						children: label
					}, item);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: visible.map((place) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-brass uppercase",
							children: tx(lang, place.region)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl text-ink",
							children: tx(lang, place.name)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: tx(lang, place.note)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: place.kinds.map((kind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/$slug",
								params: { slug: kind },
								className: "rounded-full bg-parchment px-3 py-1 text-xs text-ink hover:bg-brass",
								children: tx(lang, kindLabel[kind])
							}, kind))
						})
					]
				}, place.id))
			}),
			visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted",
				children: tx(lang, {
					en: "Nothing in this filter.",
					ur: "اس فلٹر میں کچھ نہیں۔"
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-sm text-muted",
				children: tx(lang, {
					en: `${services.length} pathways · embassy rules change. This list is a map of what we prepare, not an official government menu.`,
					ur: `${services.length} راستے · سفارت کے قواعد بدلتے ہیں۔ یہ فہرست ہماری تیاری کا نقشہ ہے، سرکاری مینو نہیں۔`
				})
			})
		]
	})] });
}
//#endregion
export { CountriesPage as component };
