import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RandomUser from "./components/RandomUser";
import RandomJokes from "./components/RandomJokes";
import CatListing from "./components/CatListing";

const App = () => {
  return (
    <Router  basename='/'>
      <Navbar />
      <div className="relative min-h-lvh min-w-full bg-green-600 py-10 px-4 overflow-hidden">
        <Routes>
          <Route path="/" element={<RandomUser />} />
          <Route path="/random-user" element={<RandomUser />} />
          <Route path="/random-jokes" element={<RandomJokes />} />
          <Route path="/cats-listing" element={<CatListing />} />
          <Route path="*" element={<RandomUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;