import React, { useContext } from "react";
import YourAccount from "./../../components/dashboard/yourAccount";
// import Pinn from "./pin";
import { Flex } from "@chakra-ui/react";
// import AppContext from "../../context/AppContext";

const Dashboard = () => {
  return (
    <Flex w="100%" h="100vh">
      <Flex w="100%" boxSizing="border-box">
        <Flex w="inherit" m="2rem" direction="column">
          <YourAccount balance={56262} name={""} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
