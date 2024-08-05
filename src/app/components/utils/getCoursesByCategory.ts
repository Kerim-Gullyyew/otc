export async function getCoursesByCategory(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}items/secondary_category/${slug}?fields=*,courses.id,courses.name,courses.image,courses.duration,courses.price`,
    {
      // cache: 'force-cache',
      next: {
        revalidate: 5,
      },
    }
  );

  const course = await res.json();

  return course.data;
}