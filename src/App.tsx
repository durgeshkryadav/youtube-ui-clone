import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/watch/:id" element={<Watch/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
