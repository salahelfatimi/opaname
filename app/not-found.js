import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: " Il semble que cette page n'existe pas ",
    description: "Découvrez les meilleures pizzas & Food chez French O'Paname  . Savourez des pizzas & Food fraîches, délicieuses et livrées rapidement . Ouvert de midi à 5h du matin. Commandez dès maintenant !",
  };
}


export default function NotFound() {
  return (
    <>
      <div className="  flex flex-col gap-8 items-center justify-center  h-screen   bg-secondary inset-0 ">
        <span className=" text-[#786c47] flex flex-col items-center justify-center gap-4   ">
            <Image src={'/logo.png'} className="w-24" width={500} height={500} alt="Dayaf & Co" title="Dayaf & Co"/> <span className={` font-extrabold text-center  md:text-5xl text-4xl text-primary`}> French O'Paname </span>
        </span>

        <p className=" font-bold text-2xl flex items-center gap-2 flex-col text-center justify-center text-white">
          Il semble que cette page n&apos;existe pas
        </p>
        <Link
          className=" underline underline-offset-4  font-bold text-xl text-primary flex  duration-700 items-center gap-2"
          href="/"
        >
          <Home size={30}/>Retour à l&apos;accueil
        </Link>
      </div>
    </>
  );
}