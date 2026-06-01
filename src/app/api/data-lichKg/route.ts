import { NextResponse } from "next/server";
import { fetchAuth } from "@/ultil/fetchAuth";

export async function GET() {
  const api_url = process.env.API_URL || "";
  let filteredLines: string[] = [];
  let content: any[] = [];

  try {
    const responeWordpress = await fetchAuth({
      url: `${api_url}/lich-khai-giang/?id=304`,
      revalidate: 300
    });

    if (!responeWordpress.ok) {
      return NextResponse.json(
        { error: "Fetch failed" },
        { status: responeWordpress.status }
      );
    }

    const data: any[] = await responeWordpress.json();
    const htmlString = data?.length > 0 ? data[0]?.content?.rendered : ``;
    const textContent = htmlString.replace(/(&#8211;|<[^>]*>)/g, "");
    const lines = textContent.split("\n");

    content = data;
    filteredLines = lines
      ?.filter((line: string) => line.trim() !== "")
      ?.map((line: string) => line.trim());

    return NextResponse.json({
      list: filteredLines || [],
      content: content || []
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
