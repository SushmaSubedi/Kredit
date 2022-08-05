import React, { useContext } from "react";
import { useState } from "react";
import PageLayout from "./../../container/pageLayout/pageLayout";
import DefaultButton from "./../../components/defaultButton";
import DefaultInput from "./../../components/defaultInput";
import { VStack, HStack, Flex, Text, Heading, Box } from "@chakra-ui/react";

import AppContext from "../../context/AppContext";
const Pinn = () => {
  const [pinValue, setPinValue] = useState("");
  console.log(pinValue);
  const { setPin } = useContext(AppContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPinValue(e.target.value);
  };
  return (
    <div>
      <Flex w="100%" h="100vh">
        <HStack m="2rem" alignItems="flex-start" textAlign="left" gap="4rem">
          <VStack alignItems="left" width="300px">
            <Text fontSize="lg" fontWeight="bold">
              Set pin
            </Text>
            <Text pb="1rem" fontSize="md">
              Enter the pin you wish for.
            </Text>
            <Text fontSize="xs">Set pin:</Text>
            <DefaultInput
              placeholder=""
              onChange={handleChange}
              value={pinValue}
            />

            <Box textAlign="center" pt="1rem">
              <DefaultButton onClick={() => setPin && setPin(pinValue)}>
                Set
              </DefaultButton>
            </Box>
          </VStack>
        </HStack>
      </Flex>
    </div>
  );
};

export default Pinn;
