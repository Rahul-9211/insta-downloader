"use client";
import { GetStaticPaths, GetStaticProps } from "next";
// import { sampleModifiedBlogDataArray } from "../../utils/constsnt"; // Sample data for now
// import { ModifiedBlogData, modifyBlogData } from "../../utils/types"; // Assuming ModifiedBlogData is defined in utils/types
// import { formatDateToShortString } from "../../utils/function";
import axios from "axios";
import { useEffect, useState } from "react";
import useWindowSize from "@/utils/hooks/hooks/getWindowSize";
import { ModifiedBlogData } from "@/utils/interfaces";
import { formatDateToShortString } from "@/utils/funtion";
import { sampleModifiedBlogDataArray } from "@/utils/constant";
import Image from "next/image";
// import useWindowSize from "../../commonFunction/hooks/getWindowSize";

interface SocialIconProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  ariaLabel,
  children,
}) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full  bg-gray-100 transition-colors duration-200 hover:bg-gray-300"
  >
    {children}
  </a>
);
// Utility to extract headings for Table of Contents
const extractHeadings = (markdownText: string) => {
  const headingRegex = /^(#{1,6})\s+(.*)/gm; // Regex to capture markdown headings
  const headings: { level: number; text: string; id: string }[] = [];

  let match;
  while ((match = headingRegex.exec(markdownText)) !== null) {
    const [_, hashes, headingText] = match;
    const level = hashes.length; // Determine heading level (h1, h2, h3, etc.)
    const id = headingText.toLowerCase().replace(/\s+/g, "-"); // Generate ID from heading text
    headings.push({ level, text: headingText, id });
  }

  return headings;
};

interface Props {
  post: ModifiedBlogData;
}

const BlogContent = ({ post }: Props) => {
  const size = useWindowSize();
  const [headings, setHeadings] = useState<
    { level: number; text: string; id: string }[]
  >([]);

  useEffect(() => {
    if (post.body) {
      const extractedHeadings = extractHeadings(post.body);
      console.log(extractedHeadings); // Add this to see what is being extracted
      setHeadings(extractedHeadings);
    }
  }, [post.body]);

  return (
    <div>
      <div className=" font-workSans font-sans">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* breadCrumb  */}
          <div className="flex items-center font-workSans">
            <svg
              className="mr-4 h-5"
              viewBox="-1.6 -1.6 19.20 19.20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#98a2b3"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                  fill="#98a2b3"
                ></path>{" "}
              </g>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="icon mr-4 h-4"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#98a2b3"
              stroke="#98a2b3"
              strokeWidth="54.272000000000006"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#98a2b3"
                ></path>
              </g>
            </svg>
            <span className="font-workSans mr-4 text-[#98a2b3]">Posts</span>
            <svg
              viewBox="0 0 1024 1024"
              className="icon mr-4 h-4"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#98a2b3"
              stroke="#98a2b3"
              strokeWidth="54.272000000000006"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#98a2b3"
                ></path>
              </g>
            </svg>
            <span className="text-[#6B70FC]">{post.title}</span>
          </div>

          {/* Blog Title */}
          <h1 className="text-[60px] font-bold text-[#101828] font-workSans">
            {post.title}
          </h1>

          {/* Blog Meta (Tag and Date) */}
          <div className="mb-4 mt-4 flex items-center font-workSans">
            <span className="mr-4 rounded-2xl bg-[#E0E7FF] px-3 py-1 text-sm text-[#3830A2]">
              {post.tag}
            </span>
            <span className="text-sm text-gray-500">
              <li> {formatDateToShortString(post.dateTime)}</li>
            </span>
          </div>

          <div className="sticky  flex">
            {size.width > 760 && (
              <div className="prose mx-auto mr-16 w-[25%] py-4 lg:prose-xl">
                <h2 className="text-xl mb-4 font-semibold uppercase text-[#6B70FC] font-workSans">
                  Table of Contents
                </h2>
                <ul>
                  {headings.map((heading) => (
                    <li
                      key={heading.id}
                      className={`ml-${heading.level * 2} mt-4 font-workSans`}
                    >
                      <a
                        href={`#${heading.id}`}
                        className="font-workSans text-[#475467] text-base no-underline"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex space-x-4">
                  <SocialIcon href="#" ariaLabel="Copy link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </SocialIcon>
                  <SocialIcon
                    href="https://twitter.com/share"
                    ariaLabel="Share on Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#6B7280"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </SocialIcon>
                  <SocialIcon
                    href="https://www.facebook.com/sharer/sharer.php"
                    ariaLabel="Share on Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#6B7280"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </SocialIcon>
                  <SocialIcon
                    href="https://www.linkedin.com/shareArticle"
                    ariaLabel="Share on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#6B7280"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            )}

            {/* Blog Content */}
            <div className="flex-4  mx-auto md:w-[75%] font-workSans">
              <div className="text-base leading-relaxed text-gray-700">
                <div>
                    <Image  src={post.thumbnail[0]?.url}
                    alt="not loaded"
                    width={100}
                    height={100}
                    // layout="fill"

                    className="w-[100%] h-80"
                    />
                 
                </div>
                <div className="prose mx-auto py-10 lg:prose-xl">
                  {/* <ReactMarkdown
  remarkPlugins={[remarkGfm, remarkToc]} // Handle GitHub-flavored markdown and TOC
  rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeRaw]} // Ensure proper handling of headings and raw HTML
>
  {post.body}
</ReactMarkdown> */}
                </div>
              </div>
              <hr />
              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-[#101828]">
                  Share this post
                </h2>
                <div className="flex space-x-4 ">
                  <SocialIcon href="#" ariaLabel="Copy link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </SocialIcon>
                  <SocialIcon
                    href="https://twitter.com/share"
                    ariaLabel="Share on Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#6B7280"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </SocialIcon>
                  <SocialIcon
                    href="https://www.facebook.com/sharer/sharer.php"
                    ariaLabel="Share on Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#6B7280"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </SocialIcon>
                  <SocialIcon
                    href="https://www.linkedin.com/shareArticle"
                    ariaLabel="Share on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#6B7280"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
