import { Button, ButtonProps } from "@chakra-ui/react";

export const BtnTheme = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"black"}
      size={"md"}
      rounded={"sm"}
      {...args}
      border={"2px solid black"}
      transition={"all ease .4s"}
      _hover={{
        textDecoration: "underline"
      }}
    >
      {children}
    </Button>
  );
};
