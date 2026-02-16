import { businesses } from "@/data/mockData";
import BusinessCard from "./BusinessCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedBusinesses = () => {
  const featured = businesses.filter((b) => b.featured);

  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Empresas Destacadas
            </h2>
            <p className="text-muted-foreground text-lg">
              Los negocios mejor valorados de tu zona
            </p>
          </div>
          <Link
            to="/empresas"
            className="hidden sm:flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-3 transition-all"
          >
            Ver todas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>

        <Link
          to="/empresas"
          className="sm:hidden flex items-center justify-center gap-1.5 text-accent font-semibold text-sm mt-8 hover:gap-3 transition-all"
        >
          Ver todas las empresas <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
