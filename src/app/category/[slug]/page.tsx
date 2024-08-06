import { getCoursesByCategory } from "@/app/components/utils/getCoursesByCategory";
import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  id: string;
  name: string;
  icon: string | null;
  description: null | string;
  selected_for_home: number;
  popular_category: boolean;
  slug: string;
  courses:
  {
    id: number;
    slug: string;
    name: string;
    image: string;
    duration: string;
    price: number;
  }[];
}

export default async function Page({ params: { slug } }: {
  params: { slug: string }
}) {
  const category: CategoryProps | { error: string } = await getCoursesByCategory(slug)

  if ('error' in category) {
    return (
      <div>
        Not Found
      </div>
    )
  }
  return (
    <div className="container">
      <div className="relative w-full space-y-3 pt-3">
        <h2>{category.name}</h2>
        {
          category.description && (
            <p>{category.description}</p>
          )
        }
        <div className="flex">
          <div className="border border-border px-4 py-1">
            <h4>
              {category.courses.length + " courses"}
            </h4>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10">

        {
          category.courses.map((course) => (
            <Link
              href={`/course-2/${course.slug}`}
              key={course.id}
              className="flex flex-col h-full justify-between">

              <Image
                className="rounded-t-xl max-h-44 h-44 min-h-44 object-cover"
                width={1000}
                height={1000}
                src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}assets/${course.image}`}
                alt="download"
              />

              <div className="flex flex-col justify-between border space-y-1 px-5 pt-3 pb-4 rounded-b-xl h-full">
                <h3 className="font-semibold">{course.name}</h3>
                <div className="space-y-2">
                  <h4>Teaching Language: English</h4>
                  <h4>Duration: {course.duration} months</h4>
                  <h4>Type: Live session</h4>
                  <h4 className="font-semibold">${course.price}/monthly</h4>
                </div>
              </div>
            </Link>
          ))
        }

      </div>
    </div>
  )

}