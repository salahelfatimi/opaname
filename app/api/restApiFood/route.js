import { api } from "../WooCommerceRestApiConnect";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = await  searchParams.get("page") || 1;
  const perPage = await  searchParams.get("perPage") || 10;
  const category = await  searchParams.get("category");
  try {
    const response = await api.get('products', {
      per_page: perPage,
      category: category,
      status: 'publish',
      page:page,
      order_by: 'category',
      order:'asc',
      _fields: 'id,name,date_created,status,description,price,categories,tags,images,attributes'
    });
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
