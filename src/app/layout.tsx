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
import { GoogleTagManager } from '@next/third-parties/google';

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
      <head>
      <meta name="google-site-verification" content="Vu1FnigGDboNlIeIP7b5IlNcXtZa5Nu4sdOWW7iNJnY" />
      </head>
      <Head>
      <meta name="google-site-verification" content="Vu1FnigGDboNlIeIP7b5IlNcXtZa5Nu4sdOWW7iNJnY" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
       {/* Google Tag Manager */}
       {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-CT8789G4S4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CT8789G4S4');
            `,
          }}
        /> */}
      </Head>
      <body
        className={cn(
          "overflow-x-hidden bg-stone-50 text-black",
          "flex min-h-screen w-full flex-col justify-between",
          "scroll-smooth",
          mainFont.className
        )}
      >
        <GoogleTagManager gtmId="G-CT8789G4S4" />
        <Navbar />
        <ScrollUpButton />
        {children}
        <NewFooter />
      </body>
    </html>
  );
}
