import Card from "@/app/components/ui/Card";
import { getSearchCourses } from "@/app/components/utils/getSearchCourses";
import { Suspense } from "react";
import Loading from './loading';
import { Metadata, ResolvingMetadata } from "next";
interface foundCourseProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  duration: string;
  price: number;
}

interface pageProps {
  params: { query: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: pageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {

  return {
    title: "Online Tutoring Courses | Search",
    description: "Discover personalized online tutoring courses tailored to your learning needs. Our expert tutors provide one-on-one instruction in all subjects and grades, helping students achieve academic success from the comfort of their homes. Enroll now to boost your grades and confidence!",
    abstract: "Discover personalized online tutoring courses tailored to your learning needs. Our expert tutors provide one-on-one instruction in all subjects and grades, helping students achieve academic success from the comfort of their homes. Enroll now to boost your grades and confidence!",
    alternates: { canonical: "https://onlinetutoringcourses.com/search/" + params.query }
  }

}

export default async function Page({ params: { query } }: {
  params: { query: string }
}) {
  const courses: [] | foundCourseProps[] | { error: string } = await getSearchCourses(query)
  if ('error' in courses) {
    return (
      <div>
        Not Found
      </div>
    )
  }
  return (
    <Suspense fallback={<Loading />}>
      <div className="container">
        <div className="relative w-full space-y-3 pt-3">

          <div className="flex">
            <div className="border border-border rounded-lg px-4 py-1">
              <h4>
                {courses.length + " courses found"}
              </h4>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">

          {
            courses.map((course) => (
              <Card key={course.id} course={course} />
            ))
          }
        </div>
      </div>

    </Suspense>
  )

}