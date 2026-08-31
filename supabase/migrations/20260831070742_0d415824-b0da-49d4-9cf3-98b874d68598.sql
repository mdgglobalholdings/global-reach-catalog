-- ROLES
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.has_role(auth.uid(), 'admin')
$$;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

-- CATEGORIES
CREATE TABLE public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  parent_id uuid REFERENCES public.categories(id) ON DELETE CASCADE,
  description text,
  icon text,
  position integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.categories TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.categories TO authenticated;
GRANT ALL ON public.categories TO service_role;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Categories are public" ON public.categories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage categories" ON public.categories FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER categories_updated_at BEFORE UPDATE ON public.categories FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- PRODUCTS
CREATE TABLE public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
  brand text,
  model text,
  year integer,
  summary text,
  description text,
  specs jsonb NOT NULL DEFAULT '[]'::jsonb,
  availability text NOT NULL DEFAULT 'sur_commande',
  origin text,
  price_text text,
  cover_url text,
  is_published boolean NOT NULL DEFAULT true,
  is_featured boolean NOT NULL DEFAULT false,
  is_new boolean NOT NULL DEFAULT true,
  position integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.products TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published products are public" ON public.products FOR SELECT TO anon, authenticated USING (is_published = true);
CREATE POLICY "Admins manage products" ON public.products FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE INDEX products_category_idx ON public.products(category_id);
CREATE INDEX products_created_idx ON public.products(created_at DESC);

-- PRODUCT IMAGES
CREATE TABLE public.product_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  url text NOT NULL,
  alt text,
  position integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.product_images TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.product_images TO authenticated;
GRANT ALL ON public.product_images TO service_role;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Images of published products are public" ON public.product_images FOR SELECT TO anon, authenticated
  USING (EXISTS (SELECT 1 FROM public.products p WHERE p.id = product_id AND p.is_published = true));
CREATE POLICY "Admins manage product images" ON public.product_images FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE INDEX product_images_product_idx ON public.product_images(product_id);

-- NEWS
CREATE TABLE public.news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  excerpt text,
  body text,
  cover_url text,
  is_published boolean NOT NULL DEFAULT true,
  published_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.news TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.news TO authenticated;
GRANT ALL ON public.news TO service_role;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published news are public" ON public.news FOR SELECT TO anon, authenticated USING (is_published = true);
CREATE POLICY "Admins manage news" ON public.news FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER news_updated_at BEFORE UPDATE ON public.news FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- QUOTE / CONTACT REQUESTS
CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text,
  country text,
  subject text,
  message text NOT NULL,
  product_id uuid REFERENCES public.products(id) ON DELETE SET NULL,
  product_name text,
  status text NOT NULL DEFAULT 'nouveau',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.quote_requests TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.quote_requests TO authenticated;
GRANT ALL ON public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a request" ON public.quote_requests FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins read requests" ON public.quote_requests FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins update requests" ON public.quote_requests FOR UPDATE TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admins delete requests" ON public.quote_requests FOR DELETE TO authenticated USING (public.is_admin());

-- STORAGE POLICIES
CREATE POLICY "Catalogue images are public" ON storage.objects FOR SELECT USING (bucket_id = 'catalogue');
CREATE POLICY "Admins upload catalogue images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'catalogue' AND public.is_admin());
CREATE POLICY "Admins update catalogue images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'catalogue' AND public.is_admin());
CREATE POLICY "Admins delete catalogue images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'catalogue' AND public.is_admin());

-- SEED CATEGORIES
INSERT INTO public.categories (id, slug, name, parent_id, position, description) VALUES
 ('11111111-1111-4111-8111-000000000001', 'vehicules-engins', 'Véhicules & Engins', NULL, 1, 'Automobiles, motos, engins de chantier et engins agricoles importés des grands marchés internationaux.'),
 ('11111111-1111-4111-8111-000000000002', 'pieces-consommables', 'Pièces & Consommables', NULL, 2, 'Pièces détachées, pneus, batteries et lubrifiants pour parcs professionnels.'),
 ('11111111-1111-4111-8111-000000000003', 'equipements-energie', 'Équipements & Énergie', NULL, 3, 'Groupes électrogènes, matériel industriel et équipements professionnels.'),
 ('11111111-1111-4111-8111-000000000004', 'electronique-electromenager', 'Électronique & Électroménager', NULL, 4, 'Produits high-tech, téléphonie, électronique et électroménager.');

