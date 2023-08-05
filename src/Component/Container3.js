import React from "react";
import ChatMain from "./ChatMain";
import SuggestionBox from "./SuggestionBox";

const Container3 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: "1" }}>
        {/* SuggestionBox takes 50% of the space */}
        <SuggestionBox />
      </div>
      <div style={{ flex: "1" }}>
        {/* ChatMain takes 50% of the space and is aligned to the bottom */}
        <ChatMain />
      </div>
    </div>
  );
};

export default Container3;
