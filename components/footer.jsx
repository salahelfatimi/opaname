export default function Footer(){
    return (
        <footer className="flex flex-col " >
        <div className="bg-secondary py-8">
            <div className=" flex flex-col gap-4 lg:flex-row items-center justify-center  container ">
            <p className={`select-none flex gap-1  flex-col lg:flex-row  text-lg items-center font-medium capitalize text-center lg:text-start text-white `}>
                Copyright &copy; {new Date().getFullYear()} . Tous droits réservés . 
                <span className=" text-primary uppercase font-black   ">
                    French O'Paname
                </span>
            </p>
            </div>
        </div>
      </footer>
    )
}