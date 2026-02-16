import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/mockData";
import {
  UtensilsCrossed, Heart, ShoppingBag, Hotel, Briefcase, Sparkles,
  GraduationCap, Monitor, Car, Hammer, Dumbbell, Music, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed, Heart, ShoppingBag, Hotel, Briefcase, Sparkles,
  GraduationCap, Monitor, Car, Hammer, Dumbbell, Music,
};

const Categorias = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Categorías</h1>
          <p className="text-muted-foreground text-lg">Explora negocios por tipo de servicio</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Briefcase;
            return (
              <Link
                key={cat.id}
                to={`/empresas?cat=${encodeURIComponent(cat.name)}`}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                  <span className="text-xs text-muted-foreground/70">{cat.count} negocios</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categorias;
