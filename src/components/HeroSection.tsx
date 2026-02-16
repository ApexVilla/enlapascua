import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/empresas?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Ciudad vibrante"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="animate-fade-up font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
          Descubre lo Mejor de{" "}
          <span className="text-gradient">Tu Ciudad</span>
        </h1>
        <p className="animate-fade-up-delay-1 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Encuentra empresas, servicios y profesionales locales. Tu guía comercial completa.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="animate-fade-up-delay-2 max-w-2xl mx-auto">
          <div className="flex items-center bg-card rounded-2xl shadow-2xl p-2 gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="¿Qué estás buscando? Ej: Restaurante, dentista..."
                className="w-full pl-12 pr-4 py-3.5 bg-transparent text-foreground placeholder:text-muted-foreground text-sm md:text-base rounded-xl focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-gold-dark text-accent-foreground px-6 md:px-8 py-3.5 rounded-xl font-semibold text-sm md:text-base transition-all duration-200 hover:shadow-lg whitespace-nowrap"
            >
              Buscar
            </button>
          </div>
        </form>

        {/* Quick categories */}
        <div className="animate-fade-up-delay-3 flex flex-wrap justify-center gap-2 mt-6">
          {["Restaurantes", "Hoteles", "Salud", "Tiendas", "Belleza"].map((cat) => (
            <button
              key={cat}
              onClick={() => navigate(`/empresas?cat=${encodeURIComponent(cat)}`)}
              className="px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/10 backdrop-blur-sm"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
