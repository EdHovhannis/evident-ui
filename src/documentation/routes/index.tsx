import React from "react";
import { Route, Routes } from "react-router-dom";
import { Docs } from "./Docs";
import { Main } from "./Main";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/docs" element={<Docs />}></Route>
    </Routes>
  );
};
