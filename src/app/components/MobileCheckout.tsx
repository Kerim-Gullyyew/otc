"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/outline"
import StripeSection from "./StripeSection";
interface MobileCheckoutProps {
  name: string;
  price: number;
}

const MobileCheckout: React.FC<MobileCheckoutProps> = ({ name, price }) => {


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



  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  const bottomSheetRef = useRef(null);
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenMobileNav(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }
  useOutsideAlerter(bottomSheetRef)
  return (
    <React.Fragment>
      {
        width < 768 && (
          <React.Fragment>
            <div className={`fixed bottom-0 md:hidden w-full z-50 ${openMobileNav && 'hidden'}`}>
              <button onClick={() => setOpenMobileNav(true)} className="bg-primary text-black font-semibold rounded-t-lg text-center w-full py-3">
                Enrol now
              </button>
            </div>

            <AnimatePresence initial={false}>
              {openMobileNav && (
                <>
                  <motion.div
                    animate={{ opacity: 1, zIndex: 3 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0, zIndex: -1 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    className="fixed h-full w-screen bg-white"
                  />
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { y: 0, height: '100%', opacity: '100%' },
                      collapsed: { y: '100%', height: 0, opacity: '0%' },
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.2, 0.13, 0.28] }}
                    className="border-gray-50 fixed bottom-0 right-0 pt-[60px] bg-white left-0 z-10 w-full rounded-t-xl border-2 border-b-0 px-3 overflow-y-auto"
                  >
                    <div className=" pt-6 w-full pb-10 no-scrollbar overflow-auto flex flex-col" ref={bottomSheetRef}>
                      <div onClick={() => setOpenMobileNav(false)} className="flex justify-end">
                        <XMarkIcon className="w-6 h-6 border rounded-full p-1 flex items-center justify-center border-black" />
                      </div>

                      <div className=" w-full h-full pt-5">
                        <StripeSection />

                      </div>

                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </React.Fragment>

        )
      }
    </React.Fragment>
  )
}

export default MobileCheckout