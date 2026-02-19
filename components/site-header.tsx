export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-azure-200/40 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-2xl border border-azure-200/60 bg-gradient-to-br from-azure-100/70 to-azure-50 shadow-soft">
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
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight">
              Montage Shorts / Reels
            </div>
            <div className="text-xs text-slate-500">
              After Effects • CapCut • Blender
            </div>
          </div>
        </a>

        <nav className="flex flex-wrap items-center justify-end gap-3">
          <a
            className="text-sm text-slate-800 hover:text-azure-700"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            className="text-sm text-slate-800 hover:text-azure-700"
            href="#packs"
          >
            Packs
          </a>
          <a
            className="text-sm text-slate-800 hover:text-azure-700"
            href="#process"
          >
            Process
          </a>
          <a
            className="rounded-2xl bg-gradient-to-br from-azure-500 to-azure-400 px-4 py-2 text-sm font-extrabold text-white shadow-glow"
            href="#contact"
          >
            Demander un devis
          </a>
        </nav>
      </div>
    </header>
  );
}
