import React from "react";
import {
  Flex,
  Text,
  Box,
  Button,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AdPageLayout from "../../container/ad_pageLayout";
const Adlogg = () => {
  return (
    <div>
      {" "}
      <Flex
        alignItems="center"
        color="gray.50"
        bg="#1B1B1B"
        py="0.5rem"
        px="1rem"
        w="100%"
      >
        <Heading color="white">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Heading>
      </Flex>
      <AdPageLayout>
        <Flex w="100%" h="100vh">
          <Flex w="100%" boxSizing="border-box">
            <Flex w="inherit" m="2rem" direction="column">
              <HStack
                m="2rem"
                alignItems="flex-start"
                textAlign="left"
                gap="4rem"
              >
                <VStack alignItems="left" width="300px">
                  <Text fontSize="lg" fontWeight="bold">
                    Do you want to logout from your account??
                  </Text>
                  <Text fontSize="m" fontWeight="bold">
                    If yes, please press the button below.
                  </Text>
                  <Link to="/">
                    <Box textAlign="left" pt="1rem">
                      <Button px="1rem" bg="#A1FE6B" color="black">
                        logout
                      </Button>
                    </Box>
                  </Link>
                </VStack>
              </HStack>
            </Flex>
          </Flex>
        </Flex>
      </AdPageLayout>
    </div>
  );
};

export default Adlogg;
