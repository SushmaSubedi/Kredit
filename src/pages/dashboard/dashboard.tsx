import React from "react";
import PageLayout from "./../../container/pageLayout/pageLayout";
import YourAccount from "./../../components/dashboard/yourAccount";
import {
  Flex,
  Text,
  SimpleGrid,
  Box,
  Button,
  Heading,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
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
      <PageLayout>
        <Flex w="100%" h="100vh">
          <Flex w="100%" boxSizing="border-box">
            <Flex w="inherit" m="2rem" direction="column">
              <YourAccount balance={56262} name={""} />
            </Flex>
          </Flex>
        </Flex>
      </PageLayout>
    </div>
  );
};

export default Dashboard;
