import { redirect } from "next/navigation";

export async function getCourse(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}items/courses?filter[slug][_eq]=${slug}&limit=1&fields=*,syllabus.*,available_languages.languages_id.*,related_courses.related_courses_id.name,related_courses.related_courses_id.image,related_courses.related_courses_id.price,related_courses.related_courses_id.duration`,
      {
        // cache: 'force-cache',
        next: {
          revalidate: 5,
        },
      }
    );

    if (!res.ok) {
      // If the fetch request fails (e.g., 404 or 500), throw an error
      throw new Error('Failed to fetch course');
    }

    const course = await res.json();

    if (!course.data || course.data.length === 0) {
      throw new Error('Invalid response structure');
    }

    return course.data[0];
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    return { error: error.message };
  }
}
