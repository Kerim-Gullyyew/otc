import MobileCheckout from '@/app/components/MobileCheckout';
import { getCourse } from '@/app/components/utils/getCourse';
import { AcademicCapIcon, ClockIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import React from 'react'
import Image from 'next/image';
import Accordion from '@/app/components/ui/Accordion';
import Link from 'next/link';
import Card from '@/app/components/ui/Card';

interface CourseProps {
  id: string;
  name: string;
  description: string;
  mini_description: string;
  image: string;
  price: number;
  discount: number | null;
  sessions_weekly: string;
  duration: string;
  popular_course: boolean;
  slug: string;
  what_learn: null | string;
  secondary_category: string;
  syllabus:
  {
    id: number;
    name: string;
    description: string;
  }[] | [];
  related_courses: {
    related_courses_id: {
      id: string;
      name: string;
      image: string;
      price: number;
      duration: string;
      slug: string;
    }
  }[] | [];
  available_languages: {
    languages_id: {
      id: string;
      name: string;
      icon: string | null;
    }
  }[] | [];
}


export default async function Page({ params: { slug } }: {
  params: { slug: string }
}) {
  const course: CourseProps | { error: string } = await getCourse(slug)

  if ('error' in course) {
    return (
      <div>
        Not Found
      </div>
    )
  }
  return (

    <>
      <div className=" container">
        <div className="md:flex md:gap-6">
          <div className="md:flex flex-col md:w-[70%] lg:w-[75%]">

            <div className="mt-2">
              <Image
                className="max-h-[400px] object-cover w-full rounded-t-2xl"
                width={1000}
                height={1000}
                alt="download"
                src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}assets/${course.image}`}
              />
            </div>
            <div className="mt-5 space-y-6">
              <div className="space-y-3">
                <h1 className="font-bold">{course.name}</h1>
                <div className="">
                  <h2 className="font-medium">Description</h2>
                  <p>
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <h2 className="font-medium">Course Detail</h2>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="bg-[#FFF6E9] rounded-2xl px-5 py-2 space-y-1">
                    <h3 className="font-semibold text-gray-700">Duration</h3>
                    <div className="flex items-center gap-3">
                      <div>
                        <ClockIcon className="w-5 h-5 text-gray-700" />
                      </div>
                      <p className="font-semibold text-gray-700">{course.duration + " " + 'months'}</p>
                    </div>
                  </div>
                  <div className="bg-[#FFF6E9] rounded-2xl px-5 py-2 space-y-1">
                    <h3 className="font-semibold text-gray-700">Weekly sessions</h3>
                    <div className="flex items-center gap-3">
                      <div>
                        <AcademicCapIcon className="w-5 h-5 text-gray-700" />
                      </div>
                      <p className="font-semibold text-gray-700">{course.sessions_weekly}</p>
                    </div>
                  </div>
                  <div className="bg-[#FFF6E9] rounded-2xl px-5 py-2 space-y-1">
                    <h3 className="font-semibold text-gray-700">Lessons</h3>
                    <div className="flex items-center gap-3">
                      <div>
                        <AcademicCapIcon className="w-5 h-5 text-gray-700" />
                      </div>
                      <p className="font-semibold text-gray-700">144</p>
                    </div>
                  </div>
                  <div className="bg-[#FFF6E9] rounded-2xl px-5 py-2 space-y-1">
                    <h3 className="font-semibold text-gray-700">Lessons</h3>
                    <div className="flex items-center gap-3">
                      <div>
                        <AcademicCapIcon className="w-5 h-5 text-gray-700" />
                      </div>
                      <p className="font-semibold text-gray-700">144</p>
                    </div>
                  </div>
                </div>
              </div>
              {
                course.available_languages && (
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h2 className="font-medium">Available Languages</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                      {
                        course.available_languages.map((lang) => (
                          <div key={lang.languages_id.id} className="bg-[#FFF6E9] rounded-2xl px-5 py-2 space-y-1">
                            <h3 className="text-gray-700 font-[500]">{lang.languages_id.name}</h3>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )
              }

              {
                course.syllabus && course.syllabus.length > 0 && (
                  <div className="space-y-3">
                    <h2 className="font-medium">Syllabus</h2>
                    <div className="space-y-2">
                      {
                        course.syllabus.map((syllabus) => (
                          <Accordion key={syllabus.id} syllabus={syllabus} />
                        ))
                      }

                    </div>
                  </div>
                )
              }

              {
                course.what_learn && (
                  <div>
                    <h2 className="font-medium">What you will learn</h2>
                    <div className='pl-5 custom-ul-li' dangerouslySetInnerHTML={{ __html: course.what_learn }}></div>
                  </div>

                )
              }

              {
                course.related_courses && course.related_courses.length > 0 && (
                  <div className='space-y-1'>
                    <h2 className="font-medium">Related courses</h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                      {
                        course.related_courses.map((related) => (
                          <Card key={related.related_courses_id.id} course={related.related_courses_id} />
                        ))
                      }
                    </div>
                  </div>
                )
              }
            </div>


          </div>
          <div className="hidden md:flex md:w-[30%] lg:w-[25%] justify-end">
            <div className="border-l border-[#DEDEDE] no-scrollbar pl-6 pt-6 pb-8 flex flex-col">
              <div className="space-y-6">
                <div className=" border-b border-gray-300 pb-2">
                  <p className="font-semibold">{course.name}</p>
                </div>
                <div className="space-y-4">
                  <p className="font-medium">Enter Account Detail</p>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-4"
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
                      className="block text-sm font-medium leading-4"
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
                      className="block text-sm font-medium leading-4"
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
                      className="block text-sm font-medium leading-4"
                    >
                      Email
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
                    <h2 className="font-semibold">${course.price}/month</h2>
                  </div>
                  <div className="flex items-start gap-2 justify-between">
                    <LockClosedIcon className="w-4 h-4 text-gray-400 shrink-0 min-w-4 min-h-4 mt-1" />
                    <h5 className=" leading-tight text-gray-400 text-xs">
                      Guaranteed to be safe & secure, ensuring that all transactions are protected with the highest level of security
                    </h5>
                  </div>
                  <button className="w-full bg-primary text-black px-4 py-2 outline-none rounded-md font-semibold">
                    Enrol now
                  </button>
                  <p className="text-center leading-tight text-xs">By submitting the form, you agree to our Terms of service and Privacy Policy</p>
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