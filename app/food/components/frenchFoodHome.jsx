'use client'
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FrenchFood(){
    const [open,setOpen]=useState(false)
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (!event.target.closest('#dropdown')) {
            setOpen(false);
          }
        };
        if (open) {
          document.addEventListener('click', handleClickOutside);
        } else {
          document.removeEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
      }, [open]);
    
    return(
        <div>
            <div className=" overflow-hidden  bg-[url('/french-food/bg.png')] bg-cover bg-bottom bg-secondary h-screen flex flex-col justify-center items-center gap-6">
                <h2 className=" uppercase font-black text-3xl lg:text-6xl text-white"><strong className=" text-primary">O'Paname</strong> Food </h2>
                <img src="/french-food/french-food.png" alt="French Food" title="French Food" className=" max-w-96 animate-bounce" />
                <div className=" flex flex-col lg:flex-row gap-6">
                    <Link href={'/food/menu-food'} className=" bg-primary py-2 px-6 font-black text-xl text-white rounded-full border-prbg-primary border-primary border-4 hover:border-white duration-700 hover:bg-secondary">Explorez notre Menu 🍽️</Link>
                    <div className=" relative">
                        <button onClick={()=>(setOpen(!open))} className=" w-full justify-center bg-secondary border-prbg-primary border-4 py-2 px-6 font-black text-xl text-white rounded-full flex items-center gap-1 group hover:border-primary duration-700 hover:bg-secondary">Commandez 🍕 <ChevronDown className={` group-hover:animate-bounce  ${open?'rotate-180':' rotate-0'} duration-700`} /></button>
                        <div className={`bg-primary p-2 rounded font-bold text-white w-full   absolute bottom-16 flex flex-col gap-2 items-center justify-center ${open?'block':'hidden'}`}>
                            <Link href={'https://glovoapp.com/ma/en/marrakech/opaname-mar'} target="_blank" className="hover:bg-secondary hover:bg-primary p-2 w-full text-center  duration-500 rounded-full text-sm">Commandez avec Glovo</Link>
                            <Link  href={'/food/menu-food'}  className=" hover:bg-secondary p-2 w-full text-center  duration-500 rounded-full text-sm">Commandez avec notre livreur</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
       
    )
}