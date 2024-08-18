import MobileCheckout from '@/app/components/MobileCheckout';
import { getCourse } from '@/app/components/utils/getCourse';
import { AcademicCapIcon, ClockIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import React, { Suspense } from 'react'
import Image from 'next/image';
import Accordion from '@/app/components/ui/Accordion';
import Link from 'next/link';
import Card from '@/app/components/ui/Card';
import { Metadata, ResolvingMetadata } from 'next';
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import StripeSection from '@/app/components/StripeSection';
import Loading from './loading';

interface pageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

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

export async function generateMetadata(
  { params, searchParams }: pageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const course: CourseProps | { error: string } = await getCourse(params.slug)

  if ('error' in course) {
    return {
      title: "Not Found",
    }
  } else {
    return {
      title: course.name + " | Online Tutoring Course",
      description: course.description !== null ? course.description : "Something description",
      abstract: course.description !== null ? course.description : "Something description",
    }
  }

}

export default async function Page({ params, searchParams }: pageProps) {
  const course: CourseProps | { error: string } = await getCourse(params.slug)

  if ('error' in course) {
    return (
      <div>
        Not Found
      </div>
    )
  }
  return (
    <Suspense fallback={<Loading />}>

      <div className=" container">
        <div className="md:flex md:gap-6">
          <div className="md:flex flex-col md:w-[70%] lg:w-[75%]">

            <div className="mt-2">
              <Image
                className="max-h-[400px] object-cover w-full rounded-t-2xl"
                width={1000}
                height={1000}
                alt="download"
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}assets/${course.image}`}
              />
            </div>
            <div className="mt-5 space-y-8">
              <div className="space-y-3">
                <h1 className="font-bold">{course.name}</h1>
                <div className="space-y-2">
                  <h2 className="font-medium">Description</h2>
                  <p>
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="font-medium">Course Detail</h2>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="bg-background rounded-2xl px-5 py-2 space-y-1">
                    <h3 className="font-semibold text-gray-700">Duration</h3>
                    <div className="flex items-center gap-3">
                      <div>
                        <ClockIcon className="w-5 h-5 text-gray-700" />
                      </div>
                      <p className="font-semibold text-gray-700">{course.duration + " " + 'months'}</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-2xl px-5 py-2 space-y-1">
                    <h3 className="font-semibold text-gray-700">Weekly sessions</h3>
                    <div className="flex items-center gap-3">
                      <div>
                        <AcademicCapIcon className="w-5 h-5 text-gray-700" />
                      </div>
                      <p className="font-semibold text-gray-700">{course.sessions_weekly}</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-2xl px-5 py-2 space-y-1">
                    <h3 className="font-semibold text-gray-700">Type</h3>
                    <div className="flex items-center gap-3">
                      <div>
                        <AcademicCapIcon className="w-5 h-5 text-gray-700" />
                      </div>
                      <p className="font-semibold text-gray-700">Individual</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-2xl px-5 py-2 space-y-1">
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
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h2 className="font-medium">Available Languages</h2>
                    </div>
                    <div className="gap-3 flex items-center flex-wrap">
                      {
                        course.available_languages.map((lang) => (
                          <div key={lang.languages_id.id} className="flex items-center gap-2 bg-background rounded-xl px-6 py-3">
                            {
                              lang.languages_id.icon && (
                                <Image width={1000} height={1000} className='w-5 min-w-5 object-contain shrink-0' src={`${process.env.NEXT_PUBLIC_BACKEND_URL}assets/${lang.languages_id.icon}`} alt={`Flag of ` + lang.languages_id.name} />
                              )
                            }
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
                  <div className="space-y-2">
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
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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
          <div className="hidden md:flex md:w-[30%] lg:w-[25%]">
            <div className="w-full flex flex-col">
              <div className="no-scrollbar mt-2">
                {/* <div className=" border-b border-gray-300 pb-2">
                  <p className="font-semibold text-[1.1em]">{course.name}</p>
                </div> */}
                {/* <div className="space-y-4"> */}
                {/* <p className="font-medium text-[1.1em]">Enter Account Details</p> */}
                {/* <div>
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
                      className="block text-sm leading-4"
                    >
                      Email Address
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
                  </div> */}


                {/* Here is Stripe section */}
                <StripeSection />


                {/* </div> */}

                {/* <div className="w-full h-[0.5px] bg-gray-300">
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">Total</h2>
                    <h2 className="font-semibold">${course.price}/month</h2>
                  </div>
                  <div className="flex items-start gap-2 justify-between">
                    <LockClosedIcon className="w-4 h-4 text-gray-400 shrink-0 min-w-4 min-h-4" />
                    <h5 className=" leading-tight text-gray-400 text-xs">
                      Guaranteed to be safe & secure, ensuring that all transactions are protected with the highest level of security
                    </h5>
                  </div>
                  <button className="w-full bg-primary text-black px-4 py-2 outline-none rounded-md font-semibold">
                    Enrol now
                  </button>
                  <p className="text-center leading-tight text-xs">By submitting the form, you agree to our Terms of service and Privacy Policy</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileCheckout name={course.name} price={course.price} />


    </Suspense>

  )

}