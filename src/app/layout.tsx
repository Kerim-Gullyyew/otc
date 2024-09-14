import type { GetServerSidePropsContext, Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MainCategoryInterface } from "./data";
import { getCategory } from "./components/utils/getCategory";
import type { Viewport } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { schoolSchema } from "./lib/schema/SchoolSchema";
import { faqSchema } from "./lib/schema/FaqSchema";
import { organizationSchema } from "./lib/schema/OrganizationSchema";
import { reviewSchema } from "./lib/schema/ReviewSchema";
import { websiteSchema } from "./lib/schema/WebsiteSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "normal",
  themeColor: "#4169E1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://onlinetutoringcourses.com/"),

  title: "Online Tutoring Courses | Expert Tutors for All Subjects & Grades",
  description:
    "Discover personalized online tutoring courses tailored to your learning needs. Our expert tutors provide one-on-one instruction in all subjects and grades, helping students achieve academic success from the comfort of their homes. Enroll now to boost your grades and confidence!",
  applicationName: "",
  authors: [
    {
      name: "Online Tutoring Courses",
      url: "https://onlinetutoringcourses.com/",
    },
  ],
  generator: "Next.js",
  keywords:
    "online tutoring, online courses, online tutors, personalized tutoring, online learning, academic tutoring, virtual tutoring, subject-specific tutoring, tutoring for all grades, one-on-one tutoring, expert tutors, tutoring services online, e-learning courses, homework help online, math tutoring, science tutoring, english tutoring, test prep tutoring, affordable online tutoring, flexible online tutoring, interactive online tutoring, online education, customized learning plans, tutor matching service, online study help, 24/7 tutoring support, online classroom, digital tutoring platform, tutor-led courses, online academic coaching, sat prep tutoring, act prep tutoring, online tutoring for k-12, college-level tutoring, advanced placement tutoring, tutoring for standardized tests, online tutoring sessions, remote learning, virtual classroom assistance, online academic enrichment, online tutoring for homeschooling, stem tutoring online, language tutoring online, online tutoring for special needs, online tutoring for adults, international online tutoring, global online tutors, worldwide tutoring services, online tutoring for international students, cross-border tutoring, international education support, multilingual tutoring online, online tutoring for expats, global e-learning platform, online tutoring in multiple languages, international academic support, worldwide online education, international curriculum tutoring, online tutoring across time zones, global virtual classrooms, tutoring for international schools, online learning for global students, online tutoring in different languages, global academic coaching, international test prep tutoring, online tutoring for ib students, international student tutoring services, cross-cultural online tutoring, worldwide academic enrichment",
  referrer: "origin",
  creator: "Online Tutoring Courses",
  publisher: "Online Tutoring Courses",
  robots: "index, follow",
  alternates: { canonical: "https://onlinetutoringcourses.com/" },
  icons: "./icon.ico",
  manifest: "manifest",
  openGraph: {
    title: "Top Online Tutoring Courses",
    description:
      "Boost your grades with personalized online tutoring. Expert tutors for all subjects & grades.",
    url: "https://onlinetutoringcourses.com/",
    siteName: "Online Tutoring Courses",
    images: [
      {
        url: "https://onlinetutoringcourses.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Online Tutoring Courses",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@onlinetutoringcourses",
    creator: "@onlinetutoringcourses",
    images:
      "https://pbs.twimg.com/profile_banners/1483361690519486469/1711116188/600x200",
  },
  verification: {
    google: "08jm9bLhghGJ1wdA_Xoq7Zec8ajJmsPFsCOfwkAsHBQ",
    // yandex: "1234567890",
    // me: "1234567890",
  },
  appleWebApp: true,
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  // itunes: {
  //   appId: "23423",
  //   appArgument: "324234",
  // },
  abstract:
    "Discover personalized online tutoring courses tailored to your learning needs. Our expert tutors provide one-on-one instruction in all subjects and grades, helping students achieve academic success from the comfort of their homes. Enroll now to boost your grades and confidence!",
  appLinks: null,
  // archives: "https://example.com/archives",
  // assets: "https://example.com/assets",
  // bookmarks: "https://example.com/bookmarks",
  // category: "My category",
  // classification: "My Classification",
  // other: {},
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const main_categories: MainCategoryInterface[] | { error: string } =
    await getCategory();

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="32x32"
        />
        <Script
          id="school-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          id="review-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-TM32QNJ9" />
      <GoogleAnalytics gaId="G-EXHS00LPQS" />
      <body className="">
        <header className="flex flex-col items-center">
          {!("error" in main_categories) && (
            <Header main_categories={main_categories} />
          )}
        </header>
        <main className="flex flex-col pt-[55px] w-full min-h-screen">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
