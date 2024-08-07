import Card from "@/app/components/ui/Card";
import { getSearchCourses } from "@/app/components/utils/getSearchCourses";

interface foundCourseProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  duration: string;
  price: number;
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
  )

}