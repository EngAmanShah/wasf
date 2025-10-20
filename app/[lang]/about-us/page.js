// app/[lang]/aboutus/page.js
import AboutUs from "../../../components/AboutUs/AboutUS";

export async function generateMetadata({ params }) {
  const lang = params.lang || "en";

  const content = {
    en: {
      title: "About Brandraize | Creativity, Technology & Strategy",
      description:
        "Elevating brands above the noise with creativity, technology, and strategy. Learn about Brandraize's mission, story, and services.",
    },
    ar: {
      title: "عن Brandraize | الإبداع، التكنولوجيا والاستراتيجية",
      description:
        "ddd",
    },
  };

  const t = content[lang];

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://brandraize.com/${lang}/aboutus`,
      images: [
        {
          url: "/aman.jpeg",
          width: 1200,
          height: 630,
          alt: "About Brandraize",
        },
      ],
    },
    alternates: {
      languages: {
        en: "/en/aboutus",
        ar: "/ar/aboutus",
      },
    },
  };
}

export default function Page({ params }) {
  return <AboutUs params={params} />;
}
