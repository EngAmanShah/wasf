import React from "react";
import Page from "../../../components/Service/Page";

export async function generateMetadata({ params }) {
  const { lang } = params;

  const translations = {
    en: {
      title: "Our Services | Dermo Saudia digital Marketing",
      description:
        "Explore Dermo Saudia digital Marketing services: Web Development, Mobile App Development, IT Solutions, Digital Marketing, Graphic Design, and more — tailored to help your business thrive.",
      keywords:
        "Dermo Saudia digital Marketing services, web development, mobile app development, IT solutions, digital marketing, SEO, graphic design, business solutions, technology services",
    },
    ar: {
      title: "خدماتنا |  ديرمو السعودية للتسويق الإلكتروني",
      description:
        "استكشف خدمات ديرمو السعودية للتسويق الإلكتروني: تطوير المواقع، تطوير تطبيقات الجوال، حلول تكنولوجيا المعلومات، التسويق الرقمي، التصميم الجرافيكي والمزيد — لدعم نجاح عملك.",
      keywords:
        "خدمات ديرمو السعودية للتسويق الإلكتروني, تطوير المواقع, تطوير تطبيقات الجوال, حلول تكنولوجيا المعلومات, التسويق الرقمي, تحسين محركات البحث, التصميم الجرافيكي, حلول الأعمال, خدمات تقنية",
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
      url: `https://brandraize.com/services/${lang}`,
      siteName: "Dermo Saudia digital Marketing",
      images: [
        {
          url: "https://brandraize.com/images/services-banner.jpg",
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
      images: ["https://brandraize.com/images/services-banner.jpg"],
    },
  };
}

export default function ServicesPage({ params }) {
  return <Page params={params} />;
}
