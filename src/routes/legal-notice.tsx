import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n/index";

export const Route = createFileRoute("/legal-notice")({
  head: () => ({ meta: [{ title: "Legal Notice | MDG GLOBAL HOLDINGS" }, { name: "description", content: "Legal notice and legal information for MDG GLOBAL HOLDINGS." }] }),
  component: LegalEN,
});

function LegalEN() {
  const { t } = useLang();
  return (
    <main>
      <article className="mx-auto max-w-[820px] px-4 sm:px-6 py-14">
        <h1 className="text-4xl uppercase leading-[0.95]">Legal Notice</h1>
        <div className="label-mono mt-6 text-amberhot">{t.legal.updated}: {new Date().toLocaleDateString('en-GB')}</div>
        <section className="mt-10"><h2 className="text-2xl uppercase mt-8 mb-3">Publisher</h2><div className="space-y-2 text-noir/65"><p><strong>Name:</strong> MDG GLOBAL HOLDINGS</p><p><strong>Location:</strong> Ouagadougou, Burkina Faso</p><p><strong>Phone:</strong> +226 76 97 85 51</p><p><strong>Email:</strong> contact@mdgglobalholdings.com</p><p><strong>Activity:</strong> International trading, import-export, logistics</p></div></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">Hosting</h2><div className="space-y-2 text-noir/65"><p><strong>Host:</strong> Vercel Inc.</p><p><strong>Address:</strong> 340 S Lemon Ave, Walnut, CA 91789, United States</p><p><strong>Website:</strong> https://vercel.com</p></div></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">Publication Director</h2><p className="text-noir/65">The publication director of this website is MDG GLOBAL HOLDINGS, represented by its management.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">Intellectual Property</h2><p className="text-noir/65">All content on this website (text, images, logos, graphics, videos, sounds) is protected by copyright. Any reproduction, even partial, is prohibited without written authorisation from MDG GLOBAL HOLDINGS.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">External Links</h2><p className="text-noir/65">MDG GLOBAL HOLDINGS is not responsible for the content of external websites linked from this site. Access to these sites is at the user's own risk.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">Limitation of Liability</h2><p className="text-noir/65">MDG GLOBAL HOLDINGS endeavours to ensure the accuracy and currency of the content on its website. However, MDG GLOBAL HOLDINGS does not guarantee the absence of errors, the accuracy or completeness of the site content and cannot be held liable for any direct or indirect damages that may result.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">Personal Data</h2><p className="text-noir/65">For any questions regarding the processing of your personal data, please refer to our <strong>Privacy Policy</strong> available on this website. Data collected via contact forms is processed in accordance with applicable regulations and used solely to respond to your enquiry.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">Applicable Law</h2><p className="text-noir/65">This website and all its content are governed by the law of Burkina Faso. Any dispute relating to the use of the site is subject to the exclusive jurisdiction of the courts of Ouagadougou.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">Contact</h2><div className="mt-4 space-y-2 text-sm text-noir/65"><p>📧 Email: <strong>contact@mdgglobalholdings.com</strong></p><p>📞 Phone: <strong>+226 76 97 85 51</strong></p><p>🌍 Address: <strong>Ouagadougou, Burkina Faso</strong></p></div></section>
      </article>
    </main>
  );
}
