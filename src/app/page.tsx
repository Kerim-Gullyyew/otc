import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className=" bg-white w-full px-6 lg:px-8 py-10 lg:py-14">
      <div className="gap-10 sm:gap-14 flex-col flex justify-center lg:justify-between items-center lg:flex lg:flex-row">
        <div className="space-y-5">
          <h1>
            Lorem ipdsum dolor sit amet consectetur adipisicing elit. Eveniet veritatis
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

      <div className="mt-20 lg:mt-32">
        <div className="gap-10 sm:gap-14 flex-col flex justify-center lg:justify-between items-center lg:flex lg:flex-row-reverse">

          <div className="space-y-5">
            <h1>
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
          <h1>Popular Courses</h1>

          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-[2px] text-white rounded-full bg-yellow">All</button>
            <button className="px-4 py-[2px] rounded-full bg-gray-50">Design</button>
            <button className="px-4 py-[2px] rounded-full bg-gray-50">Development</button>
            <button className="px-4 py-[2px] rounded-full bg-gray-50">Business</button>
            <button className="px-4 py-[2px] rounded-full bg-gray-50">Data Science</button>
            <button className="px-4 py-[2px] rounded-full bg-gray-50">Marketing</button>
          </div>


          <div className="grid grid-cols-1 gap-10">

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
    </div>
  );
}
