'use client'; // Marks this as a client component

import { useState } from 'react';
import Link from 'next/link';
import { ModifiedBlogData } from '@/utils/interfaces';
import { formatDateToShortString } from '@/utils/funtion';

interface Props {
  posts: ModifiedBlogData[];
}

export default function BlogClientComponent({ posts }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const postsPerPage = 9;

  // Get unique tags from the posts
  const uniqueTags = Array.from(new Set(posts.map((post) => post?.tag)));

  // Filter posts by active tag
  const filteredPosts = activeTag
    ? posts.filter((post) => post.tag === activeTag)
    : posts;

  // Calculate total posts based on the filtered results
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle tag click
  const handleTagClick = (tag: string) => {
    // Set active tag or reset if the same tag is clicked
    setActiveTag(activeTag === tag ? null : tag);
    setCurrentPage(1); // Reset to the first page when a new tag is selected
  };

  // Handle pagination button click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {/* Render unique tags above the collections */}
      <div className="py-8 pb-0">
        <ul className="flex flex-wrap gap-2">
          {uniqueTags.map((tag) => (
            <li key={tag}>
              <button
                onClick={() => handleTagClick(tag || "")}
                className={`inset-0 hover:bg-[#E0E7FF] rounded-full py-2 px-4 mr-4 cursor-pointer text-base font-semibold ${
                  activeTag === tag ? 'text-[#6B70FC] bg-[#E0E7FF]' : 'text-[#344054]'
                }`}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-2xl py-2 sm:py-3 lg:max-w-none lg:py-4">
        <div className="mt-6 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {currentPosts.length > 0 ? (
                currentPosts.map((callout) => (
                <Link href={`/blog/${callout.slug}`}>

              <div key={callout.id} className="group relative">
                  <div className="shadow relative h-auto w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-1 lg:aspect-w-2 lg:aspect-h-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.title}
                      src={callout.thumbnail[0]?.url}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <span className="flex font-medium text-sm font-workSans items-center">
                    <span className="inset-0 text-[#3830A2] bg-[#E0E7FF] rounded-2xl py-1 px-3 mr-4">
                      {callout.tag}
                    </span>
                    <span>{formatDateToShortString(callout.dateTime)}</span>
                  </span>
                </h3>
                <p className="font-semibold text-gray-900 text-xl mt-2 font-workSans">{callout.title}</p>
              </div>
              </Link>

            ))
          ) : (
            <p>No posts available for this tag.</p>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
