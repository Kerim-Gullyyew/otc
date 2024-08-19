
import Image from "next/image";
import {
  ArrowUpRightIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { getPopularCourses } from "./components/utils/getPopularCourses";
import Link from "next/link";
import { getPopularCategories } from "./components/utils/getPopularCategories";
import Card from "./components/ui/Card";
import ButtonHome from "./components/ButtonHome";
interface popularCourse {
  id: string;
  slug: string;
  name: string;
  duration: string;
  price: number;
  image: string;
  discount: null | number;
}

interface popularCategory {
  id: string;
  name: string;
  slug: string;
  courses: [];
}
export default async function Home() {

  const popularCoursesPromise: Promise<popularCourse[] | { error: string }> = getPopularCourses();
  const popularCategoriesPromise: Promise<popularCategory[] | { error: string }> = getPopularCategories();
  const [popularCourses, popularCategories] = await Promise.all([popularCoursesPromise, popularCategoriesPromise]);

  return (

    <div className=" bg-white w-full py-10 lg:py-14 container">
      <div className="gap-10 sm:gap-14 grid grid-cols-1 md:grid-cols-5 justify-between items-center">

        <div className="flex flex-col justify-center md:col-span-2 items-start  h-full">

          <div className="space-y-10 max-w-xl opacity-0 translate-x-[-50px] animate-fadeInLeft">
            <h1 className="font-bold text-6xl">
              Find suitable online courses from the best tutors
            </h1>
            <p className="text-2xl">
              Empower your learning journey with our flexible online courses
              tailored for K-12 students.
            </p>

            <ButtonHome />
          </div>

        </div>
        <div className="md:col-span-3 opacity-0 translate-x-[50px] animate-fadeInRight w-full">
          <video className="rounded-xl" width="100%" height="100%" autoPlay loop muted preload="none">
            <source src="/home/student-video.mp4" type="video/mp4" />

            Your browser does not support the video tag.
          </video>
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


      {
        (popularCourses && !('error' in popularCourses)) && (
          <div id="#popular" className="mt-20 lg:mt-32">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-6 justify-between items-center">
                <h1 className="font-bold">Popular Courses</h1>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                {
                  popularCourses.map((popularCourse) => (
                    <Card key={popularCourse.id} course={popularCourse} />
                  ))
                }

              </div>

            </div>
          </div>
        )
      }

      {
        (popularCategories && !('error' in popularCategories)) && (
          <div id="popular-courses" className="mt-20 lg:mt-32">
            <div className="flex justify-center flex-col items-center gap-8">
              <div className="space-y-3">

                <h1 className="font-bold text-center">Select your Categories</h1>
              </div>
              <div className="max-w-lg">
                <p className="text-center">
                Choose the categories that best suit your interests and needs. Your selections will help us tailor content and recommendations specifically for you, ensuring a more personalized experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {
                  popularCategories.map((popular_category) => (
                    <Link href={'/category/' + popular_category.slug} key={popular_category.id} className="rounded-xl flex flex-col justify-between gap-6 bg-gray-50 px-4 py-3 shadow overflow-hidden">
                      <div className="flex justify-between items-center w-full gap-14">
                        <div className="bg-background py-0.5 px-2.5 rounded-xl">
                          <p>{popular_category.courses.length} Courses</p>
                        </div>
                        <EyeIcon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-nowrap">{popular_category.name}</h3>
                      </div>
                    </Link>

                  ))
                }

              </div>
            </div>
          </div>
        )
      }

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
  );
}
