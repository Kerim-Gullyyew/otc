"use client"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/outline"
interface MobileCheckoutProps {
  name: string;
  price: number;
}

const MobileCheckout: React.FC<MobileCheckoutProps> = ({ name, price }) => {
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
    <>

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
              <div className=" pt-6 pb-10 px-3 no-scrollbar overflow-auto flex flex-col" ref={bottomSheetRef}>
                <div onClick={() => setOpenMobileNav(false)} className="flex justify-end">
                  <XMarkIcon className="w-6 h-6 border rounded-full p-1 flex items-center justify-center border-black" />
                </div>

                <div className="flex justify-end">
                  <div className="no-scrollbar pb-8 pt-2 flex flex-col">
                    <div className="space-y-4">
                      <div className="pb-2 border-b border-border">
                        <p className="font-semibold">{name}</p>
                      </div>
                      <div className="space-y-4">
                        <p className="font-medium text-[1.1em]">Enter Account Detail</p>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm leading-4"
                          >
                            First Name
                          </label>
                          <div className="mt-2">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="block w-full rounded-md py-2 px-3 border border-gray-2 bg-[#F6F5FF] sm:text-sm sm:leading-6 outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm leading-4"
                          >
                            Last Name
                          </label>
                          <div className="mt-2">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="block w-full rounded-md py-2 px-3 border border-gray-2 bg-[#F6F5FF] sm:text-sm sm:leading-6 outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm  leading-4"
                          >
                            Email
                          </label>
                          <div className="mt-2">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="block w-full rounded-md py-2 px-3 border border-gray-2 bg-[#F6F5FF] sm:text-sm sm:leading-6 outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm  leading-4"
                          >
                            Phone Number
                          </label>
                          <div className="mt-2">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="block w-full rounded-md py-2 border border-gray-200 px-3 bg-[#F6F5FF] sm:text-sm sm:leading-6 outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-full h-[0.5px] bg-gray-300">
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h2 className="font-semibold">Total</h2>
                          <h2 className="font-semibold">${price}/month</h2>
                        </div>
                        <div className="flex items-start gap-1">
                          <LockClosedIcon className="w-4 h-4 text-gray-400 min-w-4 min-h-4" />
                          <h5 className=" leading-tight text-gray-400">
                            Guaranteed to be safe & secure, ensuring that all transactions are protected with the highest level of security
                          </h5>
                        </div>
                        <button className="w-full bg-primary text-black px-4 py-2 outline-none rounded-md font-semibold">
                          Enrol now
                        </button>
                        <p className="text-center text-xs leading-tight">By submitting the form, you agree to our Terms of service and Privacy Policy</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileCheckout