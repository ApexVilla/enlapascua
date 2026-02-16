import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Plus, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const RegistrarEmpresa = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "¡Empresa registrada!",
      description: "Tu empresa ha sido enviada para revisión. Te notificaremos cuando sea aprobada.",
    });
    setTimeout(() => navigate("/"), 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-success" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-3">¡Registro Exitoso!</h1>
          <p className="text-muted-foreground text-lg">Tu empresa será revisada y publicada pronto.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all";
  const labelClass = "block text-sm font-semibold text-foreground mb-1.5";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Registrar Empresa</h1>
          <p className="text-muted-foreground text-lg">Publica tu negocio y llega a más clientes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
            <h2 className="font-display text-lg font-bold text-foreground">Información Básica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nombre del negocio *</label>
                <input required type="text" placeholder="Ej: Mi Restaurante" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Categoría *</label>
                <select required className={inputClass}>
                  <option value="">Seleccionar categoría</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={labelClass}>Descripción *</label>
              <textarea required rows={4} placeholder="Describe tu negocio..." className={inputClass} />
            </div>
          </div>

          {/* Contact */}
          <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
            <h2 className="font-display text-lg font-bold text-foreground">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Dirección *</label>
                <input required type="text" placeholder="Calle, número, colonia" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Teléfono *</label>
                <input required type="tel" placeholder="+52 555 000 0000" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>WhatsApp</label>
                <input type="tel" placeholder="+52 555 000 0000" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" placeholder="info@empresa.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Sitio web</label>
                <input type="url" placeholder="https://www.empresa.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Horarios</label>
                <input type="text" placeholder="Lun-Vie: 9:00 - 18:00" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
            <h2 className="font-display text-lg font-bold text-foreground">Redes Sociales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Facebook</label>
                <input type="url" placeholder="URL de Facebook" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Instagram</label>
                <input type="url" placeholder="URL de Instagram" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Twitter / X</label>
                <input type="url" placeholder="URL de Twitter" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h2 className="font-display text-lg font-bold text-foreground mb-4">Imágenes</h2>
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-accent/40 transition-colors cursor-pointer">
              <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Arrastra imágenes aquí o haz clic para seleccionar</p>
              <p className="text-xs text-muted-foreground/60 mt-1">PNG, JPG hasta 5MB</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3.5 rounded-xl font-semibold hover:bg-gold-dark transition-colors text-base"
          >
            <Plus className="w-5 h-5" />
            Registrar Empresa
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrarEmpresa;
