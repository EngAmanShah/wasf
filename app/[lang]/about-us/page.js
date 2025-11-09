// app/[lang]/aboutus/page.js
import AboutUs from "../../../components/AboutUs/AboutUS";

export async function generateMetadata({ params }) {
  const lang = params.lang || "en";

  const content = {
    en: {
      title: "About Dermo Saudia digital Marketing | Creativity, Technology & Strategy",
      description:
        "Dermo Saudia digital Marketing is a creative agency led by experts in marketing. We specialize in digital marketing, website and app development, brand identity design, and IT solutions to help businesses grow and make a real impact.",
    },
    ar: {
      title: "عن Dermo Saudia digital Marketing | الإبداع، التكنولوجيا والاستراتيجية",
      description:
        "ديرمو السعودية للتسويق الإلكتروني هي وكالة إبداعية يقودها مبدعون في مجال التسويق. نحن متخصصون في التسويق الرقمي، تطوير المواقع والتطبيقات، تصميم الهوية البصرية، وحلول تكنولوجيا المعلومات لمساعدة الشركات على النمو وتحقيق تأثير ملموس.",
    },
  };

  const t = content[lang];

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://Dermo Saudia digital Marketing.com/${lang}/aboutus`,
      images: [
        {
          url: "/aman.jpeg",
          width: 1200,
          height: 630,
          alt: "About Dermo Saudia digital Marketing",
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
