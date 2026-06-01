import { NextResponse } from "next/server";
import { fetchAuth } from "@/ultil/fetchAuth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "";
  const api_url = process.env.API_URL || "";

  let id: string = "";
  let href: string = "";

  try {
    const responeWordpress = await fetchAuth({
      url: `${api_url}/form`,
      revalidate: 300
    });

    if (!responeWordpress.ok) {
      return NextResponse.json(
        { error: "Fetch failed" },
        { status: responeWordpress.status }
      );
    }

    const data: any[] = await responeWordpress.json();
    const htmlString = data?.length > 0 ? data[0]?.acf?.[String(type)] : "";

    // Extract ID
    const idIndex = htmlString.indexOf('id="');
    if (idIndex !== -1) {
      const idStart = idIndex + 'id="'.length;
      const idEnd = htmlString.indexOf('"', idStart);
      if (idEnd !== -1) {
        id = htmlString.substring(idStart, idEnd);
      }
    }

    // Extract HREF
    const hrefIndex = htmlString.indexOf("https://");
    if (hrefIndex !== -1) {
      const hrefStart = hrefIndex;
      const hrefEnd = htmlString.indexOf("&#8221", hrefStart);
      if (hrefEnd !== -1) {
        href = htmlString.substring(hrefStart, hrefEnd);
      } else {
        const hrefEnd = htmlString.indexOf('"', hrefStart);
        if (hrefEnd !== -1) href = htmlString.substring(hrefStart, hrefEnd);
      }
    }

    return NextResponse.json({ id, href });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
