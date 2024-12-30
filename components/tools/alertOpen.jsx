'use client';
import { Store } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const AlertOpen = () => {
  const [timeOpen, setTimeOpen] = useState(false);
  const [timeToOpen, setTimeToOpen] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const currentDate = new Date();
      const getHours = new Date().getHours();
      const openingHour = 12;  // Store opens at 12:00 PM
      const closingHour = 5;  // Store closes at 5:00 AM

      // If the store is closed
      if (getHours >= closingHour && getHours < openingHour) {
        const openingTime = new Date(currentDate);
        openingTime.setHours(openingHour, 0, 0, 0); 
        if (currentDate >= openingTime) openingTime.setDate(openingTime.getDate() + 1); 

        const timeDifference = openingTime - currentDate;
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60); 

        setTimeToOpen(`${hours}h ${minutes}m ${seconds}s`);
        setTimeOpen(false);
      } else {
        setTimeOpen(true);
      }
    };

    updateCountdown(); // Run immediately
    const interval = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="  flex items-center justify-center">
      {!timeOpen &&<div className=' bg-primary p-4 text-white rounded-full flex gap-2 items-center justify-center text-sm '><Store /> <p className=' font-medium'>Fermé actuellement, réouverture à <span className=' font-bold bg-secondary rounded-full p-2 animate-pulse'>{timeToOpen} . </span></p></div>}
    </div>
  );
};

export default AlertOpen;
