import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-workspace" element={<Workspace />} />
    </Routes>
  );
};

export default App;
