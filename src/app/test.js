import fetch from 'node-fetch';
import { writeFileSync } from 'fs';

// Define the URL to fetch the data
const url = 'https://www.lal10.com/blogs';

// Function to fetch and process data
async function fetchBlogData() {
    try {
        // Fetch the data from the URL
        const response = await fetch(url);
        const data = await response.json();

        // Extract the blog posts from the data
        const posts = data.state.loaderData.root.posts;

        // Filter and extract the required fields
        const filteredPosts = posts.map(post => ({
            title: post.title,
            slug: post.slug,
            publish_date: post.publish_date,
            cover: post.cover,
        }));

        // Save the filtered data to a JSON file
        writeFileSync('filteredBlogs.json', JSON.stringify(filteredPosts, null, 2));

        console.log('Filtered blog data has been saved to filteredBlogs.json');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Run the function to fetch and process the data
fetchBlogData();
