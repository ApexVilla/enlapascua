import { Link } from "react-router-dom";
import { Star, MapPin, Phone, ArrowUpRight } from "lucide-react";
import type { Business } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface BusinessCardProps {
  business: Business;
  className?: string;
}

export const BusinessCardSkeleton = () => (
  <div className="bg-card rounded-2xl border border-border/50 overflow-hidden h-[340px] animate-pulse">
    <div className="h-44 bg-muted/50" />
    <div className="p-5 space-y-3">
      <div className="h-6 bg-muted/50 rounded-md w-3/4" />
      <div className="h-4 bg-muted/30 rounded-md w-1/4" />
      <div className="h-12 bg-muted/20 rounded-md w-full" />
      <div className="flex justify-between pt-2">
        <div className="h-4 bg-muted/30 rounded-md w-1/3" />
        <div className="h-4 bg-muted/30 rounded-md w-1/4" />
      </div>
    </div>
  </div>
);

const BusinessCard = ({ business, className, onClick }: BusinessCardProps & { onClick?: () => void }) => {
  const colors = [
    "from-navy to-navy-light",
    "from-gold-dark to-accent",
    "from-navy-light to-primary",
    "from-accent to-gold-light",
  ];
  const colorClass = colors[parseInt(business.id) % colors.length];

  const CardContent = () => (
    <>
      {/* Image placeholder */}
      <div className={cn("h-48 bg-gradient-to-br relative overflow-hidden", colorClass)}>
        {business.images && business.images.length > 0 && (
          <img
            src={business.images[0]}
            alt={business.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 shadow-sm border border-white/20">
          <Star className="w-3.5 h-3.5 text-gold fill-gold" />
          <span className="text-xs font-bold text-navy">{business.rating}</span>
          <span className="text-[10px] text-muted-foreground">({business.reviewCount})</span>
        </div>

        {business.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-gold via-orange-400 to-gold text-white text-[10px] items-center font-bold px-3 py-1 rounded-full shadow-lg shadow-gold/20 flex gap-1 animate-pulse-slow border border-white/20">
            <Star className="w-3 h-3 fill-white" /> Destacado
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-full relative">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="inline-block text-[10px] font-bold tracking-wider text-accent bg-accent/5 px-2.5 py-1 rounded-full uppercase border border-accent/10">
            {business.category}
          </span>
        </div>

        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors leading-tight line-clamp-1 mb-2">
          {business.name}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {business.shortDescription}
        </p>

        <div className="mt-auto pt-4 border-t border-dashed border-border/60 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate max-w-[120px] font-medium">
              {business.address.split(",")[0]}
            </span>
          </div>

          <div className="flex items-center gap-2 transition-all translate-y-0 duration-300">
            <div className="w-8 h-8 rounded-full bg-secondary text-primary hover:bg-accent hover:text-white flex items-center justify-center transition-colors shadow-sm border border-border/50">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const containerClasses = cn(
    "group block bg-card rounded-[20px] border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 hover:border-accent/30 cursor-pointer h-full",
    className
  );

  if (onClick) {
    return (
      <div onClick={onClick} className={containerClasses}>
        <CardContent />
      </div>
    );
  }

  return (
    <Link to={`/empresa/${business.slug}`} className={containerClasses}>
      <CardContent />
    </Link>
  );
};

export default BusinessCard;
