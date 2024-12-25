import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className=" container flex flex-col gap-10 items-center justify-center  h-screen   bg-white inset-0 ">
        <span className=" text-[#786c47] flex flex-col items-center justify-center gap-2   ">
            <Image src={'/logo.png'} className="w-24" width={500} height={500} alt="Dayaf & Co" title="Dayaf & Co"/> ,<span className={` font-extrabold text-center  md:text-5xl text-4xl`}> Dayaf & Co </span>
        </span>

        <p className=" font-bold text-2xl flex items-center gap-2 flex-col text-center justify-center text-black">
          Il semble que cette page n&apos;existe pas
        </p>
        <Link
          className=" underline underline-offset-4  font-bold text-xl text-[#786c47] flex  duration-700 items-center gap-2"
          href="/"
        >
          <Home size={30}/>Retour à l&apos;accueil
        </Link>
      </div>
    </>
  );
}