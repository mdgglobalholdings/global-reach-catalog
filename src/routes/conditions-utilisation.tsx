import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Conditions d'Utilisation | MDG GLOBAL HOLDINGS";
const DESCRIPTION = "Conditions d'utilisation du site et des services de MDG GLOBAL HOLDINGS.";

export const Route = createFileRoute("/conditions-utilisation")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <article className="mx-auto max-w-[820px] px-4 sm:px-6 py-14">
        <h1 className="text-4xl uppercase leading-[0.95]">Conditions d'Utilisation</h1>
        <div className="label-mono mt-6 text-amberhot">Mise à jour : {new Date().toLocaleDateString('fr-FR')}</div>

        <section className="mt-10">
          <h2 className="text-2xl uppercase mt-8 mb-3">1. Objet</h2>
          <p className="text-noir/65 leading-relaxed">
            Ces conditions régissent l'utilisation du site www.mdgglobalholdings.com et des services 
            proposés par MDG GLOBAL HOLDINGS. En accédant au site, vous acceptez ces conditions.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">2. Accès au site</h2>
          <p className="text-noir/65 leading-relaxed">
            Nous accordons un accès gratuit à notre site. Cet accès peut être suspendu à tout moment 
            si vous violez ces conditions ou la loi.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">3. Catalogue</h2>
          <p className="text-noir/65 leading-relaxed mb-3">
            Notre catalogue est une <strong>vitrine de nos produits</strong> et non une offre de vente directe. 
            Toute commande doit être :
          </p>
          <ul className="space-y-2 text-sm text-noir/65">
            <li>• Formulée par demande de devis</li>
            <li>• Confirmée par écrit par MDG GLOBAL HOLDINGS</li>
            <li>• Sujette à disponibilité en stock</li>
            <li>• Soumise aux conditions commerciales de notre offre</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">4. Demandes de devis</h2>
          <p className="text-noir/65 leading-relaxed">
            Lorsque vous soumettez une demande de devis :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-noir/65">
            <li>• Vous garantissez l'exactitude des informations fournies</li>
            <li>• Vous acceptez nos conditions de délai (24h ouvrées)</li>
            <li>• Une offre n'est valable que 14 jours</li>
            <li>• La commande est effective après confirmation écrite</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">5. Propriété intellectuelle</h2>
          <p className="text-noir/65 leading-relaxed">
            Le contenu du site (textes, images, logos, design) est protégé par les droits d'auteur. 
            Toute reproduction sans autorisation est interdite.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">6. Limitation de responsabilité</h2>
          <p className="text-noir/65 leading-relaxed">
            MDG GLOBAL HOLDINGS ne peut être tenu responsable de :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-noir/65">
            <li>• Les interruptions ou indisponibilités du site</li>
            <li>• Les erreurs ou imprécisions du contenu</li>
            <li>• Les dommages liés à l'utilisation du site</li>
            <li>• Les pertes de données ou informations</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">7. Lois applicables</h2>
          <p className="text-noir/65 leading-relaxed">
            Ces conditions sont régies par la loi du Burkina Faso. Tout litige sera soumis 
            aux juridictions compétentes d'Ouagadougou.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">8. Contact</h2>
          <p className="text-noir/65 leading-relaxed">
            Pour toute question :
          </p>
          <div className="mt-4 space-y-2 text-sm text-noir/65">
            <p>📧 Email : <strong>contact@mdgglobalholdings.com</strong></p>
            <p>📞 Téléphone : <strong>+226 76 97 85 51</strong></p>
            <p>🌍 Adresse : <strong>Ouagadougou, Burkina Faso</strong></p>
          </div>
        </section>
      </article>
    </main>
  );
}
