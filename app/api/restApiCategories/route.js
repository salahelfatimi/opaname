import { api } from "../WooCommerceRestApiConnect";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const perPage = searchParams.get("perPage") || 15;
  const type = searchParams.get("type") || 16; 

  try {
    const response = await api.get('products/categories', {
      per_page: perPage,
      parent: type, 
      status: 'publish', 
      page: page,
      _fields: 'id,name'
    });

    // Return the response with child categories
    return new Response(JSON.stringify(response.data), {
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
