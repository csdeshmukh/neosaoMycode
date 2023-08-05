import React from "react";
import SlideBar from "./SlideBar";
import Home from "./Home";
import Header from "./Header";
import MessageButton from "./MessageButton";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SlideBar></SlideBar>
        <Home></Home>
      </div>
    </div>
  );
};

export default Dashboard;
