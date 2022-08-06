import React, { useContext } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./../../components/sidebar";
import { Outlet } from "react-router-dom";

const PageLayout = (props: any) => {
  return (
    <Flex boxSizing="border-box" w="100%" h="fit-content">
      <Sidebar />
      <Box w="90%">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default PageLayout;
