import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monteur vidéo Shorts & Reels | Montage vertical performant",
  description:
    "Monteur vidéo freelance spécialisé Shorts, Reels et TikTok : hooks, sous-titres premium, branding léger (After Effects) et touches 3D (Blender). Packs mensuels pour créateurs, marques, immo, tourisme, agences.",
  openGraph: {
    title: "Monteur vidéo Shorts & Reels",
    description:
      "Montage vertical performant : hook (0–2s), rythme, sous-titres, branding et variantes. Packs mensuels clairs, livraison rapide.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
