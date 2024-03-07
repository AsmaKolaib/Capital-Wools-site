
// Import the WooCommerce REST API library
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

// Initialize the WooCommerce REST API client
const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3"
});

// Define the handler function to fetch a product by slug
export default async function handler(req: any, res: any) {
  const responseData = {
    success: false,
    product: null,
    error: ''
  };

  const { slug } = req.query;
  console.log(req.query);

  try {
    // Fetch the product by its slug
    const { data } = await api.get(`products`, {
      slug: slug
    });

    // Check if the product was found
    if (data.length > 0) {
      responseData.success = true;
      responseData.product = data; // Assuming slug is unique, so we take the first product
    } else {
      responseData.error = "Product not found";
    }

    res.json(responseData);
  } catch (error: any) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}
