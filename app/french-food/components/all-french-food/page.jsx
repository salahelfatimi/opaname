"use client";
import Loading from "@/app/loading";
import { Armchair, Ban, Bath, ChevronDown, Expand, House, Plus, Ruler, Sandwich } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function FrenchFood({type,house,min_Prix,max_Prix}) {
  const [FrenchFood, setFrenchFood] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allLoaded, setAllLoaded] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  
  // Fetch function for products
  const fetchFrenchFood = useCallback(async (page, isInitialFetch = false) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/FrenchFoodRestApi/frenchFood?page=${page}&perPage=15&type=${type}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const newFrenchFood = await response.json();
      if (isInitialFetch) {
        setFrenchFood(newFrenchFood);
        setInitialLoading(false);
      } else {
        setFrenchFood((prev) => [...prev, ...newFrenchFood]);
      }
      
      if (newFrenchFood.length < 10) {
       
        setAllLoaded(true);
      }
      setPage(page);
      setError(null);
    } catch (err) {
      setError("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  }, [type, house,max_Prix,min_Prix]);

  useEffect(() => {
    setFrenchFood([]); // Clear old data
    setPage(1); // Reset to first page
    setAllLoaded(false); // Reset all loaded flag
    setInitialLoading(true); // Show loading indicator initially
    fetchFrenchFood(1, true); // Trigger new fetch with updated params
  }, [fetchFrenchFood, type, house,max_Prix,min_Prix]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || allLoaded || window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 100) return;
      fetchFrenchFood(page + 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, page, allLoaded]);

  return (
    <div>
      {initialLoading ? (
       Loading(true)
      ) : (
        <>
        <div className="px-10  grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-10 ">
            {
                FrenchFood.map((ele,index)=>(
                    <div key={index} className=" flex flex-col justify-between gap-2 border border-primary h-44 rounded-xl p-4 group cursor-pointer">
                        <div className=" flex flex-row gap-4 h-full w-full">
                            {ele?.images[0]? <Image
                                src={ele?.images[0]?.src}
                                alt={ele?.name}
                                className="max-h-36 max-w-36 h-full w-full object-cover object-bottom rounded-xl transform transition-transform duration-300 group-hover:scale-110"
                                width={500}
                                height={500}
                                quality={50}
                                priority
                            />
                            :
                            <div  className=' hidden'></div> 
                            }
                                <div className=" flex flex-col justify-between items-start h-full w-full ">
                                    <div>
                                        <h2 className=" text-primary font-black text-xl uppercase">{ele.name}</h2>
                                        <div className=" text-white font-medium text-sm capitalize group-hover:underline underline-offset-2" dangerouslySetInnerHTML={{ __html: ele?.description }}></div>
                                    </div>
                                    <div className=" w-full flex justify-end">
                                        <div className=" bg-primary p-1 rounded-full animate-bounce flex justify-end ">
                                            <Plus size={30} className=" stroke-white"/> 
                                        </div>
                                    </div>
                                  
                                   
                                </div>
                                    
                        </div>
                            
                    </div>
                       
                ))
            }
        </div>
        </>
      )}

      {/* Loading, Error, and End of Data Message */}
      {loading && !initialLoading && <div className="flex justify-center my-6  text-gray-500 text-xl font-medium flex-col items-center">Chargement plus French Food...</div>}
      {error && <div className="flex justify-center mt-6 text-red-500">{error}</div>}
      {allLoaded && !loading && <div className="flex justify-center my-6 text-gray-500 text-lg font-medium animate-pulse flex-col items-center"><Sandwich size={30} /> <span>Tous les French Food ont été chargés.</span></div>}
    </div>
  );
}
