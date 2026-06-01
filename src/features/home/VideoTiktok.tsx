import { AspectRatio, Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export const VideoTiktok = ({ section_4 }: { section_4: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoSrc = section_4?.link_video || "/Video FB.mp4";

  return (
    <Container maxW={"5xl"} height={"auto"} mb={"40px"}>
      <Box
        pos={"relative"}
        top={{ lg: "100px", base: "22px" }}
        zIndex={2}
        left={{ lg: "-98px", base: "-23px" }}
        maxW={{ base: "100px", lg: "305px" }}
      >
        <Image
          alt="Mountains"
          src={"/cap.webp"}
          width={384}
          height={194}
          sizes="(max-width: 768px) 100px, 305px"
        />
      </Box>

      <Box pos={"relative"}>
        <Image
          alt="Laptop view"
          src={"/laptop.webp"}
          width={1073}
          height={769}
          style={{ width: "100%", height: "auto" }}
          sizes="(max-width: 1024px) 100vw, 1073px"
        />
        <AspectRatio
          maxW="952px"
          ratio={1}
          pos={"absolute"}
          top={{ lg: "20px", base: "8px" }}
          maxH={{ lg: "555px", base: "190px", md: "450px" }}
          zIndex={1}
          right={0}
          left={{ lg: "19px", base: "0" }}
        >
          {isPlaying ? (
            <iframe title="naruto" src={videoSrc} allowFullScreen />
          ) : (
            <Box
              as="button"
              onClick={() => setIsPlaying(true)}
              width="100%"
              height="100%"
              pos="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              <Image
                src="/dhtn.jpg"
                alt="Thumbnail"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 1073px"
              />
              <Box zIndex={1} pos="relative">
                <Image
                  src="/play-button.svg"
                  alt="Play"
                  width={50}
                  height={50}
                />
              </Box>
            </Box>
          )}
        </AspectRatio>
      </Box>
    </Container>
  );
};
