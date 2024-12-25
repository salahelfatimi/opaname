'use client';
import Loading from '@/app/loading';
import React, { useEffect, useState } from 'react';
import { Minus, Plus, X } from "lucide-react";

export default function DetailsFood({ id, onClose }) {
  const [foodDetails, setFoodDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let isMounted = true;
    const fetchFood = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const response = await fetch(`/api/findFoodRestApi?id=${id}`, { cache: 'no-store' });
          if (!response.ok) throw new Error("Failed to fetch data");
          const foodData = await response.json();
          if (isMounted) {
            setFoodDetails(foodData);
            setError(null);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("Network error, please try again.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    fetchFood();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div className="flex justify-center mt-6 text-red-500">{error}</div>;
  }
  return (
   
    <div className='bg-secondary fixed inset-0 flex justify-center items-center pt-36 z-50'>
      <button onClick={onClose} className="fixed z-50 top-4 right-4 bg-primary p-2 rounded-full shadow-lg">
        <X size={35} className='stroke-white'/>
      </button>
      <div className='overflow-y-auto lg:overflow-y-hidden flex flex-col lg:flex-row-reverse justify-between gap-6 h-[100%] lg:h-[90%] lg:w-[80%] w-[100%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-6'>
        <div className='text-white lg:w-1/2 flex flex-col gap-10 justify-between h-full'>
          <div className='flex flex-col lg:flex-row items-start gap-4'>
            {foodDetails?.images[0]?.src && <img src={foodDetails.images[0].src} alt={foodDetails.name} className='w-full lg:w-60 h-60 object-bottom object-cover mt-4 rounded-xl'/>}
            <div className='p-4 flex flex-col gap-1 w-full'>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-primary">{foodDetails.name}</h1>
              <h2 className='text-2xl font-extrabold text-white'>{foodDetails.price} MAD</h2>
              <p className="mt-2 text-sm md:text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: foodDetails?.description }}></p>
            </div>
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <div className='flex select-none items-center gap-6 p-2 rounded-full w-fit text-2xl font-bold'>
              <Minus className='cursor-pointer stroke-white bg-primary rounded-full p-2' size={45} onClick={() => setQuantity(Math.max(1, quantity - 1))} />
              {quantity}
              <Plus className='cursor-pointer stroke-white bg-primary rounded-full p-2' size={45} onClick={() => setQuantity(quantity + 1)} />
            </div>
            <button className='bg-primary w-full py-3 rounded-full font-bold text-xl'>ajouter</button>
          </div>
        </div>
        <div className='text-white flex lg:w-1/2 flex-col items-start gap-8 lg:overflow-y-auto p-4'>
          {foodDetails?.attributes.map((attr, index) => (
            <div key={index} className="flex flex-col gap-4 justify-between w-full">
              <div className='text-white lg:text-2xl w-full font-extrabold'><span className='text-primary'>{index+1} -</span> {attr.name}</div>
              <div className='flex flex-col gap-4 pl-8'>
                {attr.options.map((option, index) => (
                  <span key={index} className='cursor-pointer border border-primary hover:bg-primary py-3 px-2 rounded duration-700 flex justify-between'>{option} <Plus/></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}