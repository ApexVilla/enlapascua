export interface Business {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  shortDescription: string;
  address: string;
  phone: string;
  whatsapp: string;
  website: string;
  email: string;
  hours: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  images: string[];
  logo: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  services: string[];
  location: { lat: number; lng: number };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
  description: string;
}

export const categories: Category[] = [
  { id: "1", name: "Restaurantes", slug: "restaurantes", icon: "UtensilsCrossed", count: 45, description: "Los mejores restaurantes y cafeterías" },
  { id: "2", name: "Salud y Clínicas", slug: "salud", icon: "Heart", count: 32, description: "Clínicas, hospitales y servicios médicos" },
  { id: "3", name: "Tiendas", slug: "tiendas", icon: "ShoppingBag", count: 58, description: "Tiendas y comercios locales" },
  { id: "4", name: "Hoteles", slug: "hoteles", icon: "Hotel", count: 18, description: "Alojamiento y hospedaje" },
  { id: "5", name: "Servicios Profesionales", slug: "servicios", icon: "Briefcase", count: 67, description: "Abogados, contadores y más" },
  { id: "6", name: "Belleza y Estética", slug: "belleza", icon: "Sparkles", count: 41, description: "Salones, spas y centros de belleza" },
  { id: "7", name: "Educación", slug: "educacion", icon: "GraduationCap", count: 25, description: "Escuelas, academias y cursos" },
  { id: "8", name: "Tecnología", slug: "tecnologia", icon: "Monitor", count: 22, description: "Servicios de tecnología e informática" },
  { id: "9", name: "Automóviles", slug: "automoviles", icon: "Car", count: 35, description: "Talleres, agencias y refacciones" },
  { id: "10", name: "Construcción", slug: "construccion", icon: "Hammer", count: 28, description: "Materiales y servicios de construcción" },
  { id: "11", name: "Deportes", slug: "deportes", icon: "Dumbbell", count: 19, description: "Gimnasios y actividades deportivas" },
  { id: "12", name: "Entretenimiento", slug: "entretenimiento", icon: "Music", count: 15, description: "Ocio, eventos y diversión" },
];

