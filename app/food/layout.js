import Footer from "@/components/footer";
import Navbar from "./components/navbar";

export async function generateMetadata() {
  return {
    title: "French O'Paname & Livraison Rapide",
    description: "Découvrez les délices de la cuisine française chez Opaname Marrakech & Casablanca. Profitez de plats raffinés, préparés avec soin et livrés rapidement via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    keywords: ['Cuisine française Marrakech, Cuisine française Casablanca, Livraison plats français Marrakech, Livraison plats français Casablanca, Opaname menu français, Fast-food Marrakech, Fast-food Casablanca, Livraison Glovo cuisine française, Plats français Opaname'],
  };
}

export default function PizzeriaLayout({ children }) {
    return( 
        <>
          <Navbar/>
          <div className={`bg-secondary min-h-screen pt-20`}>
            {children}
          </div>
          <Footer/>
        </>
        )
  }