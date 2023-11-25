import React from "react";

const List = ({ text }) => {
  return (
    <li>
      <a
        className="font-semibold text-twentyFour text-black  hover:bg-bannerBtnHover duration-500 rounded-xl px-2.5"
        href="#"
      >
        {text}
      </a>
    </li>
  );
};

export default List;
