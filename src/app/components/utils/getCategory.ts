export async function getCategory() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}items/main_category?fields=id,slug,name,secondary_category.id,secondary_category.slug,secondary_category.name,secondary_category.courses.id,secondary_category.courses.name,secondary_category.courses.slug`,
      {
        cache: 'force-cache',
      }
    );

    if (!res.ok) {
      throw new Error(`HTTPS error! status: ${res.status}`);
    }

    const categories = await res.json();

    if (!categories || !categories.data) {
      throw new Error('Invalid response structure');
    }

    return categories.data;
  } catch (error: any) {
    return { error: error.message };
  }
}
