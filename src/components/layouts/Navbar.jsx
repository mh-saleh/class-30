import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Menu from "../Menu";
import Image from "../Image";
import Logo from "../../assets/Image/Logo.png";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="bg-bannerColor pt-14">
      <Container>
        <Flex className="justify-between">
          <Image className="cursor-pointer" divClassName="1/4 " src={Logo} />
          <Menu className="w-1/2 self-center" />
          <Flex className="1/4 gap-2">
            <Button
              text="Login"
              className="font-semibold text-twentyFour text-black px-twentySeven py-2.5 bg-transparent border border-bannerBtnBoarder shadow-bannerBtnbg rounded-xl hover:bg-bannerBtnHover duration-500"
            />
            <Button
              text="Sign up"
              className="font-semibold text-twentyFour text-black px-3.5 py-2.5 bg-transparent border border-bannerBtnBoarder shadow-bannerBtnbg rounded-xl hover:bg-bannerBtnHover duration-500"
            />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
