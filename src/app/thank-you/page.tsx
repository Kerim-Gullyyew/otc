import Image from 'next/image'
import React from 'react'
import ContactForm from '../components/ContactForm'
import { CheckIcon } from '@heroicons/react/24/outline'
interface pageProps {

}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className="h-[calc(100vh-70px)] w-full mx-auto flex flex-col justify-center items-center gap-10 container">
      <div className=' bg-emerald-200 rounded-full flex items-center justify-center p-1'>
        <CheckIcon className='w-14 h-14 text-emerald-600' />
      </div>

      <h3 className='text-center'>{"Thank you for reaching out! We appreciate your message and will get back to you as soon as possible. Your feedback is valuable to us, and we're here to assist with any inquiries or concerns you may have."}</h3>
    </div>
  )
}

export default page