export default function CtaSection() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        <div className="overflow-hidden rounded-2xl border border-azure-300/60 bg-white/70 shadow-glow">
          <div
            className="grid grid-cols-1 gap-4 p-5 md:grid-cols-[1.1fr_0.9fr]"
            style={{
              background:
                "radial-gradient(900px 360px at 20% 20%, rgba(14,165,233,0.18), transparent 55%), radial-gradient(700px 320px at 85% 70%, rgba(56,189,248,0.16), transparent 55%)",
            }}
          >
            <div>
              <span className="inline-flex rounded-full border border-azure-200/60 bg-azure-50 px-3 py-1 text-xs font-extrabold text-azure-800">
                Disponible pour packs mensuels
              </span>

              <h3 className="mt-3 text-2xl font-black tracking-tight">
                On lance ton flux de shorts cette semaine ?
              </h3>

              <p className="mt-2 max-w-xl text-sm text-slate-700">
                Dis-moi ton secteur (immo, tourisme, coach, marque…), ton volume
                souhaité et ton style. Je te réponds avec une proposition
                claire.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {/* Remplace par ton profil IG */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-linear-to-br from-azure-500 to-azure-400 px-4 py-3 font-extrabold text-white shadow-glow"
                >
                  Me contacter sur Whatsapp
                </a>

                {/* Remplace par ton email */}
                <a
                  href="mailto:tonmail@exemple.com"
                  className="rounded-2xl border border-azure-200/60 bg-white/70 px-4 py-3 font-extrabold text-slate-900 shadow-soft hover:text-azure-700"
                >
                  Envoyer un email
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Disponible aussi en messagerie Instagram/TikTok.
              </p>
            </div>

            <div className="rounded-2xl border border-azure-200/60 bg-white/70 p-4 shadow-soft">
              <div className="font-black tracking-tight">
                Mini-brief (copier/coller)
              </div>
              <div className="mt-3 rounded-2xl border border-azure-200/50 bg-azure-50 p-4 text-sm leading-relaxed text-slate-800">
                <pre className="whitespace-pre-wrap font-sans">
                  {`Secteur :
Objectif (organique/ads) :
Volume (8 / 16 / 20-30) :
Exemples de style :
Délais :
Liens (IG/TikTok/YT) :`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
