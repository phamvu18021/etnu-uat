import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { cleanContent } from "@/ultil/sanitizeHtml";

export const CertificateText = ({
  text,
  wpcontent
}: {
  text: any;
  wpcontent: any;
}) => {
  return (
    <Container maxW="7xl" py={{ base: 8, md: 16 }}>
      <Box
        className="post__main"
        dangerouslySetInnerHTML={{
          __html: cleanContent(
            wpcontent ||
              `<div>
                <p>Nội dung chi tiết chương trình đang được cập nhật...</p>
              </div>`
          )
        }}
        sx={{
          p: { fontSize: "lg", mb: 4 },
          h2: { fontSize: "2xl", fontWeight: "bold", mt: 6, mb: 4 },
          h3: { fontSize: "xl", fontWeight: "bold", mt: 4, mb: 3 },
          ul: { pl: 6, mb: 4 },
          li: { mb: 2 },
          img: {
            maxW: "100%",
            height: "auto",
            display: "block !important",
            mx: "auto !important"
          },
          figure: {
            maxW: "100%",
            height: "auto",
            m: "0 auto !important",
            textAlign: "center"
          },
          iframe: { maxW: "100%", display: "block", mx: "auto" }
        }}
      />
    </Container>
  );
};
