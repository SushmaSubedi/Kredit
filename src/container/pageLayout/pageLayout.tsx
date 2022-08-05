import React, { useContext } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./../../components/sidebar";
import { Outlet } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Pinn from "../../pages/dashboard/pin";

const PageLayout = (props: any) => {
  const { pin } = useContext(AppContext);

  if (!pin) return <Pinn />;
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
