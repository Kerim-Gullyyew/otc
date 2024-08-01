import Image from 'next/image'
import React from 'react'
import ContactForm from '../components/ContactForm'
import { CheckIcon } from '@heroicons/react/24/outline'
interface pageProps {

}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className="h-[calc(100vh-70px)] w-full mx-auto flex flex-col justify-center items-center gap-10">
      <div className=' bg-emerald-200 rounded-full flex items-center justify-center p-1'>
        <CheckIcon className='w-14 h-14 text-emerald-600' />
      </div>

      <h3 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
    </div>
  )
}

export default page