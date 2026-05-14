import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from "./Routing";

const App = () => {
  const auth_token = true; //localStorage.getItem("auth_token");
  return (
    <>
      <BrowserRouter>
        <Routes>
          {auth_token ? (
            <Route path="/*" element={<Routing />} />
          ) : (
            <Route path="/*" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
