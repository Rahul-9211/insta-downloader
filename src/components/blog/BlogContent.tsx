// components/BlogContent.tsx
"use client";
import { useEffect, useState } from "react";
import useWindowSize from "@/utils/hooks/hooks/getWindowSize"; // Custom hook to get window size
import { ModifiedBlogData } from "@/utils/interfaces"; // Assuming this interface is defined // Function to format date
import { formatDateToShortString } from "@/utils/funtion";

interface SocialIconProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, ariaLabel, children }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300 transition-colors duration-200 bg-gray-100"
  >
    {children}
  </a>
);

const extractHeadings = (markdownText: string) => {
  const headingRegex = /^(#{1,6})\s+(.*)/gm;
  const headings: { level: number; text: string; id: string }[] = [];
  
  let match;
  while ((match = headingRegex.exec(markdownText)) !== null) {
    const [_, hashes, headingText] = match;
    const level = hashes.length;
    const id = headingText.toLowerCase().replace(/\s+/g, "-");
    headings.push({ level, text: headingText, id });
  }

  return headings;
};

interface Props {
  post: ModifiedBlogData; // Assuming this interface includes title, body, dateTime, etc.
}

const BlogContent: React.FC<Props> = ({ post }) => {
  const size = useWindowSize(); // Get the window size
  const [headings, setHeadings] = useState<{ level: number; text: string; id: string }[]>([]);

  useEffect(() => {
    if (post.body) {
      const extractedHeadings = extractHeadings(post.body); // Extract headings from post body
      setHeadings(extractedHeadings);
    }
  }, [post.body]);

  return (
    <div className="p-4"> {/* Add some padding */}
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <span className="text-gray-500">{formatDateToShortString(post.dateTime)}</span>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.body }} /> {/* Render blog body safely */}
      
      {/* Table of Contents */}
      {size.width > 760 && headings.length > 0 && ( // Show TOC if window size > 760 and headings are present
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Table of Contents</h2>
          <ul className="list-disc pl-5">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a href={`#${heading.id}`} className="text-blue-600 hover:underline">
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Social Share Icons */}
      <div className="mt-4 flex space-x-2">
        <SocialIcon href="#" ariaLabel="Share on Twitter">
          {/* Replace with actual Twitter icon */}
          <svg className="w-5 h-5" /* Add your Twitter icon SVG here */ />
        </SocialIcon>
        {/* Add more social icons as needed */}
        <SocialIcon href="#" ariaLabel="Share on Facebook">
          {/* Replace with actual Facebook icon */}
          <svg className="w-5 h-5" /* Add your Facebook icon SVG here */ />
        </SocialIcon>
        {/* Add other social media icons as necessary */}
      </div>
    </div>
  );
};

export default BlogContent;
