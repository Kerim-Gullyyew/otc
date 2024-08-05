export async function getCoursesByCategory(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}items/secondary_category/3104560f-8397-445a-8858-b7bd26af43cc?fields=*,courses.id,courses.name,courses.image,courses.duration,courses.price`,
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