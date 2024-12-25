'use client'
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PizzeriaHome(){
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
            <div className=" overflow-hidden  bg-[url('/pizzeria/bg.png')] bg-cover bg-right-bottom bg-secondary h-screen flex flex-col justify-center items-center gap-6">
                <h2 className=" uppercase font-black text-3xl lg:text-6xl text-white"><strong className=" text-primary">O'Paname</strong> Pizzeria </h2>
                <img src="/pizzeria/pizzeria.png" alt="pizzeria" title="pizzeria" className=" max-w-96 animate-spin" />
                <div className=" flex flex-col lg:flex-row gap-6">
                    <Link href={'/pizzeria/menu-pizzeria'} className=" bg-primary py-2 px-6 font-black text-xl text-white rounded-full border-secondary border-4 hover:border-white duration-700 hover:bg-secondary">Explorez notre Menu 🍽️</Link>
                    <div className=" relative">
                        <button onClick={()=>(setOpen(!open))} className=" w-full justify-center bg-secondary border-primary border-4 py-2 px-6 font-black text-xl text-white rounded-full flex items-center gap-1 group hover:border-white duration-700 hover:bg-secondary">Commandez 🍕 <ChevronDown className={` group-hover:animate-bounce  ${open?'rotate-180':' rotate-0'} duration-700`} /></button>
                        <div className={`bg-primary p-2 rounded font-bold text-white w-full   absolute bottom-16 flex flex-col gap-2 items-center justify-center ${open?'block':'hidden'}`}>
                            <Link href={'https://glovoapp.com/ma/en/marrakech/opaname-mar'} target="_blank" className=" hover:bg-secondary p-2 w-full text-center  duration-500 rounded-full text-sm">Commandez avec Glovo</Link>
                            <Link  href={'/pizzeria/menu-pizzeria'}  className=" hover:bg-secondary p-2 w-full text-center  duration-500 rounded-full text-sm">Commandez avec notre livreur</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
       
    )
}