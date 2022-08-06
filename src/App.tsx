import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";

import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard/dashboard";
import SendMoney from "./pages/dashboard/sendMoney";
import Transaction from "./pages/dashboard/transaction";
import Settings from "./pages/dashboard/settings";
import Log from "./pages/dashboard/logging";
import Registration from "./pages/dashboard/register";
import Fav from "./pages/dashboard/favourities";
import Pinn from "./pages/dashboard/pin";
import Logg from "./pages/dashboard/logout";
import Adlog from "./pages/ad_dashboard/ad_login";
import Adashboard from "./pages/ad_dashboard/ad_dashboard";
import Adclog from "./pages/ad_dashboard/ad_create";
import Adlogg from "./pages/ad_dashboard/ad_logout";
import PageLayout from "./container/pageLayout/pageLayout";

const app = () => {
  return (
    <Flex direction="column" color="white" bg="#0F1010" w="100%">
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/ad_login/" element={<Adlog />} />
        <Route path="/post" element={<Adashboard />} />
        <Route path="/ad_login/ad_dashboard" element={<Adashboard />} />
        <Route path="/ad_login/ad_create" element={<Adclog />} />
        <Route path="/ad_login/ad_logout" element={<Adlogg />} />
        <Route path="/post" element={<Dashboard />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Log />} />
        <Route path="/user" element={<PageLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="send-money" element={<SendMoney />} />
          <Route path="favourities" element={<Fav />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="settings" element={<Settings />} />
          <Route path="setPin" element={<Pinn />} />
          <Route path="logout" element={<Logg />} />
        </Route>
      </Routes>
    </Flex>
  );
};

export default app;
