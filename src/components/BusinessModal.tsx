import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Business } from "@/data/mockData";
import {
    MapPin,
    Phone,
    Clock,
    Globe,
    Star,
    MessageCircle,
    Facebook,
    Instagram,
    Twitter,
    ExternalLink,
    Share2,
    X,
} from "lucide-react";
import { Link } from "react-router-dom";

interface BusinessModalProps {
    business: Business | null;
    isOpen: boolean;
    onClose: () => void;
}

export const BusinessModal = ({ business, isOpen, onClose }: BusinessModalProps) => {
    if (!business) return null;

    const colors = [
        "from-navy to-navy-light",
        "from-gold-dark to-accent",
        "from-navy-light to-primary",
        "from-accent to-gold-light",
    ];
    const colorClass = colors[parseInt(business.id) % colors.length];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-none shadow-2xl rounded-3xl gap-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-[85vh] lg:h-auto overflow-y-auto lg:overflow-hidden">

                    {/* Column 1: Visuals & Header */}
                    <div className="relative h-64 lg:h-auto bg-muted">
                        {/* Background/Image */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-90`} />
                        {business.images && business.images.length > 0 && (
                            <img
                                src={business.images[0]}
                                alt={business.name}
                                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                            />
                        )}

                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                            <div className="space-y-2">
                                <span className="inline-block px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider border border-white/10">
                                    {business.category}
                                </span>
                                <h2 className="font-display text-3xl font-bold leading-tight shadow-sm">
                                    {business.name}
                                </h2>
                                <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                                    <Star className="w-4 h-4 text-gold fill-gold" />
                                    <span>{business.rating}</span>
                                    <span className="opacity-60">({business.reviewCount} reseñas)</span>
                                </div>
                            </div>
                        </div>

                        <DialogClose className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-colors z-20 backdrop-blur-sm border border-white/10">
                            <X className="w-5 h-5" />
                            <span className="sr-only">Close</span>
                        </DialogClose>
                    </div>

                    {/* Column 2: Details */}
                    <div className="p-6 lg:p-8 flex flex-col h-full bg-card">
                        <div className="flex-1 space-y-6">

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-bold font-display text-foreground mb-2">Sobre {business.name}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                                    {business.description}
                                </p>
                            </div>

                            {/* Info Grid */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30">
                                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-bold text-foreground">Dirección</p>
                                        <p className="text-muted-foreground">{business.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30">
                                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-bold text-foreground">Horario</p>
                                        <p className="text-muted-foreground">{business.hours}</p>
                                        <span className="text-success text-xs font-bold">● Abierto ahora</span>
                                    </div>
                                </div>
                            </div>

                            {/* Socials & Website */}
                            <div className="flex flex-wrap gap-2">
                                {business.socialMedia.instagram && (
                                    <a href={business.socialMedia.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-secondary hover:bg-pink-600 hover:text-white transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                )}
                                {business.socialMedia.facebook && (
                                    <a href={business.socialMedia.facebook} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-secondary hover:bg-blue-600 hover:text-white transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                )}
                                {business.socialMedia.twitter && (
                                    <a href={business.socialMedia.twitter} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-secondary hover:bg-black hover:text-white transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                )}
                                {business.website && (
                                    <a href={business.website} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                        <Globe className="w-4 h-4" /> Web
                                    </a>
                                )}
                                <button className="ml-auto p-2.5 rounded-lg bg-secondary hover:bg-accent/10 hover:text-accent transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>

                        </div>

                        {/* Sticky Actions Footer relative to this column */}
                        <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
                            <div className="grid grid-cols-2 gap-3">
                                <a href={`https://wa.me/${business.whatsapp}`} target="_blank" className="bg-[#25D366] hover:bg-[#20b852] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:-translate-y-0.5 transition-all">
                                    <MessageCircle className="w-4 h-4" /> WhatsApp
                                </a>
                                <a href={`tel:${business.phone}`} className="bg-foreground text-background hover:bg-foreground/90 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all">
                                    <Phone className="w-4 h-4" /> Llamar
                                </a>
                            </div>

                            <Link to={`/empresa/${business.slug}`} className="w-full text-center py-2 text-sm text-muted-foreground hover:text-accent transition-colors flex items-center justify-center gap-1 group">
                                Ver perfil completo <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
