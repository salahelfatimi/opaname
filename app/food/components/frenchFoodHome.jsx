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
      <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <video className="w-full h-full object-cover" title="French O'Paname" autoPlay  loop playsInline muted>
        <source src="food/bgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6">
        <Link href="/food/menu-food" className="bg-primary text-white text-xl font-black py-3 px-8 rounded-full border-4 border-primary hover:bg-secondary hover:border-white duration-700">
          Explorez notre Menu 🍽️
        </Link>
        <div className="relative">
          <button onClick={() => setOpen(!open)} className="flex w-80 items-center justify-center gap-2 bg-secondary text-white text-xl font-black py-3 px-8 rounded-full border-4 border-primary hover:bg-secondary hover:border-primary duration-700">
            Commandez 🥙 <ChevronDown className={`transition-transform duration-700 ${open ? 'rotate-180' : 'rotate-0'}`}/>
          </button>
          <div className={`absolute top-16 left-0 right-0 bg-primary text-white font-bold rounded-lg p-4 flex flex-col gap-3 items-center transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'} w-80`}>
            <Link href="/food/menu-food" className="w-full text-center bg-primary hover:bg-secondary py-3 px-4 rounded-full duration-500">
              Commandez avec notre livreur
            </Link>
            <Link href="https://glovoapp.com/ma/en/marrakech/opaname-mar" target="_blank" className="w-full text-center bg-primary hover:bg-secondary py-3 px-4 rounded-full duration-500">
              Commandez avec Glovo
            </Link>
           
          </div>
        </div>
      </div>
      </div>
    )
}