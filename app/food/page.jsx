import FoodCarousel from "@/components/tools/foodCarousel";
import FrenchFood from "./components/frenchFoodHome";
import FilterButton from "./components/filterButton";
import Link from "next/link";

export default function Page(){
    return(
       <div className=" flex flex-col gap-10 ">
            <FrenchFood/>
            <div className=" flex flex-col items-center justify-center gap-4 ">
                <h2 className="uppercase font-black text-2xl lg:text-6xl text-white text-center">Nos Délicieuses <span className=" text-primary">food </span> </h2>
                <FoodCarousel/>
            </div>
            <div className="flex flex-col">
                <div className=" flex flex-col-reverse lg:flex-row gap-10 w-full items-center justify-center ">
                    <div className=" lg:w-1/2 flex flex-col  justify-center gap-4 lg:p-20 w-full  p-10 bg-primary lg:rounded-r-3xl">
                        <h2 className=" text-xl text-center lg:text-4xl text-white font-black capitalize">Nos <span className=" text-secondary">food</span> Délicieux </h2>
                        <p className=" text-xl text-center text-white font-medium">
                            Découvrez notre sélection irrésistible de kebabs, préparés avec des 
                            ingrédients frais et des recettes authentiques. Chaque kebab est un 
                            mélange parfait de viande savoureuse, de légumes croquants, et de sauces 
                            onctueuses, enveloppé dans un pain pita moelleux.
                        </p>
                        <Link href={'/'} className=" bg-secondary hover:bg-primary border-4 border-secondary   hover:border-white duration-700 text-white hover:text-white  lg:text-2xl text-sm4
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
    )
}