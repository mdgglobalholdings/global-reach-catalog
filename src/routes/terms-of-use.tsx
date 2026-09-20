import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n/index";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({ meta: [{ title: "Terms of Use | MDG GLOBAL HOLDINGS" }, { name: "description", content: "Terms of use for the website and services of MDG GLOBAL HOLDINGS." }] }),
  component: TermsEN,
});

function TermsEN() {
  const { t } = useLang();
  return (
    <main>
      <article className="mx-auto max-w-[820px] px-4 sm:px-6 py-14">
        <h1 className="text-4xl uppercase leading-[0.95]">Terms of Use</h1>
        <div className="label-mono mt-6 text-amberhot">{t.legal.updated}: {new Date().toLocaleDateString('en-GB')}</div>
        <section className="mt-10"><h2 className="text-2xl uppercase mt-8 mb-3">1. Purpose</h2><p className="text-noir/65 leading-relaxed">These terms govern the use of the website www.mdgglobalholdings.com and the services offered by MDG GLOBAL HOLDINGS. By accessing the site, you accept these terms.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">2. Access</h2><p className="text-noir/65 leading-relaxed">We provide free access to our website. This access may be suspended at any time if you breach these terms or applicable law.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">3. Catalogue</h2><p className="text-noir/65 leading-relaxed mb-3">Our catalogue is a <strong>showcase of our products</strong> and not a direct sales offer. Any order must be: submitted as a quote request, confirmed in writing by MDG GLOBAL HOLDINGS, subject to stock availability, and subject to the commercial conditions in our offer.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">4. Quote requests</h2><ul className="mt-3 space-y-2 text-sm text-noir/65"><li>• You guarantee the accuracy of the information provided</li><li>• You accept our response time (24 business hours)</li><li>• An offer is valid for 14 days only</li><li>• An order is effective upon written confirmation</li></ul></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">5. Intellectual property</h2><p className="text-noir/65 leading-relaxed">The site content (text, images, logos, design) is protected by copyright. Any reproduction without authorisation is prohibited.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">6. Limitation of liability</h2><ul className="mt-3 space-y-2 text-sm text-noir/65"><li>• Interruptions or unavailability of the site</li><li>• Errors or inaccuracies in content</li><li>• Damages related to use of the site</li><li>• Data or information loss</li></ul></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">7. Applicable law</h2><p className="text-noir/65 leading-relaxed">These terms are governed by the law of Burkina Faso. Any dispute will be submitted to the competent courts of Ouagadougou.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">8. Contact</h2><div className="mt-4 space-y-2 text-sm text-noir/65"><p>📧 Email: <strong>contact@mdgglobalholdings.com</strong></p><p>📞 Phone: <strong>+226 76 97 85 51</strong></p><p>🌍 Address: <strong>Ouagadougou, Burkina Faso</strong></p></div></section>
      </article>
    </main>
  );
}
