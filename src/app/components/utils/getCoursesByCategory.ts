export async function getCoursesByCategory(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}items/secondary_category/?filter[slug][_eq]=${slug}&limit=1&fields=*,courses.id,courses.slug,courses.name,courses.image,courses.duration,courses.price`,
      {
        next: {
          revalidate: 5,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const course = await res.json();

    if (!course || !course.data || !course.data[0]) {
      throw new Error('Invalid response structure or no data found');
    }

    return course.data[0];
  } catch (error: any) {
    console.error('Error fetching courses by category:', error);
    return { error: error.message };
  }
}
