"use server"

export async function getSearchCourses(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}items/courses?filter[_or][0][name][_contains]=${slug}&filter[_or][1][description][_contains]=${slug}&fields=id,name,slug,image,duration,price`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const foundCourses = await res.json();

    if (!foundCourses || !foundCourses.data) {
      throw new Error('Invalid response structure');
    }

    return foundCourses.data;
  } catch (error: any) {
    return { error: error.message };
  }


}