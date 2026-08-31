export const COMPANY = {
  name: "MDG GLOBAL HOLDINGS",
  tagline: "L'excellence au-delà des frontières",
  city: "Ouagadougou",
  country: "Burkina Faso",
  email: "contact@mdgglobalholdings.com",
  phoneBf: "+226 76 97 85 51",
  phoneCn: "+86 166 5128 0287",
  whatsapp: "22676978551",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${COMPANY.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const telLink = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export const AVAILABILITY_LABELS: Record<string, string> = {
  disponible: "Disponible",
  sur_commande: "Sur commande",
  en_arrivage: "En arrivage",
  vendu: "Vendu",
};

export const AVAILABILITY_OPTIONS = Object.entries(AVAILABILITY_LABELS).map(([value, label]) => ({
  value,
  label,
}));

export const SECTORS = [
  {
    slug: "vehicules-engins",
    name: "Véhicules & Engins",
    sub: "Auto · Moto · Chantier · Agro",
    image: "/images/sect-vehicules.jpg",
  },
  {
    slug: "pieces-consommables",
    name: "Pièces & Consommables",
    sub: "Pièces · Pneus · Batteries",
    image: "/images/sect-pieces.jpg",
  },
  {
    slug: "equipements-energie",
    name: "Équipements & Énergie",
    sub: "Génératrices · Matériel pro",
    image: "/images/sect-equipements.jpg",
  },
  {
    slug: "electronique-electromenager",
    name: "Électronique & Électroménager",
    sub: "High-tech · Téléphonie · Maison",
    image: "/images/sect-electronique.jpg",
  },
] as const;
