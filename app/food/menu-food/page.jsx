import AlertOpen from "@/components/tools/alertOpen";
import NavbarMenu from "../components/navbarMenu";
import AllMenu from "@/components/allMenu/page";

export async function generateMetadata() {
    return {
        title: "Menu Food - Découvrez Nos Délicieux Food",
        description: "Découvrez les meilleures  Food chez French O'Paname  . Savourez des Food fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
        keywords: ["kebabs", "French O'Paname", "nourriture", "Marrakech", "nourriture délicieuse"],
        alternates: {
            canonical: "/food/menu-food",
        },
        openGraph: {
            title: "Menu Food - Découvrez Nos Délicieux Food",
            description: "Découvrez les meilleures  Food chez French O'Paname  . Savourez des Food fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/food/menu-food`,
            siteName: "French O'Paname",
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/food/opengraph-image.jpg`,
                    secureUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/food/opengraph-image.jpg`,
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
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/food/opengraph-image.jpg`,
                    alt: "Nos Délicieux Plats - French O'Paname",
                }
            ],
        },
    };
}
export default async function MenuFood({ searchParams }){
    const { id,category } = await searchParams;
    return(
        <>
            <NavbarMenu/>
            <div className=" flex flex-col gap-10 items-center bg-secondary pt-56 ">
                <div className=" flex flex-col w-full gap-10">
                    <h2 className=" uppercase text-center font-black text-3xl lg:text-6xl text-white">food Deliziosa - Menu</h2>
                    <AlertOpen/>
                    <div className="container ">
                        <AllMenu id={id} category={category?category:16}/>
                    </div>
                </div>
            </div>
        </>
        
    )
}