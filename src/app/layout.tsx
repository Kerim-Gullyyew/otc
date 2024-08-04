import type { GetServerSidePropsContext, Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from 'axios';
import { MainCategoryInterface } from "./data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const res = await fetch(
    `${process.env.WEBSITE_URL}items/main_category?fields=*,secondary_category.*,secondary_category.courses.*`,
    {
      next: {
        revalidate: 5,
      },
    }
  );

  const main_categories: { data: MainCategoryInterface[] } = await res.json();

  return (
    <html lang="en">
      <body className="">
        <header className="flex flex-col items-center">
          <Header main_categories={main_categories} />
        </header>
        <main className="flex container flex-col pt-[60px] w-full min-h-screen">
          {children}
        </main>


      </body>
    </html>
  );

}



