import React from "react";
import "../AllPagesCss/ChatMain.css";
import ChatBox from "./ChatBox/ChatBox";
const ChatMain = () => {
  const handleChatBox = () => {};
  let date = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="OuterSideApply">
    
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h5 className="Naming mb-0">Messaging</h5>
        <img
          src="/images/icons/compose-button.svg"
          alt="compose-button"
          className="img-fluid composeButton"
        />
      </div>
      <hr />
      <div className="forUpperSideicon">
        <div className="profile-picture">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png"></img>
        </div>

        <h4 className="Naming" onClick={handleChatBox}>
          Raju
        </h4>
        <h5 className="forDate">{date}</h5>
      </div>
      <div style={{ flexDirection: "row-reverse", display: "flex" }}>
        {/* <ChatBox></ChatBox> */}
        {/* <ChatBox></ChatBox>
        <ChatBox></ChatBox> */}
        {/* <ChatBox></ChatBox>/ */}
      </div>
    </div>
  );
};

export default ChatMain;
