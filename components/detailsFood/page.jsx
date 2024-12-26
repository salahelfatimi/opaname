'use client';
import Loading from '@/app/loading';
import React, { useEffect, useState } from 'react';
import { Check, Minus, Plus, X } from "lucide-react";

export default function DetailsFood({ id, onClose }) {
  const [foodDetails, setFoodDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceTotal, setPriceTotal] = useState();
  const [quantity, setQuantity] = useState(1);
  const [optionSelect, setOptionSelect] = useState([]);
 // fetch all food from restapi wordpresss
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
            setName(foodData.name);
            setDescription(foodData.description);
            setPriceTotal(parseInt(foodData.price));
          }
        }
      } catch (err) {
        console.error("Network error, please try again.", err);
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
  // select option foood
  const selectOption = (option, index) => {
    const match = option.match(/\+([\d,]+)/);
    const price = match ? parseInt(match[1]) : 0;
    const isSelected = optionSelect.some((selected) => selected.name === option);

    if (isSelected) {
      setOptionSelect((prevOptions) => prevOptions.filter((selected) => selected.name !== option));
      setPriceTotal(priceTotal - price);
    } else {
      setOptionSelect((prevOptions) => [...prevOptions, { id: index, name: option, price }]);
      setPriceTotal(priceTotal + price);
    }
  }
    // Save the food array back to localStorage
  const saveFoodToLocalStorage = () => {
    const foodData = { name, description, priceTotal, quantity, optionSelect };
    let savedFoods = JSON.parse(localStorage.getItem("SelectFood")) || [];
    savedFoods.push(foodData);
    localStorage.setItem("SelectFood", JSON.stringify(savedFoods));
    onClose();
  };

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
              <div>
                <h3 className="text-xl font-bold text-primary uppercase">Options :</h3>
                <div className=" max-h-32 lg:max-h-96 overflow-y-auto p-2 scrollbar-thin  scrollbar-thumb-primary scrollbar-track-secondary select-none ">
                  {optionSelect.map((option, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-primary py-2">
                      <span className=' font-bold'>{option.name}</span>
                      <div className=' bg-primary p-1 rounded-full cursor-pointer hover:rotate-180 duration-700'>
                        <X size={20}  onClick={() =>selectOption(option.name,index)}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <div className='flex select-none items-center gap-6 p-2 rounded-full w-fit text-2xl font-bold'>
              <Minus className='cursor-pointer stroke-white bg-primary rounded-full p-2' size={45} onClick={() => setQuantity(Math.max(1, quantity - 1))} />
              {quantity}
              <Plus className='cursor-pointer stroke-white bg-primary rounded-full p-2' size={45} onClick={() => setQuantity(quantity + 1)} />
            </div>
            <button onClick={saveFoodToLocalStorage}  className='bg-primary w-full py-3 rounded-full font-bold text-xl duration-700'>ajouter {priceTotal * quantity} DH </button>
          </div>
        </div>
        <div className='text-white flex lg:w-1/2 flex-col items-start gap-8 lg:overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary '>
          {foodDetails?.attributes.map((attr, index) => (
            <div key={index} className="flex flex-col gap-4 justify-between w-full">
              <div className='text-white lg:text-2xl w-full font-extrabold'><span className='text-primary'>{index+1} -</span> {attr.name}</div>
              <div className='flex flex-col gap-4 pl-8'>
              {attr.options.map((option, index) => (
                  <button onClick={() =>selectOption(option,index)}  key={index} className={`cursor-pointer border border-primary hover:bg-primary py-3 px-2 rounded duration-700 flex justify-between ${optionSelect.some((selected) => selected.name === option) ? 'bg-primary text-white' : '' }`}> 
                    {option} 
                    {optionSelect.some((selected) => selected.name === option) ? <Check className=''/> : <Plus /> }
                  </button>
              ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}