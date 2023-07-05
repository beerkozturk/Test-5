import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import ImageUpload from "./components/imageUpload.";
import Calendar from "./components/calendar";
import LeaveRequestPage from "./components/leaveRequestPage";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          {/* <Route path="/calendar" element={<Calendar/>} /> */}
          <Route path="/leave-request-page" element={<LeaveRequestPage />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
