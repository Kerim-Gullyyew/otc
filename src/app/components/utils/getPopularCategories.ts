export async function getPopularCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}items/secondary_category?filter[popular_category][_eq]=true&fields=id,name,slug,courses`,
      {
        next: {
          revalidate: 5,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const popularCourses = await res.json();

    if (!popularCourses || !popularCourses.data) {
      throw new Error('Invalid response structure');
    }

    return popularCourses.data;
  } catch (error: any) {
    return { error: error.message };
  }
}
