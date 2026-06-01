import { Box } from "@chakra-ui/react";
import React from "react";
import { BtnTheme } from "./BtnTheme";

interface IInputRes {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const InputRes = (props: IInputRes) => {
  const { label, onClick } = props;
  return (
    <Box display="flex" justifyContent="center">
      <BtnTheme
        h="2rem"
        size="md"
        bg={"blue.900"}
        fontSize="sm"
        fontWeight="bold"
        color={"white"}
        onClick={(e) => onClick && onClick(e)}
      >
        {label}
      </BtnTheme>
    </Box>
  );
};
