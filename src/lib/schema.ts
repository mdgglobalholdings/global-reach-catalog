import { COMPANY } from "./company";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY.name,
    "url": "https://mdgglobalholdings.com",
    "logo": "https://mdgglobalholdings.com/images/logo.png",
    "description": COMPANY.tagline,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": COMPANY.country,
      "addressLocality": COMPANY.city,
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY.phoneBf,
      "contactType": "Sales",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY.name,
    "image": "https://mdgglobalholdings.com/images/logo.png",
    "description": "Négoce international et import-export de véhicules, engins et équipements",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ouagadougou",
      "addressLocality": COMPANY.city,
      "addressCountry": COMPANY.country,
    },
    "telephone": COMPANY.phoneBf,
    "email": COMPANY.email,
    "priceRange": "$$$",
    "areaServed": ["BF", "NE", "ML", "SN", "CI", "GH"],
  };
}

export function getProductSchema(product: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.summary || product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand || COMPANY.name,
    },
    "image": product.cover_url,
    "offers": {
      "@type": "Offer",
      "url": `https://mdgglobalholdings.com/catalogue/${product.slug}`,
      "availability": product.availability === "disponible" ? "InStock" : "OutOfStock",
      "priceCurrency": "XOF",
      "price": product.price_text || "Contact for pricing",
    },
  };
}

export function getFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://mdgglobalholdings.com${item.url}`,
    })),
  };
}
