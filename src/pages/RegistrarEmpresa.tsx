import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  rif: z.string().min(5, "El RIF es requerido"),
  featured: z.string().min(1, "Selecciona una opción"),
  mall: z.string().min(1, "Selecciona una opción"),
  locality: z.string().min(1, "Selecciona una localidad"),
  category: z.string().min(1, "Selecciona un rubro"),
  address: z.string().min(5, "La dirección es requerida"),
  description: z.string().min(10, "La descripción es requerida"),
  phoneMain: z.string().min(10, "Teléfono principal requerido"),
  phoneSecondary: z.string().optional(),
  website: z.string().optional(),
  hours: z.string().optional(),
  landingLink: z.string().url("URL inválida").min(1, "Link de aterrizaje requerido"),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  tiktok: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const localities = [
  "Centro",
  "Norte",
  "Sur",
  "Este",
  "Oeste",
  "Las Garcitas",
  "La Pascua",
  "El Lido",
];

const RegistrarEmpresa = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate Email Sending API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Email sent with data:", data);
    setSubmitted(true);
    setIsSubmitting(false);

    toast({
      title: "¡Solicitud enviada!",
      description: "Hemos recibido tu información. Te contactaremos pronto.",
    });

    setTimeout(() => navigate("/"), 4000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 flex items-center justify-center">
          <div className="max-w-md w-full bg-card rounded-3xl border border-border/50 p-8 text-center shadow-xl animate-fade-up">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-success animate-pulse" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-3">¡Solicitud Enviada!</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Gracias por tu interés. Hemos enviado una notificación al administrador. Pronto revisaremos tu solicitud.
            </p>
            <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
              <div className="h-full bg-accent animate-[progress_4s_ease-in-out_forwards] w-0" />
            </div>
            <p className="text-xs text-muted-foreground mt-4">Volviendo al inicio...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/70 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all";
  const errorClass = "text-destructive text-xs mt-1.5 flex items-center gap-1";
  const labelClass = "block text-sm font-semibold text-foreground mb-1.5";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-accent">Inicia la publicación</span> de tu empresa con nosotros
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Llena todos tus datos, estos nos ayudarán a que tu publicación sea más efectiva.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="animate-fade-up-delay-1 space-y-8">

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-6 md:p-10 shadow-sm">

            {/* Row 1: Name, RIF, Featured */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
              <div className="md:col-span-5 space-y-1">
                <label className={labelClass}>Nombre de Empresa <span className="text-destructive">*</span></label>
                <input {...register("name")} className={cn(inputClass, errors.name && "border-destructive/50 ring-destructive/20")} />
                {errors.name && <p className={errorClass}><AlertCircle className="w-3 h-3" /> {errors.name.message}</p>}
              </div>
              <div className="md:col-span-4 space-y-1">
                <label className={labelClass}>Rif <span className="text-destructive">*</span></label>
                <input {...register("rif")} className={cn(inputClass, errors.rif && "border-destructive/50 ring-destructive/20")} />
                {errors.rif && <p className={errorClass}><AlertCircle className="w-3 h-3" /> {errors.rif.message}</p>}
              </div>
              <div className="md:col-span-3 space-y-1">
                <label className={labelClass}>¿Destacar en Portada? <span className="text-destructive">*</span></label>
                <select {...register("featured")} className={cn(inputClass, errors.featured && "border-destructive/50 ring-destructive/20")}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Sí</option>
                  <option value="No">No</option>
                </select>
                {errors.featured && <p className={errorClass}><AlertCircle className="w-3 h-3" /> {errors.featured.message}</p>}
              </div>
            </div>

            {/* Row 2: Mall, Locality, Category */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-1">
                <label className={labelClass}>¿Está en un Centro Comercial? <span className="text-destructive">*</span></label>
                <select {...register("mall")} className={cn(inputClass, errors.mall && "border-destructive/50 ring-destructive/20")}>
                  <option value="">Elige una opción</option>
                  <option value="Si">Sí</option>
                  <option value="No">No</option>
                </select>
                {errors.mall && <p className={errorClass}><AlertCircle className="w-3 h-3" /> {errors.mall.message}</p>}
              </div>
              <div className="space-y-1">
                <label className={labelClass}>Localidad <span className="text-destructive">*</span></label>
                <select {...register("locality")} className={cn(inputClass, errors.locality && "border-destructive/50 ring-destructive/20")}>
                  <option value="">Elige una opción</option>
                  {localities.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
                {errors.locality && <p className={errorClass}><AlertCircle className="w-3 h-3" /> {errors.locality.message}</p>}
              </div>
              <div className="space-y-1">
                <label className={labelClass}>Rubro <span className="text-destructive">*</span></label>
                <select {...register("category")} className={cn(inputClass, errors.category && "border-destructive/50 ring-destructive/20")}>
                  <option value="">Elige una opción</option>
                  {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
                {errors.category && <p className={errorClass}><AlertCircle className="w-3 h-3" /> {errors.category.message}</p>}
              </div>
            </div>

            {/* Row 3: Address */}
            <div className="mb-6 space-y-1">
              <label className={labelClass}>Dirección <span className="text-destructive">*</span></label>
              <input {...register("address")} className={cn(inputClass, errors.address && "border-destructive/50 ring-destructive/20")} />
              {errors.address && <p className={errorClass}><AlertCircle className="w-3 h-3" /> {errors.address.message}</p>}
            </div>

            {/* Row 4: Description, Phones */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
              <div className="md:col-span-6 space-y-1">
                <label className={labelClass}>Descripción <span className="text-destructive">*</span></label>
                <input {...register("description")} className={cn(inputClass, errors.description && "border-destructive/50 ring-destructive/20")} />
                {errors.description && <p className={errorClass}><AlertCircle className="w-3 h-3" /> {errors.description.message}</p>}
              </div>
              <div className="md:col-span-3 space-y-1">
                <label className={labelClass}>Tel. Principal <span className="text-destructive">*</span></label>
                <input {...register("phoneMain")} placeholder="(0---)--- ----" className={cn(inputClass, errors.phoneMain && "border-destructive/50 ring-destructive/20")} />
                {errors.phoneMain && <p className={errorClass}><AlertCircle className="w-3 h-3" /> {errors.phoneMain.message}</p>}
              </div>
              <div className="md:col-span-3 space-y-1">
                <label className={labelClass}>Tel. Secundario</label>
                <input {...register("phoneSecondary")} placeholder="(0---)--- ----" className={inputClass} />
              </div>
            </div>

            {/* Row 5: Web, Hours */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-1">
                <label className={labelClass}>Sitio Web</label>
                <input {...register("website")} placeholder="https://www.tusitioweb.com" className={inputClass} />
                <p className="text-[10px] text-destructive mt-1">Formato: https://www.tusitioweb.com</p>
              </div>
              <div className="space-y-1">
                <label className={labelClass}>Horario</label>
                <input {...register("hours")} className={inputClass} />
              </div>
            </div>

            {/* Row 6: Landing Link */}
            <div className="mb-6 space-y-1">
              <label className={labelClass}>Link de Aterrizaje <span className="text-destructive">*</span></label>
              <input {...register("landingLink")} placeholder="https://www.linkdeaterrizaje.com/aterrizaje" className={cn(inputClass, errors.landingLink && "border-destructive/50 ring-destructive/20")} />
              <p className="text-[10px] text-destructive mt-1">Formato: https://www.linkdeaterrizaje.com/aterrizaje</p>
              {errors.landingLink && <p className={errorClass}><AlertCircle className="w-3 h-3" /> {errors.landingLink.message}</p>}
            </div>

            {/* Row 7: Social */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-1">
                <label className={labelClass}>Link Instagram</label>
                <input {...register("instagram")} placeholder="https://www.instagram.com/usuario" className={inputClass} />
                <p className="text-[10px] text-destructive mt-1">Formato: https://www.instagram.com/usuario</p>
              </div>
              <div className="space-y-1">
                <label className={labelClass}>Link Facebook</label>
                <input {...register("facebook")} placeholder="https://www.facebook.com/usuario" className={inputClass} />
                <p className="text-[10px] text-destructive mt-1">Formato: https://www.facebook.com/usuario</p>
              </div>
              <div className="space-y-1">
                <label className={labelClass}>Link Tik Tok</label>
                <input {...register("tiktok")} placeholder="https://www.tiktok.com/usuario" className={inputClass} />
                <p className="text-[10px] text-destructive mt-1">Formato: https://www.tiktok.com/usuario</p>
              </div>
            </div>

            {/* Image Upload Area - Keep it or remove it? User image didn't show it explicitly but it's good to have. Retaining it for now as it adds value. */}
            <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer group/upload mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary group-hover/upload:bg-accent/10 flex items-center justify-center mx-auto mb-3 transition-colors">
                <Upload className="w-6 h-6 text-muted-foreground group-hover/upload:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Cargar imágenes (Opcional)</h3>
              <p className="text-xs text-muted-foreground">Arrastra archivos o haz clic para explorar</p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-gold-dark text-accent-foreground py-3 px-8 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all disabled:opacity-70 disabled:pointer-events-none flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Solicitar Publicación
                  </>
                )}
              </button>
            </div>

          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrarEmpresa;
