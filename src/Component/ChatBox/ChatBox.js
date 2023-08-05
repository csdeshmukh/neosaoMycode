import React from "react";
import "../ChatBox/ChatBox.css";
const ChatBox = () => {
  return (
    <div className="forAHoleChatBox">
      <div style={{ margin: "50px", marginBottom: "0px" }}>
        <div
          class="card"
          style={{
            width: "18rem",
            padding: "10px",
            minHeight: "450px",
            borderRadius: "5px",
            borderStyle: "none",
            className: "main",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ChatBox;
