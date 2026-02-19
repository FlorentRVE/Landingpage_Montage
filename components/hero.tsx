export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 pb-8 pt-14 md:grid-cols-[1.2fr_0.8fr] md:pb-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-azure-200/60 bg-azure-50 px-3 py-2 text-xs font-extrabold text-azure-800">
            ⚡ Shorts, Reels, TikTok • packs mensuels • livraison rapide
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Des vidéos courtes{" "}
            <span className="bg-linear-to-br from-azure-600 to-azure-400 bg-clip-text text-transparent">
              qui retiennent l’attention
            </span>{" "}
            et convertissent.
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-700">
            Montage vertical orienté performance : hook (0–2s), rythme,
            sous-titres premium, branding propre (After Effects) et touches 3D
            légères (Blender) quand ça sert le message.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#packs"
              className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-br from-azure-500 to-azure-400 px-4 py-3 font-extrabold text-white shadow-glow"
            >
              Voir les packs
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M7 17L17 7"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M10 7h7v7"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#portfolio"
              className="rounded-2xl border border-azure-200/60 bg-white/70 px-4 py-3 font-extrabold text-slate-900 shadow-soft"
            >
              Regarder le portfolio
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
            {[
              "✅ Sous-titres lisibles & stylés",
              "✅ Variantes de hook (ads)",
              "✅ Workflow clair (dossiers/versions)",
            ].map((x) => (
              <span
                key={x}
                className="rounded-full border border-azure-200/50 bg-azure-50 px-3 py-2"
              >
                {x}
              </span>
            ))}
          </div>
        </div>

        {/* side card */}
        <div className="rounded-2xl border border-azure-200/60 bg-linear-to-b from-white/80 to-azure-50/60 p-4 shadow-soft">
          <div className="rounded-2xl border border-azure-200/60 bg-[radial-gradient(600px_240px_at_30%_10%,rgba(14,165,233,0.20),transparent_60%)] p-4">
            <div className="text-sm font-black tracking-tight">
              Ce que tu obtiens
            </div>

            <ul className="mt-3 space-y-3">
              {[
                "Montage vertical natif (Reels/Shorts/TikTok)",
                "Hook optimisé + structure claire",
                "Sous-titres premium (mots clés mis en avant)",
                "Branding cohérent (templates AE si besoin)",
                "Exports propres & rapides",
              ].map((x) => (
                <li
                  key={x}
                  className="flex items-start gap-2 border-b border-dashed border-azure-200/50 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="mt-0.5 text-azure-500">✔</span>
                  <span className="text-sm text-slate-800">{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-azure-200/60 bg-azure-50 p-3">
                <div className="text-xs font-extrabold text-azure-800">
                  Délai
                </div>
                <div className="text-lg font-black tracking-tight">24–72h</div>
                <div className="text-xs text-slate-500">selon volume</div>
              </div>
              <div className="rounded-2xl border border-azure-200/60 bg-azure-50 p-3">
                <div className="text-xs font-extrabold text-azure-800">
                  Spécialités
                </div>
                <div className="text-lg font-black tracking-tight">
                  Hook + Captions
                </div>
                <div className="text-xs text-slate-500">branding clean</div>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-4 block rounded-2xl bg-linear-to-br from-azure-500 to-azure-400 px-4 py-3 text-center font-extrabold shadow text-white"
            >
              Contactez moi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
