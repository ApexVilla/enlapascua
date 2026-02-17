import { Link } from "react-router-dom";
import { Plus, Star, Building2, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Stats Section with Fade Up Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-fade-up">
          {[
            { icon: Building2, label: "Empresas Registradas", value: "450+", color: "text-accent" },
            { icon: Users, label: "Usuarios Activos", value: "12k+", color: "text-blue-500" },
            { icon: Star, label: "Valoraciones", value: "8.5k", color: "text-gold" },
            { icon: Building2, label: "Categorías", value: "12", color: "text-green-500" },
          ].map((stat, i) => (
            <div key={i} className="group text-center p-6 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy p-8 md:p-16 text-center group">
          {/* Gradient Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-primary opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1600x900?business')] bg-cover bg-center mix-blend-overlay opacity-10 group-hover:opacity-20 transition-opacity duration-700 group-hover:scale-105" />

          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs font-bold uppercase tracking-widest mb-2">
              Únete a nosotros
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              ¿Tienes un Negocio? <br /> <span className="text-gold">Hazlo crecer hoy.</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Registra tu empresa gratis y conecta con miles de clientes potenciales en Valle de la Pascua. Aumenta tu visibilidad y ventas con nuestra plataforma premium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
              <Link to="/registrar">
                <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-full bg-gold hover:bg-gold-light text-navy-dark font-bold shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all hover:-translate-y-0.5">
                  <Plus className="w-5 h-5 mr-2" />
                  Registrar Mi Empresa
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5">
                  Más Información
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <p className="text-white/40 text-sm mt-6">
              * No se requiere tarjeta de crédito para el registro básico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
