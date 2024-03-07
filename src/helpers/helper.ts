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
export const getAllCategories = async () => {
  return await api.get(
    'products/categories',
    {
      per_page: 100,
    },
  );
};

export async function fetchPosts(limit = 3) {
  try {
    const reqUrl = 'https://dashboard.capitalwools.com/wp-json/wp/v2/posts?_fields=id,slug,title,date,content,featured_media';
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

