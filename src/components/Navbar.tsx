
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-new.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/empresas?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Empresas", path: "/empresas" },
    { name: "Categorías", path: "/categorias" },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "glass border-border/50 shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <img
              src={logo}
              alt="EnLaPascua.com"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8 group">
            <div className="relative w-full transition-transform duration-300 focus-within:scale-105">
              <button
                type="submit"
                className="absolute left-1 top-1/2 -translate-y-1/2 p-2 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all z-10"
              >
                <Search className="w-4 h-4" />
              </button>
              <input
                type="text"
                placeholder="¿Qué estás buscando hoy?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-secondary/50 border border-transparent focus:bg-background focus:border-accent/30 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all shadow-sm"
              />
            </div>
          </form>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative overflow-hidden",
                  isActive(link.path)
                    ? "text-primary-foreground bg-primary shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="h-6 w-px bg-border mx-2" />

            <Link to="/registrar">
              <Button size="sm" className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold rounded-full px-5 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300">
                <Plus className="w-4 h-4 mr-1.5" />
                Publicar
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-foreground active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-in-out flex flex-col pt-24 px-6",
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <form onSubmit={handleSearch} className="mb-8 animate-fade-up">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar empresas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-secondary text-foreground placeholder:text-muted-foreground text-base border-none focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-inner"
              />
            </div>
          </form>

          <div className="flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "p-4 text-lg font-medium rounded-2xl transition-all duration-300 flex items-center justify-between group",
                  isActive(link.path)
                    ? "bg-accent/10 text-accent"
                    : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                )}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {link.name}
                {isActive(link.path) && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
              </Link>
            ))}

            <div className="my-4 h-px bg-border/50" />

            <Link to="/registrar" className="animate-fade-up-delay-3">
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-2xl shadow-xl shadow-primary/20">
                <Plus className="w-5 h-5 mr-2" />
                Publicar mi Negocio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
