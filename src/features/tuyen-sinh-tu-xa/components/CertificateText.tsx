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
    <Container maxW="7xl" py={16}>
      <Heading as="h1" size="xl" mb={8} display="flex" alignItems="center">
        <Text as="span" color="red.600" mr={2}>
          ★
        </Text>
        {text?.title || "THÔNG TIN CHI TIẾT CHƯƠNG TRÌNH"}
      </Heading>

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
          img: { maxW: "100%", height: "auto", display: "block", mx: "auto" },
          figure: { maxW: "100%", height: "auto", m: 0 },
          iframe: { maxW: "100%" }
        }}
      />
    </Container>
  );
};
