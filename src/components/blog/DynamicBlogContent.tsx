import { useEffect, useState } from "react";
import useWindowSize from "@/utils/hooks/hooks/getWindowSize";

interface Props {
  postBody: string;
}

const extractHeadings = (markdownText: string) => {
  const headingRegex = /^(#{1,6})\s+(.*)/gm;
  const headings: { level: number, text: string, id: string }[] = [];
  let match;
  while ((match = headingRegex.exec(markdownText)) !== null) {
    const [_, hashes, headingText] = match;
    const level = hashes.length;
    const id = headingText.toLowerCase().replace(/\s+/g, "-");
    headings.push({ level, text: headingText, id });
  }
  return headings;
};

const DynamicBlogContent = ({ postBody }: Props) => {
  const [headings, setHeadings] = useState<{ level: number, text: string, id: string }[]>([]);
  const size = useWindowSize();

  useEffect(() => {
    if (postBody) {
      const extractedHeadings = extractHeadings(postBody);
      setHeadings(extractedHeadings);
    }
  }, [postBody]);

  return (
    <div className="flex">
      {size.width > 760 && (
        <div className="prose lg:prose-xl mx-auto py-4 w-[25%] mr-16">
          <h2 className="font-semibold text-md mb-4 uppercase text-[#6B70FC]">Table of Contents</h2>
          <ul>
            {headings.map((heading) => (
              <li key={heading.id} className={`ml-${heading.level * 2} mt-4`}>
                <a href={`#${heading.id}`} className="text-[#475467] font-workSans">
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mx-auto flex-4 md:w-[75%]">
        {/* Blog content rendering logic here */}
        <div className="text-base text-gray-700 leading-relaxed">
          {/* Render markdown content here */}
        </div>
      </div>
    </div>
  );
};

export default DynamicBlogContent;
