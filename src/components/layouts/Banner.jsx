import React from "react";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import Flex from "../Flex";
import Container from "../Container";
import Button from "../Button";
import Image from "../Image";
import BannerImage from "../../assets/Image/BannerImage.png";

const Banner = () => {
  return (
    <div className="pt-[236px] pb-[133px] bg-bannerColor">
      <Container>
        <Flex className="justify-between">
          <div className="w-[550px] leading-[70px]">
            <Heading
              text="Find The Best Fashion Style For You"
              as="h1"
              className="mb-[38px]"
            />
            <Paragraph
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "
              className=" text-2xl color-black mb-[76px]"
            />
            <Button
              text="SHOP NOW"
              className="text-2xl font-semibold py-6 px-[91px] bg-black text-white rounded-xl  hover:bg-bannerBtnHover duration-500"
            />
          </div>
          <div>
            <Image className="535px" src={BannerImage} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
