import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

//Components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

//layout
import Navbar from "./components/layout/Navbar";

//Users
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/user/add" element={<AddUser />} />
        <Route exact path="/user/edit/:id" element={<EditUser />} />
        <Route exact path="/user/view/:id" element={<User />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default App;
