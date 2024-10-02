// Interface for the modified content
// Interface for Thumbnail attributes
interface ThumbnailAttributes {
    url: string;
  }
  
  // Interface for each thumbnail object in the data array
  interface ThumbnailData {
    id: number;
    attributes: ThumbnailAttributes;
  }
  
  // Interface for the Thumbnail structure
  interface Thumbnail {
    data: ThumbnailData[];
  }
  
  // Interface for Content attributes
  interface BlogContentItem {
    id: number;
    __component: string;
    displayText?: string;
    paragraph?: string;
  }
  
  // Interface for the Blog attributes
  interface BlogAttributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    author: string;
    dateTime: string;
    tag: string;
    body: string;
    thumbnail: Thumbnail;
    content: BlogContentItem[];
  }
  
  // Interface for each blog post (data array)
  interface BlogPost {
    id: number;
    attributes: BlogAttributes;
  }
  
  // Interface for the overall API response
  interface ApiResponse {
    data: BlogPost[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }

  // Interface for the modified content
interface ModifiedContentItem {
    id: number;
    __component: string;
    displayText?: string;
    paragraph?: string;
  }
  
  // Interface for the modified thumbnail
  interface ModifiedThumbnail {
    url: string;
  }
  
  // Interface for the modified blog data structure
 export  interface ModifiedBlogData {
    id : string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    author: string;
    dateTime: string;
    tag: string;
    body: string;
    thumbnail: ModifiedThumbnail[];
  }
  