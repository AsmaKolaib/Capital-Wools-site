
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


export const getProductsByCategorySlug = async (categorySlug: any, perPage = 50) => {
  // Get the category ID from the slug
  const response = await api.get('products/categories', {
    slug: categorySlug,
  });
  const categoryId = response.data[0].id; // Assuming the slug is unique, get the first category's ID

  // Fetch products by category ID
  return await api.get('products', {
    category: categoryId ,
    per_page: perPage || 50,
  });
};



// Get Single Product By Slug 
export const getProductBySlug = async (productSlug = '') => {
  return await api.get(
    'products',
    {
      slug: productSlug,
    },
  );
};


// Get Products
export const getProductsData = async (perPage = 50) => {
  return await api.get(
    'products',
    {
      per_page: perPage || 50,
    },
  );
};