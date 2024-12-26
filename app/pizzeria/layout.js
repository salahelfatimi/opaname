import Footer from "@/components/footer";
import Navbar from "./components/navbar";

export async function generateMetadata() {
  return {
    title: "Pizza Naan & Livraison Rapide",
    description: "Découvrez les meilleures pizzas naan chez Opaname Marrakech & Casablanca. Savourez des pizzas fraîches, délicieuses et livrées rapidement via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
    keywords: ['Pizza naan Marrakech, Pizza naan Casablanca, Livraison pizza Marrakech, Livraison pizza Casablanca, Pizza fraîche Opaname, Fast-food Marrakech, Fast-food Casablanca, Livraison Glovo pizza, Opaname pizza menu'],
    alternates: {
      canonical: "/pizzeria",
    },

    openGraph: {
      title: 'Opaname Marrakech | Pizza Naan & Livraison Rapide',
      description: "Découvrez les meilleures pizzas naan chez Opaname Marrakech & Casablanca. Savourez des pizzas fraîches, délicieuses et livrées rapidement via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/pizzeria`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Opaname",
      images: [
        {
          url: `/pizza-opengraph-image.jpg`,
          secureUrl: `/pizza-opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Pizza Naan & Livraison Rapide`,
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
          <div className={`bg-[#1E1E1E] pt-20`}>
            {children}
          </div>
          <Footer/>
        </>
        )
  }