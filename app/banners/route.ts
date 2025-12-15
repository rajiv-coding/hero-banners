
import banners from "../data/banners.json"

export async function GET() {
  return Response.json(banners, {
    headers: { "Cache-Control": "public, max-age=60" },
  });
}
