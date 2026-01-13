import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsPreview />
      <IndustriesSection />
      <WhyChooseUs />
      <CertificationsSection />
      <PartnersSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
