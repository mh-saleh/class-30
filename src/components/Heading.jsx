import React from "react";

const Heading = (props) => {
  return (
    <props.as
      className={`text-heading font-bold 
      text-${props.as === "h4" ? "white" : "black"} font-${
        props.as === "h1" ? "popin" : "frank"
      }  ${props.className}`}
    >
      {props.text}
    </props.as>
  );
};

export default Heading;
