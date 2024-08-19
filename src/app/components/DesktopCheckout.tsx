"use client"
import React, { useEffect, useState } from 'react'
import StripeSection from './StripeSection'

interface DesktopCheckoutProps {
  name: string;
  price: number;
}

const DesktopCheckout: React.FC<DesktopCheckoutProps> = ({ name, price }) => {

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth(); // Set the initial width
    window.addEventListener('resize', updateWidth); // Update the width on resize

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);



  return (
    <React.Fragment>
      {
        width >= 768 && (
          <div className="w-full flex flex-col">
            <div className="no-scrollbar mt-2">
              <StripeSection name={name} price={price} />
            </div>
          </div>
        )
      }
    </React.Fragment>
  )
}

export default DesktopCheckout