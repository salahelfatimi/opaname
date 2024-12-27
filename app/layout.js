import {  Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const nunito = Nunito({weight:["200","300","400","500","600","700","800","900","1000"],subsets:["cyrillic"]});



export async function generateMetadata() {
  return {
    title: "French O'Paname & Livraison Rapide",
    description: "Découvrez les meilleures pizzas naan chez Opaname Marrakech & Casablanca. Savourez des pizzas fraîches, délicieuses et livrées rapidement via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
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
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} scroll-smooth   scrollbar scrollbar-thumb-primary scrollbar-track-secondary  overflow-y-scroll`}>
        {children}
       
      </body>
    </html>
  );
}
