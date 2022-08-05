import React from "react";
import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

//Icons
// @ts-ignore
import home from "../assets/svg/u_home-alt.svg"; // @ts-ignore
import sendMoney from "../assets/svg/u_import.svg"; // @ts-ignore
import laptop from "../assets/svg/u_laptop.svg"; // @ts-ignore
import rupee from "../assets/svg/u_rupee-sign.svg"; // @ts-ignore
import setting from "../assets/svg/u_setting.svg";
//Css
import "./sidebar.css";
const Sidebar = () => {
  return (
    <Box py="1rem" color="white" bg="#212222" minH="90vh" minW="240px">
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
      <NavLink to="dashboard">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={home} alt="menu" />
          <Text ml="0.5rem">Dashboard</Text>
        </Flex>
      </NavLink>
      <NavLink to="send-money">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={sendMoney} alt="menu" />
          <Text ml="0.5rem">Send Money</Text>
        </Flex>
      </NavLink>

      <NavLink to="transaction">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={rupee} alt="menu" />
          <Text ml="0.5rem">Transaction</Text>
        </Flex>
      </NavLink>

      <NavLink to="favourities">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={laptop} alt="menu" />
          <Text ml="0.5rem">favourities</Text>
        </Flex>
      </NavLink>

      <NavLink to="settings">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={setting} alt="menu" />
          <Text ml="0.5rem">Settings</Text>
        </Flex>
      </NavLink>
      <NavLink to="logout">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={home} alt="menu" />
          <Text ml="0.5rem">logout</Text>
        </Flex>
      </NavLink>
    </Box>
  );
};

export default Sidebar;
