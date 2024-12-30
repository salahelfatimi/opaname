'use client';
import Loading from '@/app/loading';
import React, { useEffect, useState } from 'react';
import { Check, Minus, Plus, X } from "lucide-react";

export default function DetailsFood({idLocalStorge, id, onClose }) {
  const [foodDetails, setFoodDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [foodId, setFoodId] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceTotal, setPriceTotal] = useState();
  const [quantity, setQuantity] = useState(1);
  const [optionSelect, setOptionSelect] = useState([]);
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
            setFoodId(foodData.id);
            setFoodDetails(foodData);
            setName(foodData.name);
            setDescription(foodData.description);
            setPriceTotal(parseInt(foodData.price));
          }
        } 
        if (idLocalStorge) {
          const storedFoods = JSON.parse(localStorage.getItem("SelectFood")) || [];
          const selectedFood = storedFoods.find(food => food.idPanier === idLocalStorge);

          if (selectedFood) {
            if (isMounted) {
              await setOptionSelect(selectedFood.optionSelect || []);
              await setQuantity(selectedFood.quantity || 1);
              await setPriceTotal(selectedFood.priceTotal || 0);
            }

           
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
    if(idLocalStorge){
      const storedFoods = JSON.parse(localStorage.getItem("SelectFood")) || [];
      const updatedFoods = storedFoods.filter(food => food.idPanier !== idLocalStorge);
      localStorage.setItem("SelectFood", JSON.stringify(updatedFoods));
    }
    const foodData = {idPanier: Date.now(),id:foodId,name, description, priceTotal, quantity, optionSelect };
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
      <div className='overflow-y-auto lg:overflow-y-hidden flex flex-col lg:flex-row-reverse justify-between gap-20 h-[100%]   w-[100%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-2'>
        <div className='text-white lg:w-1/2 flex flex-col gap-10 justify-between h-full'>
          <div className='flex flex-col lg:flex-row items-start gap-4'>
            {foodDetails?.images[0]?.src && <img src={foodDetails.images[0].src} alt={foodDetails.name} className='w-full lg:w-60 h-60 object-bottom object-cover mt-4 rounded-xl'/>}
            <div className='p-4 flex flex-col gap-1 w-full'>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-primary">{foodDetails.name}</h1>
              <h2 className='text-2xl font-extrabold text-white'>{foodDetails.price} MAD</h2>
              <p className="mt-2 text-sm md:text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: foodDetails?.description }}></p>
              <div>
                <h3 className="text-xl font-bold text-primary uppercase">Options :</h3>
                <div className="h-32 lg:h-64 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary select-none">
                  {optionSelect.length > 0 ? (
                    optionSelect.map((option, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-primary py-2">
                        <span className="font-bold">{option.name}</span>
                        <div className="bg-primary p-1 rounded-full cursor-pointer hover:rotate-180 duration-700">
                          <X size={20} onClick={() => selectOption(option.name, index)} />
                        </div>
                      </div>
                    ))
                  ) : (
                    <span className="text-white">Pas d'options sélectionnées</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <div className='flex select-none items-center gap-6 p-2 rounded-full w-fit text-2xl font-bold'>
              <Minus className='cursor-pointer stroke-white bg-primary  hover:bg-secondary border-2 border-primary hover:stroke-primary duration-700 rounded-full p-2' size={45} onClick={() => setQuantity(Math.max(1, quantity - 1))} />
              {quantity}
              <Plus className='cursor-pointer stroke-white bg-primary  hover:bg-secondary border-2 border-primary hover:stroke-primary duration-700 rounded-full p-2' size={45} onClick={() => setQuantity(quantity + 1)} />
            </div>
              <button disabled={optionSelect.length < 3 && foodDetails?.attributes.length > 0} onClick={saveFoodToLocalStorage} className={`bg-primary w-full py-3 rounded-full font-bold text-xl duration-700 border-2 border-primary  ${optionSelect.length < 3  && foodDetails?.attributes.length>0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary  hover:text-primary '}`} > {optionSelect.length < 3  && foodDetails?.attributes.length > 0 ? "Il faut sélectionner 3 options ou plus" : `Ajouter ${priceTotal * quantity} DH`} </button>
            </div>
        </div>
        <div className='text-white flex lg:w-1/2 flex-col items-start gap-8 lg:overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary '>
          {foodDetails?.attributes.map((attr, index) => (
            <div key={index} className="flex flex-col gap-4 justify-between w-full">
              <div className='text-white lg:text-2xl w-full font-extrabold'><span className='text-primary'>{index+1} -</span> {attr.name}</div>
              <div>{attr.id === 1 || attr.id === 3 ? <span className=' text-sm'>Choisissez entre une et trois options  <span className=' bg-primary px-2 py-1 rounded-full text-xs'>requises</span></span> : ''}</div>
              <div className='flex flex-col gap-4 pl-8'>
              {attr.options.map((option, index) => (
                  <button  onClick={() =>selectOption(option,index)}  key={index} className={` border border-primary hover:bg-primary py-3 px-2 rounded duration-700 flex justify-between ${optionSelect.some((selected) => selected.name === option) ? 'bg-primary text-white' : '' }`}> 
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