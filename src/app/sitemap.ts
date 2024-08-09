import { MetadataRoute } from 'next'
import { MainCategoryInterface } from './data';
import { getCategory } from './components/utils/getCategory';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const main_categories: MainCategoryInterface[] | { error: string } = await getCategory();

  if ('error' in main_categories) {
    return basicSitemap();
  }

  const dynamic_seo = main_categories.map((main_category) => {
    const categoryUrls = main_category.secondary_category.map((category) => ({
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as 'daily',
      priority: 0.8,
    }));

    const courseUrls = main_category.secondary_category.flatMap((category) =>
      category.courses.map((course) => ({
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}course/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      }))
    );
    return [...categoryUrls, ...courseUrls]
  });

  const pages = dynamic_seo.flat();

  return [
    ...pages, ...basicSitemap()
  ] as MetadataRoute.Sitemap;
}

function basicSitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  return [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}contact/thank`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}enroll-thank`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}privacy`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}terms`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ] as MetadataRoute.Sitemap;
}