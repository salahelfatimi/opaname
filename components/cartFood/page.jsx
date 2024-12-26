"use client"

import { Send, ShoppingBag, ShoppingBasket, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function CartFood({id}) {
    // State to hold the saved foods
    const [savedFoods, setSavedFoods] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Check for localStorage data and update the state
    useEffect(() => {
        const storedFoods = JSON.parse(localStorage.getItem("SelectFood")) || [];
        setSavedFoods(storedFoods);
    }, [id]);

    // Calculate the total price
    const totalPrice = savedFoods.reduce((acc, food) => acc + (food.priceTotal * food.quantity), 0);

    // Toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    // delete food from local storage
    const removeFoodFromLocalStorage = (idToRemove) => {
        let savedFoods = JSON.parse(localStorage.getItem("SelectFood")) || [];
        savedFoods = savedFoods.filter((food) => food.id !== idToRemove);
        localStorage.setItem("SelectFood", JSON.stringify(savedFoods));
        setSavedFoods(savedFoods); // Update state to reflect the removal
    };
    // Function to strip HTML tags from a string
    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };
    // Create WhatsApp message
    const createWhatsAppMessage = () => {
        let message = `*Résumé de votre commande :*\n\n`;
    
        savedFoods.forEach((food) => {
            message += `*Nom :* ${food.name}\n`;
            // Strip HTML tags from description
            const descriptionText = stripHtmlTags(food.description);
            message += `*Description :* ${descriptionText}`;
            message += `*Prix :* ${food.priceTotal} DH\n`;
            message += `*Quantité :* ${food.quantity}\n`;
            if (food.optionSelect && food.optionSelect.length > 0) {
                message += `*Options :* ${food.optionSelect.map(option => option.name).join(', ')}\n`;
            }
    
            // Add a separator line after each item
            message += `------------------------\n`;
        });
    
        // Add the total price and the thank you message at the end
        message += `*Total :* ${totalPrice} DH\n\n`;
        message += `Merci pour votre commande !`;
    
        // URL encode the message
        return encodeURIComponent(message);
    };

    // WhatsApp link
    const sendToWhatsApp = () => {
        const message = createWhatsAppMessage();
        const phoneNumber = '+212602314804'; // Replace with your phone number
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
         // Remove food items from localStorage after sending the message
        localStorage.removeItem("SelectFood");
        // Update the savedFoods state to reflect the changes (empty the cart)
        setSavedFoods([]);
        toggleModal()
        window.open(url, '_blank');
    };

    return (
        <div>
        <div onClick={toggleModal} className="fixed bottom-4 right-10 left-10 text-sm lg:text-2xl bg-primary p-4 shadow-lg z-40 flex flex-row justify-center text-white font-bold gap-1 items-center rounded-xl cursor-pointer">
            <h2>Résumé de commande</h2>
            <p>{savedFoods.length} articles - {totalPrice} DH</p>
        </div>
        {isModalOpen && (
            <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 z-50">
                <div className="bg-secondary p-4  w-11/12 md:w-1/2 max-h-[50%] overflow-y-auto relative scrollbar-thin  scrollbar-thumb-primary scrollbar-track-secondary select-none ">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Détails de la commande</h2>
                    <button onClick={toggleModal} className=" fixed top-4 right-4 bg-primary text-white p-2 rounded-full  w-fit"><X/></button>
                    <div>
                        {
                            savedFoods.length === 0 && (
                                <div className="text-white text-center text-xl font-bold flex gap-2 justify-center items-center">
                                    <ShoppingBasket size={30} className=" animate-bounce" />
                                    <p>Votre panier est vide.</p>
                                </div>
                            )
                        }
                        {savedFoods.map((food, index) => (
                            <div key={index} className="mb-4 p-4 border-2 border-primary rounded-xl text-white flex flex-col gap-3">
                                <h3 className="font-bold text-2xl">{food.name}</h3>
                                <p dangerouslySetInnerHTML={{ __html: food?.description }}></p>
                                <p><span className=" text-primary font-bold">Prix : </span>{food.priceTotal} DH</p>
                                <p><span className=" text-primary font-bold">Quantité :</span> {food.quantity}</p>
                                <div>
                                <span className=" text-primary font-bold">Options : </span>
                                    {food.optionSelect && food.optionSelect.map((option, idx) => (
                                    <span className=" text-sm" key={idx}> {option.name} ,</span>
                                    ))}
                                </div>
                                <button onClick={() => removeFoodFromLocalStorage(food.id)} className="bg-red-500 w-full  text-white p-2 rounded">
                                    Supprimer
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {savedFoods.length > 0 ? (
                    <>
                    <button onClick={sendToWhatsApp} className="w-11/12 flex gap-1 items-center justify-center md:w-1/2 py-4 font-bold text-sm lg:text-lg bg-green-800 text-white p-2">
                        <Send size={30} />Envoyer Sur WhatsApp
                    </button>
                    <button onClick={toggleModal} className="w-11/12 flex gap-1 items-center justify-center md:w-1/2 py-4 font-bold text-sm lg:text-lg bg-primary text-white p-2">
                        <ShoppingBag size={30} /> Ajouter plus de produits 
                    </button>
                    </>
                    
                    
                    ):
                    <button onClick={toggleModal} className="w-11/12 flex gap-1 items-center justify-center md:w-1/2 py-4 font-bold text-sm lg:text-lg bg-primary text-white p-2">
                         <ShoppingBag size={30}  /> Ajoutez des produits à votre panier !
                    </button>
                }
            </div>
        )}
        </div>
  );
}