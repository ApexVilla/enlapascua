import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedBusinesses />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
