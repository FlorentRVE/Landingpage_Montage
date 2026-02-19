const faqs = [
  {
    q: "Tu travailles seulement à la Réunion ?",
    a: "Non : je suis basé à la Réunion mais je travaille en remote partout (France et international).",
  },
  {
    q: "Tu peux gérer les sous-titres et le branding ?",
    a: "Oui : captions lisibles + mise en avant des mots clés, et branding propre via templates (After Effects).",
  },
  {
    q: "Est-ce que tu fais des variantes pour les pubs ?",
    a: "Oui : sur le pack Ads/Agence, je peux proposer des variantes de hooks (A/B) et des exports adaptés aux placements.",
  },
  {
    q: "Comment on t’envoie les rushs ?",
    a: "Drive (Google Drive / Dropbox) ou dossier partagé. On met en place un naming simple pour gagner du temps.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-black tracking-tight md:text-3xl">FAQ</h2>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-azure-200/60 bg-white/70 p-4 shadow-soft"
            >
              <div className="font-black tracking-tight">{f.q}</div>
              <div className="mt-2 text-sm text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
