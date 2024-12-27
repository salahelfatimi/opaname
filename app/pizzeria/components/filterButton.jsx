'use client'

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function FilterButton() {
    const [selectFilter, setSelectFilter] = useState(16);
    const [categories, setCategories] = useState([]);
    const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });

    const router = useRouter();
    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`/api/restApiCategories?type=${25}`);  // Replace with your actual endpoint URL
                const data = await response.json();
                setCategories(data);  
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
        }, []);
        const handleFilterClick = (id) => {
            setSelectFilter(id);
            router.push(`?category=${id}`, undefined, { shallow: true });
        };
    return (
        <div className=" py-3 flex items-center justify-center ">
            <div className="overflow-hidden " ref={emblaRef}>
                <div className="flex flex-row gap-6 pl-6 active:cursor-grabbing cursor-grab select-none ">
                    
                    <button onClick={() => handleFilterClick(16)} className={` text-center  py-2 px-4 whitespace-nowrap font-bold text-sm  hover:bg-secondary rounded-full  duration-500 ${selectFilter === 16 ? ' text-white bg-secondary ' : 'bg-primary text-white'}`}>
                        Tous Produits
                    </button>
                    {categories.map(category => (
                        <button key={category.id}   onClick={() => handleFilterClick(category.id)} className={`text-center  py-2 px-4 whitespace-nowrap font-bold text-sm  hover:bg-secondary  rounded-full duration-500  ${selectFilter === category.id ? ' text-white bg-secondary ' : 'bg-primary text-white'}`}>
                            {category.name} 
                        </button>
                    ))}
                </div>
            </div>
        </div>
        
    );
}
