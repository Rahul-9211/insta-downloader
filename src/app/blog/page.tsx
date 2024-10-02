import { sampleModifiedBlogDataArray } from '@/utils/constant';
import BlogClientComponent from '@/components/blog/BlogClientComponent';

export default async function BlogIndex() {
  // Simulating data fetch (replace with your actual API logic)
  const posts = sampleModifiedBlogDataArray;

  return (
    <div className="font-sans font-workSans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pass posts data to the client component */}
        <BlogClientComponent posts={posts} />
      </div>
    </div>
  );
}
