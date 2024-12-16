'use client';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Link from 'next/link';

export default function FoodCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false, speed: 0.6 }),
  ]);

  const images = [
    { title: 'ARMER', image: 'frenchFood.png',price:76 },
    { title: 'Tuna', image: 'pizzeria.png' ,price:100 },
    { title: 'MERGUEZ', image: 'frenchFood.png',price:60  },
    { title: 'Orientale', image: 'pizzeria.png',price:69  },
    { title: 'TIKKA', image: 'frenchFood.png' ,price:50 },
    { title: 'Margherita', image: 'pizzeria.png' ,price:40 },
    { title: 'MERGUEZ', image: 'frenchFood.png' ,price:99 },
    { title: 'Orientale', image: 'pizzeria.png' ,price:80 },
    { title: 'TIKKA', image: 'frenchFood.png' ,price:83 },
    { title: 'Margherita', image: 'pizzeria.png' ,price:88 },
  ];

  return (
    <div className="  w-full ">
      <div className="py-10 overflow-hidden" ref={emblaRef}>
        {/* Embla requires direct children to be the slides */}
        <div className="flex flex-row flex-nowrap gap-6 ">
          {images.map((ele, index) => (
            <Link href={'/'} key={index} className="pl-10 relative flex flex-row items-center justify-center gap-4 flex-shrink-0 group ">
                <div className=' relative'>
                  <img src={`/homePage/${ele.image}`} alt={ele.title} className="max-w-48 rounded-lg group-hover:scale-105 duration-700"/>
                  <div className=' absolute right-0 bottom-6 bg-primary border-4 border-secondary w-14 h-14 flex items-center justify-center rounded-full '>
                      <p className='font-bold text-xs text-white'>{ele.price} DH</p>
                  </div>
                </div>
                <div>
                  <h2 className="mt-4 font-bold text-2xl text-primary z-10 ">
                    {ele.title}
                  </h2>
                  <p className='w-64 text-white font-medium'>Base tomate, mozzarella, merguez en BBQ,poivrons, oignons, œuf.</p>
                </div>
                   
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
