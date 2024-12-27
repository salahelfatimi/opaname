
import Link from "next/link";
import LoadingPage from "@/components/tools/loading";

export async function generateMetadata() {
  return {
    title: "French O'Paname & Pizzeria & Food & Livraison Rapide",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/`),
    description: "Découvrez les meilleures pizzas & Food chez French O'Paname  . Savourez des pizzas & Food fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
    keywords: ["French O'Paname Marrakech, French O'Paname Casablanca, Livraison plats français Marrakech, Livraison plats français Casablanca, Opaname menu français, Fast-food Marrakech, Fast-food Casablanca, Livraison Glovo cuisine française, Plats français Opaname"],      
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "French O'Paname & Pizzeria & Food & Livraison Rapide",
      description: "Découvrez les meilleures pizzas & Food chez French O'Paname  . Savourez des pizzas & Food fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "French O'Paname",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: "French O'Paname & Pizzeria & Food & Livraison Rapide",
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "French O'Paname & Pizzeria & Food & Livraison Rapide",
      description: "Découvrez les meilleures pizzas & Food chez French O'Paname  . Savourez des pizzas & Food fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
      images: [
        {
          url: `/pizza-opengraph-image.jpg`,
          alt: "French O'Paname & Pizzeria & Food & Livraison Rapide",
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
