
import Link from "next/link";
import Loading from "./loading";
import LoadingPage from "@/components/tools/loading";

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
    <div className=" relative h-[100vh]    overflow-hidden flex flex-col  justify-between  bg-secondary ">
      
      <div className=" absolute z-20 inset-0 bg-black opacity-30"></div>
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        playsInline 
        muted
        className="w-screen h-[100vh] object-cover"
        >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div>
          <div className="fixed bottom-0 z-50 left-0 right-0 flex flex-col-reverse lg:flex-row w-full  ">
            <img src="/homePage/commandez.png" alt="" className="absolute invisible lg:visible -top-20 w-40 right-20 object-cover" />
            <img src="/homePage/offres.png" alt="" className="absolute invisible lg:visible -top-20 w-40 left-20 object-cover" />

            <Link href={'/pizzeria'} className="bg-primary  w-full uppercase text-lg lg:text-3xl font-black  py-3 hover:bg-white hover:text-primary  border-4  border-primary duration-500 px-8 text-center text-white"> pizzeria 🍕</Link>
            <Link href={'/food'} className="bg-secondary  w-full uppercase text-lg lg:text-3xl font-black  py-3 hover:bg-white hover:text-primary  border-4  border-primary duration-500 px-8 text-center text-white ">French Food 🥙</Link>
          </div>
        </div>
       <LoadingPage/>
    </div>
  );
}
