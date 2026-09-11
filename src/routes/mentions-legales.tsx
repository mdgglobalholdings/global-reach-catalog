import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Mentions Légales | MDG GLOBAL HOLDINGS";
const DESCRIPTION = "Mentions légales et informations juridiques de MDG GLOBAL HOLDINGS.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
  component: LegalNoticesPage,
});

function LegalNoticesPage() {
  return (
    <main>
      <article className="mx-auto max-w-[820px] px-4 sm:px-6 py-14">
        <h1 className="text-4xl uppercase leading-[0.95]">Mentions Légales</h1>
        <div className="label-mono mt-6 text-amberhot">Mise à jour : {new Date().toLocaleDateString('fr-FR')}</div>

        <section className="mt-10">
          <h2 className="text-2xl uppercase mt-8 mb-3">Éditeur du site</h2>
          <div className="space-y-2 text-noir/65">
            <p><strong>Nom :</strong> MDG GLOBAL HOLDINGS</p>
            <p><strong>Localisation :</strong> Ouagadougou, Burkina Faso</p>
            <p><strong>Téléphone :</strong> +226 76 97 85 51</p>
            <p><strong>Email :</strong> contact@mdgglobalholdings.com</p>
            <p><strong>Activité :</strong> Négoce international, import-export, logistique</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">Hébergement</h2>
          <div className="space-y-2 text-noir/65">
            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 340 S Lemon Ave, Walnut, CA 91789, États-Unis</p>
            <p><strong>Site :</strong> https://vercel.com</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">Responsable de publication</h2>
          <p className="text-noir/65">
            Le responsable de la publication du site est MDG GLOBAL HOLDINGS, représentée par sa direction.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">Propriété intellectuelle</h2>
          <p className="text-noir/65">
            L'ensemble du contenu de ce site (textes, images, logos, graphismes, vidéos, sons) est protégé par 
            les droits d'auteur. Toute reproduction, même partielle, est interdite sans l'autorisation écrite de MDG GLOBAL HOLDINGS.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">Liens externes</h2>
          <p className="text-noir/65">
            MDG GLOBAL HOLDINGS n'est pas responsable des contenus des sites externes vers lesquels pointe des liens 
            figurant sur son site. L'accès à ces sites s'effectue aux risques de l'utilisateur.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">Limitation de responsabilité</h2>
          <p className="text-noir/65">
            MDG GLOBAL HOLDINGS s'efforce d'assurer l'exactitude et la mise à jour du contenu de son site. 
            Cependant, MDG GLOBAL HOLDINGS ne garantit pas l'absence d'erreurs, l'exactitude ou la complétude 
            du contenu du site et ne peut être tenu responsable des dommages directs ou indirects qui pourraient 
            en découler.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">Données personnelles</h2>
          <p className="text-noir/65 mb-3">
            Pour toute question concernant le traitement de vos données personnelles, veuillez consulter 
            notre <strong>Politique de Confidentialité</strong> disponible sur ce site.
          </p>
          <p className="text-noir/65">
            Les données collectées via les formulaires de contact sont traitées conformément à la réglementation 
            en vigueur et utilisées exclusivement pour répondre à votre demande.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">Droit applicable</h2>
          <p className="text-noir/65">
            Ce site et l'ensemble de ses contenus sont régis par la loi du Burkina Faso. Tout litige relatif à 
            l'utilisation du site est soumis à la compétence exclusive des tribunaux de Ouagadougou.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl uppercase mt-8 mb-3">Contact</h2>
          <p className="text-noir/65">
            Pour toute question concernant ces mentions légales :
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
