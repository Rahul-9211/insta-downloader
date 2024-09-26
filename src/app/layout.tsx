import { Inter as MainFont } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/utils";
import { mainMetadata } from "@/configs/seo";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUpButton from "@/components/ScrollUpButton";
import { Roboto } from '@next/font/google';
import Head from "next/head";
import '../styles/globals.css';
import NewFooter from "@/components/NewFooter";


const mainFont = MainFont({
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})


export const metadata = mainMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body
        className={cn(
          "overflow-x-hidden bg-stone-50 text-black",
          "flex min-h-screen w-full flex-col justify-between",
          "scroll-smooth",
          mainFont.className
        )}
      >
        <Navbar />
        <ScrollUpButton />
        {children}
        <NewFooter />
      </body>
    </html>
  );
}
