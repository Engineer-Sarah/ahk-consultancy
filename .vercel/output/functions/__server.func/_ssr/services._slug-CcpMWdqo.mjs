import { K as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as tx, f as useLang, i as disclaimer, l as services } from "./content-BR60Suq3.mjs";
import { i as btnPrimary, n as Shell, t as PageHero } from "./Shell-DCZBADAY.mjs";
import { n as Route } from "./router-BFXYSkoD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-CcpMWdqo.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetail() {
	const { slug } = Route.useParams();
	const { lang } = useLang();
	const service = services.find((item) => item.slug === slug);
	if (!service) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-5 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: tx(lang, {
				en: "That pathway is not listed.",
				ur: "یہ راستہ درج نہیں۔"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/services",
			className: `${btnPrimary} mt-6`,
			children: tx(lang, {
				en: "Back to services",
				ur: "خدمات پر واپس"
			})
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: tx(lang, {
				en: "Service",
				ur: "خدمت"
			}),
			title: tx(lang, service.title),
			lede: tx(lang, service.lead)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: tx(lang, {
					en: "A good fit when",
					ur: "موزوں ہے جب"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: service.fit.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-s-2 border-brass ps-4 text-ink-soft",
					children: tx(lang, item)
				}, item.en))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card bg-parchment p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-ink",
						children: tx(lang, {
							en: "Usually on the desk",
							ur: "عموماً میز پر"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3 text-sm text-ink-soft",
						children: service.documents.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: tx(lang, item) }, item.en))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs text-muted",
						children: tx(lang, disclaimer)
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: btnPrimary,
				children: tx(lang, {
					en: "Ask about this pathway",
					ur: "اس راستے کے بارے میں پوچھیں"
				})
			})
		})
	] });
}
//#endregion
export { ServiceDetail as component };
