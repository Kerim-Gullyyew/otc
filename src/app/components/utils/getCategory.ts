export async function getCategory() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}items/main_category?fields=id,slug,name,sort,secondary_category.id,secondary_category.slug,secondary_category.name,secondary_category.sort,secondary_category.courses.id,secondary_category.courses.name,secondary_category.courses.slug,secondary_category.courses.sort`,
      {
        next: {
          revalidate: 5,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTPS error! status: ${res.status}`);
    }

    const categories = await res.json();

    if (!categories || !categories.data) {
      throw new Error('Invalid response structure');
    }

    const sortedCategories = categories.data.map((category: any) => {
      const sortedSecondaryCategories = category.secondary_category.map((secondary: any) => {
        const sortedCourses = secondary.courses.sort((a: any, b: any) => a.sort - b.sort);
        return {
          ...secondary,
          courses: sortedCourses,
        };
      }).sort((a: any, b: any) => a.sort - b.sort);

      return {
        ...category,
        secondary_category: sortedSecondaryCategories,
      };
    }).sort((a: any, b: any) => a.sort - b.sort);

    return sortedCategories;
  } catch (error: any) {
    return { error: error.message };
  }
}
