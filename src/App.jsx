import { Routes, Route } from "react-router";
import React from "react";
import Auth from "./pages/Auth/Auth";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import RegistrationPage from "./pages/Auth/RegistrationPage/RegistrationPage";
import EnterCodePage from "./pages/Auth/EnterCodePage/EnterCodePage";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";

import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Settings/Profile/Profile";
import InvestAccount from "./pages/Settings/InvestAccount/InvestAccount";
import Agreements from "./pages/Settings/Agreements/Agreements";
import PaymentMethods from "./pages/Settings/PaymentMethods/PaymentMethods";
import Security from "./pages/Settings/Security/Security";
import Portfolio from "./pages/Portfolio/Portfolio";

import Dashboard from "./pages/dashboard/Dashboard";

import AgentAccount from "./pages/AgentAccount/AgentAccount";

import "./App.css";

// import "react-refresh/runtime";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reg" element={<RegistrationPage />} />
          <Route path="enter-code" element={<EnterCodePage />} />
        </Route>
        <Route path="/settings" element={<Settings />}>
          <Route index element={<Profile />} />
          <Route path="invest-account" element={<InvestAccount />} />
          <Route path="agreements" element={<Agreements />} />
          <Route path="payment-methods" element={<PaymentMethods />} />
          <Route path="security" element={<Security />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agent-account" element={<AgentAccount />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
