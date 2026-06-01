"use client";

import {
  HStack,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip
} from "@chakra-ui/react";
import { BiPhone } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { MdEmail, MdOutlineMail } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import { FormWrapper } from "./FormWrapper";

export const BtnPhone = ({ label, link }: { label: string; link: string }) => {
  return (
    <Tooltip label={label} placement="left" bg={"red.500"} hasArrow>
      <IconButton
        icon={<BiPhone />}
        size="lg"
        borderRadius={"50% 0  0 50%"}
        color={"white"}
        bg={"red.600"}
        p={"8px"}
        as={"a"}
        href={`tel: ${link}`}
        aria-label={"Phone"}
      />
    </Tooltip>
  );
};

export const BtnZalo = ({ label, link }: { label: string; link: string }) => {
  return (
    <Tooltip label={label} placement="left" bg={"blue.500"} hasArrow>
      <IconButton
        icon={<SiZalo />}
        size="lg"
        borderRadius={"50% 0  0 50%"}
        color={"white"}
        bg={"blue.500"}
        p={"8px"}
        as={"a"}
        href={link}
        target="blank"
        aria-label={"Zalo chat"}
      />
    </Tooltip>
  );
};

export const BtnMailN = ({ label, link }: { label: string; link: string }) => {
  return (
    <Tooltip label={label} placement="left" bg={"blue.500"} hasArrow>
      <IconButton
        icon={<MdOutlineMail />}
        size="lg"
        borderRadius={"50% 0  0 50%"}
        color={"white"}
        bg={"blue.500"}
        p={"8px"}
        as={"a"}
        href={`mailto: ${link}`}
        aria-label={"Send email"}
      />
    </Tooltip>
  );
};
export const BtnMes = ({ label, link }: { label: string; link: string }) => {
  return (
    <Tooltip
      transition={"all 0.2s"}
      label={label}
      placement="left"
      bg={"blue.500"}
      hasArrow
    >
      <IconButton
        icon={<BsMessenger />}
        size="lg"
        borderRadius={"50% 0  0 50%"}
        color={"white"}
        bg={"green.500"}
        p={"8px"}
        transition={"width ease .4s"}
        as={"a"}
        href={link}
        target="blank"
        aria-label={"Facebook messenger"}
      />
    </Tooltip>
  );
};

export const BtnEmail = ({ label }: { label: string }) => {
  return (
    <Popover placement="left" trigger="hover" isLazy>
      <PopoverTrigger>
        <HStack
          as="div"
          cursor="pointer"
          aria-label="Để lại thông tin tư vấn"
          spacing={0}
          borderRadius={0}
          bg={"orange.500"}
          transform={"rotate(270deg)"}
        >
          <IconButton
            icon={<MdEmail />}
            size="lg"
            // rounded={""
            _hover={{}}
            color={"white"}
            bg={"orange.500"}
            p={"8px"}
            aria-label={"form"}
          />
          <Text pr={2} color={"white"}>
            {label}
          </Text>
        </HStack>
      </PopoverTrigger>
      <PopoverContent aria-label="Để lại thông tin">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader as={Heading} size={"md"} textAlign={"center"}>
          Để lại thông tin
        </PopoverHeader>
        <PopoverBody>
          <FormWrapper />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