INSERT INTO public.categories (id, slug, name, parent_id, position) VALUES
 ('22222222-2222-4222-8222-000000000001', 'automobiles', 'Automobiles', '11111111-1111-4111-8111-000000000001', 1),
 ('22222222-2222-4222-8222-000000000002', 'motos', 'Motos', '11111111-1111-4111-8111-000000000001', 2),
 ('22222222-2222-4222-8222-000000000003', 'engins-de-chantier', 'Engins de chantier', '11111111-1111-4111-8111-000000000001', 3),
 ('22222222-2222-4222-8222-000000000004', 'engins-agricoles', 'Engins agricoles', '11111111-1111-4111-8111-000000000001', 4),
 ('22222222-2222-4222-8222-000000000005', 'pieces-detachees', 'Pièces détachées', '11111111-1111-4111-8111-000000000002', 1),
 ('22222222-2222-4222-8222-000000000006', 'pneus', 'Pneus', '11111111-1111-4111-8111-000000000002', 2),
 ('22222222-2222-4222-8222-000000000007', 'batteries', 'Batteries', '11111111-1111-4111-8111-000000000002', 3),
 ('22222222-2222-4222-8222-000000000008', 'lubrifiants', 'Lubrifiants', '11111111-1111-4111-8111-000000000002', 4),
 ('22222222-2222-4222-8222-000000000009', 'groupes-electrogenes', 'Groupes électrogènes', '11111111-1111-4111-8111-000000000003', 1),
 ('22222222-2222-4222-8222-000000000010', 'materiel-industriel', 'Matériel industriel', '11111111-1111-4111-8111-000000000003', 2),
 ('22222222-2222-4222-8222-000000000011', 'high-tech', 'High-tech', '11111111-1111-4111-8111-000000000004', 1),
 ('22222222-2222-4222-8222-000000000012', 'telephonie', 'Téléphonie', '11111111-1111-4111-8111-000000000004', 2),
 ('22222222-2222-4222-8222-000000000013', 'maison', 'Maison', '11111111-1111-4111-8111-000000000004', 3);

