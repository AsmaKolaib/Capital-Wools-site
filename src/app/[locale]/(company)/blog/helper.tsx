import axios from 'axios';
import DOMPurify from 'dompurify';
export const sanitize = ( content: any ) => {
	return 'undefined' !== typeof window ? DOMPurify.sanitize( content ) : content;
};

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
export async function fetchPosts(limit = 3,lang="en") {
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

// export async function fetchPosts(limit = 3, lang = 'en') {
//   try {
//     const reqUrl = `https://dashboard.capitalwools.com/wp-json/wp/v2/posts?_fields=id,slug,title,date,content,featured_media&lang=${lang}`;
//     const res = await axios.get(reqUrl);
//     const fetchedPosts = res.data.slice(0, limit);

//     const formattedPosts = await Promise.all(fetchedPosts.map(async (post: { featured_media: any; id: any; slug: any; title: { rendered: any; }; date: any; content: { rendered: any; }; }) => {
//       const featuredMediaId = post.featured_media;
//       const featuredMediaUrl = await getFeaturedMediaUrl(featuredMediaId);
//       return {
//         id: post.id,
//         slug: post.slug,
//         title: post.title.rendered,
//         date: post.date,
//         content: post.content.rendered,
//         featuredImage: featuredMediaUrl || 'https://placehold.co/600x400', // Use a placeholder image URL if featured image is not available
//       };
//     }));

//     return formattedPosts;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }




// Get All post by slug
export const fetchPostData =async(slug: string)=>{
  try {
  const reqUrl = `https://dashboard.capitalwools.com/wp-json/wp/v2/posts?_fields=id,slug,date,title,content,featured_media&slug=${slug}`;
    const res = await axios.get(reqUrl);
    const postData = res.data[0];
  
    const featuredMediaId = postData.featured_media;
    const featuredMediaUrl = await getFeaturedMediaUrl(featuredMediaId);
  
    return {
        title: postData.title.rendered,
        content: postData.content.rendered,
        date: postData.date,
        featuredImage: featuredMediaUrl || 'https://placehold.co/600x400',
    };
  }
    catch (error) {
      console.error('Error fetching post data:', error);
      throw error;
  }
  }

// Get All post by slug
// export const fetchPostData = async (slug: string, lang: string) => {
//   const reqUrl = `https://dashboard.capitalwools.com/wp-json/wp/v2/posts?_fields=id,slug,date,title,content,featured_media&slug=${slug}&lang=${lang}`;
//   const res = await axios.get(reqUrl);
//   const postData = res.data[0];

//   const featuredMediaId = postData.featured_media;
//   const featuredMediaUrl = await getFeaturedMediaUrl(featuredMediaId);

//   return {
//       title: postData.title.rendered,
//       content: postData.content.rendered,
//       date: postData.date,
//       featuredImage: featuredMediaUrl || 'https://placehold.co/600x400',
//   };
// }
