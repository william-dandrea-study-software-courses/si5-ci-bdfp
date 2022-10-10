import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "../components";
import { PageTable } from "../pages";
import PageTableDetails from "../pages/PageTableDetails";

export const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<PageTable />}></Route>
      <Route path="/tables/:tableId" element={<PageTableDetails />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
    </Routes>
  </BrowserRouter>
);
