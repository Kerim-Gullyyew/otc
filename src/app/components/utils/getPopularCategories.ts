
export async function getPopularCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}items/secondary_category?filter[popular_category][_eq]=true&fields=id,name,courses`,
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
