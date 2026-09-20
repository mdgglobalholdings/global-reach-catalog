import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n/index";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [{ title: "Privacy Policy | MDG GLOBAL HOLDINGS" }, { name: "description", content: "Privacy policy and personal data processing for MDG GLOBAL HOLDINGS." }] }),
  component: PrivacyEN,
});

function PrivacyEN() {
  const { t } = useLang();
  return (
    <main>
      <article className="mx-auto max-w-[820px] px-4 sm:px-6 py-14">
        <h1 className="text-4xl uppercase leading-[0.95]">Privacy Policy</h1>
        <div className="label-mono mt-6 text-amberhot">{t.legal.updated}: {new Date().toLocaleDateString('en-GB')}</div>
        <section className="mt-10"><h2 className="text-2xl uppercase mt-8 mb-3">1. Introduction</h2><p className="text-noir/65 leading-relaxed">MDG GLOBAL HOLDINGS respects your privacy. This policy explains how we collect, use, share and store your personal data.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">2. Data we collect</h2><ul className="mt-3 space-y-2 text-sm text-noir/65"><li>• <strong>Contact data</strong>: name, email, phone, address</li><li>• <strong>Business data</strong>: company name, sector</li><li>• <strong>Request data</strong>: description of need, budget, location</li><li>• <strong>Technical data</strong>: IP address, browser type, pages visited</li></ul></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">3. How we use your data</h2><ul className="space-y-2 text-sm text-noir/65"><li>• Process your quote requests and orders</li><li>• Send you a tailored commercial offer</li><li>• Keep you informed of news and arrivals</li><li>• Improve our services</li><li>• Meet our legal obligations</li></ul></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">4. Data sharing</h2><ul className="mt-3 space-y-2 text-sm text-noir/65"><li>• Our logistics partners (for delivery)</li><li>• Our cloud providers (secure storage)</li><li>• Authorities where required by law</li></ul><p className="text-noir/65 leading-relaxed mt-3">We never sell your data to third parties.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">5. Data security</h2><ul className="mt-3 space-y-2 text-sm text-noir/65"><li>• SSL/TLS encryption on our website</li><li>• Secure servers with regular backups</li><li>• Restricted access to sensitive data</li><li>• Strict privacy policy</li></ul></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">6. Your rights</h2><ul className="mt-3 space-y-2 text-sm text-noir/65"><li>• Access your data</li><li>• Correct inaccurate data</li><li>• Delete your data</li><li>• Obtain a copy of your data</li><li>• Object to processing</li><li>• Unsubscribe from our communications</li></ul><p className="text-noir/65 leading-relaxed mt-3">To exercise these rights, contact us at: <strong>contact@mdgglobalholdings.com</strong></p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">7. Cookies</h2><p className="text-noir/65 leading-relaxed">Our site uses cookies to improve your experience. You can disable cookies in your browser settings.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">8. Changes</h2><p className="text-noir/65 leading-relaxed">We may update this policy at any time. Changes will be posted on this page with the update date.</p></section>
        <section className="mt-8"><h2 className="text-2xl uppercase mt-8 mb-3">9. Contact</h2><div className="mt-4 space-y-2 text-sm text-noir/65"><p>📧 Email: <strong>contact@mdgglobalholdings.com</strong></p><p>📞 Phone: <strong>+226 76 97 85 51</strong></p><p>🌍 Address: <strong>Ouagadougou, Burkina Faso</strong></p></div></section>
      </article>
    </main>
  );
}
