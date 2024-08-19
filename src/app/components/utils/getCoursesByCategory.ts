
export async function getCoursesByCategory(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}items/secondary_category/?filter[slug][_eq]=${slug}&limit=1&fields=*,courses.id,courses.slug,courses.name,courses.sort,courses.image,courses.duration,courses.price`,
      {
        next: {
          revalidate: 5,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!data || !data.data || !data.data[0]) {
      throw new Error('Invalid response structure or no data found');
    }

    const categoryData = data.data[0];

    categoryData.courses.sort((a: any, b: any) => a.sort - b.sort);

    return categoryData;
  } catch (error: any) {
    return { error: error.message };
  }
}