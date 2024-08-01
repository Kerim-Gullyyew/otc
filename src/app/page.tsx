"use client";
import Image from "next/image";
import {
  PlayIcon,
  AcademicCapIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className=" bg-white w-full px-6 lg:px-8 py-10 lg:py-14">
        <div className="gap-10 sm:gap-14 grid grid-cols-1 md:grid-cols-5 justify-between items-center">
          <div className="flex flex-col justify-center md:col-span-3 items-start  h-full">
            <div className="space-y-10 max-w-xl">
              <h1 className="font-bold text-6xl">
                Find suitable online courses from the best tutors
              </h1>
              <p className="text-2xl">
                Empower your learning journey with our flexible online courses
                tailored for K-12 students.
              </p>
              <button className="bg-primary px-6 py-2 text-black font-semibold rounded-l-xl rounded-tr-xl">
                Explore courses
              </button>
            </div>


          </div>
          <div className=" md:col-span-2">
            <Image
              src={"/home/studenthero.png"}
              width={1000}
              height={1000}
              alt="student with book"
              className=""
            />
          </div>
        </div>

        <div className="mt-20 lg:mt-32 ">
          <div className="space-y-14">

            <div className="flex-1">
              <h1 className="font-bold">Comprehensive Curriculum</h1>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className=" bg-background sm:flex-1 w-full overflow-hidden rounded-2xl relative">
                <div className="px-5 py-4 space-y-5 pb-24">
                  <h3 className="font-bold">Flexible Learning</h3>
                  <p>
                    Learn at your own pace with our flexible scheduling options.
                  </p>
                </div>


                <div className=" absolute w-20 h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                  <div className=" absolute right-0 bottom-0 bg-background w-[90%] h-[90%] rounded-full flex items-center justify-center">
                    <ArrowUpRightIcon className="w-10 h-10 text-orange-500" />
                  </div>
                </div>
              </div>


              <div className=" bg-background sm:flex-1 w-full overflow-hidden rounded-2xl relative">
                <div className="px-5 py-4 space-y-5 pb-24">
                  <h3 className="font-bold">Interactive Learning</h3>
                  <p>
                    Engage with interactive lessons and quizzes designed to
                    reinforce learning.
                  </p>
                </div>
                <div className=" absolute w-20 h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                  <div className=" absolute right-0 bottom-0 bg-background w-[90%] h-[90%] rounded-full flex items-center justify-center">
                    <ArrowUpRightIcon className="w-10 h-10 text-orange-500" />
                  </div>
                </div>
              </div>

              <div className=" bg-background sm:flex-1 w-full overflow-hidden rounded-2xl relative">
                <div className="px-5 py-4 space-y-5 pb-24">
                  <h3 className="font-bold">Interactive Learning</h3>
                  <p>
                    Engage with interactive lessons and quizzes designed to
                    reinforce learning.
                  </p>
                </div>
                <div className=" absolute w-20 h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                  <div className=" absolute right-0 bottom-0 bg-background w-[90%] h-[90%] rounded-full flex items-center justify-center">
                    <ArrowUpRightIcon className="w-10 h-10 text-orange-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 ">

          <div className="gap-10 sm:gap-14 grid grid-cols-1 md:grid-cols-5 justify-between items-center">
            <div className="flex flex-col justify-center md:col-span-3 items-start  h-full">
              <div className="space-y-10 max-w-xl">
                <h1 className="font-bold ">
                  Why Choose Us
                </h1>
                <p className="text-xl">
                  {"Our courses cover all subjects from Kindergarten to 12th grade, providing a thorough understanding of core concepts across all grade levels. Whether it's math, science, language arts, or social studies, our curriculum is designed to meet educational standards and cater to the diverse learning needs of every student."}
                </p>
              </div>


            </div>
            <div className=" md:col-span-2">
              <Image
                src={"/home/why.jpg"}
                width={1000}
                height={1000}
                alt="student with book"
                className=""
              />
            </div>
          </div>
          {/* <div className="space-y-14">
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
              <div className="flex-1">
                <h1 className="font-bold">Why Choose Our Services</h1>
              </div>
              <div className="flex-1 max-w-lg">
                <p>
                  {
                    "Our courses cover all subjects from Kindergarten to 12th grade, providing a thorough understanding of core concepts across all grade levels. Whether it's math, science, language arts, or social studies, our curriculum is designed to meet educational standards and cater to the diverse learning needs of every student."
                  }
                </p>
              </div>
            </div>
            <div className="w-full">
              <Image
                width={1000}
                height={1000}
                className="w-full h-96 object-cover"
                alt="book"
                src={"/home/book.webp"}
              />
            </div>
          </div> */}
        </div>

        <div className="mt-20 lg:mt-32">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-6 justify-between items-center">
              <h1 className="font-bold">Popular Courses</h1>

              {/* <div className="flex flex-wrap gap-3">
                <button className="px-4 py-[2px] text-white rounded-full bg-primary">
                  All
                </button>
                <button className="px-4 py-[2px] rounded-full bg-gray-50">
                  Design
                </button>
                <button className="px-4 py-[2px] rounded-full bg-gray-50">
                  Development
                </button>
                <button className="px-4 py-[2px] rounded-full bg-gray-50">
                  Business
                </button>
                <button className="px-4 py-[2px] rounded-full bg-gray-50">
                  Data Science
                </button>
                <button className="px-4 py-[2px] rounded-full bg-gray-50">
                  Marketing
                </button>
              </div> */}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div className="">
                <Image
                  className=" rounded-t-xl max-h-56 object-cover"
                  width={1000}
                  height={1000}
                  src={"/course/download.jpg"}
                  alt="download"
                />
                <div className="border space-y-1 px-5 pt-3 pb-4 rounded-b-xl">
                  <h3 className="font-semibold">Course Name</h3>
                  <div className="space-y-2">
                    <h4>Tught: English</h4>
                    <h4>Duration: 9 months</h4>
                    <h4>Type: Live session</h4>
                    <h4 className="font-semibold">$100/monthly</h4>
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                  className=" rounded-t-xl max-h-56 object-cover"
                  width={1000}
                  height={1000}
                  src={"/course/download.jpg"}
                  alt="download"
                />
                <div className="border space-y-1 px-5 pt-3 pb-4 rounded-b-xl">
                  <h3 className="font-semibold">Course Name</h3>
                  <div className="space-y-2">
                    <h4>Tught: English</h4>
                    <h4>Duration: 9 months</h4>
                    <h4>Type: Live session</h4>
                    <h4 className="font-semibold">$100/monthly</h4>
                  </div>
                </div>
              </div>

              <div className="">
                <Image
                  className=" rounded-t-xl max-h-56 object-cover"
                  width={1000}
                  height={1000}
                  src={"/course/download.jpg"}
                  alt="download"
                />
                <div className="border space-y-1 px-5 pt-3 pb-4 rounded-b-xl">
                  <h3 className="font-semibold">Course Name</h3>
                  <div className="space-y-2">
                    <h4>Tught: English</h4>
                    <h4>Duration: 9 months</h4>
                    <h4>Type: Live session</h4>
                    <h4 className="font-semibold">$100/monthly</h4>
                  </div>
                </div>
              </div>

              <div className="">
                <Image
                  className=" rounded-t-xl max-h-56 object-cover"
                  width={1000}
                  height={1000}
                  src={"/course/download.jpg"}
                  alt="download"
                />
                <div className="border space-y-1 px-5 pt-3 pb-4 rounded-b-xl">
                  <h3 className="font-semibold">Course Name</h3>
                  <div className="space-y-2">
                    <h4>Tught: English</h4>
                    <h4>Duration: 9 months</h4>
                    <h4>Type: Live session</h4>
                    <h4 className="font-semibold">$100/monthly</h4>
                  </div>
                </div>
              </div>

              <div className="">
                <Image
                  className=" rounded-t-xl max-h-56 object-cover"
                  width={1000}
                  height={1000}
                  src={"/course/download.jpg"}
                  alt="download"
                />
                <div className="border space-y-1 px-5 pt-3 pb-4 rounded-b-xl">
                  <h3 className="font-semibold">Course Name</h3>
                  <div className="space-y-2">
                    <h4>Tught: English</h4>
                    <h4>Duration: 9 months</h4>
                    <h4>Type: Live session</h4>
                    <h4 className="font-semibold">$100/monthly</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32">
          <div className="flex justify-center flex-col items-center gap-8">
            <div className="space-y-3">

              <h1 className="font-bold text-center">Select your Categories</h1>
            </div>
            <div className="max-w-lg">
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                ad! Explicabo, ipsum mollitia dolorem beatae quas illo.
              </p>
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
                    <h5 className="text-orange-400 font-semibold text-nowrap">
                      View Course
                    </h5>
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
                    <h5 className="text-orange-400 font-semibold text-nowrap">
                      View Course
                    </h5>
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
                    <h5 className="text-orange-400 font-semibold text-nowrap">
                      View Course
                    </h5>
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
                    <h5 className="text-orange-400 font-semibold text-nowrap">
                      View Course
                    </h5>
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
                    <h5 className="text-orange-400 font-semibold text-nowrap">
                      View Course
                    </h5>
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
                    <h5 className="text-orange-400 font-semibold text-nowrap">
                      View Course
                    </h5>
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
                    <h5 className="text-orange-400 font-semibold text-nowrap">
                      View Course
                    </h5>
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
                    <h5 className="text-orange-400 font-semibold text-nowrap">
                      View Course
                    </h5>
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
                    <h5 className="text-orange-400 font-semibold text-nowrap">
                      View Course
                    </h5>
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
                    <h5 className="text-orange-400 font-semibold text-nowrap">
                      View Course
                    </h5>
                    <AcademicCapIcon className="w-4 h-4 text-orange-400" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-nowrap">Photography</h3>
                  <p>25 Courses</p>
                </div>
              </motion.div>
            </div>


          </div>
        </div>

        <div className="mt-20 lg:mt-32">
          <div className="flex justify-center flex-col items-center gap-8">
            <div className="space-y-3">
              <h1 className="font-bold text-center">Read Our Reviews</h1>
            </div>
            <div className="max-w-lg">
              <p className="text-center">
                Discover why students and parents love our flexible, engaging K-12 courses. See their success stories and join our community today!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <div className=" bg-background sm:flex-1 w-full overflow-hidden rounded-2xl relative">
                <div className="px-5 py-4 space-y-5 pb-24">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex">
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                    </div>
                  </div>
                  <p>
                    {
                      "I've been using this e-learning platform for the past year, and it has completely transformed my study habits. The flexible schedule allows me to balance school with extracurricular activities, and the interactive lessons make even the toughest subjects enjoyable. The support from the instructors is phenomenal – they are always ready to help and clarify any doubts. I've seen a significant improvement in my grades and confidence. Highly recommended!"
                    }
                  </p>
                </div>


                <div className=" absolute w-[70%] h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                  <div className=" absolute right-0 bottom-0 bg-background w-[95%] h-[90%] rounded rounded-tl-[25px] flex items-center gap-3 px-3">
                    <div className="pl-4">
                      <h4 className="font-bold">Emma Johnson</h4>
                      <h5 className="text-orange-600">10th Grade</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" bg-background sm:flex-1 w-full overflow-hidden rounded-2xl relative">
                <div className="px-5 py-4 space-y-5 pb-24">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex">
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                    </div>
                  </div>
                  <p>
                    {"As a parent, I was initially skeptical about online learning, but this service has exceeded all my expectations. My son is engaged and enthusiastic about his studies like never before. The curriculum is comprehensive and aligns perfectly with what he needs to learn. The platform is user-friendly, and the customer support team is always available to assist with any issues. This has been a game-changer for our family."}
                  </p>
                </div>


                <div className=" absolute w-[70%] h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                  <div className=" absolute right-0 bottom-0 bg-background w-[95%] h-[90%] rounded rounded-tl-[25px] flex items-center gap-3 px-3">
                    <div className="pl-4">
                      <h4 className="font-bold">Michael Brown</h4>
                      <h5 className="text-orange-600">Parent of a 5th Grader</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" bg-background sm:flex-1 w-full overflow-hidden rounded-2xl relative">
                <div className="px-5 py-4 space-y-5 pb-24">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex">
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                    </div>

                  </div>
                  <p>
                    {"I absolutely love this e-learning platform! The courses are well-structured, and the lessons are easy to follow. The quizzes and interactive activities help me understand the material better. The best part is that I can learn at my own pace without any pressure. The instructors are amazing and provide great feedback. I've become more confident in my studies and look forward to learning every day."}
                  </p>
                </div>


                <div className=" absolute w-[70%] h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                  <div className=" absolute right-0 bottom-0 bg-background w-[95%] h-[90%] rounded rounded-tl-[25px] flex items-center gap-3 px-3">
                    <div className="pl-4">
                      <h4 className="font-bold">Sophia Martinez</h4>
                      <h5 className="text-orange-600">8th Grade</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" bg-background sm:flex-1 w-full overflow-hidden rounded-2xl relative">
                <div className="px-5 py-4 space-y-5 pb-24">
                  <div className="w-full   flex justify-between items-center">
                    <div className="flex">
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                      <StarIcon className="w-5 h-5 text-orange-600" />
                    </div>

                  </div>
                  <p>
                    {"Preparing for college applications was overwhelming until I started using this e-learning service. The advanced courses and SAT prep materials are top-notch. The flexibility allowed me to study at my own pace, and the instructors provided invaluable support and guidance. I am now more prepared and confident as I step into my college journey. Thank you for such an excellent service!"}
                  </p>
                </div>
                <div className=" absolute w-[70%] h-20 bg-white right-0 bottom-0 rounded-tl-[25px] before:absolute before:bottom-[100%] before:right-0 before:w-7 before:h-7 before:bg-transparent before:shadow-custom-bottom before:rounded-full after:absolute after:right-[100%] after:bottom-0 after:w-7 after:h-7 after:bg-transparent after:shadow-custom-bottom after:rounded-full">
                  <div className=" absolute right-0 bottom-0 bg-background w-[95%] h-[90%] rounded rounded-tl-[25px] flex items-center gap-3 px-3">

                    <div className="pl-4">
                      <h4 className="font-bold">Liam Wilson</h4>
                      <h5 className="text-orange-600">12th Grade</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
