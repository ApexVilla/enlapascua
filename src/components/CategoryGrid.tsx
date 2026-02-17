import { Link } from "react-router-dom";
import { categories } from "@/data/mockData";
import {
  UtensilsCrossed, Heart, ShoppingBag, Hotel, Briefcase, Sparkles,
  GraduationCap, Monitor, Car, Hammer, Dumbbell, Music, ArrowRight
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed, Heart, ShoppingBag, Hotel, Briefcase, Sparkles,
  GraduationCap, Monitor, Car, Hammer, Dumbbell, Music,
};

const CategoryGrid = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-secondary/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">Explora por sectores</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Categorías <span className="text-gradient">Populares</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hemos organizado los mejores negocios de la ciudad para que encuentres exactamente lo que necesitas.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Briefcase;
            return (
              <Link
                key={cat.id}
                to={`/empresas?cat=${encodeURIComponent(cat.name)}`}
                className="group relative flex flex-col items-center p-6 rounded-3xl bg-card border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl" />
                  <Icon className="w-7 h-7 text-muted-foreground group-hover:text-accent relative z-10 transition-colors duration-300" />
                </div>

                <h3 className="font-bold text-sm md:text-base text-foreground text-center mb-1">{cat.name}</h3>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-accent/80 transition-colors uppercase tracking-wide">
                  {cat.count} negocios
                </span>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/categorias"
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent border-b-2 border-transparent hover:border-accent pb-0.5 transition-all"
          >
            Ver todas las categorías <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
