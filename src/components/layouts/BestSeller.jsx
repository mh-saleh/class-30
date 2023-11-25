import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Flex from "../Flex";
import Button from "../Button";
import Image from "../Image";
import ImageOne from "../../assets/Image/bsOne.png";
import ImageTwo from "../../assets/Image/bsTwo.png";
import Star from "../../assets/Image/bsStar.png";

const BestSeller = () => {
  return (
    <div className="bg-[#CFA485] pt-[40px] pb-[190px]">
      <Container>
        <Flex className="justify-end gap-[35px]">
          <div className="w-[437px]">
            <Heading text="Best Seller Product" as="h4" />
            <Paragraph
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."
              className="text-2xl font-frank font-bold text-white my-[40px]"
            />
            <Button
              text="Learn MORE"
              className="px-[86px] py-[25px] bg-black text-white font-semibold text-2xl rounded-xl  hover:bg-bannerBtnHover duration-500"
            />
          </div>
          <Flex className="gap-[30px]">
            <Flex className="flex-col">
              <Image src={ImageOne} />

              <div className="w-[366px] h-[127px] bg-white py-2.5 pl-[22px]  ">
                <Image src={Star} />
                <Paragraph
                  text="Sweater Shirt"
                  className="font-semibold text-[22px] text-black my-2.5 hover:text-bannerBtnHover duration-500 cursor-pointer"
                />
                <div>
                  <span className="text-[#C4C4C4] text-[24px]">$45.99</span>
                  <span className="text-black text-[24px] ml-[40px]">
                    $35.99
                  </span>
                </div>
              </div>
            </Flex>
            <Flex className="flex-col">
              <Image src={ImageTwo} />

              <div className="w-[366px] h-[127px] bg-white py-2.5 pl-[22px]">
                <Image src={Star} />
                <Paragraph
                  text="Pants fashion"
                  className="font-semibold text-[22px] text-black my-2.5  hover:text-bannerBtnHover duration-500 cursor-pointer"
                />
                <div>
                  <span className="text-[#C4C4C4] text-[24px]">$55</span>
                  <span className="text-black text-[24px] ml-[40px]">
                    $44.99
                  </span>
                </div>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default BestSeller;
