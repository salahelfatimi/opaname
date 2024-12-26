import {  Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const nunito = Nunito({weight:["200","300","400","500","600","700","800","900","1000"],subsets:["cyrillic"]});



export const metadata = {
  title: {  template: "Opaname Marrakech | %s " },
  description: "Découvrez Opaname Marrakech & Casablanca, votre destination pour des pizzas naan, kebabs, tikka, et merguez. Commandez facilement sur notre site et profitez de la livraison rapide via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} scroll-smooth   scrollbar scrollbar-thumb-primary scrollbar-track-secondary  overflow-y-scroll`}>
        {children}
       
      </body>
    </html>
  );
}
