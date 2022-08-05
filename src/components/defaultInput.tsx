import { Input } from "@chakra-ui/react";
import React from "react";
interface Props {
  [key: string]: any;
}

const DefaultInput = (props: Props) => {
  return (
    <Input
      borderWidth="2px"
      borderColor="#E6E6E620"
      size="sm"
      bg="#E6E6E620"
      borderRadius="0.15rem"
      {...props}
    />
  );
};

export default DefaultInput;
