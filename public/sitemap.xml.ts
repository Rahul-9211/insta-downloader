// import { sampleModifiedBlogDataArray } from "@/utils/constant";

// export default function Sitemap() {
//   const blogPosts = sampleModifiedBlogDataArray; // Assuming `ModifiedBlogData` contains your blog data

//   console.log("🚀 ~ Sitemap ~ blogPosts:", blogPosts)
//   return (
//     <xml version="1.0" encoding="UTF-8">

//       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       <url>
//        <loc>https://fastvideosave.com/aboutUs</loc>
//      </url>
//         {blogPosts.map((post) => (
//           <url key={post.id}>
//             <loc>{`https://fastvideosave.com/blog/${post.slug}`}</loc>
//             <lastmod>{new Date(post.updatedAt).toISOString()}</lastmod>
//           </url>
//         ))}
//       </urlset>
//     </xml>
//   );
// }
