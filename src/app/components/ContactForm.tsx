'use client'
import React, { useState } from 'react'
import PhoneNumber from './PhoneNumber';

import * as Yup from 'yup';
import axios from 'axios'
import { useRouter } from 'next/navigation';
interface TabSectionProps {

}

export interface CountryData {
  label: string;
  value: string
}
interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  country?: string;
  message?: string;
}

const ContactForm: React.FC<TabSectionProps> = ({ }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('44');
  const [message, setMessage] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false);

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    country: Yup.string().required('Country is required'),
    message: Yup.string().required('Your message is required'),
  });

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await validationSchema.validate({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      }, { abortEarly: false });
      try {
        const response = await axios.post('https://api.main.iwsonlineschool.co.uk/iws-contact2', {
          firstName,
          lastName,
          email,
          phone_number: phoneNumber,
          message
        });
        router.push('/thank-you');
      } catch (error) {
        console.error('Payment Error:', error);
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = err.inner.reduce((acc, error) => {
          if (typeof error.path === 'string') {
            return {
              ...acc,
              [error.path]: error.message
            };
          }
          return acc;
        }, {});
        setValidationErrors(errors);
      }
    }
    setLoading(false);
  };


  return (

    <>
      <div className="mt-1 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6 h-full">
        <div className="sm:col-span-3">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-4"
            >
              First Name
            </label>
            <div className="mt-4">
              <input
                value={firstName}
                onChange={handleFirstName}
                type="text"
                name="first-name"
                id="first-name"
                placeholder='First Name *'
                autoComplete="given-name"
                className="block w-full rounded-md py-2 px-3 border border-gray-2 bg-[#F6F5FF] sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>
          {
            validationErrors.firstName && (
              <p className='text-red-600 text-sm italic'>{validationErrors.firstName}</p>
            )
          }
        </div>
        <div className="sm:col-span-3">

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-4"
            >
              Last Name
            </label>
            <div className="mt-4">
              <input
                value={lastName}
                onChange={handleLastName}
                type="text"
                name="last-name"
                id="last-name"
                placeholder='Last Name *'
                autoComplete="family-name"
                className="block w-full rounded-md py-2 px-3 border border-gray-2 bg-[#F6F5FF] sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>
          {
            validationErrors.lastName && (
              <p className='text-red-600 text-sm italic'>{validationErrors.lastName}</p>
            )
          }
        </div>

        <div className="col-span-full">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-4"
            >
              Email
            </label>
            <div className="mt-4">
              <input
                value={email}
                onChange={handleEmail}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder='Email'
                className="block w-full rounded-md py-2 px-3 border border-gray-2 bg-[#F6F5FF] sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>

          {
            validationErrors.email && (
              <p className='text-red-600 text-sm italic'>{validationErrors.email}</p>
            )
          }
        </div>

        <div className="col-span-full">
          <div>
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-4"
            >
              Phone Number
            </label>
            <div className="mt-4">
              <PhoneNumber value={phoneNumber} onChange={setPhoneNumber} />
            </div>
          </div>
          {
            validationErrors.phoneNumber && (
              <p className='text-red-600 text-sm italic'>{validationErrors.phoneNumber}</p>
            )
          }
        </div>
        <div className="col-span-full">
          <div className="mt-1">
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-4"
              >
                Message
              </label>
              <div className="mt-4">
                <textarea
                  value={message}
                  onChange={handleMessage}
                  id="message"
                  name="message"
                  rows={6}
                  placeholder='Write your message here...'
                  className="block w-full rounded-md py-2 px-3 border border-gray-2 bg-[#F6F5FF] sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            {
              validationErrors.message && (
                <p className='text-red-600 text-sm italic'>{validationErrors.message}</p>
              )
            }
          </div>
        </div>

      </div>
      <div className="mt-1 flex items-center justify-center md:justify-end gap-x-6">
        {
          loading ? (
            <button
              type="submit"
              // className="rounded-md flex flex-3 font-[26px] items-center justify-center bg-indigo-600 px-3 py-4 text-2xl  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              className='bg-[#4366F6] w-full rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300  text-lg'
            >
              Loading
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              // className="rounded-md flex flex-3 font-[26px] items-center justify-center bg-indigo-600 px-3 py-4 text-2xl  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              className='bg-[#4366F6] w-full rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300  text-lg'
            >
              Send a Message
            </button>
          )
        }

      </div>

    </>

  )
}

export default ContactForm