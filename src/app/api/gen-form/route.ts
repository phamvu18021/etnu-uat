import { NextResponse } from "next/server";
import { fetchAuth } from "@/ultil/fetchAuth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "form-main";
  const api_url = process.env.API_URL;

  if (!api_url) {
    return NextResponse.json(
      { type: "unknown", url: "", divId: "", error: "API_URL is not defined" },
      { status: 500 }
    );
  }

  try {
    const responseWordpress = await fetchAuth({
      url: `${api_url}/form`,
      revalidate: 300
    });

    if (!responseWordpress.ok) {
      return NextResponse.json(
        { error: "Fetch failed" },
        { status: responseWordpress.status }
      );
    }

    const data: any[] = await responseWordpress.json();
    const htmlString = data?.length > 0 ? data[0]?.acf?.[String(type)] : "";

    if (!htmlString) {
      return NextResponse.json(
        { type: "unknown", url: "", divId: "", error: "No form data found" },
        { status: 404 }
      );
    }

    if (htmlString.includes("google.com/forms")) {
      const iframeRegex = /<iframe[^>]+src="([^"]+)"[^>]*>/;
      const iframeMatch = htmlString.match(iframeRegex);
      const url = iframeMatch?.[1] || "";
      const divId = "google-form-container";
      return NextResponse.json({ type: "form-google", url, divId });
    } else if (htmlString.includes("GetForm")) {
      const getFormRegex = /GetForm\("([^"]+)", "([^"]+)"\)/;
      const divRegex = /<div id="([^"]+)" class="([^"]+)"/;
      const getFormMatch = htmlString.match(getFormRegex);
      const divMatch = htmlString.match(divRegex);

      const url = getFormMatch?.[1] || "";
      const uuid = getFormMatch?.[2] || "";
      const divId = divMatch?.[1] || "";
      const divClass = divMatch?.[2] || "";

      return NextResponse.json({
        type: "form-sam",
        url,
        uuid,
        divId,
        divClass
      });
    } else {
      const idRegex = /id="([^"]+)"/;
      const hrefRegex = /https:\/\/[^"]+/;
      const idMatch = htmlString.match(idRegex);
      const hrefMatch = htmlString.match(hrefRegex);

      const uuid = idMatch?.[1] || "";
      const url = hrefMatch?.[0] || "";
      const divId = uuid;
      const divClass = "formio_form_iframe_container";

      return NextResponse.json({
        type: "form-getfly",
        url,
        uuid,
        divId,
        divClass
      });
    }
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
    return NextResponse.json(
      { type: "unknown", url: "", divId: "", error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
