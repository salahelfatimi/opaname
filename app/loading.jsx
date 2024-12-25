import Image from "next/image";


export default function Loading() {
    return (
      <>
        <div
          className={`fixed  inset-0 flex items-center justify-center bg-secondary  duration-1000 transition z-50 `}
        >
          <span className={`font-extrabold text-center items-center gap-3 md:text-5xl text-4xl  flex flex-col lg:flex-row  justify-center text-white  `}>
            <img src="/logo.png" className=" w-28" alt="" />
            <span className=" text-white flex  items-center justify-center gap-2   ">
              French O'Paname
            </span>
          </span>
        </div>
      </>
    );
  }