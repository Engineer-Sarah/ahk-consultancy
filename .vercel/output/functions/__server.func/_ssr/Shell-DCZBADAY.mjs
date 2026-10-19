import { i as __toESM } from "../_runtime.mjs";
import { K as require_jsx_runtime, q as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as tx, f as useLang, i as disclaimer, n as brand, s as nav } from "./content-BR60Suq3.mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Shell-DCZBADAY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var linkClass = "text-sm text-ink-soft transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass";
function Shell({ children }) {
	const { lang, setLang } = useLang();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:bg-card focus:px-4 focus:py-2",
				children: tx(lang, {
					en: "Skip to content",
					ur: "مواد پر جائیں"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3",
							onClick: () => setOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 place-items-center rounded-full border border-brass font-display text-sm text-ink",
								children: "AHK"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-lg text-ink",
									children: brand.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs tracking-wide text-muted",
									children: tx(lang, {
										en: "Visa guidance · Islamabad",
										ur: "ویزا رہنمائی · اسلام آباد"
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-7 lg:flex",
							"aria-label": "Primary",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								activeOptions: { exact: item.exact },
								className: linkClass,
								activeProps: { className: `${linkClass} text-brass` },
								children: tx(lang, item.label)
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, {
									lang,
									setLang
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hidden min-h-11 items-center rounded-full bg-brass px-4 text-sm font-medium text-ink transition-colors hover:bg-brass-soft sm:inline-flex",
									children: tx(lang, {
										en: "Book a review",
										ur: "جائزہ بک کریں"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden",
									"aria-expanded": open,
									"aria-label": tx(lang, {
										en: "Menu",
										ur: "مینو"
									}),
									onClick: () => setOpen((v) => !v),
									children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
								})
							]
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-line bg-paper px-5 py-4 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "min-h-11 rounded-xl px-3 py-2 text-ink hover:bg-parchment",
							children: tx(lang, item.label)
						}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							onClick: () => setOpen(false),
							className: "mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-brass px-4 text-sm font-medium text-ink",
							children: tx(lang, {
								en: "Book a review",
								ur: "جائزہ بک کریں"
							})
						})]
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "bg-ink text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl",
								children: brand.legal
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-sm leading-relaxed text-parchment/80",
								children: tx(lang, disclaimer)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-brass-soft uppercase",
							children: tx(lang, {
								en: "Visit",
								ur: "صفحات"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "text-parchment hover:text-brass-soft",
								children: tx(lang, item.label)
							}) }, item.to))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-brass-soft uppercase",
								children: tx(lang, {
									en: "Office",
									ur: "دفتر"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-parchment",
								children: tx(lang, brand.city)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-parchment/80",
								children: tx(lang, brand.hours)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "mt-3 inline-block text-sm text-brass-soft hover:underline",
								href: `mailto:${brand.email}`,
								children: brand.email
							})
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-navy px-5 py-4 text-center text-xs text-parchment/60",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						brand.legal
					]
				})]
			})
		]
	});
}
function LangSwitch({ lang, setLang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex rounded-full border border-line p-1 text-xs",
		role: "group",
		"aria-label": "Language",
		children: [["en", "EN"], ["ur", "اردو"]].map(([code, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setLang(code),
			className: `min-h-9 rounded-full px-3 ${lang === code ? "bg-ink text-paper" : "text-ink-soft"}`,
			"aria-pressed": lang === code,
			children: label
		}, code))
	});
}
function PageHero({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line bg-parchment",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-14 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-brass uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl text-ink md:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-muted",
					children: lede
				})
			]
		})
	});
}
var btnPrimary = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-colors hover:bg-brass-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";
var btnGhost = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-card px-5 text-sm font-medium text-ink transition-colors hover:border-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";
//#endregion
export { btnPrimary as i, Shell as n, btnGhost as r, PageHero as t };
