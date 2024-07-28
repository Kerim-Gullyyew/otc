"use client"
import Image from "next/image";
import { PlayIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className=" bg-white w-full px-6 lg:px-8 py-10 lg:py-14">
      <div className="gap-10 sm:gap-14 flex-col flex justify-center lg:justify-between items-center lg:flex lg:flex-row">
        <div className="space-y-5">
          <h1 className="font-bold">
            Keep Learning on Track
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio quis quo maxime sint sit, nemo, vel quibusdam quos praesentium eos tempore! Officiis cumque nam autem deleniti, iure distinctio beatae.
          </p>
          <button className="bg-orange-400 px-6 py-2 text-white rounded-l-xl rounded-tr-xl">
            Explore courses
          </button>

          <div className="flex">
            <Image className="h-48 w-40 object-contain bg-red-600" width={1000} height={1000} src={"/home/teacher.png"} alt="teacher" />
            <div className="pt-5 pb-8 bg-gray-100">
              <h3>Best certified Teacher Worldwide</h3>
            </div>
          </div>

        </div>
        <div className="w-full md:w-[450px] lg:w-full h-80 bg-green">

        </div>
      </div>

      <div className="mt-20 lg:mt-32 ">
        <div className="gap-10 sm:gap-14 flex-col flex justify-center lg:justify-between items-center lg:flex lg:flex-row-reverse">

          <div className="space-y-5">
            <h1 className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veritatis
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio quis quo maxime sint sit, nemo, vel quibusdam quos praesentium eos tempore! Officiis cumque nam autem deleniti, iure distinctio beatae.
            </p>
            <button className="bg-emerald-600 px-6 py-2 text-white rounded-lg">
              Explore courses
            </button>
          </div>
          <div className="w-full md:w-[450px] lg:w-full h-80 bg-green">

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
    </div>
  );
}
