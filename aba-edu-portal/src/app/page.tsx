import { ContentHeroSection } from "@/components/sections/ContentHeroSection";
import { MagazinePreview } from "@/components/sections/MagazinePreview";
import { GuidePreview } from "@/components/sections/GuidePreview";
import { ToolsPreview } from "@/components/sections/ToolsPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      {/* Etsy-style: Content-first approach with minimal hero */}
      <ContentHeroSection />
      <MagazinePreview />
      <GuidePreview />
      <ToolsPreview />
      <CTASection />
    </>
  );
}
