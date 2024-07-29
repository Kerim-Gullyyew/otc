"use client"
import Image from "next/image";
import { PlayIcon, AcademicCapIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className=" bg-white w-full px-6 lg:px-8 py-10 lg:py-14">
      <div className="gap-10 sm:gap-14 grid grid-cols-1 lg:grid-cols-5 justify-center items-end">
        <div className="flex flex-col justify-between lg:col-span-3  h-full">
          <div className="space-y-5 max-w-xl">
            <h1 className="font-bold">
              Keep Learning on Track
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio quis quo maxime sint sit, nemo, vel quibusdam quos praesentium eos tempore! Officiis cumque nam autem deleniti, iure distinctio beatae.
            </p>
            <button className="bg-orange-400 px-6 py-2 text-white rounded-l-xl rounded-tr-xl">
              Explore courses
            </button>

          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row relative gap-5 mt-10">
            <div className="flex sm:flex-1 min-w-[200px]">
              <Image className="w-56 self-end z-10 -mr-20 object-contain bg-none" width={1000} height={1000} src={"/home/teacher.png"} alt="teacher" />
              <div className="bg-gray-200 z-0 w-full rounded-2xl relative px-5 py-4 flex flex-col justify-between">
                <h3 className="font-semibold">Best <span className="text-green">Certified</span> Teacher Worldwide</h3>
                <div className="flex flex-col items-end">
                  <div>
                    <h2 className="font-bold text-green">210+</h2>
                    <p className="text-xs">Lorem ipsum dolor</p>

                  </div>
                </div>
              </div>

            </div>

            <div className=" bg-gray-200 sm:flex-1 w-full overflow-hidden rounded-2xl relative">
              <div className="px-5 py-4 space-y-5">
                <div className="pr-20">
                  <Image width={1000} height={1000} alt="Student" className="min-h-20 max-w-36 rounded-xl object-contain w-full" src={"/home/student.jpg"} />
                </div>
                <h3 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              </div>
              <div className=" absolute w-20 h-20 bg-white right-0 top-0 rounded-bl-[25px] before:absolute before:right-[100%] before:top-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom before:rounded-full after:absolute after:top-[100%] after:right-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom after:rounded-full">
                <div className=" absolute right-0 top-0 bg-gray-200 w-[90%] h-[90%] rounded-2xl flex items-center justify-center">
                  <ArrowUpRightIcon className="w-10 h-10 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-2">
          <Image src={"/home/studenthero.png"} width={1000} height={1000} alt="student with book" className="" />
        </div>
      </div>

      <div className="mt-20 lg:mt-32 ">
        <div className="space-y-14">

          <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
            <div className="flex-1">
              <h1 className="font-bold">
                An Easier way to be Sub and Find Sub
              </h1>
            </div>
            <div className="flex-1 max-w-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio quis quo maxime sint sit, nemo, vel quibusdam quos praesentium eos tempore! Officiis cumque nam autem deleniti, iure distinctio beatae.
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className=" bg-gray-200 sm:flex-1 w-full overflow-hidden rounded-2xl relative">
              <div className="px-5 py-4 space-y-5 pb-24">

                <h3 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis non qui commodi </p>
              </div>

              <div className=" absolute bottom-4 left-4">
                <AcademicCapIcon className="w-16 h-16 text-green" />
              </div>
              <div className=" absolute w-20 h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                <div className=" absolute right-0 bottom-0 bg-gray-200 w-[90%] h-[90%] rounded-full flex items-center justify-center">
                  <ArrowUpRightIcon className="w-10 h-10 text-orange-500" />
                </div>
              </div>
            </div>

            <div className=" bg-gray-200 sm:flex-1 w-full overflow-hidden rounded-2xl relative">
              <div className="px-5 py-4 space-y-5">
                <div className="pr-20">
                  <Image width={1000} height={1000} alt="Student" className="min-h-20 max-w-36 rounded-xl object-contain w-full" src={"/home/student.jpg"} />
                </div>
                <h3 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              </div>
              <div className=" absolute w-20 h-20 bg-white right-0 top-0 rounded-bl-[25px] before:absolute before:right-[100%] before:top-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom before:rounded-full after:absolute after:top-[100%] after:right-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom after:rounded-full">
                <div className=" absolute right-0 top-0 bg-gray-200 w-[90%] h-[90%] rounded-full flex items-center justify-center">
                  <ArrowUpRightIcon className="w-10 h-10 text-orange-500" />
                </div>
              </div>
            </div>

            <div className=" bg-gray-200 sm:flex-1 w-full overflow-hidden rounded-2xl relative">
              <div className="px-5 py-4 space-y-5 pb-24">

                <h3 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis non qui commodi </p>
              </div>

              <div className=" absolute bottom-4 left-4">
                <AcademicCapIcon className="w-16 h-16 text-green" />
              </div>
              <div className=" absolute w-20 h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                <div className=" absolute right-0 bottom-0 bg-gray-200 w-[90%] h-[90%] rounded-full flex items-center justify-center">
                  <ArrowUpRightIcon className="w-10 h-10 text-orange-500" />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>



      <div className="mt-20 lg:mt-32 ">
        <div className="space-y-14">

          <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
            <div className="flex-1">
              <h1 className="font-bold">
                Why Choose Our Services
              </h1>
            </div>
            <div className="flex-1 max-w-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio quis quo maxime sint sit, nemo, vel quibusdam quos praesentium eos tempore! Officiis cumque nam autem deleniti, iure distinctio beatae.


              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-10">
            <Image width={1000} height={1000} className="w-full object-contain" alt="book" src={"/home/book.webp"} />
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-32">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-6 justify-between items-center">
            <h1>Popular Courses</h1>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-[2px] text-white rounded-full bg-yellow">All</button>
              <button className="px-4 py-[2px] rounded-full bg-gray-50">Design</button>
              <button className="px-4 py-[2px] rounded-full bg-gray-50">Development</button>
              <button className="px-4 py-[2px] rounded-full bg-gray-50">Business</button>
              <button className="px-4 py-[2px] rounded-full bg-gray-50">Data Science</button>
              <button className="px-4 py-[2px] rounded-full bg-gray-50">Marketing</button>
            </div>
          </div>


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            <div className="bg-white-50 shadow-custom-light">
              <Image className="rounded-t-xl max-h-48 object-cover" width={1000} height={1000} src={'/course/download.jpg'} alt="download" />
              <div className="pt-5 px-6 pb-7 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-yellow rounded-full p-1 flex items-center justify-center"><PlayIcon className="w-3 h-3" color="white" /></div>
                  <div>
                    <p>10s Lesson</p>
                  </div>
                </div>
                <div className="bg-orange-50 px-4 py-1 rounded-lg">
                  <p className="text-yellow font-bold">Download</p>
                </div>
              </div>
            </div>

            <div className="bg-white-50 shadow-custom-light">
              <Image className="rounded-t-xl max-h-48 object-cover" width={1000} height={1000} src={'/course/download.jpg'} alt="download" />
              <div className="pt-5 px-6 pb-7 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-yellow rounded-full p-1 flex items-center justify-center"><PlayIcon className="w-3 h-3" color="white" /></div>
                  <div>
                    <p>10s Lesson</p>
                  </div>
                </div>
                <div className="bg-orange-50 px-4 py-1 rounded-lg">
                  <p className="text-yellow font-bold">Download</p>
                </div>
              </div>
            </div>

            <div className="bg-white-50 shadow-custom-light">
              <Image className="rounded-t-xl max-h-48 object-cover" width={1000} height={1000} src={'/course/download.jpg'} alt="download" />
              <div className="pt-5 px-6 pb-7 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-yellow rounded-full p-1 flex items-center justify-center"><PlayIcon className="w-3 h-3" color="white" /></div>
                  <div>
                    <p>10s Lesson</p>
                  </div>
                </div>
                <div className="bg-orange-50 px-4 py-1 rounded-lg">
                  <p className="text-yellow font-bold">Download</p>
                </div>
              </div>
            </div>

            <div className="bg-white-50 shadow-custom-light">
              <Image className="rounded-t-xl max-h-48 object-cover" width={1000} height={1000} src={'/course/download.jpg'} alt="download" />
              <div className="pt-5 px-6 pb-7 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-yellow rounded-full p-1 flex items-center justify-center"><PlayIcon className="w-3 h-3" color="white" /></div>
                  <div>
                    <p>10s Lesson</p>
                  </div>
                </div>
                <div className="bg-orange-50 px-4 py-1 rounded-lg">
                  <p className="text-yellow font-bold">Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-20 lg:mt-32">
        <div className="flex justify-center flex-col items-center gap-8">

          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <div className="border-2 border-orange-300 bg-orange-100 flex items-center justify-center rounded-full px-3 py-1">
                <h4 className="font-semibold">
                  Categories
                </h4>
              </div>
            </div>
            <h1 className="font-bold text-center">Select your Categories</h1>
          </div>
          <div className="max-w-lg">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ad! Explicabo, ipsum mollitia dolorem beatae quas illo.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">

            <motion.div
              className="rounded-xl flex flex-col justify-between gap-3 bg-gray-50 px-4 py-3 shadow overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >


              <div className="flex justify-between items-start w-full gap-4">
                <div className="bg-violet-100 p-1 rounded-xl">
                  <PlayIcon className="w-7 h-7 text-violet-500" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-orange-400 font-semibold text-nowrap">View Course</h5>
                  <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-nowrap">Photography sdefsd</h3>
                <p>25 Courses</p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-xl flex flex-col justify-between gap-3 bg-gray-50 px-4 py-3 shadow overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="flex justify-between items-start w-full gap-4">
                <div className="bg-violet-100 p-1 rounded-xl">
                  <PlayIcon className="w-7 h-7 text-violet-500" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-orange-400 font-semibold text-nowrap">View Course</h5>
                  <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-nowrap">Photography</h3>
                <p>25 Courses</p>
              </div>
            </motion.div>


            <motion.div
              className="rounded-xl flex flex-col justify-between gap-3 bg-gray-50 px-4 py-3 shadow overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="flex justify-between items-start w-full gap-4">
                <div className="bg-violet-100 p-1 rounded-xl">
                  <PlayIcon className="w-7 h-7 text-violet-500" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-orange-400 font-semibold text-nowrap">View Course</h5>
                  <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-nowrap">Photography sdefsd</h3>
                <p>25 Courses</p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-xl flex flex-col justify-between gap-3 bg-gray-50 px-4 py-3 shadow overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >

              <div className="flex justify-between items-start w-full gap-4">
                <div className="bg-violet-100 p-1 rounded-xl">
                  <PlayIcon className="w-7 h-7 text-violet-500" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-orange-400 font-semibold text-nowrap">View Course</h5>
                  <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-nowrap">Photography</h3>
                <p>25 Courses</p>
              </div>

            </motion.div>

            <motion.div
              className="rounded-xl flex flex-col justify-between gap-3 bg-gray-50 px-4 py-3 shadow overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="flex justify-between items-start w-full gap-4">
                <div className="bg-violet-100 p-1 rounded-xl">
                  <PlayIcon className="w-7 h-7 text-violet-500" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-orange-400 font-semibold text-nowrap">View Course</h5>
                  <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-nowrap">Photography sdefsd</h3>
                <p>25 Courses</p>
              </div>

            </motion.div>

            <motion.div
              className="rounded-xl flex flex-col justify-between gap-3 bg-gray-50 px-4 py-3 shadow overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="flex justify-between items-start w-full gap-4">
                <div className="bg-violet-100 p-1 rounded-xl">
                  <PlayIcon className="w-7 h-7 text-violet-500" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-orange-400 font-semibold text-nowrap">View Course</h5>
                  <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-nowrap">Photography</h3>
                <p>25 Courses</p>
              </div>

            </motion.div>

            <motion.div
              className="rounded-xl flex flex-col justify-between gap-3 bg-gray-50 px-4 py-3 shadow overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1.2, scale: 1 },
              }}
            >
              <div className="flex justify-between items-start w-full gap-4">
                <div className="bg-violet-100 p-1 rounded-xl">
                  <PlayIcon className="w-7 h-7 text-violet-500" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-orange-400 font-semibold text-nowrap">View Course</h5>
                  <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-nowrap">Photography</h3>
                <p>25 Courses</p>
              </div>

            </motion.div>

            <motion.div
              className="rounded-xl flex flex-col justify-between gap-3 bg-gray-50 px-4 py-3 shadow overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1.4, scale: 1 },
              }}
            >
              <div className="flex justify-between items-start w-full gap-4">
                <div className="bg-violet-100 p-1 rounded-xl">
                  <PlayIcon className="w-7 h-7 text-violet-500" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-orange-400 font-semibold text-nowrap">View Course</h5>
                  <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-nowrap">Photography</h3>
                <p>25 Courses</p>
              </div>

            </motion.div>


            <motion.div
              className="rounded-xl flex flex-col justify-between gap-3 bg-gray-50 px-4 py-3 shadow overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1.6, scale: 1 },
              }}
            >
              <div className="flex justify-between items-start w-full gap-4">
                <div className="bg-violet-100 p-1 rounded-xl">
                  <PlayIcon className="w-7 h-7 text-violet-500" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-orange-400 font-semibold text-nowrap">View Course</h5>
                  <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-nowrap">Photography</h3>
                <p>25 Courses</p>
              </div>

            </motion.div>


            <motion.div
              className="rounded-xl flex flex-col justify-between gap-3 bg-gray-50 px-4 py-3 shadow overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="flex justify-between items-start w-full gap-4">
                <div className="bg-violet-100 p-1 rounded-xl">
                  <PlayIcon className="w-7 h-7 text-violet-500" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-orange-400 font-semibold text-nowrap">View Course</h5>
                  <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-nowrap">Photography</h3>
                <p>25 Courses</p>
              </div>

            </motion.div>


          </div>

          <div>
            <button className="bg-orange-200 hover:bg-orange-300 transition-colors duration-200 rounded-full px-6 py-2">
              <h4 className="tracking-tighter font-bold text-gray-700">
                Explore All Courses

              </h4>
            </button>
          </div>
        </div>
      </div>



      <div className="mt-20 lg:mt-32">
        <div className="flex justify-center flex-col items-center gap-8">

          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <div className="border-2 border-orange-300 bg-orange-100 flex items-center justify-center rounded-full px-3 py-1">
                <h4 className="font-semibold">
                  Testimonials
                </h4>
              </div>
            </div>
            <h1 className="font-bold text-center">Read Our Student Review</h1>
          </div>
          <div className="max-w-lg">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ad! Explicabo, ipsum mollitia dolorem beatae quas illo.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div className=" bg-gray-200 sm:flex-1 w-full overflow-hidden rounded-2xl relative">
              <div className="px-5 py-4 space-y-5 pb-24">
                <div className="w-full border-b flex justify-between items-center">
                  <div className="flex">
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3>
                      Your Text
                    </h3>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis non qui commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus. Dignissimos assumenda dolores porro ratione  </p>
              </div>

              <div className=" absolute bottom-4 left-4">
                <AcademicCapIcon className="w-16 h-16 text-green" />
              </div>
              <div className=" absolute w-[70%] h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                <div className=" absolute right-0 bottom-0 bg-gray-200 w-[95%] h-[90%] rounded rounded-tl-[25px] flex items-center gap-3 px-3">
                  <div>
                    <Image width={1000} height={1000} className=" rounded-full w-10 h-10" src={'/home/profile.jpg'} alt="profile" />
                  </div>
                  <div>
                    <h4 className="font-bold">Name Surname</h4>
                    <h5 className="text-orange-600">Web developer</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-gray-200 sm:flex-1 w-full overflow-hidden rounded-2xl relative">
              <div className="px-5 py-4 space-y-5 pb-24">
                <div className="w-full border-b flex justify-between items-center">
                  <div className="flex">
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3>
                      Your Text
                    </h3>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis non qui commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus. Dignissimos assumenda dolores porro ratione  </p>
              </div>

              <div className=" absolute bottom-4 left-4">
                <AcademicCapIcon className="w-16 h-16 text-green" />
              </div>
              <div className=" absolute w-[70%] h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                <div className=" absolute right-0 bottom-0 bg-gray-200 w-[95%] h-[90%] rounded rounded-tl-[25px] flex items-center gap-3 px-3">
                  <div>
                    <Image width={1000} height={1000} className=" rounded-full w-10 h-10" src={'/home/profile.jpg'} alt="profile" />
                  </div>
                  <div>
                    <h4 className="font-bold">Name Surname</h4>
                    <h5 className="text-orange-600">Web developer</h5>
                  </div>
                </div>
              </div>
            </div>


            <div className=" bg-gray-200 sm:flex-1 w-full overflow-hidden rounded-2xl relative">
              <div className="px-5 py-4 space-y-5 pb-24">
                <div className="w-full border-b flex justify-between items-center">
                  <div className="flex">
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3>
                      Your Text
                    </h3>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis non qui commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus. Dignissimos assumenda dolores porro ratione  </p>
              </div>

              <div className=" absolute bottom-4 left-4">
                <AcademicCapIcon className="w-16 h-16 text-green" />
              </div>
              <div className=" absolute w-[70%] h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                <div className=" absolute right-0 bottom-0 bg-gray-200 w-[95%] h-[90%] rounded rounded-tl-[25px] flex items-center gap-3 px-3">
                  <div>
                    <Image width={1000} height={1000} className=" rounded-full w-10 h-10" src={'/home/profile.jpg'} alt="profile" />
                  </div>
                  <div>
                    <h4 className="font-bold">Name Surname</h4>
                    <h5 className="text-orange-600">Web developer</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-gray-200 sm:flex-1 w-full overflow-hidden rounded-2xl relative">
              <div className="px-5 py-4 space-y-5 pb-24">
                <div className="w-full border-b flex justify-between items-center">
                  <div className="flex">
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                    <StarIcon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3>
                      Your Text
                    </h3>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis non qui commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloribus. Dignissimos assumenda dolores porro ratione  </p>
              </div>

              <div className=" absolute bottom-4 left-4">
                <AcademicCapIcon className="w-16 h-16 text-green" />
              </div>
              <div className=" absolute w-[70%] h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                <div className=" absolute right-0 bottom-0 bg-gray-200 w-[95%] h-[90%] rounded rounded-tl-[25px] flex items-center gap-3 px-3">
                  <div>
                    <Image width={1000} height={1000} className=" rounded-full w-10 h-10" src={'/home/profile.jpg'} alt="profile" />
                  </div>
                  <div>
                    <h4 className="font-bold">Name Surname</h4>
                    <h5 className="text-orange-600">Web developer</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}
