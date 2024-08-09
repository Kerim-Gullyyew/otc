import Image from 'next/image'
import React from 'react'
import ContactForm from '../components/ContactForm'
import { CheckIcon } from '@heroicons/react/24/outline'
interface pageProps {

}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className="xl:h-[calc(100vh-70px)] w-full mx-auto flex flex-col justify-center items-center gap-10 py-10 container">
      <div className='flex items-center flex-col gap-10'>
        <div className=' bg-emerald-200 rounded-full flex items-center justify-center p-1'>
          <CheckIcon className='w-14 h-14 text-emerald-600' />
        </div>
        <h3 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className='space-y-7'> 
          <h3 className='text-center'>We have these courses too</h3>


          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
            <div className="">
              <Image
                className=" rounded-t-xl h-56 object-cover"
                width={1000}
                height={1000}
                src={"/course/download.jpg"}
                alt="download"
              />
              <div className="border space-y-1 px-3 py-1 rounded-b-xl">
                <h3>Course Name</h3>
                <div>
                  <h4>Tught: English</h4>
                  <h4>Duration: 9 months</h4>
                </div>
                <h4>$100/monthly</h4>
              </div>
            </div>
            <div className="">
              <Image
                className=" rounded-t-xl h-56 object-cover"
                width={1000}
                height={1000}
                src={"/course/download.jpg"}
                alt="download"
              />
              <div className="border space-y-1 px-3 py-1 rounded-b-xl">
                <h3>Course Name</h3>
                <div>
                  <h4>Tught: English</h4>
                  <h4>Duration: 9 months</h4>
                </div>
                <h4>$100/monthly</h4>
              </div>
            </div>
            <div className="">
              <Image
                className=" rounded-t-xl h-56 object-cover"
                width={1000}
                height={1000}
                src={"/course/download.jpg"}
                alt="download"
              />
              <div className="border space-y-1 px-3 py-1 rounded-b-xl">
                <h3>Course Name</h3>
                <div>
                  <h4>Tught: English</h4>
                  <h4>Duration: 9 months</h4>
                </div>
                <h4>$100/monthly</h4>
              </div>
            </div>
            <div className="">
              <Image
                className=" rounded-t-xl h-56 object-cover"
                width={1000}
                height={1000}
                src={"/course/download.jpg"}
                alt="download"
              />
              <div className="border space-y-1 px-3 py-1 rounded-b-xl">
                <h3>Course Name</h3>
                <div>
                  <h4>Tught: English</h4>
                  <h4>Duration: 9 months</h4>
                </div>
                <h4>$100/monthly</h4>
              </div>
            </div>

          </div>

        </div>
      </div>


    </div>
  )
}

export default page