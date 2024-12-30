'use client'
import { DoorClosed, DoorOpen, Dot, Facebook, Instagram, Map, MapPin, Menu, Phone, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar(){
    const [openMenu,setOpenMenu]=useState(true)
    const [timeOpen,setTimeOpen]=useState(false)
    const itemNavbar=[
        {title:'Accueil',href:'/'},
        {title:'Food',href:'/food'},
    ]
    
    useEffect(() => {
        const checkStoreStatus = () => {
          const currentDate = new Date();
          const currentHour = currentDate.getHours(); 
          const openingHour = 12; 
          const closingHour = 5; 
          if (
            (currentHour >= openingHour && currentHour < 24) || 
            (currentHour < closingHour) 
          ) {
            setTimeOpen(true); 
          } else {
            setTimeOpen(false);
          }
        };
        checkStoreStatus();
        const interval = setInterval(checkStoreStatus, 60000); 
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="fixed right-0 left-0 z-30">
            <div className="bg-primary">
                <div className=" w-full  container py-3  flex flex-row justify-between items-center">
                    <div>
                        <p className="text-white font-black animate-pulse flex gap-1 items-center">
                            {timeOpen === true ? (<span className="flex items-center gap-2" ><DoorOpen /> Ouvert Maintenant</span>) : (<span className="flex items-center gap-2"><DoorClosed /> Fermé Maintenant</span>)}
                        </p>                    
                    </div>
                    <div className=" flex flex-row items-center gap-4">
                        <div className=" flex items-center gap-2 font-bold text-sm text-white">
                            <Link href={'tel:+212617506427'} target="_blank" className=" flex items-center gap-2"><Phone size={20} /><span className=" hidden lg:block">+212617506427</span></Link>
                        </div>
                        <div className=" flex items-center gap-2 font-bold text-sm text-white">
                            <Link href={'https://maps.app.goo.gl/CvJoobAVxdMfYPt79'} target="_blank"><MapPin size={20}/></Link>
                        </div>
                        <Link href={'https://www.instagram.com/frenchopaname1'} target="_blank" ><Instagram size={20} className="stroke-2  text-white"/></Link>
                        <Facebook size={20} className="stroke-2  text-white"/>
                    </div>
                </div>
            </div> 
            <div className=" bg-secondary  py-2 ">
                <div className=" container flex flex-row justify-between items-center">
                    <div className=" flex flex-row gap-4 items-center">
                        <img src="/logo.png" alt="French O'Paname" title="French O'Paname"  className="w-14 object-cover" />
                        <h1 className=" text-white font-bold text-xl">French O'Paname</h1>
                    </div>
                    <div className=" hidden  lg:flex flex-row gap-6 items-center">
                        <div className=" flex flex-row gap-8">
                            {
                                itemNavbar.map((ele,index)=>(
                                    <Link className=" text-white font-bold hover:text-primary" key={index} href={ele.href}>{ele.title}</Link>
                                ))
                            }
                        </div>
                        <Link href={'/pizzeria/menu-pizzeria'} className=" bg-primary py-2 px-4 hover:bg-secondary border border-primary hover:text-primary duration-700 text-sm font-bold text-white rounded">Commandez maintenant</Link>
                        
                    </div>
                    <button onClick={()=>(setOpenMenu(!openMenu))} className="bg-secondary p-1 lg:hidden block">
                        <Menu size={35} className=" stroke-white "/>
                    </button>
                </div>
             
            </div>
            <div className={`fixed z-30 inset-0 flex items-center justify-center bg-secondary duration-700 transition ${openMenu == false ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={() => { setOpenMenu(true) }} className="absolute top-4 right-4 bg-primary p-1 rounded-full">
                    <X size={30} className=" stroke-white" />
                </button>
                <div className="flex flex-col items-center gap-12 ">
                    {
                        itemNavbar.map((ele,index)=>(
                            <Link key={index} href={ele.href} onClick={() => { setOpenMenu(true) }} className={` text-white hover:bg-primary  font-bold  w-fit flex gap-1 items-center   duration-300  rounded px-6 py-2`}>
                                <span className=" font-medium capitalize   ">{ele.title}</span>
                            </Link>
                        ))

                    }
                    <Link href={'/food/menu-food'} className=" bg-primary py-2 px-3 hover:bg-secondary border border-primary hover:text-prborder-primary duration-700 text-sm font-bold text-white rounded">Commandez Pizzeria</Link>
                </div>
            </div>
        </div>
      
    )
}