-- SEED PRODUCTS
INSERT INTO public.products (id, slug, name, category_id, brand, model, year, summary, description, specs, availability, origin, price_text, cover_url, is_featured, is_new, created_at) VALUES
 ('33333333-3333-4333-8333-000000000001', 'pickup-4x4-double-cabine', 'Pickup 4x4 Double Cabine', '22222222-2222-4222-8222-000000000001', 'Toyota', 'Hilux Double Cab', 2024,
  'Pickup robuste 4x4 double cabine, idéal pour les chantiers et missions terrain.',
  'Véhicule utilitaire polyvalent conçu pour les usages intensifs. Motorisation diesel fiable, capacité de charge élevée et confort de cabine adapté aux longues distances sur pistes.',
  '[{"label":"Motorisation","value":"Diesel 2.4 L"},{"label":"Transmission","value":"4x4 enclenchable"},{"label":"Places","value":"5"},{"label":"Charge utile","value":"1 000 kg"}]'::jsonb,
  'disponible', 'Japon / Dubaï', 'Sur demande', '/images/prod-pickup.jpg', true, true, now() - interval '1 day'),
 ('33333333-3333-4333-8333-000000000002', 'mini-pelle-1-5-t', 'Mini-pelle 1.5 t', '22222222-2222-4222-8222-000000000003', 'Kubota', 'U17-3', 2023,
  'Mini-pelle compacte pour travaux urbains et terrassements de précision.',
  'Machine compacte à faible rayon de déport, adaptée aux chantiers exigus. Faible consommation, entretien simple et pièces détachées disponibles auprès de nos partenaires.',
  '[{"label":"Poids opérationnel","value":"1 720 kg"},{"label":"Profondeur de fouille","value":"2,3 m"},{"label":"Puissance","value":"14,5 kW"},{"label":"Heures","value":"1 200 h"}]'::jsonb,
  'disponible', 'Japon', 'Sur demande', '/images/prod-minipelle.jpg', true, true, now() - interval '2 days'),
 ('33333333-3333-4333-8333-000000000003', 'groupe-electrogene-40-kva', 'Groupe électrogène 40 kVA', '22222222-2222-4222-8222-000000000009', 'Cummins', 'C40D5', 2024,
  'Groupe électrogène diesel insonorisé pour sites industriels et commerces.',
  'Solution d''alimentation de secours ou permanente. Coffret insonorisé, tableau de contrôle automatique et réservoir grande autonomie.',
  '[{"label":"Puissance","value":"40 kVA / 32 kW"},{"label":"Tension","value":"400/230 V"},{"label":"Démarrage","value":"Automatique (ATS)"},{"label":"Autonomie","value":"10 h"}]'::jsonb,
  'sur_commande', 'Chine', 'Sur demande', '/images/prod-groupe.jpg', true, true, now() - interval '3 days'),
 ('33333333-3333-4333-8333-000000000004', 'televiseur-oled-55', 'Téléviseur OLED 55"', '22222222-2222-4222-8222-000000000011', 'Samsung', 'OLED S90', 2024,
  'Téléviseur OLED 55 pouces 4K, importé en lot ou à l''unité.',
  'Disponible en approvisionnement conteneur pour revendeurs et grandes surfaces, ou à l''unité pour les particuliers et entreprises.',
  '[{"label":"Diagonale","value":"55 pouces"},{"label":"Résolution","value":"4K UHD"},{"label":"Connectivité","value":"Wi-Fi, 4x HDMI"},{"label":"Garantie","value":"12 mois"}]'::jsonb,
  'disponible', 'Chine', 'Sur demande', '/images/prod-tv.jpg', false, true, now() - interval '4 days'),
 ('33333333-3333-4333-8333-000000000005', 'moto-utilitaire-150-cc', 'Moto utilitaire 150 cc', '22222222-2222-4222-8222-000000000002', 'Haojue', 'HJ150', 2024,
  'Moto utilitaire économique, adaptée aux routes et pistes d''Afrique de l''Ouest.',
  'Moto robuste à faible consommation, disponible en lots pour flottes et coopératives. Pièces détachées largement disponibles.',
  '[{"label":"Cylindrée","value":"150 cc"},{"label":"Consommation","value":"2,3 L/100 km"},{"label":"Démarrage","value":"Électrique et kick"},{"label":"Conditionnement","value":"À l''unité ou en lot"}]'::jsonb,
  'disponible', 'Chine', 'Sur demande', '/images/prod-moto.jpg', false, true, now() - interval '5 days'),
 ('33333333-3333-4333-8333-000000000006', 'tracteur-agricole-90-ch', 'Tracteur agricole 90 ch', '22222222-2222-4222-8222-000000000004', 'YTO', 'X904', 2023,
  'Tracteur polyvalent 90 chevaux pour exploitations agricoles.',
  'Tracteur adapté aux travaux de labour, semis et transport. Livrable avec accessoires attelés sur demande.',
  '[{"label":"Puissance","value":"90 ch"},{"label":"Transmission","value":"4 roues motrices"},{"label":"Relevage","value":"Hydraulique 3 points"},{"label":"Accessoires","value":"Sur demande"}]'::jsonb,
  'sur_commande', 'Chine', 'Sur demande', '/images/prod-tracteur.jpg', true, true, now() - interval '6 days'),
 ('33333333-3333-4333-8333-000000000007', 'pneus-poids-lourd-315-80r22-5', 'Pneus poids lourd 315/80 R22.5', '22222222-2222-4222-8222-000000000006', 'Aeolus', 'HN08', NULL,
  'Pneus poids lourd toutes positions, disponibles par lot.',
  'Gomme renforcée pour usages mixtes route et piste. Approvisionnement régulier par conteneur.',
  '[{"label":"Dimension","value":"315/80 R22.5"},{"label":"Indice","value":"157/154 L"},{"label":"Usage","value":"Route et piste"},{"label":"Conditionnement","value":"Lot de 4 minimum"}]'::jsonb,
  'disponible', 'Chine', 'Sur demande', '/images/prod-pneus.jpg', false, false, now() - interval '9 days'),
 ('33333333-3333-4333-8333-000000000008', 'chargeuse-sur-pneus', 'Chargeuse sur pneus', '22222222-2222-4222-8222-000000000003', 'Komatsu', 'WA350', 2022,
  'Chargeuse sur pneus pour carrières, BTP et manutention de matériaux.',
  'Engin puissant pour chargement de camions et manutention de granulats. Vérifiée avant expédition et livrée avec rapport technique.',
  '[{"label":"Godet","value":"2,7 m³"},{"label":"Puissance","value":"127 kW"},{"label":"Poids","value":"15 t"},{"label":"État","value":"Occasion contrôlée"}]'::jsonb,
  'en_arrivage', 'Europe', 'Sur demande', '/images/prod-chargeuse.jpg', false, false, now() - interval '12 days');

