

export async function getCourse(slug: string) {
  const res = await fetch(
    `${process.env.WEBSITE_URL}items/courses/${slug}?fields=*,syllabus.*,available_languages.languages_id.*,related_courses.related_courses_id.name,related_courses.related_courses_id.image,related_courses.related_courses_id.price,related_courses.related_courses_id.duration`,
    {
      cache: 'force-cache',
      next: {
        revalidate: 5,
      },
    }
  );

  const course = await res.json();

  return course.data;
}