import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Flex from "../Flex";
import Image from "../Image";
import ImageOne from "../../assets/Image/History.png";
import DotOne from "../../assets/Image/HistoryDotOne.png";
import DotTwo from "../../assets/Image/HistoryDotTwo.png";
const History = () => {
  return (
    <div className="pt-[100px] pb-[180px]">
      <Container className="relative">
        <Flex className="gap-[125px]">
          <div className="">
            <Image src={ImageOne} />
            <Image
              divClassName="relative bottom-[750px] -z-50 left-[570px]"
              src={DotOne}
            />
            <Image
              divClassName="absolute left-[200px] -z-50 bottom-[-207px]"
              src={DotTwo}
            />
          </div>
          <div className="w-[437px] mt-[70px]">
            <Heading text="Best Fashion Since 2010" as="h3" />
            <Paragraph
              className="text-2xl font-semibold text-black mt-[60px] "
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "
            />
          </div>
        </Flex>
        <Flex className="w-[793px] h-[280px] pl-[77px] bg-[#FEECC8] absolute bottom-[-40px] -z-50 right-[0px] mb-[25px]">
          <div className="border-r-2 border-black self-center pr-[25px]">
            <Paragraph
              className="text-heading  font-bold text-black font-pod"
              text="2020"
            />
            <Paragraph
              className="text-[28px] text-center font-medium text-black "
              text="Founded  "
            />
          </div>
          <div className="border-r-2 border-black self-center px-[50px] ">
            <Paragraph
              className="text-heading  font-bold text-black font-pod"
              text="5000+"
            />
            <Paragraph
              className="text-[28px] text-center font-medium text-black "
              text="Product Sold  "
            />
          </div>
          <div className="self-center pl-[40px] ">
            <Paragraph
              className="text-heading  font-bold text-black font-pod"
              text="4500+
              "
            />
            <Paragraph
              className="text-[28px] text-center font-medium text-black"
              text="Best Reviews"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default History;
