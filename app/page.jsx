
import Link from "next/link";
import LoadingPage from "@/components/tools/loading";

export async function generateMetadata() {
  return {
    title: "Pizza Naan & Livraison Rapide",
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
    alternates: {
      canonical: "/pizzeria",
    },
    openGraph: {
      title: "Opaname Marrakech | Pizza Naan & Livraison Rapide",
      description: "Découvrez les meilleures pizzas naan chez Opaname Marrakech & Casablanca. Savourez des pizzas fraîches, délicieuses et livrées rapidement via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzeria`,
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
          alt: "Pizza Naan & Livraison Rapide",
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Opaname Marrakech | Pizza Naan & Livraison Rapide",
      description: "Découvrez les meilleures pizzas naan chez Opaname Marrakech & Casablanca. Savourez des pizzas fraîches, délicieuses et livrées rapidement via Glovo. Ouvert de midi à 5h du matin. Commandez dès maintenant !",
      images: [
        {
          url: `/pizza-opengraph-image.jpg`,
          alt: "Pizza Naan & Livraison Rapide",
        }
      ],
    },
  };
}

export default function Home() {
   
  return (
    <div className=" relative h-[100vh]    overflow-hidden flex flex-col  justify-between  bg-secondary ">
      
      <div className=" absolute z-20 inset-0 bg-black opacity-40"></div>
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        playsInline 
        muted
        className="w-screen h-[100vh] object-cover"
        title="Opaname Marrakech | food & pizzeria & Livraison Rapide"
        >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div>
          <div className="fixed bottom-0 z-50 left-0 right-0 flex flex-col-reverse lg:flex-row w-full  ">
            <img src="/homePage/commandez.png" alt="Opaname Marrakech" className="absolute invisible lg:visible -top-20 w-40 right-20 object-cover" />
            <img src="/homePage/offres.png" alt="Opaname Marrakech" className="absolute invisible lg:visible -top-20 w-40 left-20 object-cover" />
            <Link href={'/pizzeria'} className="bg-primary  w-full uppercase text-lg lg:text-3xl font-black  py-3 hover:bg-white hover:text-primary  border-4  border-primary duration-500 px-8 text-center text-white"> pizzeria 🍕</Link>
            <Link href={'/food'} className="bg-secondary  w-full uppercase text-lg lg:text-3xl font-black  py-3 hover:bg-white hover:text-primary  border-4  border-primary duration-500 px-8 text-center text-white ">French Food 🥙</Link>
          </div>
        </div>
       <LoadingPage/>
    </div>
  );
}
