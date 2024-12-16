import FoodCarousel from "@/components/tools/foodCarousel";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Opaname Marrakech | Kebab, Pizza Naan & Livraison Rapide",
    description: "Découvrez Opaname Marrakech & Casablanca, votre destination pour des pizzas naan, kebabs, tikka, et merguez. Commandez facilement sur notre site et profitez de la livraison rapide via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
    keywords: ['Opaname Marrakech, Opaname Casablanca, pizza naan Marrakech, kebab Marrakech, tikka Casablanca, merguez Marrakech, livraison kebab Marrakech, livraison Glovo Marrakech, sandwicherie Casablanca, pizza naan livraison Marrakech, fast-food Marrakech, restaurant kebab Casablanca, menu Opaname, livraison Glovo Casablanca, Opaname Gueliz, Opaname Maarif'],
    alternates: {
      canonical: "/",
     
      
    },

    openGraph: {
      title: 'Opaname Marrakech | french food , Pizza & Livraison Rapide',
      description: "Découvrez Opaname Marrakech & Casablanca, votre destination pour des pizzas naan, kebabs, tikka, et merguez. Commandez facilement sur notre site et profitez de la livraison rapide via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Opaname",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Kebab, Pizza Naan & Livraison Rapide `,
        }
      ],
      type: "website",
     
    },
    
   
  };
 
}
export default function Home() {
  return (
    <div className=" relative h-[80vh] md:h-[92vh]   overflow-hidden flex flex-col  justify-between  bg-secondary py-10">
        <div className="flex z-10 gap-2 items-center justify-center ">
          <img src="/logo.png" alt="French O'Paname" title="French O'Paname"  className="w-16 object-cover" />
          <h1 className=" text-2xl font-bold text-white">French O'Paname</h1>
        </div>

       
        <div>
          <div className="fixed bottom-0 z-50 left-0 right-0 flex flex-col-reverse lg:flex-row w-full  ">
            <img src="/homePage/commandez.png" alt="" className="absolute invisible lg:visible -top-20 w-40 right-20 object-cover" />
            <img src="/homePage/offres.png" alt="" className="absolute invisible lg:visible -top-20 w-40 left-20 object-cover" />

            <Link href={'/pizzeria'} className="bg-primary  w-full uppercase text-lg lg:text-3xl font-black  py-3 hover:bg-white hover:text-primary  border-4  border-primary duration-500 px-8 text-center text-white">commandez pizzeria 🍕</Link>
            <Link href={'/french-food'} className="bg-secondary  w-full uppercase text-lg lg:text-3xl font-black  py-3 hover:bg-white hover:text-primary  border-4  border-primary duration-500 px-8 text-center text-white ">commandez French Food 🥙</Link>
          </div>
        </div>
       
    </div>
  );
}