INSERT INTO public.product_images (product_id, url, alt, position) VALUES
 ('33333333-3333-4333-8333-000000000001', '/images/prod-pickup.jpg', 'Pickup 4x4 double cabine', 0),
 ('33333333-3333-4333-8333-000000000002', '/images/prod-minipelle.jpg', 'Mini-pelle 1.5 tonne', 0),
 ('33333333-3333-4333-8333-000000000003', '/images/prod-groupe.jpg', 'Groupe électrogène 40 kVA', 0),
 ('33333333-3333-4333-8333-000000000004', '/images/prod-tv.jpg', 'Téléviseur OLED 55 pouces', 0),
 ('33333333-3333-4333-8333-000000000005', '/images/prod-moto.jpg', 'Moto utilitaire 150 cc', 0),
 ('33333333-3333-4333-8333-000000000006', '/images/prod-tracteur.jpg', 'Tracteur agricole 90 ch', 0),
 ('33333333-3333-4333-8333-000000000007', '/images/prod-pneus.jpg', 'Pneus poids lourd', 0),
 ('33333333-3333-4333-8333-000000000008', '/images/prod-chargeuse.jpg', 'Chargeuse sur pneus', 0);

INSERT INTO public.news (slug, title, excerpt, body, cover_url, published_at) VALUES
 ('nouvel-arrivage-engins-chantier', 'Nouvel arrivage d''engins de chantier', 'Un lot de mini-pelles et de chargeuses contrôlées vient d''être réceptionné.', 'Notre dernier conteneur d''engins de chantier est arrivé. Chaque machine est contrôlée avant expédition et livrée avec son rapport technique. Contactez-nous pour connaître les disponibilités et réserver votre matériel.', '/images/prod-minipelle.jpg', now() - interval '2 days'),
 ('nouvelle-gamme-groupes-electrogenes', 'Nouvelle gamme de groupes électrogènes', 'De 10 à 250 kVA, avec installation et mise en service possibles.', 'MDG GLOBAL HOLDINGS élargit son offre énergie avec une nouvelle gamme de groupes électrogènes insonorisés, de 10 à 250 kVA. Installation, mise en service et contrat de maintenance disponibles sur demande.', '/images/prod-groupe.jpg', now() - interval '8 days'),
 ('assistance-visa-accompagnement', 'Assistance visa : un accompagnement renforcé', 'Constitution du dossier, prise de rendez-vous et suivi jusqu''à la décision.', 'Notre service d''assistance visa accompagne particuliers et professionnels dans la préparation de leur dossier : vérification des pièces, prise de rendez-vous, préparation à l''entretien et suivi jusqu''à la décision.', '/images/sect-visa.jpg', now() - interval '20 days');