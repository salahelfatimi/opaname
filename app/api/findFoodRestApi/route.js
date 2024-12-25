import { api } from "../WooCommerceRestApiConnect";


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.has("id") ? parseInt(searchParams.get("id"), 10) : null; 

  try {
    const response = await api.get(`products/${id}`, {
      _fields: 'id,name,date_created,status,description,price,categories,tags,images,attributes'
    });
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch Find Food:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch Find Food" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
