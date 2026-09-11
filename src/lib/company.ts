export const COMPANY = {
  name: "MDG GLOBAL HOLDINGS",
  tagline: "L'excellence au-delà des frontières",
  tagline2: "LOGISTIQUE · IMPORT-EXPORT · TRANSPORT INTERNATIONAL",
  city: "Ouagadougou",
  country: "Burkina Faso",
  email: "contact@mdgglobalholdings.com",
  website: "www.mdgglobalholdings.com",
  phoneBf: "+226 76 97 85 51",
  phoneCn: "+86 166 5128 0287",
  whatsapp: "22676978551",
  positioning: "Votre partenaire pour entreprendre, acheter et développer au-delà des frontières.",
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

export const POLES = [
  {
    id: "commerce",
    title: "Commerce International",
    subtitle: "Import · Export · Négoce",
    icon: "🌍",
    description: "Sourcing international, achat, importation, exportation, négoce et distribution.",
    services: ["Sourcing international", "Recherche de fournisseurs", "Import-Export", "Négoce", "Distribution"],
    image: "/images/hero-port.jpg",
    link: "/services",
  },
  {
    id: "vehicules",
    title: "Véhicules & Équipements",
    subtitle: "Véhicules · Camions · Engins",
    icon: "🚛",
    description: "Véhicules particuliers, SUV, utilitaires, camions, bus, engins de chantier et machines industrielles.",
    services: ["Véhicules particuliers & SUV", "Camions & Bus", "Engins de chantier", "Machines agricoles", "Équipements industriels", "Pièces détachées"],
    image: "/images/sect-vehicules.jpg",
    link: "/catalogue",
  },
  {
    id: "logistique",
    title: "Logistique & Transport",
    subtitle: "Maritime · Aérien · Terrestre",
    icon: "🚢",
    description: "Transport maritime, aérien et terrestre, groupage, dédouanement et livraison porte-à-porte.",
    services: ["Fret maritime", "Fret aérien", "Transport terrestre", "Groupage LCL/FCL", "Dédouanement", "Livraison porte-à-porte"],
    image: "/images/hero-port.jpg",
    link: "/services",
  },
  {
    id: "mobilite",
    title: "Mobilité & Assistance Visa",
    subtitle: "Visa · Démarches · Mobilité",
    icon: "✈️",
    description: "Accompagnement administratif, mobilité internationale et assistance dans les démarches.",
    services: ["Assistance administrative", "Préparation des dossiers", "Orientation sur les procédures", "Mobilité internationale"],
    image: "/images/sect-visa.jpg",
    link: "/assistance-visa",
  },
  {
    id: "agriculture",
    title: "Agriculture & Élevage",
    subtitle: "Production · Élevage · Transformation",
    icon: "🌾",
    description: "Production agricole, élevage, transformation et commercialisation de produits.",
    services: ["Production agricole", "Élevage", "Transformation", "Commercialisation", "Développement de projets"],
    image: "/images/sect-agriculture.jpg",
    link: "/contact",
  },
  {
    id: "hotellerie",
    title: "Hôtellerie & Restauration",
    subtitle: "Hébergement · Restauration · Événementiel",
    icon: "🏨",
    description: "Hébergement, restauration, services hôteliers et développement de projets touristiques.",
    services: ["Hôtellerie", "Hébergement", "Restauration", "Événementiel", "Développement de projets"],
    image: "/images/sect-hotellerie.jpg",
    link: "/contact",
  },
] as const;

export const SECTORS = [
  {
    slug: "vehicules-engins",
    name: "Véhicules & Engins",
    sub: "Auto · Camions · Bus · Chantier",
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

export const VALUES = [
  {
    title: "Confiance",
    text: "Nous privilégions des relations professionnelles fondées sur la transparence et le respect des engagements.",
  },
  {
    title: "Qualité",
    text: "Nous recherchons des produits et solutions correspondant aux exigences les plus élevées de nos clients.",
  },
  {
    title: "Fiabilité",
    text: "Nous assurons un suivi rigoureux des opérations et une communication transparente à chaque étape.",
  },
  {
    title: "Portée mondiale",
    text: "Nous développons des connexions avec les marchés africains, asiatiques, européens et du Moyen-Orient.",
  },
] as const;

export const STATS = [
  { value: "15+", label: "Pays desservis" },
  { value: "24h", label: "Réponse devis" },
  { value: "6", label: "Pôles d'activité" },
  { value: "100%", label: "Suivi logistique" },
] as const;
