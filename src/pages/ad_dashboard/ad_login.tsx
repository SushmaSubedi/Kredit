import React from "react";
import {
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import DefaultInput from "./../../components/defaultInput";
import { Link, useNavigate } from "react-router-dom";

const Adlog = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/ad_login/ad_dashboard");
  };
  return (
    <>
      <Flex w="100%" h="100vh">
        <Link to="/">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Link>
        <form action="post" method="" onSubmit={handleSubmit}>
          <HStack alignItems="flex-start" m="2rem" textAlign="left" gap="4rem">
            <VStack alignItems="left" width="300px">
              <Text fontSize="lg" fontWeight="bold">
                Admin login Page
              </Text>
              <Text fontSize="xs">Email</Text>
              <DefaultInput placeholder="" />
              <Text fontSize="xs"> Password</Text>
              <DefaultInput placeholder="" />
              <Box textAlign="left" pt="1rem">
                <Button px="2rem" bg="#A1FE6B" color="black" type="submit">
                  Login
                </Button>
              </Box>
            </VStack>
          </HStack>
        </form>{" "}
      </Flex>
    </>
  );
};

export default Adlog;
