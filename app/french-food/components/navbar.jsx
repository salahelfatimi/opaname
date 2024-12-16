import { Dot, Facebook, Instagram, Map, MapPin, Menu, Phone } from "lucide-react"
import Link from "next/link"

export default function Navbar(){
    const itemNavbar=[
        {title:'Accueil',href:'/'},
        {title:'Pizzeria',href:'/pizzeria'},
    ]
    return(
        <div className="fixed right-0 left-0 z-50">
            <div className="bg-primary">
                <div className=" w-full  container py-3  flex flex-row justify-between items-center">
                    <div>
                        <p className=" text-white font-black animate-pulse flex gap-1 items-center"><Dot size={30} />Ouvert Maintenant</p>
                    </div>
                    <div className=" flex flex-row items-center gap-4">
                        <div className=" flex items-center gap-2 font-bold text-sm text-white">
                            <Link href={'tel:+212617506427'} target="_blank" className=" flex items-center gap-2"><Phone size={20} /><span className=" hidden lg:block">+212617506427</span></Link>
                        </div>
                        <div className=" flex items-center gap-2 font-bold text-sm text-white">
                            <Link href={'https://g.co/kgs/2JqxjK5'} target="_blank"><MapPin size={20}/></Link>
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
                                    <Link className=" text-white font-bold hover:text-primary duration-700" key={index} href={ele.href}>{ele.title}</Link>
                                ))
                            }
                        </div>
                        <Link href={'/french-food/menu-french-food'} className=" bg-primary py-3 px-4 hover:bg-secondary border border-primary hover:text-prborder-primary duration-700 text-sm font-bold text-white rounded">Commandez maintenant</Link>
                        
                    </div>
                    <Menu size={40} className="flex  lg:hidden bg-secondary p-1 stroke-white"/>
                </div>
             
            </div>
        </div>
      
    )
}