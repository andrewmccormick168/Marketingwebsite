import React from "react";
import Hero from "@/components/site/sections/Hero";
import OnePlatform from "@/components/site/sections/OnePlatform";
import FeaturesGrid from "@/components/site/sections/FeaturesGrid";
import OfficeField from "@/components/site/sections/OfficeField";
import IndustriesGrid from "@/components/site/sections/IndustriesGrid";
import WhyDigitise from "@/components/site/sections/WhyDigitise";
import Story from "@/components/site/sections/Story";
import PricingTeaser from "@/components/site/sections/PricingTeaser";
import CustomerPortal from "@/components/site/sections/CustomerPortal";
import FinalCta from "@/components/site/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <OnePlatform />
      <FeaturesGrid />
      <OfficeField />
      <IndustriesGrid />
      <WhyDigitise />
      <Story />
      <PricingTeaser />
      <CustomerPortal />
      <FinalCta />
    </>
  );
}