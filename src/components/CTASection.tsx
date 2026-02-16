import { Link } from "react-router-dom";
import { Plus, Star, Building2, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Building2, label: "Empresas Registradas", value: "450+" },
            { icon: Users, label: "Usuarios Activos", value: "12,000+" },
            { icon: Star, label: "Valoraciones", value: "8,500+" },
            { icon: Building2, label: "Categorías", value: "12" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-card border border-border">
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="font-display font-bold text-2xl md:text-3xl text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-navy-dark" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              ¿Tienes un Negocio?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Registra tu empresa gratis y llega a miles de clientes potenciales en tu zona. Aumenta tu visibilidad hoy.
            </p>
            <Link
              to="/registrar"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:bg-gold-dark transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              <Plus className="w-5 h-5" />
              Registrar Mi Empresa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
