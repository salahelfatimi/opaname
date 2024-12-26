import Footer from "@/components/footer";
import Navbar from "./components/navbar";

export async function generateMetadata() {
  return {
    title: "Cuisine Française & Livraison Rapide",
    description: "Découvrez les délices de la cuisine française chez Opaname Marrakech & Casablanca. Profitez de plats raffinés, préparés avec soin et livrés rapidement via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
    keywords: ['Cuisine française Marrakech, Cuisine française Casablanca, Livraison plats français Marrakech, Livraison plats français Casablanca, Opaname menu français, Fast-food Marrakech, Fast-food Casablanca, Livraison Glovo cuisine française, Plats français Opaname'],
    alternates: {
      canonical: "/french-food",
    },

    openGraph: {
      title: 'Opaname Marrakech | Cuisine Française & Livraison Rapide',
      description: "Découvrez les délices de la cuisine française chez Opaname Marrakech & Casablanca. Profitez de plats raffinés, préparés avec soin et livrés rapidement via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/french-food`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Opaname",
      images: [
        {
          url: `/french-food-opengraph-image.jpg`,
          secureUrl: `/french-food-opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Cuisine Française & Livraison Rapide`,
        }
      ],
      type: "website",
    },
  };
}

export default function PizzeriaLayout({ children }) {
    return( 
        <>
          <Navbar/>
          <div className={`bg-secondary pt-20`}>
            {children}
          </div>
          <Footer/>
        </>
        )
  }