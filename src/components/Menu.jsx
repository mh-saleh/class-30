import React from "react";
import Flex from "./Flex";
import List from "./List";

const Menu = ({ className }) => {
  return (
    <div className={`${className} `}>
      <ul>
        <Flex className="gap-thirty justify-center">
          <List text="Men"></List>
          <List text="Woman"></List>
          <List text="Kids"></List>
          <List text="Collection"></List>
          <List text="Trends"></List>
        </Flex>
      </ul>
    </div>
  );
};

export default Menu;
