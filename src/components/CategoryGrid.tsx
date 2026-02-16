import { Link } from "react-router-dom";
import { categories } from "@/data/mockData";
import {
  UtensilsCrossed, Heart, ShoppingBag, Hotel, Briefcase, Sparkles,
  GraduationCap, Monitor, Car, Hammer, Dumbbell, Music,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed, Heart, ShoppingBag, Hotel, Briefcase, Sparkles,
  GraduationCap, Monitor, Car, Hammer, Dumbbell, Music,
};

const CategoryGrid = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Explora por Categoría
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Encuentra exactamente lo que necesitas
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Briefcase;
            return (
              <Link
                key={cat.id}
                to={`/empresas?cat=${encodeURIComponent(cat.name)}`}
                className="group flex flex-col items-center p-5 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <span className="font-semibold text-sm text-foreground text-center leading-tight">{cat.name}</span>
                <span className="text-xs text-muted-foreground mt-1">{cat.count} negocios</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
