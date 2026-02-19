"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, PORTFOLIO, PortfolioCategory } from "@/lib/constants";

export default function PortfolioSection() {
  const [active, setActive] = useState<PortfolioCategory>("Immo");

  const items = useMemo(
    () => PORTFOLIO.filter((x) => x.category === active),
    [active],
  );

  return (
    <section id="portfolio" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">
              Portfolio
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Clique une catégorie pour afficher les vidéos correspondantes.
              Chaque carte ouvre ton lien Instagram.
            </p>
          </div>

          <div
            className="inline-flex flex-wrap gap-2 rounded-full border border-azure-200/60 bg-white/70 p-2 shadow-soft"
            role="tablist"
            aria-label="Catégories portfolio"
          >
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  role="tab"
                  aria-selected={isActive}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-extrabold transition",
                    isActive
                      ? "border border-azure-300/70 bg-gradient-to-br from-azure-100/70 to-azure-50 text-azure-800"
                      : "border border-transparent text-slate-900 hover:text-azure-700",
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-azure-200/60 bg-gradient-to-b from-white/80 to-azure-50/60 shadow-soft transition hover:-translate-y-0.5"
            >
              {/* placeholder thumb */}
              <div className="grid h-44 place-items-center border-b border-azure-200/40 bg-[radial-gradient(420px_200px_at_30%_20%,rgba(14,165,233,0.22),transparent_65%),radial-gradient(420px_200px_at_70%_60%,rgba(56,189,248,0.20),transparent_65%)]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-azure-200/60 bg-white/70">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M9.5 7.5v9l8-4.5-8-4.5Z"
                      stroke="rgb(14 165 233)"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                      stroke="rgba(14,165,233,0.55)"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="font-black tracking-tight">{item.title}</div>
                  <span className="whitespace-nowrap rounded-full border border-azure-200/60 bg-azure-50 px-3 py-1 text-xs font-extrabold text-azure-800">
                    {item.category}
                  </span>
                </div>
                {item.subtitle ? (
                  <div className="mt-2 text-sm text-slate-600">
                    {item.subtitle}
                  </div>
                ) : null}

                <div className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 group-hover:text-azure-700">
                  Voir sur Instagram
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 7h7v7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-4 border-l-4 border-azure-200 pl-3 text-xs text-slate-500">
          
        </p>
      </div>
    </section>
  );
}
