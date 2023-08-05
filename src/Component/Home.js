import React from "react";
import "../AllPagesCss/Home.css";
import ChatBox from "./ChatBox/ChatBox";
import ChatMain from "./ChatMain";
import Container3 from "./Container3";
import MessageButton from "./MessageButton";
import Profile from "./Profile";
import ScrollingPost from "./ScollingPost";
import SuggestionBox from "./SuggestionBox";

const Home = () => {
  return (
    <div
      className="container"
      style={{ marginLeft: "50px", marginRight: "30px" }}
    >
      <div className="container1">
        <Profile />
      </div>
      <div className="container2">
        <ScrollingPost />
      </div>
      <div className="container3">
        <SuggestionBox />
        <br></br>
        <div style={{ display: "flex" }}>
          <ChatMain />
          <MessageButton />
        </div>
      </div>
    </div>
    //mobile screen post
    //table post and profile
    //
  );
};

export default Home;
