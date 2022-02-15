import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "../pages/UserForm";
import ListUsers from "../pages/ListUsers";

export default function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/users" element={<ListUsers />} />
      </Routes>
    </BrowserRouter>
  );
}
