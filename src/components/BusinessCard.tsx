import { Link } from "react-router-dom";
import { Star, MapPin, Phone } from "lucide-react";
import type { Business } from "@/data/mockData";

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  const colors = [
    "from-navy to-navy-light",
    "from-gold-dark to-accent",
    "from-navy-light to-primary",
    "from-accent to-gold-light",
  ];
  const colorClass = colors[parseInt(business.id) % colors.length];

  return (
    <Link
      to={`/empresa/${business.slug}`}
      className="group block bg-card rounded-2xl border border-border overflow-hidden card-hover"
    >
      {/* Image placeholder */}
      <div className={`h-44 bg-gradient-to-br ${colorClass} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/0 transition-colors" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2.5 py-1">
          <Star className="w-3.5 h-3.5 text-accent fill-accent" />
          <span className="text-xs font-semibold text-foreground">{business.rating}</span>
          <span className="text-xs text-muted-foreground">({business.reviewCount})</span>
        </div>
        {business.featured && (
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
            Destacado
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors leading-tight">
            {business.name}
          </h3>
        </div>
        <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-2">
          {business.category}
        </span>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {business.shortDescription}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate max-w-[140px]">{business.address.split(",")[0]}</span>
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            Contactar
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;
