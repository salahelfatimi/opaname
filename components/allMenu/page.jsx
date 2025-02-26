"use client";
import Loading from "@/app/loading";
import CartFood from "@/components/cartFood/page";
import DetailsFood from "@/components/detailsFood/page";
import { Plus, Sandwich } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";



export default function AllMenu({ idSearch,category }) {
  const [food, setFood] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allLoaded, setAllLoaded] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [idClicked, setIdClicked] = useState(idSearch);
  const [timeOpen,setTimeOpen]=useState(false)
  const [idLocalStorge, setIdLocalStorge] = useState(null);
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

  const fetchFood = useCallback(async (page, isInitialFetch = false) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/restApiFood?page=${page}&perPage=10&category=${category}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const newFrenchFood = await response.json();
      if (isInitialFetch) {
        setFood(newFrenchFood);
        setInitialLoading(false);
      } else {
        setFood((prev) => [...prev, ...newFrenchFood]);
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
  }, [category]);

  useEffect(() => {
    setFood([]);
    setPage(1);
    setAllLoaded(false);
    setInitialLoading(true);
    fetchFood(1, true);
  }, [fetchFood,category]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || allLoaded || window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 100) return;
      fetchFood(page + 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, page, allLoaded, fetchFood]);

  const handleDetailsClose = () => {
    setIdClicked(null);
    setIdLocalStorge(null);
  };
  const updateFood = (foodId,id) => {
    setIdClicked(id);
    setIdLocalStorge(foodId);
  };

  return (
    <div>
      {initialLoading ? (
        <Loading />
      ) : (
        <>
          <div className={` ${timeOpen  ? "block " : "hidden"}`}>
            <CartFood id={idClicked} updateFood={updateFood} />
            {idClicked && timeOpen   && <DetailsFood idLocalStorge={idLocalStorge} id={idClicked} onClose={handleDetailsClose} />}
          </div>
          <div className="px-2 grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-4 select-none">
            {food.map((food, index) => (
                <div key={index} onClick={() => setIdClicked(food.id)} className="flex flex-col justify-between gap-2 border-4 border-primary min-h-44 rounded-xl p-4 group cursor-pointer">
                  <div className="flex flex-row gap-4 h-full w-full">
                    {food?.images[0] ? (
                      <Image
                        src={food?.images[0]?.src}
                        alt={food?.name}
                        title={food?.name}
                        className="max-h-36 max-w-36 h-full w-full object-cover object-bottom rounded-xl transform transition-transform duration-300 group-hover:scale-110"
                        width={500}
                        height={500}
                        quality={50}
                        priority
                      />
                    ) : (
                      <div className="hidden"></div>
                    )}
                    <div className="flex flex-col justify-between items-start h-full w-full ">
                      <div className=" ">
                        <h2 className="text-primary font-bold text-sm lg:text-xl uppercase">{food.name}</h2>
                        <h2 className=" uppercase text-white font-medium "><span className="text-primary font-bold ">Prix : </span>{food.price} DH</h2>
                        <div className="text-white font-medium text-sm capitalize group-hover:underline underline-offset-2" dangerouslySetInnerHTML={{ __html: food?.description }}></div>
                      </div>
                      <div className="w-full flex justify-end">
                        <div className="bg-primary p-1 rounded-full flex justify-end rotate-180 group-hover:rotate-0 duration-700">
                          <Plus size={25} className="stroke-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </>
      )}
      {loading && !initialLoading && <div className="flex justify-center my-6 text-gray-500 text-xl font-medium flex-col items-center">Chargement plus Food...</div>}
      {error && <div className="flex justify-center mt-6 text-red-500">{error}</div>}
      {allLoaded && !loading && <div className="flex justify-center my-6 text-gray-500 text-lg font-medium animate-pulse flex-col items-center"><Sandwich size={30} /> <span>Tous les Food ont été chargés.</span></div>}
    </div>
  );
}