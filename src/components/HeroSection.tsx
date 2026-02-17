import { Search, MapPin } from "lucide-react";
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

  const quickCategories = [
    { name: "Restaurantes", icon: "🍽️" },
    { name: "Hoteles", icon: "🏨" },
    { name: "Salud", icon: "⚕️" },
    { name: "Tiendas", icon: "🛍️" },
    { name: "Belleza", icon: "💇‍♀️" }
  ];

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Valle de la Pascua"
          className="w-full h-full object-cover animate-[zoomEffect_20s_infinite_alternate]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            La guía oficial de Valle de la Pascua
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Descubre lo mejor de
            <span className="block text-gradient mt-2">Tu Ciudad</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Conecta con los mejores servicios, profesionales y empresas locales.
            Calidad y confianza en un solo lugar.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-gold/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl transition-transform transform group-hover:-translate-y-1">
              <div className="flex-1 relative flex items-center border-r border-gray-200/50 mr-2">
                <Search className="ml-4 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="¿Qué estás buscando?"
                  className="w-full pl-3 pr-4 py-4 bg-transparent text-foreground placeholder:text-muted-foreground text-base focus:outline-none"
                />
              </div>
              <div className="hidden md:flex items-center gap-2 pl-3 pr-4 border-r border-gray-200/50 mr-2 opacity-50">
                <MapPin className="w-5 h-5" />
                <span className="text-sm whitespace-nowrap">Valle de la Pascua</span>
              </div>
              <button
                type="submit"
                className="bg-accent hover:bg-gold-dark text-accent-foreground px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Buscar
              </button>
            </div>
          </form>

          {/* Quick categories */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-up-delay-2">
            {quickCategories.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => navigate(`/empresas?cat=${encodeURIComponent(cat.name)}`)}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/90 text-sm font-medium transition-all border border-white/10 hover:border-white/30 backdrop-blur-sm hover:-translate-y-1"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
