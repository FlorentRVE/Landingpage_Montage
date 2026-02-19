export default function SiteFooter() {
  return (
    <footer className="border-t border-azure-200/40 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} • Montage Shorts/Reels</span>
        <span>After Effects • CapCut • Blender • Remote</span>
      </div>
    </footer>
  );
}
