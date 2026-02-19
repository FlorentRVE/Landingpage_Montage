const steps = [
  {
    t: "1) Brief rapide",
    d: "Ta cible, ton ton, exemples & objectifs (organique / ads).",
  },
  {
    t: "2) Templates",
    d: "Style captions + branding léger + règles de rythme.",
  },
  {
    t: "3) Production",
    d: "Montage, sous-titres, sound, exports (versions si besoin).",
  },
  {
    t: "4) Livraison",
    d: "Dossier clair + révision(s) selon pack, prêt à poster.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-black tracking-tight md:text-3xl">
          Process simple (et efficace)
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          L’objectif : éviter les allers-retours inutiles et livrer vite, de
          façon régulière.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-azure-200/60 bg-white/70 p-4 shadow-soft"
            >
              <div className="font-black tracking-tight">{s.t}</div>
              <div className="mt-2 text-sm text-slate-600">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
