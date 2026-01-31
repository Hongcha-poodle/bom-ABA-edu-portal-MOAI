import { HeroSection } from "@/components/sections/HeroSection";
import { MagazinePreview } from "@/components/sections/MagazinePreview";
import { GuidePreview } from "@/components/sections/GuidePreview";
import { ToolsPreview } from "@/components/sections/ToolsPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MagazinePreview />
      <GuidePreview />
      <ToolsPreview />
      <CTASection />
    </>
  );
}
