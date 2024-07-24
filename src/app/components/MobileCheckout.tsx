"use client"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { XMarkIcon } from "@heroicons/react/24/outline"
interface MobileCheckoutProps {

}

const MobileCheckout: React.FC<MobileCheckoutProps> = ({ }) => {
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

      <div className={`fixed bottom-0 sm:hidden w-full z-50 ${openMobileNav && 'hidden'}`}>
        <button onClick={() => setOpenMobileNav(true)} className="bg-blue rounded-lg text-center w-full py-3">
          Enroll this course
        </button>
      </div>
      <motion.div
        animate={
          openMobileNav ? { opacity: 0.6, zIndex: 3 } : { opacity: 0, display: 'none' }
        }
        initial={{ opacity: 0 }}
        className="fixed top-0 bottom-0 right-0 left-0 h-full w-screen bg-white shadow-lg" />
      <AnimatePresence initial={false}>
        {openMobileNav && (
          <motion.div key='content'
            initial='collapsed'
            animate="open"
            exit="collapsed"
            variants={{
              open: { y: 0, height: 'auto' },
              collapsed: { y: '100%', height: 0 },

            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className=" border-gray-50 fixed bottom-0 right-0 left-0 z-10 w-full rounded-t-xl border-2 border-b-0 bg-white shadow-[0px_-8px_20px_-6px_rgba(0,0,0,0.3)]"
          >
            <div className="py-4 px-3 h-screen overflow-auto" ref={bottomSheetRef}>
              <div onClick={() => setOpenMobileNav(false)} className="flex justify-end">
                <XMarkIcon className="w-10 h-10" />
              </div>
              <div className="space-y-6">
                <div className=" border-b border-gray-300 pb-2">
                  <h3>Course Name</h3>
                </div>

                <div className="space-y-3">
                  <h3>Select your payment option</h3>
                  <button className="w-full border bg-gray-50 border-blue px-4 py-2 rounded-xl">
                    <div className="flex justify-between">
                      <div>
                        <p>Billed One Off</p>
                        <div className="flex items-center gap-2">
                          <p>$200</p>
                          <p className="text-green">$150</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-green">Save 20%</p>
                      </div>
                    </div>
                  </button>
                  <button className="w-full border bg-gray-50 border-gray-300 px-4 py-2 rounded-xl">
                    <div className="flex justify-between">
                      <div>
                        <p>Billed One Off</p>
                        <div className="flex items-center gap-2">
                          <p>$200</p>
                          <p className="text-green">$150</p>
                        </div>
                      </div>
                      <div>
                        {/* <p className="text-green">Save 20%</p> */}
                      </div>
                    </div>
                  </button>
                </div>

                <div className="space-y-3">
                  <h3>Enter Account Detail</h3>
                  <input className="w-full border bg-gray-50 border-gray-300 px-4 py-3 outline-none rounded-xl" placeholder="First Name" />
                  <input className="w-full border bg-gray-50 border-gray-300 px-4 py-3 outline-none rounded-xl" placeholder="Last Name" />
                  <input className="w-full border bg-gray-50 border-gray-300 px-4 py-3 outline-none rounded-xl" placeholder="Email Address" />
                  <input className="w-full border bg-gray-50 border-gray-300 px-4 py-3 outline-none rounded-xl" placeholder="Phone number" />
                </div>


                <div>
                  <button className="w-full border bg-gray-50 border-gray-300 px-4 py-3 outline-none rounded-xl">
                    Place order
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileCheckout