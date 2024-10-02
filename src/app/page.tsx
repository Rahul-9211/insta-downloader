import Image from "next/image";

import InstagramForm from "@/components/instagram/InstagramForm";

import { cn } from "@/utils";
import HowToDownload from "@/components/HowToDownload/HowToDownload";
import Feature from "@/components/feature/Feature";
import Feature2 from "@/components/feature/Feature2";
import FAQSection from "@/components/FAQ";
import useWindowDimensions from "@/utils/hooks/PageDimentions";
// import { useState } from "react";
import InstagramBlobViewer from "@/components/Blob/InstagramBlobViewer";
import BlogClientComponent from "@/components/blog/BlogClientComponent";
import { sampleModifiedBlogDataArray } from "@/utils/constant";

const FEATURES_LIST = [
  {
    title: "Fast and Reliable",
    text: "Our reliable service ensures you get your videos without interruptions.",
  },
  {
    title: "High-Quality Downloads",
    text: "Download Instagram videos in the highest available quality.",
  },
  {
    title: "User-Friendly Interface",
    text: "No technical expertise required—just a few simple clicks.",
  },
  {
    title: "No Registration Required",
    text: "No need to create an account or log in.",
  },
  {
    title: "Unlimited Downloads",
    text: "Download as many Instagram videos as you want, with no restrictions.",
  },
  {
    title: "Supports Multiple Platforms",
    text: "Compatible with various devices and platforms, including Windows, macOS, Android, and iOS.",
  },
];

const BENEFITS_LIST = [
  "Download Instagram videos to back up your content.",
  "Download Instagram videos to preserve your memories",
  "Create your own video compilations using Instagram videos that you download.",
  "Download Instagram videos for research purposes, such as studying a particular trend or social phenomenon.",
  "Save your favorite Instagram videos to your device so you can watch them offline or share them with others.",
  "Use Instagram videos for your own creative projects, such as making YouTube videos or creating presentations.",
  "Download Instagram videos for educational purposes, such as learning about a new skill or watching a historical event.",
];

const FAQ_LIST = [
  {
    question: "Is this website free?",
    answer:
      "Yes, this website is free. We do not collect any personal information from our users.",
  },
  {
    question: "Can I download Instagram stories?",
    answer: "No, downloading Instagram stories is not supported.",
  },
  {
    question: "Can I download images from Instagram?",
    answer: "No, we only provide the service of downloading Instagram videos.",
  },
  {
    question: "Is this website secure?",
    answer:
      "Yes, this website is secure. We do not collect any personal information from our users.",
  },
  {
    question: "Can I use the website from my mobile?",
    answer: "Yes, you can use the website from your mobile or tablet.",
  },
  {
    question: "What if the video I want to download is not available?",
    answer:
      "If the video you want to download is not available, please try again later.",
  },
  {
    question: "Can I download Instagram videos from private accounts?",
    answer: "No, you cannot download Instagram videos from private accounts.",
  },
  {
    question: "What is the best format to download Instagram videos in?",
    answer:
      "The best format to download Instagram videos in is MP4. MP4 is a widely supported video format that can be played on most devices.",
  },
];

const menuItems = [
  { name: 'Video', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
    </svg>
  )},
  { name: 'Photo', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
    </svg>
  )},
  { name: 'Story', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
    </svg>
  )},
  { name: 'Reels', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
    </svg>
  )},
  { name: 'IGTV', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
    </svg>
  )},
]

export default function HomePage() {

  const posts = sampleModifiedBlogDataArray;
  // const [videoBlob , setVideoBlob] = useState<Blob | null>(null);
  // const getBlobUrl =(blob : Blob)=>{
  //   console.log(blob);
  //   setVideoBlob(blob);
  // }
  return (
    <main id="main" className="flex w-full flex-1 flex-col">
       <div className={cn(
          "flex w-full flex-col items-center px-4 py-32 shadow-sm ",
          "bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 "
        )}>
          <h1 className="text-white text-5xl font-semibold ">Blogs</h1>
        </div>
        <div className="mx-auto mb-12 mt-[-40px] rounded-md flex w-full max-w-5xl flex-col gap-8 px-2 text-sm md:px-4 md:text-base bg-white shadow-2xl pb-8">
        <div className="font-sans font-workSans ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pass posts data to the client component */}
        <BlogClientComponent posts={posts} />
      </div>
    </div>
    </div>
      {/* <section
        id="#download"
        className={cn(
          "flex w-full flex-col items-center px-4 py-28 shadow-sm ",
          "bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500"
        )}
      >
       

        <nav className="bg-white bg-opacity-20 rounded-full mb-8  max-w-3xl w-full md:max-w-3xl">
          <ul className="flex justify-between px-4 flex-wrap md:flex-nowrap">
            {menuItems.map((item) => (
              <li key={item.name} className="text-white md:px-6 rounded-full py-4  hover:bg-white hover:bg-opacity-10 cursor-pointer transition-colors">
                <button className="flex items-center 1">
                <span className="pr-1">  {item.icon}</span>
                 <span className="text-md hidden sm:inline-block">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <h1
          className={cn(
            "py-2 text-center text-2xl font-extrabold text-white sm:text-4xl"
          )}
        >
          Instagram Video Downloader
        </h1>
        <InstagramForm  />
        <p className="my-4 text-center text-xs text-white md:text-sm">
          If the download opens a new page, just right click the video and then
          click `Save as video`
        </p>
      </section> */}
      <div className="mx-auto mb-12 mt-8 flex w-full max-w-5xl flex-col gap-8 px-2 text-sm md:px-4 md:text-base">

        {/* here i started  blog  */}
       
     
{/* <Feature/> */}
        {/* <section id="welcome">
          <h2 className={cn("mb-4 text-xl font-bold sm:text-3xl")}>
            Welcome to Instagram Video Downloader
          </h2>
          <p className="leading-7">
            Welcome to Instagram Video Downloader! Unlock the world of Instagram
            videos like never before. Our user-friendly platform empowers you to
            effortlessly save your favorite Instagram videos, offering you the
            convenience and freedom to enjoy them offline. With high-quality
            downloads, speed, and reliability at the core of our service, you
            can trust us for all your video downloading needs. Explore our
            user-friendly interface and start building your own offline
            collection of Instagram content. Discover the world of Instagram
            videos with ease and convenience, right here!
          </p>
        </section>

        <hr className="w-full" />

        <section id="features">
          <h2 className={cn("mb-2 text-xl font-semibold sm:text-2xl")}>
            Instagram Video Downloader Features
          </h2>
          <ul className="ml-6 flex list-disc flex-col gap-1 leading-7">
            {FEATURES_LIST.map(({ title, text }, index) => (
              <li key={index}>
                <span className="font-medium">{title}</span>
                {": "}
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="w-full" />

        <section id="instructions">
          <h2 className={cn("py-2 text-xl font-semibold sm:text-2xl")}>
            How to download Instagram videos
          </h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Go to the Instagram video that you want to download.</li>
            <li>Copy the URL of the video.</li>
            <li>Paste the URL into the search bar on this website.</li>
            <li>Click the `Download` button.</li>
          </ol>
        </section>

        <hr className="w-full" />

        <section id="benefits">
          <h2 className={cn("py-2 text-xl font-semibold sm:text-2xl")}>
            Benefits of using our Downloader
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {BENEFITS_LIST.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <hr className="w-full" />

        <section id="faq">
          <h2 className={cn("py-2 text-xl font-semibold sm:text-2xl")}>
            Frequently Asked Questions - FAQ
          </h2>
          <ul className="list-disc pl-6">
            {FAQ_LIST.map(({ question, answer }, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold">{question}</p>
                <p>{answer}</p>
              </li>
            ))}
          </ul>
        </section> */}
 {/* {videoBlob && <InstagramBlobViewer blob={videoBlob} />} */}
        {/* <HowToDownload/>
        <Feature2/>
        <FAQSection/> */}
        <hr className="w-full" />
      </div>
    </main>
  );
}
