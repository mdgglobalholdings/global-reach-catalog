import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Politique de Confidentialité | MDG GLOBAL HOLDINGS";
const DESCRIPTION = "Politique de confidentialité et traitement des données personnelles de MDG GLOBAL HOLDINGS.";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="bg-noir text-white">
      <article className="mx-auto max-w-[820px] px-5 py-14">
        <h1 className="text-4xl uppercase leading-[0.95] text-white">Politique de Confidentialité</h1>
        <div className="label-mono mt-6 text-amberhot">Mise à jour : {new Date().toLocaleDateString('fr-FR')}</div>

        <section className="mt-10">
          <h2 className="text-2xl uppercase mt-8 mb-3 text-or-lumiere">1. Introduction</h2>
          <p className="text-white/80 leading-relaxed">
            MDG GLOBAL HOLDINGS respecte votre vie privée. Cette politique explique comment nous collectons, 
            utilisons, partageons et stockons vos données personnelles.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3 text-or-lumiere">2. Données que nous collectons</h2>
          <p className="text-white/80 leading-relaxed">
            Nous collectons les données suivantes :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>• <strong>Données de contact</strong> : nom, email, téléphone, adresse</li>
            <li>• <strong>Données d'entreprise</strong> : nom société, secteur d'activité</li>
            <li>• <strong>Données de demande</strong> : description du besoin, budget, localisation</li>
            <li>• <strong>Données techniques</strong> : adresse IP, type navigateur, pages visitées</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3 text-or-lumiere">3. Utilisation de vos données</h2>
          <p className="text-white/80 leading-relaxed mb-3">
            Nous utilisons vos données pour :
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• Traiter vos demandes de devis et commandes</li>
            <li>• Vous envoyer une offre commerciale adaptée</li>
            <li>• Vous informer des nouveautés et arrivages</li>
            <li>• Améliorer nos services</li>
            <li>• Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3 text-or-lumiere">4. Partage de données</h2>
          <p className="text-white/80 leading-relaxed">
            Nous partageons vos données uniquement avec :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>• Nos partenaires logistiques (pour livraison)</li>
            <li>• Nos prestataires cloud (stockage sécurisé)</li>
            <li>• Les autorités si la loi l'exige</li>
          </ul>
          <p className="text-white/80 leading-relaxed mt-3">
            Nous ne vendons jamais vos données à des tiers.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3 text-or-lumiere">5. Sécurité des données</h2>
          <p className="text-white/80 leading-relaxed">
            Vos données sont protégées par :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>• Chiffrement SSL/TLS sur notre site</li>
            <li>• Serveurs sécurisés avec backups réguliers</li>
            <li>• Accès limité aux données sensibles</li>
            <li>• Politique de confidentialité stricte</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3 text-or-lumiere">6. Vos droits</h2>
          <p className="text-white/80 leading-relaxed">
            Vous avez le droit de :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>• Accéder à vos données</li>
            <li>• Rectifier vos données inexactes</li>
            <li>• Supprimer vos données</li>
            <li>• Obtenir une copie de vos données</li>
            <li>• Vous opposer à un traitement</li>
            <li>• Vous désabonner de nos communications</li>
          </ul>
          <p className="text-white/80 leading-relaxed mt-3">
            Pour exercer ces droits, contactez-nous à : <strong>contact@mdgglobalholdings.com</strong>
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3 text-or-lumiere">7. Cookies</h2>
          <p className="text-white/80 leading-relaxed">
            Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez désactiver 
            les cookies dans les paramètres de votre navigateur.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3 text-or-lumiere">8. Modifications</h2>
          <p className="text-white/80 leading-relaxed">
            Nous pouvons modifier cette politique à tout moment. Les modifications seront 
            affichées sur cette page avec la date de mise à jour.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3 text-or-lumiere">9. Contact</h2>
          <p className="text-white/80 leading-relaxed">
            Pour toute question sur cette politique :
          </p>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <p>📧 Email : <strong>contact@mdgglobalholdings.com</strong></p>
            <p>📞 Téléphone : <strong>+226 76 97 85 51</strong></p>
            <p>🌍 Adresse : <strong>Ouagadougou, Burkina Faso</strong></p>
          </div>
        </section>
      </article>
    </main>
  );
}
