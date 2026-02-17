import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, ArrowUpDown, X, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusinessCard from "@/components/BusinessCard";
import { businesses, categories, Business } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BusinessModal } from "@/components/BusinessModal";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Empresas = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCat = searchParams.get("cat") || "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState("rating");

  // Modal State
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBusinessClick = (business: Business) => {
    setSelectedBusiness(business);
    setIsModalOpen(true);
  };

  // Sync URL with state
  const updateFilters = (newQuery: string, newCat: string) => {
    setQuery(newQuery);
    setSelectedCategory(newCat);
    const params = new URLSearchParams();
    if (newQuery) params.set("q", newQuery);
    if (newCat) params.set("cat", newCat);
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let result = [...businesses];
    if (query) {
      const terms = query.toLowerCase().split(" ").filter(t => t.length > 0);

      result = result.filter((b) => {
        const searchableText = `
          ${b.name} 
          ${b.category} 
          ${b.description} 
          ${b.shortDescription} 
          ${b.services.join(" ")} 
          ${b.address}
        `.toLowerCase();

        // Every term must be present in the searchable text (AND logic)
        return terms.every(term => searchableText.includes(term));
      });
    }
    if (selectedCategory) {
      result = result.filter((b) =>
        b.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    if (sortBy === "reviews") result.sort((a, b) => b.reviewCount - a.reviewCount);
    if (sortBy === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [query, selectedCategory, sortBy]);

  const clearFilters = () => {
    setQuery("");
    setSelectedCategory("");
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-display font-semibold mb-3 text-foreground">Buscar</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Nombre, servicio..."
            value={query}
            onChange={(e) => updateFilters(e.target.value, selectedCategory)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-secondary/50 border border-transparent focus:bg-background focus:border-accent/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent/10"
          />
        </div>
      </div>

      <div>
        <h3 className="font-display font-semibold mb-3 text-foreground">Categorías</h3>
        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          <button
            onClick={() => updateFilters(query, "")}
            className={cn(
              "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
              selectedCategory === ""
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            Todas las categorías
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => updateFilters(query, c.name)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex justify-between items-center",
                selectedCategory === c.name
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <span>{c.name}</span>
              <span className="text-xs opacity-60 ml-2">({c.count})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Page Header */}
      <div className="bg-secondary/30 border-b border-border/50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Explora Empresas y Servicios
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Descubre los mejores negocios locales en Valle de la Pascua. Calidad y confianza cerca de ti.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-8 sticky top-24 h-fit">
            <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-lg">Filtros</h2>
                {(query || selectedCategory) && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-accent hover:underline font-medium"
                  >
                    Limpiar todo
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-card rounded-xl border border-border/50 p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden gap-2">
                      <Filter className="w-4 h-4" />
                      Filtros
                      {(query || selectedCategory) && (
                        <span className="ml-1 w-2 h-2 rounded-full bg-accent" />
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetHeader className="mb-6">
                      <SheetTitle className="font-display font-bold text-xl text-left">Filtros</SheetTitle>
                      <SheetDescription className="text-left">
                        Ajusta tu búsqueda para encontrar lo que necesitas.
                      </SheetDescription>
                    </SheetHeader>
                    <FilterContent />
                  </SheetContent>
                </Sheet>

                <span className="text-sm text-muted-foreground font-medium pl-2">
                  Showing <span className="text-foreground font-bold">{filtered.length}</span> results
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground hidden sm:inline-block">Ordenar por:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-1.5 rounded-lg bg-secondary text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 cursor-pointer hover:bg-secondary/80 transition-colors"
                  >
                    <option value="rating">Mejor valorados</option>
                    <option value="reviews">Más populares</option>
                    <option value="name">Nombre (A-Z)</option>
                  </select>
                  <ArrowUpDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Results Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((b) => (
                  <BusinessCard
                    key={b.id}
                    business={b}
                    onClick={() => handleBusinessClick(b)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-3xl border border-border/50 border-dashed">
                <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground/50" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">No se encontraron resultados</h3>
                <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                  No pudimos encontrar empresas que coincidan con tu búsqueda. Intenta ajustar los filtros.
                </p>
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="gap-2"
                >
                  <X className="w-4 h-4" />
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <BusinessModal
        business={selectedBusiness}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Empresas;
