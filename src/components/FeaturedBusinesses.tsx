import { businesses } from "@/data/mockData";
import BusinessCard from "./BusinessCard";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedBusinesses = () => {
  const featured = businesses.filter((b) => b.featured);

  return (
    <section className="py-20 md:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-accent font-semibold tracking-wide text-sm uppercase mb-3">
              <Star className="w-4 h-4 fill-current" />
              <span>Lo mejor de la ciudad</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Empresas <span className="text-gradient">Destacadas</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Descubre los negocios mejor valorados por la comunidad. Calidad, servicio y confianza garantizados.
            </p>
          </div>

          <Link
            to="/empresas"
            className="hidden md:flex items-center gap-2 text-foreground font-semibold text-base hover:text-accent transition-colors group"
          >
            Ver todas <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 pb-4">
            {featured.map((business) => (
              <CarouselItem key={business.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <BusinessCard business={business} className="h-full" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/empresas"
            className="inline-flex items-center justify-center gap-2 text-accent font-bold text-base hover:gap-3 transition-all"
          >
            Ver directorio completo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
