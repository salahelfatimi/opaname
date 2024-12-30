import {  Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const nunito = Nunito({weight:["200","300","400","500","600","700","800","900","1000"],subsets:["cyrillic"]});



export const metadata= {

    title: {  template:" French O'Paname | %s " },
    description: "Découvrez les meilleures pizzas & Food chez French O'Paname  . Savourez des pizzas & Food fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      canonical: "/",
    },
    keywords: ["French O'Paname Marrakech, French O'Paname Casablanca, Livraison plats français Marrakech, Livraison plats français Casablanca, Opaname menu français, Fast-food Marrakech, Fast-food Casablanca, Livraison Glovo cuisine française, Plats français Opaname"],      
 
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
