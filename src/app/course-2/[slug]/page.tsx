import MobileCheckout from '@/app/components/MobileCheckout';
import { getCourse } from '@/app/components/utils/getCourse';
import { AcademicCapIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import React from 'react'
import Image from 'next/image';
import Accordion from '@/app/components/ui/Accordion';

interface CourseProps {
  id: string;
  sort: boolean;
  date_created: string;
  name: string;
  description: string;
  mini_description: string;
  image: string;
  price: number;
  discount: number | null;
  sessions_weekly: number;
  duration: number;
  what_learn: null;
  secondary_category: string;
  syllabus:
  {
    id: number;
    name: string;
    description: string;
  }[];
  related_courses: {
    related_courses_id: {
      name: string;
      image: string;
      price: number;
      duration: number;
    }
  }[]
}

const pages = [
  { name: "Secondary", href: "#", current: false },
  { name: "Course Name", href: "#", current: true },
];


export default async function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const course: CourseProps = await getCourse(slug)
  console.log("Course", course);

  return (
    <>
      <>
        <div className="relative pb-20">
          <div className="md:flex md:gap-6">
            <div className="md:flex flex-col md:w-[70%]">
              <nav className="flex mt-1" aria-label="Breadcrumb">
                <ol
                  role="list"
                  className="flex space-x-2 rounded-md bg-white px-6 shadow-sm"
                >
                  <li className="flex">
                    <div className="flex items-center">
                      <a
                        href={"#"}
                        className=" text-sm font-medium text-gray-500 hover:text-gray-700"
                        aria-current={"page"}
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
                          aria-current={page.current ? "page" : undefined}
                        >
                          {page.name}
                        </a>
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-2">
                <Image
                  className="max-h-[400px] object-cover w-full rounded-t-2xl"
                  width={1000}
                  height={1000}
                  alt="download"
                  src={`${process.env.WEBSITE_URL}assets/${course.image}`}
                />
              </div>
              <div className="mt-5 px-2 space-y-5">
                <div className="space-y-1">
                  <h1 className="font-bold">{course.name}</h1>
                  <div className="flex justify-between items-center">
                    <h2 className="font-medium">Description</h2>
                  </div>
                  <p>
                    {course.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h2 className="font-medium">Course Detail</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
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

                <div className="space-y-3">
                  <h2 className="font-medium">Syllabus</h2>
                  <div className="space-y-2">
                    {
                      course.syllabus.map((syllabus) => (
                        <Accordion syllabus={syllabus} />
                      ))
                    }

                  </div>
                </div>

                <div>
                  <h2 className="font-medium">What you will learn</h2>
                  <ul className=" list-disc ml-6">
                    <li className=" ">Lorem ipsum dolor </li>
                    <li className=" ">Lorem ipsum dolor </li>
                    <li className=" ">Lorem ipsum dolor </li>
                    <li className=" ">Lorem ipsum dolor </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-medium">Related courses</h2>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                    {
                      course.related_courses.map((related) => (
                        <div className="">
                          <Image
                            className=" rounded-t-xl"
                            width={1000}
                            height={1000}
                            src={`${process.env.WEBSITE_URL}assets/${related.related_courses_id.image}`}
                            alt="download"
                          />
                          <div className="border space-y-1 px-3 py-1 rounded-b-xl">
                            <h3>{related.related_courses_id.name}</h3>
                            <div>
                              <h4>Tught: English</h4>
                              <h4>Duration: {related.related_courses_id.duration} months</h4>
                            </div>
                            <h4>${related.related_courses_id.price}/monthly</h4>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>


            </div>
            <div className="hidden md:flex md:w-[30%] justify-end">
              <div className="border-l border-[#DEDEDE] no-scrollbar pl-6 pt-6 pb-8 flex flex-col">
                <div className="space-y-6">
                  <div className=" border-b border-gray-300 pb-2">
                    <p className="font-semibold">Course Name</p>
                  </div>

                  {/* <div className="space-y-3">
                    <p className="font-medium">Select your payment option</p>
                    <button className="w-full border bg-[#F6F5FF] border-blue px-4 py-2 rounded-xl">
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
                    <button className="w-full border bg-[#F6F5FF] border-gray-300 px-4 py-2 rounded-xl">
                      <div className="flex justify-between">
                        <div>
                          <p>Billed One Off</p>
                          <div className="flex items-center gap-2">
                            <p>$200</p>
                            <p className="text-green">$150</p>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </button>
                  </div> */}

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
                    <div className="flex items-center gap-1">
                      <LockClosedIcon className="w-5 h-5 text-gray-400" />
                      <h5 className=" leading-tight text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.sfdas asd asd
                      </h5>
                    </div>
                    <button className="w-full bg-primary text-black px-4 py-2 outline-none rounded-md font-semibold">
                      Enrol now
                    </button>
                    <p className="text-center leading-tight">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileCheckout />
      </>
    </>
  )
}