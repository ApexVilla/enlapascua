import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star, MapPin, Phone, Globe, Clock, Mail,
  ChevronLeft, MessageCircle, Facebook, Instagram, Twitter, ExternalLink,
  Share2, Heart, ImageIcon, X
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businesses, reviews } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const EmpresaDetalle = () => {
  const { slug } = useParams();
  const business = businesses.find((b) => b.slug === slug);
  const [isLiked, setIsLiked] = useState(false);

  if (!business) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-muted-foreground opacity-50" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">Empresa no encontrada</h1>
          <p className="text-muted-foreground mb-6">Lo sentimos, no pudimos encontrar el negocio que buscas.</p>
          <Link to="/empresas">
            <Button>Volver al directorio</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const businessReviews = reviews.filter((r) => r.businessId === business.id);
  const colors = ["from-navy to-navy-light", "from-gold-dark to-accent", "from-navy-light to-primary", "from-accent to-gold-light"];
  const colorClass = colors[parseInt(business.id) % colors.length];

  // Mock images for gallery since data doesn't have them
  const galleryImages = [
    `https://source.unsplash.com/random/800x600?business,${business.category}`,
    `https://source.unsplash.com/random/800x600?office,${business.category}`,
    `https://source.unsplash.com/random/800x600?team,${business.category}`,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-20">
        {/* Immersive Hero */}
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden group">
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-90`} />
          {/* Placeholder for actual hero image if available */}
          <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1600x900?city')] bg-cover bg-center mix-blend-overlay opacity-20" />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-between py-6">
            <Link
              to="/empresas"
              className="w-fit flex items-center gap-2 text-white/90 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-all duration-300 transform hover:-translate-x-1"
            >
              <ChevronLeft className="w-4 h-4" /> Volver
            </Link>

            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-accent/20">
                  {business.category}
                </span>
                {business.featured && (
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-gold/20">
                    <Star className="w-3 h-3 fill-current" /> Destacado
                  </span>
                )}
              </div>

              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 leading-tight shadow-sm">
                {business.name}
              </h1>

              <div className="flex items-center gap-4 text-white/90 text-sm md:text-base font-medium">
                <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span>{business.rating}</span>
                  <span className="opacity-60">({business.reviewCount} reseñas)</span>
                </div>
                <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4" />
                  <span>{business.address.split(",")[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Toolbar */}
              <div className="flex items-center justify-end gap-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "gap-2 bg-background/80 backdrop-blur-sm border-border/50",
                    isLiked && "text-red-500 border-red-500/20 bg-red-500/5"
                  )}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
                  {isLiked ? "Guardado" : "Guardar"}
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-background/80 backdrop-blur-sm border-border/50">
                  <Share2 className="w-4 h-4" /> Compartir
                </Button>
              </div>

              {/* Description */}
              <div className="bg-card rounded-3xl border border-border/50 p-8 shadow-sm">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Sobre Nosotros</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {business.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {business.services.map((s) => (
                    <span key={s} className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-xl border border-border/50">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery (Mock) */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl font-bold text-foreground">Galería</h2>
                  <Button variant="ghost" size="sm" className="text-accent">Ver todo</Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Just using placeholders since we don't have real images in mock data */}
                  {galleryImages.map((img, i) => (
                    <Dialog key={i}>
                      <DialogTrigger asChild>
                        <div className="aspect-square rounded-2xl bg-secondary overflow-hidden relative group cursor-pointer hover:shadow-lg transition-all">
                          <img src={img} alt={`Galería ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                            <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100" />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                        <div className="relative w-full h-fit flex items-center justify-center">
                          <img src={img} alt={`Galería grande ${i + 1}`} className="max-h-[85vh] w-auto rounded-lg shadow-2xl" />
                          {/* Close button is usually automatic in Shadcn Dialog, but we can customize if needed */}
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-card rounded-3xl border border-border/50 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Opiniones <span className="text-muted-foreground text-lg font-normal">({businessReviews.length})</span>
                  </h2>
                  <Button>Escribir opinión</Button>
                </div>

                {/* Rating Summary */}
                <div className="flex items-center gap-8 mb-8 bg-secondary/30 p-6 rounded-2xl">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-foreground font-display">{business.rating}</div>
                    <div className="flex items-center text-accent justify-center my-2 gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={cn("w-4 h-4", i < Math.floor(business.rating) ? "fill-current" : "text-muted-foreground/30")} />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Promedio General</p>
                  </div>
                  <div className="flex-1 space-y-2 border-l border-border/50 pl-8">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-3">
                        <span className="text-xs font-bold w-3">{rating}</span>
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full"
                            style={{ width: `${rating === 5 ? 70 : rating === 4 ? 20 : 5}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {businessReviews.length > 0 ? (
                  <div className="space-y-6">
                    {businessReviews.map((r) => (
                      <div key={r.id} className="border-b border-border/50 last:border-0 pb-6 last:pb-0">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center text-white font-bold">
                              {r.author.charAt(0)}
                            </div>
                            <div>
                              <span className="font-bold text-foreground block">{r.author}</span>
                              <span className="text-xs text-muted-foreground">{r.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-0.5 bg-secondary/50 px-2 py-1 rounded-lg">
                            {Array.from({ length: r.rating }).map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed bg-secondary/10 p-4 rounded-xl rounded-tl-none border-l-2 border-accent/20">
                          {r.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 bg-secondary/20 rounded-2xl">
                    <MessageCircle className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-50" />
                    <p className="text-muted-foreground">Sé el primero en opinar sobre este negocio.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="bg-card rounded-3xl border border-border/50 p-6 shadow-lg shadow-black/5">
                  <h3 className="font-display font-bold text-lg text-foreground mb-6 pb-4 border-b border-border/50">Contacto</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Dirección</p>
                        <span className="text-sm font-medium text-foreground">{business.address}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Horario</p>
                        <span className="text-sm font-medium text-foreground">{business.hours}</span>
                        <span className="text-xs text-success block mt-1 font-semibold">• Abierto ahora</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Teléfono</p>
                        <a href={`tel:${business.phone}`} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                          {business.phone}
                        </a>
                      </div>
                    </div>

                    {business.email && (
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                          <Mail className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Email</p>
                          <a href={`mailto:${business.email}`} className="text-sm font-medium text-foreground hover:text-accent transition-colors break-all">
                            {business.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {business.website && (
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                          <Globe className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Sitio Web</p>
                          <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                            Visitar sitio <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 space-y-3">
                    <a
                      href={`https://wa.me/${business.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1dbf57] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                    <a
                      href={`tel:${business.phone}`}
                      className="flex items-center justify-center gap-2 w-full bg-foreground hover:bg-foreground/90 text-background py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" />
                      Llamar ahora
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                {(business.socialMedia.facebook || business.socialMedia.instagram || business.socialMedia.twitter) && (
                  <div className="bg-card rounded-3xl border border-border/50 p-6 shadow-sm">
                    <h3 className="font-display font-bold text-sm uppercase text-muted-foreground mb-4 tracking-wider">Síguenos</h3>
                    <div className="flex gap-3">
                      {business.socialMedia.facebook && (
                        <a href={business.socialMedia.facebook} className="w-12 h-12 rounded-2xl bg-secondary hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-300 group">
                          <Facebook className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                        </a>
                      )}
                      {business.socialMedia.instagram && (
                        <a href={business.socialMedia.instagram} className="w-12 h-12 rounded-2xl bg-secondary hover:bg-[#E4405F] hover:text-white flex items-center justify-center transition-all duration-300 group">
                          <Instagram className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                        </a>
                      )}
                      {business.socialMedia.twitter && (
                        <a href={business.socialMedia.twitter} className="w-12 h-12 rounded-2xl bg-secondary hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300 group">
                          <Twitter className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Map placeholder */}
                <div className="bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm relative group cursor-pointer">
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors z-10 pointer-events-none" />
                  <div className="h-56 bg-secondary flex items-center justify-center">
                    <div className="text-center text-muted-foreground/60">
                      <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
                      <p className="text-sm font-medium">Ver en mapa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmpresaDetalle;
