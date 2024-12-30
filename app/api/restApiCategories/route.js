import { api } from "../WooCommerceRestApiConnect";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;  // Default to page 1 if not provided
  const perPage = searchParams.get("perPage") || 15;  // Default to 15 products per page if not provided
  const type = searchParams.get("type") || 16;  // Default to parent category ID (you can adjust this)

  try {
    // Fetch categories from WooCommerce API
    const response = await api.get("products/categories", {
      per_page: perPage,  
      parent: type,      
      status: "publish", 
      page: page,         
      _fields: "id,name",
    });

    // Sort categories by ID in descending order to get the most recent ones first
    const sortedCategories = response.data.sort((a, b) => b.id - a.id);  

    return new Response(JSON.stringify(sortedCategories), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch categories" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
