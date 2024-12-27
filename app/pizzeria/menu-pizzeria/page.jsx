import Pizzeria from "../components/all-pizzeria/page";
import NavbarMenu from "../components/navbarMenu";

export async function generateMetadata() {
    return {
        title: "Menu pizzeria - Découvrez Nos Délicieux pizzeria",
        description: "Découvrez les meilleures  pizzeria chez French O'Paname  . Savourez des pizzeria fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
        keywords: ["kebabs", "French O'Paname", "nourriture", "Marrakech", "nourriture délicieuse"],
        alternates: {
            canonical: "/pizzeria/menu-pizzeria",
        },
        openGraph: {
            title: "Menu pizzeria - Découvrez Nos Délicieux pizzeria",
            description: "Découvrez les meilleures  pizzeria chez French O'Paname  . Savourez des pizzeria fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzeria/menu-pizzeria`,
            siteName: "French O'Paname",
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzeria/opengraph-image.jpg`,
                    secureUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzeria/opengraph-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: "Nos Délicieux Plats - French O'Paname",
                }
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "French O'Paname | Nos Délicieux Plats - French O'Paname",
            description: "Découvrez notre sélection irrésistible de kebabs, préparée avec des ingrédients frais et des recettes authentiques.",
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzeria/opengraph-image.jpg`,
                    alt: "Nos Délicieux Plats - French O'Paname",
                }
            ],
        },
    };
}
  
export default async function MenuPizzeria({ searchParams }){
    const { id,category } = await searchParams;
    return(
        <>
            <NavbarMenu/>
            <div className=" flex flex-col gap-10 items-center justify-center pt-56">
                <h2 className=" uppercase text-center font-black text-3xl lg:text-6xl text-white">🍕 Pizzeria Deliziosa - Menu</h2>
                {/* <FilterButton/> */}
                <div className="container ">
                    <Pizzeria id={id} category={category?category:25}/>
                </div>
            </div>
        </>
    )
}