export const businesses: Business[] = [
  {
    id: "1",
    name: "La Casa del Sabor",
    slug: "la-casa-del-sabor",
    category: "Restaurantes",
    categorySlug: "restaurantes",
    description: "Restaurante familiar con más de 20 años de tradición culinaria. Ofrecemos platillos típicos de la región preparados con ingredientes frescos y recetas heredadas de generación en generación. Nuestro ambiente acogedor y servicio excepcional hacen de cada visita una experiencia memorable.",
    shortDescription: "Cocina tradicional con más de 20 años de tradición culinaria familiar.",
    address: "Av. Principal 245, Centro Histórico",
    phone: "+52 555 123 4567",
    whatsapp: "+525551234567",
    website: "https://casadelsabor.com",
    email: "info@casadelsabor.com",
    hours: "Lun-Sáb: 8:00 - 22:00 | Dom: 9:00 - 18:00",
    rating: 4.8,
    reviewCount: 234,
    featured: true,
    images: [],
    logo: "",
    socialMedia: { facebook: "#", instagram: "#" },
    services: ["Desayunos", "Comidas", "Cenas", "Eventos privados", "Servicio a domicilio"],
    location: { lat: 19.4326, lng: -99.1332 },
  },
  {
    id: "2",
    name: "Clínica Dental Sonrisa",
    slug: "clinica-dental-sonrisa",
    category: "Salud y Clínicas",
    categorySlug: "salud",
    description: "Centro odontológico integral con tecnología de vanguardia. Contamos con especialistas en ortodoncia, implantes, estética dental y odontopediatría. Más de 15 años cuidando la salud bucal de nuestra comunidad.",
    shortDescription: "Centro odontológico integral con tecnología de vanguardia.",
    address: "Blvd. de la Salud 890, Col. Moderna",
    phone: "+52 555 234 5678",
    whatsapp: "+525552345678",
    website: "https://clinicasonrisa.com",
    email: "citas@clinicasonrisa.com",
    hours: "Lun-Vie: 9:00 - 19:00 | Sáb: 9:00 - 14:00",
    rating: 4.9,
    reviewCount: 187,
    featured: true,
    images: [],
    logo: "",
    socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    services: ["Ortodoncia", "Implantes", "Limpieza dental", "Blanqueamiento", "Odontopediatría"],
    location: { lat: 19.4350, lng: -99.1400 },
  },
  {
    id: "3",
    name: "Boutique Eleganza",
    slug: "boutique-eleganza",
    category: "Tiendas",
    categorySlug: "tiendas",
    description: "Boutique de moda exclusiva con las últimas tendencias nacionales e internacionales. Ofrecemos ropa, accesorios y calzado para hombres y mujeres con un servicio de asesoría de imagen personalizada.",
    shortDescription: "Moda exclusiva con las últimas tendencias y asesoría personalizada.",
    address: "Plaza Central 56, Local 12",
    phone: "+52 555 345 6789",
    whatsapp: "+525553456789",
    website: "https://eleganza.mx",
    email: "ventas@eleganza.mx",
    hours: "Lun-Sáb: 10:00 - 21:00 | Dom: 11:00 - 19:00",
    rating: 4.6,
    reviewCount: 156,
    featured: true,
    images: [],
    logo: "",
    socialMedia: { facebook: "#", instagram: "#" },
    services: ["Ropa de mujer", "Ropa de hombre", "Accesorios", "Asesoría de imagen"],
    location: { lat: 19.4280, lng: -99.1280 },
  },
  {
    id: "4",
    name: "Hotel Vista Real",
    slug: "hotel-vista-real",
    category: "Hoteles",
    categorySlug: "hoteles",
    description: "Hotel de lujo con vistas panorámicas espectaculares. 120 habitaciones equipadas, spa, restaurante gourmet, piscina infinity y salones para eventos. La experiencia perfecta para negocios y descanso.",
    shortDescription: "Hotel de lujo con vistas panorámicas y servicio excepcional.",
    address: "Cerro del Vigía 1200, Zona Hotelera",
    phone: "+52 555 456 7890",
    whatsapp: "+525554567890",
    website: "https://hotelvistareal.com",
    email: "reservas@hotelvistareal.com",
    hours: "Recepción 24 horas",
    rating: 4.7,
    reviewCount: 312,
    featured: true,
    images: [],
    logo: "",
    socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    services: ["Habitaciones de lujo", "Spa", "Restaurante", "Piscina", "Salón de eventos", "Business center"],
    location: { lat: 19.4400, lng: -99.1500 },
  },
  {
    id: "5",
    name: "Taller Mecánico Express",
    slug: "taller-mecanico-express",
    category: "Automóviles",
    categorySlug: "automoviles",
    description: "Servicio automotriz profesional con diagnóstico computarizado. Mecánica general, electricidad automotriz, frenos, suspensión y más. Técnicos certificados con garantía en todos los trabajos.",
    shortDescription: "Servicio automotriz profesional con diagnóstico computarizado.",
    address: "Av. Industrial 430, Zona Norte",
    phone: "+52 555 567 8901",
    whatsapp: "+525555678901",
    website: "",
    email: "taller@mecanicaexpress.com",
    hours: "Lun-Sáb: 8:00 - 18:00",
    rating: 4.5,
    reviewCount: 98,
    featured: false,
    images: [],
    logo: "",
    socialMedia: { facebook: "#" },
    services: ["Mecánica general", "Frenos", "Suspensión", "Electricidad", "Diagnóstico"],
    location: { lat: 19.4450, lng: -99.1200 },
  },
  {
    id: "6",
    name: "Salón de Belleza Glamour",
    slug: "salon-glamour",
    category: "Belleza y Estética",
    categorySlug: "belleza",
    description: "Centro de belleza integral con los mejores estilistas de la región. Cortes, colorimetría, tratamientos capilares, maquillaje profesional, manicure y pedicure. Utilizamos productos de primera calidad.",
    shortDescription: "Centro de belleza integral con los mejores estilistas profesionales.",
    address: "Calle Magnolias 78, Col. Jardines",
    phone: "+52 555 678 9012",
    whatsapp: "+525556789012",
    website: "https://salonglamour.mx",
    email: "citas@salonglamour.mx",
    hours: "Mar-Sáb: 9:00 - 20:00 | Dom: 10:00 - 16:00",
    rating: 4.8,
    reviewCount: 203,
    featured: false,
    images: [],
    logo: "",
    socialMedia: { facebook: "#", instagram: "#" },
    services: ["Cortes", "Colorimetría", "Tratamientos capilares", "Maquillaje", "Uñas"],
    location: { lat: 19.4300, lng: -99.1350 },
  },
];

export const reviews = [
  { id: "1", businessId: "1", author: "María García", rating: 5, comment: "¡Excelente comida y atención! El mejor restaurante de la zona.", date: "2026-02-10" },
  { id: "2", businessId: "1", author: "Carlos López", rating: 4, comment: "Muy buena comida, los platillos tradicionales son deliciosos.", date: "2026-02-08" },
  { id: "3", businessId: "2", author: "Ana Martínez", rating: 5, comment: "Profesionalismo y tecnología de primer nivel. Muy recomendado.", date: "2026-02-05" },
  { id: "4", businessId: "4", author: "Roberto Sánchez", rating: 5, comment: "Las vistas son espectaculares. Servicio de primera clase.", date: "2026-01-28" },
];
