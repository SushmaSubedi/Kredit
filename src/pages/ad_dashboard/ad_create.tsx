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
import AdPageLayout from "../../container/ad_pageLayout";
const Adclog = () => {
  return (
    <>
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
        <form action="" method="">
          <HStack alignItems="flex-start" m="2rem" textAlign="left" gap="4rem">
            <VStack alignItems="left" width="300px">
              <Text fontSize="lg" fontWeight="bold">
                Create Account for user
              </Text>
              <div className="form-inline">
                <Text fontSize="xs">First Name :</Text>
                <DefaultInput placeholder="" />
                <Text fontSize="xs">Last Name:</Text>
                <DefaultInput placeholder="" />
              </div>

              <Text fontSize="xs">Phone Number:</Text>
              <DefaultInput placeholder="" />
              <Text fontSize="xs">Username:</Text>
              <DefaultInput placeholder="" />
              <Text fontSize="xs">Date of Birth :</Text>
              <DefaultInput placeholder="" />

              <Text fontSize="xs">Email:</Text>
              <DefaultInput placeholder="" />
              <Text fontSize="xs">Password:</Text>
              <DefaultInput placeholder="" />
              <Text display="inline-block" fontSize="xs">
                Gender:
              </Text>
              <div className="form-inline">
                <input name="gender" value="male" type="radio" />

                <Text display="inline-block" fontSize="xs">
                  Male
                </Text>
                <br></br>
                <input name="gender" value="female" type="radio" />
                <Text display="inline-block" fontSize="xs">
                  Female
                </Text>
                <br></br>
                <input name="gender" value="other" type="radio" />
                <Text display="inline-block" fontSize="xs">
                  Others
                </Text>
              </div>
              <Box textAlign="center" pt="1rem">
                <Button px="2rem" bg="#A1FE6B" color="black" type="submit">
                  Register
                </Button>
              </Box>
            </VStack>
          </HStack>
        </form>{" "}
      </AdPageLayout>
    </>
  );
};

export default Adclog;
