import Footer from "@/components/footer";
import Navbar from "./components/navbar";

export async function generateMetadata() {
  return {
    title: "Pizzaria & Livraison Rapide",
    description: "Découvrez les meilleures pizzas naan chez Opaname Marrakech & Casablanca. Savourez des pizzas fraîches, délicieuses et livrées rapidement via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    keywords: [
      "Pizza naan Marrakech", 
      "Pizza naan Casablanca", 
      "Livraison pizza Marrakech", 
      "Livraison pizza Casablanca", 
      "Pizza fraîche Opaname", 
      "Fast-food Marrakech", 
      "Fast-food Casablanca", 
      "Livraison Glovo pizza", 
      "Opaname pizza menu"
    ],
  };
}

export default function PizzeriaLayout({ children }) {
    return( 
        <>
          <Navbar/>
          <div className={`bg-[#1E1E1E] pt-20 min-h-screen`}>
            {children}
          </div>
          <Footer/>
        </>
        )
  }