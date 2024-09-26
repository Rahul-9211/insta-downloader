"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import IconButton from "@/components/ui/IconButton";

import { cn } from "@/utils";
import { Button } from "./ui/Button";

const navbarLinks = [
  {
    name: "Home",
    href: "/",
    target: "_self",
  },
];

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navbarRef = React.useRef<HTMLElement>(null);
  // Close Mobile Nav if screen size is bigger than 768
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  }, []);

  // Close Mobile Nav on click outside Navbar
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenNav(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-fit w-full">
      <nav
        ref={navbarRef}
        className={cn(
          "z-[999] w-full items-center justify-between bg-white",
          "flex flex-col md:flex-row md:px-4",
          openNav ? "shadow-none" : "shadow-sm"
        )}
      >
        <div className="flex w-full items-center justify-between px-2">
          {/* Logo */}
          <Link href="/">
          <div
            aria-label="Logo"
            className={cn(
              "flex select-none items-center gap-1  font-extrabold",
              "animate-rgb bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
            )}
          >
            
            <Image
              src={"/images/fastVideoSave.png"}
              width={200}
              height={50}
              alt="logo"
              className=""
            />
            
            {/* <span className="text-2xl">Insta Download</span> */}
           
          </div>
          </Link>
          {/* Mobile Nav Button */}
          <IconButton
            onClick={() => setOpenNav(!openNav)}
            className="p-1 md:hidden"
          >
            <span className="text-2xl">
              {openNav ? <IoCloseSharp /> : <RxHamburgerMenu />}
            </span>
          </IconButton>
        </div>
        {/* Desktop */}
       {/*  <div className="hidden items-center gap-8 pr-4 text-lg font-light md:flex">
          {navbarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.target}
              className="hover:text-purple-600 hover:underline"
            >
              {link.name}
            </Link>
        </div>
          ))} */}
         
         <div className="flex justify-center ">
      <Button
        className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50text"
      >
        <EnvelopeIcon className="w-4 h-5 mr-2 text-sm" />
        Connect 
      </Button>
    </div>
        {/* Mobile Nav */}
        {openNav && (
          <div className="relative z-[999] w-full md:hidden">
            <div
              className={cn(
                "full-top absolute flex w-full flex-col items-start gap-1 rounded-b p-2 shadow-md",
                "animate-[fade-in_0.2s_ease-in-out_1] bg-white"
              )}
            >
              {navbarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.target}
                  onClick={() => setOpenNav(false)}
                  className="w-full rounded bg-gray-50 px-4 py-2 text-center text-lg font-light text-primary hover:text-purple-600 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

function EnvelopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
