import { PACKS } from "@/lib/constants";

export default function PacksSection() {
  return (
    <section id="packs" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-black tracking-tight md:text-3xl">
          Packs mensuels
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Tu choisis un pack, on met en place un workflow, et tu reçois des
          vidéos prêtes à poster (ou à tester en ads). Tous les packs sont
          adaptables.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PACKS.map((p) => (
            <div
              key={p.name}
              className={[
                "relative overflow-hidden rounded-2xl border bg-linear-to-b p-5 shadow-soft",
                p.highlight
                  ? "border-azure-300/70 from-azure-50/80 to-white/80"
                  : "border-azure-200/60 from-white/80 to-azure-50/60",
              ].join(" ")}
            >
              {p.highlight ? (
                <span className="absolute right-4 top-4 rounded-full border border-azure-200/60 bg-azure-50 px-3 py-1 text-xs font-extrabold text-azure-800">
                  Recommandé
                </span>
              ) : null}

              <div className="text-lg font-black tracking-tight">{p.name}</div>
              <div className="mt-1 text-xs text-slate-500">{p.forWho}</div>

              <div className="mt-4 text-2xl font-black tracking-tight">
                {p.priceRange}
              </div>

              <ul className="mt-4 space-y-3">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 border-b border-dashed border-azure-200/50 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-0.5 text-azure-500">✔</span>
                    <span className="text-sm text-slate-800">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={[
                  "mt-5 block rounded-2xl px-4 py-3 text-center font-extrabold shadow-soft transition",
                  p.highlight
                    ? "bg-linear-to-br from-azure-500 to-azure-400 text-white shadow-glow"
                    : "border border-azure-200/60 bg-white/70 text-slate-900 hover:text-azure-700",
                ].join(" ")}
              >
                Choisir ce pack
              </a>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-azure-200/60 bg-azure-50 p-4">
          <div className="font-black tracking-tight">Add-ons (optionnels)</div>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2 border-b border-dashed border-azure-200/50 pb-3 last:border-b-0 last:pb-0">
              <span className="mt-0.5 text-azure-500">✔</span>
              <span className="text-sm text-slate-800">
                +15 €/vidéo : Sous-titres “premium” (mots clés animés, sound
                design léger)
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-dashed border-azure-200/50 pb-3 last:border-b-0 last:pb-0">
              <span className="mt-0.5 text-azure-500">✔</span>
              <span className="text-sm text-slate-800">
                +30–80 €/vidéo : Sourcing B-roll / images / inserts
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-dashed border-azure-200/50 pb-3 last:border-b-0 last:pb-0">
              <span className="mt-0.5 text-azure-500">✔</span>
              <span className="text-sm text-slate-800">
                +80–250 € : Ajout 3D
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
