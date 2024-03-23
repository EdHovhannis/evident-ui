import React from "react";
import { Route, Routes } from "react-router-dom";
import { Docs } from "./Docs";
import { About } from "./About";
import { useAppSelector } from "../actions/redux";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/docs" element={<Docs />}></Route>
    </Routes>
  );
};
