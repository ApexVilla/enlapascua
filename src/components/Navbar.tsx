import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/empresas?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <span className="font-display font-bold text-accent-foreground text-lg">D</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground hidden sm:block">
              Directorio<span className="text-accent">Local</span>
            </span>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar empresas o servicios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary text-foreground placeholder:text-muted-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>
          </form>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/categorias" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Categorías
            </Link>
            <Link to="/empresas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Empresas
            </Link>
            <Link to="/registrar">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-gold-dark rounded-full gap-1.5">
                <Plus className="w-4 h-4" />
                Publicar Empresa
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-up">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar empresas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-secondary text-foreground placeholder:text-muted-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
            </form>
            <div className="flex flex-col gap-2">
              <Link to="/categorias" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors">
                Categorías
              </Link>
              <Link to="/empresas" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors">
                Empresas
              </Link>
              <Link to="/registrar" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-gold-dark rounded-full gap-1.5 mt-2">
                  <Plus className="w-4 h-4" />
                  Publicar Empresa
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
