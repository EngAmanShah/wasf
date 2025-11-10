import React from "react";
import WebDevelopmentPage from "../../../../components/Service/servicepages/WebDevelopmentPage";

export async function generateMetadata({ params }) {
  const { lang } = params;

  const translations = {
    en: {
      title: "Web Development Services | Dermo Saudia  digital Marketing",
      description:
        "Dermo Saudia  digital Marketing delivers creative and scalable web development services: e-commerce, CMS, custom websites, e-learning, social platforms, and CRM solutions.",
      keywords:
        "web development, e-commerce websites, CMS development, custom websites, e-learning platforms, social networking sites, CRM platforms, Dermo Saudia  digital Marketing",
    },
    ar: {
      title: "خدمات تطوير المواقع | وصف للتسويق الإلكتروني",
      description:
        "وصف للتسويق الإلكتروني تقدم خدمات تطوير مواقع مبتكرة وقابلة للتوسع: التجارة الإلكترونية، أنظمة إدارة المحتوى، المواقع المخصصة، التعلم الإلكتروني، الشبكات الاجتماعية، ومنصات إدارة العملاء.",
      keywords:
        "تطوير مواقع, مواقع التجارة الإلكترونية, تطوير أنظمة إدارة المحتوى, مواقع مخصصة, منصات التعلم الإلكتروني, الشبكات الاجتماعية, منصات CRM, وصف للتسويق الإلكتروني",
    },
  };

  const t = translations[lang] ?? translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://brandraize.com/web-development/${lang}`,
      siteName: "Dermo Saudia  digital Marketing",
      images: [
        {
          url: "https://brandraize.com/images/web-development-banner.jpg",
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
      locale: lang === "ar" ? "ar" : "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["https://brandraize.com/images/web-development-banner.jpg"],
    },
  };
}

export default function Page({ params }) {
  return <WebDevelopmentPage params={params} />;
}
