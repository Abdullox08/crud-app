import React from "react";
import { Routes, Route } from "react-router";
import AddPage from "../Components/Add/AddPage";
import EditPage from "../Components/EditPage/EditPage";
import Home from "../Components/Home/Home";
import View from "../Components/View/View";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/add" Component={AddPage} />
        <Route path="/edit/:id" Component={EditPage} />
        <Route path="/view/:id" Component={View} />
      </Routes>
    </div>
  );
}
