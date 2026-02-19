import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import PortfolioSection from "@/components/portfolio";
import PacksSection from "@/components/packs";
import ProcessSection from "@/components/process";
import FaqSection from "@/components/faq";
import CtaSection from "@/components/cta";
import SiteFooter from "@/components/footer";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montage vidéo Shorts / Reels",
    description:
      "Montage vidéo vertical orienté performance : hooks, sous-titres, branding (After Effects) et touches 3D (Blender). Packs mensuels pour créateurs, marques, immobilier, tourisme, agences.",
    areaServed: "FR",
    serviceType: "Video Editing",
  };

  return (
    <div className="relative">
      {/* background accents */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 20% 10%, rgba(14,165,233,0.13), transparent 60%), radial-gradient(700px 450px at 85% 15%, rgba(56,189,248,0.12), transparent 55%)",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />
      <main>
        <Hero />
        <PortfolioSection />
        <PacksSection />
        <ProcessSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
