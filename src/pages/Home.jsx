import React from "react";
import Hero from "@/components/site/sections/Hero";
import ProofStats from "@/components/site/sections/ProofStats";
import Workflow from "@/components/site/sections/Workflow";
import FeaturesGrid from "@/components/site/sections/FeaturesGrid";
import OfficeField from "@/components/site/sections/OfficeField";
import MaintenanceOperations from "@/components/site/sections/MaintenanceOperations";
import Automation from "@/components/site/sections/Automation";
import CommercialProjects from "@/components/site/sections/CommercialProjects";
import IndustriesGrid from "@/components/site/sections/IndustriesGrid";
import WhyDigitise from "@/components/site/sections/WhyDigitise";
import PricingTeaser from "@/components/site/sections/PricingTeaser";
import CustomerPortal from "@/components/site/sections/CustomerPortal";
import FinalCta from "@/components/site/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStats />
      <Workflow />
      <OfficeField />
      <MaintenanceOperations />
      <Automation />
      <CommercialProjects />
      <CustomerPortal />
      <IndustriesGrid />
      <FeaturesGrid />
      <WhyDigitise />
      <PricingTeaser />
      <FinalCta />
    </>
  );
}