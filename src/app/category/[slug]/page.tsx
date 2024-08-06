import Card from "@/app/components/ui/Card";
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
    id: string;
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
            <Card key={course.id} course={course} />
          ))
        }

      </div>
    </div>
  )

}