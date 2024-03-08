import axios from 'axios';
import DOMPurify from 'dompurify';

export const sanitize = ( content: any ) => {
	return 'undefined' !== typeof window ? DOMPurify.sanitize( content ) : content;
};






const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});


// Get All Categories
// export const getTheCategoriesImages  = async () => {
//   return await api.get(
//     'products/categories',
//     {
//       per_page: 100,
//     },
//   );
// };
// export const getAllCategories = async (lang: any) => {
//   return await api.get(
//     'products/categories',
//     {
//       params: {
//         per_page: 100,
//         lang: lang
//       }
//     },
//   );
// };

// export const getTheCategoryImage = async (id) => {
//   const { data  : imageSrc} = await api.get(
//     `products/categories/${id}`
//   );
//   if(imageSrc === null)
//   return ""
  
//   return imageSrc.image.src || ""
// };
export const getTheCategoryImage = async (id) => {
  try {
    const { data: imageSrc } = await api.get(
      `products/categories/${id}`
    );
    return imageSrc.image.src || "";
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return "";
    } else {
      console.error('Error fetching category image:', error);
      return ""; // Return an empty string or handle the error as needed
    }
  }
};


export const getAllCategories = async (lang: string) => {
  try {
    const reqUrl = `https://dashboard.capitalwools.com/wp-json/wc/v3/categories?lang=${lang}`;


    const response = await axios.get(reqUrl);
    console.log("response",response);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};



export async function fetchPosts(limit = 3, lang="en") {
  try {
    const reqUrl = `https://dashboard.capitalwools.com/wp-json/wp/v2/posts?_fields=id,slug,title,date,content,featured_media&lang=${lang}`;
    const res = await axios.get(reqUrl);
    const fetchedPosts = res.data.slice(0, limit);

    const formattedPosts = await Promise.all(fetchedPosts.map(async (post: { featured_media: any; id: any; slug: any; title: { rendered: any; }; date: any; content: { rendered: any; }; }) => {
      const featuredMediaId = post.featured_media;
      const featuredMediaUrl = await getFeaturedMediaUrl(featuredMediaId);
      return {
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        date: post.date,
        content: post.content.rendered,
        featuredImage: featuredMediaUrl || 'https://placehold.co/600x400', // Use a placeholder image URL if featured image is not available
      };
    }));

    return formattedPosts;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}




export const getFeaturedMediaUrl = async (mediaId: number) => {
  try {
    const reqUrl = `https://dashboard.capitalwools.com/wp-json/wp/v2/media/${mediaId}`;
    const res = await axios.get(reqUrl);
    return res.data.source_url;
  } catch (error) {
    console.error('Error fetching media data:', error);
    return null;
  }
};

