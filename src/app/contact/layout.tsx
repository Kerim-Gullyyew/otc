import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Tutoring Courses | Contact",
  description:
    "Discover personalized online tutoring courses tailored to your learning needs. Our expert tutors provide one-on-one instruction in all subjects and grades.",
  abstract:
    "Discover personalized online tutoring courses tailored to your learning needs. Our expert tutors provide one-on-one instruction in all subjects and grades, helping students achieve academic success from the comfort of their homes. Enroll now to boost your grades and confidence!",
  alternates: { canonical: "https://onlinetutoringcourses.com/contact" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
