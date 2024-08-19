import React from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { getPopularCourses } from '../components/utils/getPopularCourses'
import Card from '../components/ui/Card'
interface popularCourse {
  id: string;
  slug: string;
  name: string;
  duration: string;
  price: number;
  image: string;
  discount: null | number;
}

export default async function Page() {
  const popularCourses: popularCourse[] | { error: string } = await getPopularCourses()
  return (
    <div className="xl:h-[calc(100vh-70px)] w-full mx-auto flex flex-col justify-center items-center gap-10 py-10 container">
      <div className='flex items-center flex-col gap-10'>
        <div className=' bg-emerald-200 rounded-full flex items-center justify-center p-1'>
          <CheckIcon className='w-14 h-14 text-emerald-600' />
        </div>
        <h3 className='text-center max-w-3xl'>{"Thank you for enrolling! We're excited to have you on board. Your journey with us is just beginning, and we're committed to providing you with an enriching and rewarding experience. Stay tuned for more details, and welcome to the community!"}</h3>
        <div className='space-y-7'>
          <h3 className='text-center'>We have these courses too</h3>
          {
            (popularCourses && !('error' in popularCourses)) && (
              <div id="#popular" className="mt-20 lg:mt-32">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {
                    popularCourses.map((popularCourse) => (
                      <Card key={popularCourse.id} course={popularCourse} />
                    ))
                  }

                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
