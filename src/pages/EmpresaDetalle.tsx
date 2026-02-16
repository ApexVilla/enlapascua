import { useParams, Link } from "react-router-dom";
import {
  Star, MapPin, Phone, Globe, Clock, Mail,
  ChevronLeft, MessageCircle, Facebook, Instagram, Twitter, ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businesses, reviews } from "@/data/mockData";

const EmpresaDetalle = () => {
  const { slug } = useParams();
  const business = businesses.find((b) => b.slug === slug);

  if (!business) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Empresa no encontrada</h1>
          <Link to="/empresas" className="text-accent hover:underline">Volver al directorio</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const businessReviews = reviews.filter((r) => r.businessId === business.id);
  const colors = ["from-navy to-navy-light", "from-gold-dark to-accent", "from-navy-light to-primary", "from-accent to-gold-light"];
  const colorClass = colors[parseInt(business.id) % colors.length];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <div className={`h-64 md:h-80 bg-gradient-to-br ${colorClass} relative`}>
          <div className="absolute inset-0 bg-foreground/10" />
          <div className="container mx-auto px-4 relative z-10 h-full flex items-end pb-6">
            <Link to="/empresas" className="absolute top-4 left-4 flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground text-sm bg-foreground/10 backdrop-blur-sm px-3 py-1.5 rounded-full transition-colors">
              <ChevronLeft className="w-4 h-4" /> Volver
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header Card */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-2">
                      {business.category}
                    </span>
                    <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">{business.name}</h1>
                  </div>
                  <div className="flex items-center gap-1 bg-accent/10 px-3 py-1.5 rounded-full">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="font-bold text-foreground">{business.rating}</span>
                    <span className="text-xs text-muted-foreground">({business.reviewCount})</span>
                  </div>
                </div>
                {business.featured && (
                  <span className="inline-block text-xs font-bold bg-accent text-accent-foreground px-3 py-1 rounded-full mb-4">
                    ⭐ Empresa Destacada
                  </span>
                )}
                <p className="text-muted-foreground leading-relaxed">{business.description}</p>
              </div>

              {/* Services */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Servicios</h2>
                <div className="flex flex-wrap gap-2">
                  {business.services.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  Opiniones ({businessReviews.length})
                </h2>
                {businessReviews.length > 0 ? (
                  <div className="space-y-4">
                    {businessReviews.map((r) => (
                      <div key={r.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-sm text-foreground">{r.author}</span>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: r.rating }).map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{r.comment}</p>
                        <span className="text-xs text-muted-foreground/60 mt-1 block">{r.date}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">Aún no hay opiniones.</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">Información de Contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{business.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent shrink-0" />
                    <a href={`tel:${business.phone}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      {business.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{business.hours}</span>
                  </div>
                  {business.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a href={`mailto:${business.email}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                        {business.email}
                      </a>
                    </div>
                  )}
                  {business.website && (
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-accent shrink-0" />
                      <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1">
                        Visitar sitio web <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-2">
                  <a
                    href={`https://wa.me/${business.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-success text-primary-foreground py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${business.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground py-3 rounded-xl font-semibold text-sm hover:bg-gold-dark transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">Redes Sociales</h3>
                <div className="flex gap-3">
                  {business.socialMedia.facebook && (
                    <a href={business.socialMedia.facebook} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Facebook className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                  {business.socialMedia.instagram && (
                    <a href={business.socialMedia.instagram} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Instagram className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                  {business.socialMedia.twitter && (
                    <a href={business.socialMedia.twitter} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Twitter className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="h-48 bg-secondary flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Mapa disponible próximamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default EmpresaDetalle;
