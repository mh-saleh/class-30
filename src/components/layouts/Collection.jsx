import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Button from "../Button";
import Image from "../Image";
import ImageOne from "../../assets/Image/CollectionOne.png";
import ImageTwo from "../../assets/Image/CollectionTwo.png";
import ImageThree from "../../assets/Image/CollectionThree.png";

const Collection = () => {
  return (
    <div className="pt-[200px] pb-[190px]">
      <Container>
        <Heading text="New Collection" className="text-center" as="h3" />
        <Flex className="justify-between mt-[122px]">
          <div className="">
            <Image src={ImageOne} />
            <Button
              text="Sweater"
              className="px-[108px] py-2.5 rounded-[20px] relative start-[35px] bottom-[101px] bg-white  hover:bg-bannerBtnHover duration-500"
            />
          </div>
          <div className="">
            <Image src={ImageTwo} />
            <Button
              text="Jeans"
              className="px-[140px] py-2.5 rounded-[20px] relative start-[18px] bottom-[101px] bg-white  hover:bg-bannerBtnHover duration-500"
            />
          </div>
          <div className="">
            <Image src={ImageThree} />
            <Button
              text="Sweater"
              className="px-[130px] py-3.5 rounded-[20px] relative start-[35px] bottom-[101px] bg-white  hover:bg-bannerBtnHover duration-500"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Collection;
