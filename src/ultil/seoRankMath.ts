export const replaceSeoRM = (input: string) => {
  input = input.replace(
    `link rel="canonical" href="https://etnu.aum.edu.vn`,
    `link rel="canonical" href="https://etnu.edu.vn`
  );
  input = input.replace(
    `meta property="og:url" content="https://etnu.aum.edu.vn`,
    `meta property="og:url" content="https://etnu.edu.vn`
  );

  input = input.replace(
    `"@id":"https://etnu.aum.edu.vn/#organization"`,
    `"@id":"https://etnu.edu.vn/#organization"`
  );
  input = input.replace(
    `https://etnu.aum.edu.vn/#logo`,
    `https://etnu.edu.vn/#logo`
  );
  input = input.replace(
    `https://etnu.aum.edu.vn/#website`,
    `https://etnu.edu.vn/#website`
  );
  input = input.replace(
    `https://etnu.aum.edu.vn/#webpage`,
    `https://etnu.edu.vn/#webpage`
  );
  input = input.replace(
    `"url":"https://etnu.aum.edu.vn"`,
    `"url":"https://etnu.edu.vn"`
  );

  input = input.replace(
    `"@type":"WebPage","@id":"https://etnu.aum.edu.vn`,
    `"@type":"WebPage","@id":"https://etnu.edu.vn`
  );

  input = input.replace(
    `#webpage","url":"https://etnu.aum.edu.vn`,
    `#webpage","url":"https://etnu.edu.vn`
  );

  input = input.replace(
    `"mainEntityOfPage":{"@id":"https://etnu.aum.edu.vn/`,
    `"mainEntityOfPage":{"@id":"https://etnu.edu.vn/`
  );
  input = input.replace(
    `"worksFor":{"@id":"https://etnu.aum.edu.vn/#organization`,
    `"worksFor":{"@id":"https://etnu.edu.vn/#organization`
  );

  input = input.replace(
    `"sameAs":["https://etnu.aum.edu.vn"]`,
    `"sameAs":["https://etnu.edu.vn"]`
  );
  input = input.replace("noindex", "index");
  input = input.replace("nofollow", "follow");

  // === Thêm canonical nếu chưa có ===
  const ogUrlMatch = input.match(
    /<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["'][^>]*>/
  );
  const hasCanonical = /<link[^>]*rel=["']canonical["']/.test(input);

  if (ogUrlMatch && !hasCanonical) {
    // Xóa dấu / ở cuối ogUrl nếu có
    const ogUrl = ogUrlMatch[1].replace(/\/$/, "");
    const canonicalTag = `<link rel="canonical" href="${ogUrl}" />`;

    // Thêm ngay sau thẻ og:url
    input = input.replace(ogUrlMatch[0], `${ogUrlMatch[0]}\n${canonicalTag}`);
  }

  // Đảm bảo tất cả thẻ canonical và og:url không có dấu / ở cuối URL
  input = input.replace(
    /(<link\s+rel=["']canonical["']\s+href=["'])(.*?)(\/+)["']/g,
    "$1$2\""
  );
  input = input.replace(
    /(<meta\s+property=["']og:url["']\s+content=["'])(.*?)(\/+)["']/g,
    "$1$2\""
  );

  return input;
};
