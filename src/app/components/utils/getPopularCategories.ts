
export async function getPopularCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}items/courses?filter[popular_category][_eq]=true&fields=id,name,duration,price,image,discount`,
    {
      // cache: 'force-cache',
      next: {
        revalidate: 5,
      },
    }
  );

  const popularCourses = await res.json();

  return popularCourses.data;
}
