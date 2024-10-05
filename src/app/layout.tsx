import { Inter as MainFont } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUpButton from "@/components/ScrollUpButton";
import { Roboto } from '@next/font/google';
import Script from 'next/script'; // Import Script from Next.js for managing external scripts
import NewFooter from "@/components/NewFooter";

const mainFont = MainFont({
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Vu1FnigGDboNlIeIP7b5IlNcXtZa5Nu4sdOWW7iNJnY" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "overflow-x-hidden bg-stone-50 text-black",
          "flex min-h-screen w-full flex-col justify-between",
          "scroll-smooth",
          mainFont.className
        )}
      >
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CT8789G4S4"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CT8789G4S4');
            `,
          }}
        />
        
        <Navbar />
        <ScrollUpButton />
        {children}
        <NewFooter />
      </body>
    </html>
  );
}
