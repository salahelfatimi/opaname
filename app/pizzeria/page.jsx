import FoodCarousel from "@/components/tools/foodCarousel";
import PizzeriaHome from "./components/pizzeriaHome";
import FilterButton from "./components/filterButton";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "./components/navbar";

export async function generateMetadata() {
    return {
        title: "Nos Délicieux Pizzeria ",
        description: "Découvrez les meilleures  pizzeria chez French O'Paname  . Savourez des pizzeria fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
        keywords: ["Pizzeria", "French O'Paname", "restaurant", "Marrakech", "cuisine délicieuse"],
        alternates: {
            canonical: "/pizzeria",
        },
        openGraph: {
            title: "Nos Délicieux Pizzeria - French O'Paname",
            description: "Découvrez les meilleures  pizzeria chez French O'Paname  . Savourez des pizzeria fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzeria`,
            siteName: "French O'Paname",
            images: [
                {
                    url: `/pizzeria/opengraph-image.jpg`,
                    secureUrl: `/pizzeria/opengraph-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: "Nos Délicieux Plats - French O'Paname",
                }
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "French O'Paname | Nos Délicieux Plats - pizzeria",
            description: "Explorez notre menu exclusif, mettant en vedette des plats succulents et des saveurs authentiques pour ravir vos papilles.",
            images: [
                {
                    url: `/pizzeria/opengraph-image.jpg`,
                    alt: "Nos Délicieux Plats - French O'Paname",
                }
            ],
        },
    };
}


export default function Page(){
    return(
        <>
        <Navbar/>
       <div className=" flex flex-col gap-10 ">
            <PizzeriaHome/>
            <div className=" flex flex-col items-center justify-center gap-4 ">
                <h2 className="uppercase font-black text-2xl lg:text-6xl text-white">Nos Délicieuses <span className=" text-primary">pizzeria</span> </h2>
                <FoodCarousel category={25}/>
            </div>
            <div className="flex flex-col">
                <div className=" flex flex-col-reverse gap-10 lg:flex-row w-full items-center justify-center ">
                    <div className=" lg:w-1/2 flex flex-col  justify-center gap-4 lg:p-20 w-full  p-10 bg-primary lg:rounded-r-3xl">
                        <h2 className=" text-xl text-center lg:text-4xl text-white font-black">Nos soan <span className=" text-secondary">Pizzas</span> Savoureuses 🍕</h2>
                        <p className=" text-xl text-center text-white font-medium">
                            Explorez notre sélection de pizzas irrésistibles, 
                            préparées avec des ingrédients frais et des recettes 
                            authentiques. Que vous préfériez une base tomate classique 
                            ou une base crème onctueuse, chaque bouchée est un voyage gourmand. 
                            Commandez maintenant et régalez-vous !
                        </p>
                        <Link href={'/'} className=" bg-secondary hover:bg-primary border-4 border-secondary  hover:border-white duration-700 text-white hover:text-white  lg:text-2xl text-sm4
                        font-bold  py-2 px-4 rounded-full text-center capitalize" >Commandez 🍕</Link>
                    </div>
                    <div className=" lg:w-1/2 flex items-center justify-center h-[40vh] p-10">
                        <img src="/logo.png" alt="French O'Paname" title="French O'Paname"  className="object-cover w-80" />
                    </div>
                </div>
                <div className=" flex flex-col-reverse lg:flex-row-reverse w-full items-center justify-center  ">
                    <div className=" lg:w-1/2 w-full h-[40vh] flex flex-col items-center  justify-center gap-4 lg:p-20 p-10 bg-primary lg:rounded-tl-3xl">
                        <h3 className=" text-4xl lg:text-7xl  font-black text-white">Ouvert :</h3>
                        <p className=" text-2xl lg:text-4xl font-bold text-white">Ouvert du midi à 5h du matin</p>        
                    </div>
                    <div className=" lg:w-1/2 h-[40vh] flex flex-col gap-4 items-center justify-center ">
                        <h3 className=" text-4xl lg:text-7xl font-black text-white">Contactez-nous</h3>
                        <Link target="_blank" href={'tel:+212617506427'} className=" underline underline-offset-8 text-2xl lg:text-4xl font-bold text-primary">+212617506427</Link>
                    </div>
                </div>
                <div  className=" overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.2868206240705!2d-8.0074829!3d31.6284418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafefd5c2bdf2fd%3A0xda6e5b731f583a52!2sOPANAME%20Marrakech!5e1!3m2!1sen!2sma!4v1734004682705!5m2!1sen!2sma"
                        className=" w-screen h-[70vh]"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
           
           
           
        </div>
        <Footer/>
         </>
    )
}