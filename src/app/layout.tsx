import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from 'axios';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Time = {
  bynber: string;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const res = await fetch(
    'http://localhost:8055/items/main_category?fields=*,secondary_category.*,secondary_category.courses.*',
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const data: Time = await res.json();
  return (
    <html lang="en">
      <body className="">
        <header className="flex flex-col items-center">
          <Header data={data} />
        </header>
        <main className="flex container flex-col mt-[60px] w-full min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}




