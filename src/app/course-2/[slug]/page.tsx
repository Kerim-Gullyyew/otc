import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import React from 'react'

interface BlogProps {
  data: {
    id: string;
    sort: boolean;
    date_created: string;
    name: string;
    description: string;
    mini_description: string;
    image: string;
    price: number;
    discount: number | null;
    sessions_weekly: number;
    duration: number;
    what_learn: null,
    secondary_category: string,
    syllabus:
    {
      id: number;
      sort: null;
      date_created: string;
      name: string;
      description: string;
      course: string;
    }[]
  }
}

interface pageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const Blog: React.FC<BlogProps> = ({ }) => {

  return (
    <div>
      asdsad
    </div>
  )
}


export async function getStaticProps({ params }: pageProps, context: GetStaticPropsContext) {
  const id = params.slug

  const res = await fetch(
    `${process.env.WEBSITE_URL}items/courses/${id}?fields=*,syllabus.*`,
    {
      next: {
        revalidate: 5,
      },
    }
  );

  const course: { data: BlogProps } = await res.json();
  return {
    course
  }
}
export default Blog