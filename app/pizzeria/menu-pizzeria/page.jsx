import Pizzeria from "../components/all-pizzeria/page";
import FilterButton from "../components/filterButton";

export async function generateMetadata() {
    return {
      title: "Menu Pizzeria - Découvrez Nos Pizzas Délicieuses",
      description: "Explorez le menu pizzeria d'Opaname à Marrakech et Casablanca. Savourez nos pizzas naan fraîches et nos recettes uniques, livrées rapidement chez vous. Commandez maintenant via Glovo !",
      keywords: [
        "Menu pizzeria Marrakech", 
        "Menu pizzeria Casablanca", 
        "Pizza naan menu", 
        "Pizzas fraîches Opaname", 
        "Livraison pizza Marrakech", 
        "Livraison pizza Casablanca", 
        "Fast-food menu Marrakech", 
        "Fast-food menu Casablanca"
      ],
      alternates: {
        canonical: "/menu-pizzeria",
      },
      openGraph: {
        title: "Opaname | Menu Pizzeria - Découvrez Nos Pizzas Délicieuses",
        description: "Explorez le menu pizzeria d'Opaname à Marrakech et Casablanca. Savourez nos pizzas naan fraîches et nos recettes uniques, livrées rapidement chez vous. Commandez maintenant via Glovo !",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/menu-pizzeria`,
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
            alt: "Menu Pizzeria - Découvrez Nos Pizzas Délicieuses",
          }
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Opaname | Menu Pizzeria - Découvrez Nos Pizzas Délicieuses",
        description: "Explorez le menu pizzeria d'Opaname à Marrakech et Casablanca. Savourez nos pizzas naan fraîches et nos recettes uniques, livrées rapidement chez vous. Commandez maintenant via Glovo !",
        images: [
          {
            url: `/opengraph-image.jpg`,
            alt: "Menu Pizzeria - Découvrez Nos Pizzas Délicieuses",
          }
        ],
      },
    };
  }
  
export default async function MenuPizzeria({ searchParams }){
    const { id } = await searchParams;
    return(
        <div className=" flex flex-col gap-10 items-center justify-center pt-28">
            <h2 className=" uppercase text-center font-black text-3xl lg:text-6xl text-white">🍕 Pizzeria Deliziosa - Menu</h2>
            {/* <FilterButton/> */}
            <Pizzeria id={id}/>
        </div>
    )
}