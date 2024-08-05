import { getCoursesByCategory } from "@/app/components/utils/getCoursesByCategory";

interface CoursesProps {
  id: string;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  duration: number;
  syllabus:
  {
    id: number;
    name: string;
    description: string;
  }[];
  related_courses: {
    related_courses_id: {
      id: string;
      name: string;
      image: string;
      price: number;
      duration: number;
    }
  }[];
  available_languages: {
    languages_id: {
      id: string;
      name: string;
      icon: string | null;
    }
  }[];
}[]

export default async function Page({ params: { slug } }: {
  params: { slug: string }
}) {
  const courses: CoursesProps = await getCoursesByCategory(slug)



}