export async function getCategory() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}items/main_category?fields=id,name,secondary_category.id,secondary_category.name,secondary_category.courses.id,secondary_category.courses.name`,
    {
      cache: 'force-cache',
      // next: {
      //   revalidate: 5,
      // },
    }
  );

  const categories = await res.json();

  return categories;
}