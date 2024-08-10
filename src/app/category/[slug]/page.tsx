import Card from "@/app/components/ui/Card";
import { getCoursesByCategory } from "@/app/components/utils/getCoursesByCategory";
import { Metadata, ResolvingMetadata } from "next";

interface pageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

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

export async function generateMetadata(
  { params, searchParams }: pageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const category: CategoryProps | { error: string } = await getCoursesByCategory(params.slug)

  if ('error' in category) {
    return {
      title: "Not Found",
    }
  } else {
    return {
      title: category.name !== null ? category.name : "Online Tutoring Courses | Expert Tutors for All Subjects & Grades",
      description: category.description !== null ? category.description : "Discover personalized online tutoring courses tailored to your learning needs. Our expert tutors provide one-on-one instruction in all subjects and grades, helping students achieve academic success from the comfort of their homes. Enroll now to boost your grades and confidence!",
      abstract: category.description !== null ? category.description : "Discover personalized online tutoring courses tailored to your learning needs. Our expert tutors provide one-on-one instruction in all subjects and grades, helping students achieve academic success from the comfort of their homes. Enroll now to boost your grades and confidence!",
    }
  }

}


export default async function Page({ params, searchParams }: pageProps,) {
  const category: CategoryProps | { error: string } = await getCoursesByCategory(params.slug)

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
        <h1 className="text-[24px] font-medium">{category.name}</h1>

        <div className="flex">
          <div className="border border-border rounded-lg px-4 py-1">
            <h4>
              {category.courses.length + " courses"}
            </h4>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">

        {
          category.courses.map((course) => (
            <Card key={course.id} course={course} />
          ))
        }

      </div>
    </div>
  )

}