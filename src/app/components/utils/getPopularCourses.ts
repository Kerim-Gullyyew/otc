export async function getPopularCourses() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}items/courses?filter[popular_course][_eq]=true&fields=id,slug,name,duration,price,image,discount`,
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
