'use client';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ImageOff } from 'lucide-react';
import Loading from '@/app/loading';

export default function FoodCarousel() {
  const [foodScroll, setFoodScroll] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false, speed: 0.6 }),
  ]);

  useEffect(() => {
    const fetchFrenchFood = async () => {
      try {
        const response = await fetch(`/api/FrenchFoodRestApi/frenchFood?page=1&perPage=14`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const opanameFood = await response.json();
        setFoodScroll(opanameFood);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchFrenchFood();
  }, []);
  if (isLoading) {
    return <Loading/>; 
  }
  

  return (
    <div className="  w-full ">
      <div className="py-10 overflow-hidden" ref={emblaRef}>
        {/* Embla requires direct children to be the slides */}
        <div className="flex flex-row flex-nowrap gap-6 ">
          {foodScroll.map((food, index) => (
            <Link href={`/food/menu-food?id=${food.id}`}  key={index} className="pl-10 relative flex flex-row items-center justify-center gap-4 flex-shrink-0 group ">
                <div className=' relative'>
                {food?.images[0] ? (<img src={food?.images[0]?.src} alt={food.name} className="w-44 bg-primary p-1 object-cover h-44 rounded-full group-hover:scale-105 duration-700"/> ) 
                : (
                  <div className=" h-44 rounded-full w-44 bg-primary flex items-center justify-center"><ImageOff size={70} className=' stroke-white' /></div>
                )}
                  <div className=' absolute right-0 bottom-6 bg-primary border-4 border-secondary w-14 h-14 flex items-center justify-center rounded-full '>
                      <p className='font-black text-sm animate-pulse text-white'>{food.price} DH</p>
                  </div>
                </div>
                <div>
                  <h2 className="mt-4 font-bold text-2xl text-primary z-10 ">
                    {food.name}
                  </h2>
                  <p className='w-64 text-white font-medium' dangerouslySetInnerHTML={{ __html: food?.description }}></p>
                </div>
                   
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
