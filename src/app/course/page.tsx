import React from 'react'
import { HomeIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import MobileCheckout from '../components/MobileCheckout'

interface pageProps {

}

const pages = [
  { name: 'Secondary', href: '#', current: false },
  { name: 'Course Name', href: '#', current: true },
]

const page: React.FC<pageProps> = ({ }) => {
  return (
    <>
      <div className='relative px-6 lg:px-8 pb-20'>


        <div className='md:grid md:gap-6 lg:gap-8 md:grid-cols-3 '>
          <div className='md:col-span-2 '>
            <nav className="flex mt-5" aria-label="Breadcrumb">
              <ol role="list" className="flex space-x-2 rounded-md bg-gray-100 px-6 shadow-sm">
                <li className="flex">
                  <div className="flex items-center">
                    <a
                      href={'#'}
                      className=" text-sm font-medium text-gray-500 hover:text-gray-700"
                      aria-current={'page'}
                    >
                      Main
                    </a>
                  </div>
                </li>
                {pages.map((page) => (
                  <li key={page.name} className="flex">
                    <div className="flex items-center">
                      <svg
                        className="h-full w-4 flex-shrink-0 text-gray-200"
                        viewBox="0 0 24 44"
                        preserveAspectRatio="none"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                      </svg>
                      <a
                        href={page.href}
                        className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                        aria-current={page.current ? 'page' : undefined}
                      >
                        {page.name}
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
            <div className='mt-5'>
              <Image className='max-h-64 object-cover w-full' width={1000} height={1000} alt='download' src={'/course/download.jpg'} />
            </div>
            <div className='mt-5 px-5 space-y-5'>
              <div className=''>
                <h1>Course Name</h1>
                <p>Duration: 9 months</p>
                <p>Weekly sessions: 2</p>
              </div>

              <div className=''>
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae modi cum, expedita magni velit molestias sed! Voluptates, ducimus! Quia nesciunt, debitis quaerat quis molestiae voluptate assumenda ducimus hic error architecto?</p>
              </div>

              <div>
                <h3>Syllabus</h3>
                <ul className=' list-disc ml-6'>
                  <li className='text-sm'>Lorem ipsum dolor </li>
                  <li className='text-sm'>Lorem ipsum dolor </li>
                  <li className='text-sm'>Lorem ipsum dolor </li>
                  <li className='text-sm'>Lorem ipsum dolor </li>
                </ul>
              </div>

              <div>
                <h3>What you will learn</h3>
                <ul className=' list-disc ml-6'>
                  <li className='text-sm'>Lorem ipsum dolor </li>
                  <li className='text-sm'>Lorem ipsum dolor </li>
                  <li className='text-sm'>Lorem ipsum dolor </li>
                  <li className='text-sm'>Lorem ipsum dolor </li>
                </ul>
              </div>

              <div>
                <h3>Related courses</h3>
                <div className='grid grid-cols-2'>
                  <div>
                    <Image className=' rounded-t-xl' width={1000} height={1000} src={"/course/download.jpg"} alt='download' />
                    <div></div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className='hidden relative md:flex md:col-span-1'>
            <div className='border-l border-gray-400 overflow-auto no-scrollbar fixed w-auto h-[calc(100vh-90px)] px-6 pb-3 lg:px-8'>
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
          </div>
        </div>



      </div>
      <MobileCheckout />


    </>
  )
}

export default page