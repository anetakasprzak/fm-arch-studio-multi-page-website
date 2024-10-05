"use client";

import Image from "next/image";
import "./page.styled";
import { portfolioData } from "@/app/data";
import {
  PortfolioImage,
  PortfolioElementWrapper,
  TextBox,
  PortfolioElTitle,
  PortfolioElDate,
  PortfolioSectionWrapper,
} from "./page.styled";

const PortfolioPage = () => {
  return (
    <PortfolioSectionWrapper>
      {portfolioData.map((obj) => {
        return <PortfolioElement key={obj.id} obj={obj} />;
      })}
    </PortfolioSectionWrapper>
  );
};

const PortfolioElement = ({ obj }) => {
  const { image, title, date } = obj;
  return (
    <PortfolioElementWrapper>
      <PortfolioImage>
        <source srcSet={image.desktop} media="(min-width: 90em)" />
        <source srcSet={image.tablet} media="(min-width: 48em)" />
        <source srcSet={image.mobile} media="(min-width: 23.4em)" />
        <Image
          src={image.mobile}
          alt="portfolio image"
          width={311}
          height={240}
          layout="responsive"
        />
      </PortfolioImage>
      <TextBox>
        <PortfolioElTitle>{title}</PortfolioElTitle>
        <PortfolioElDate>{date}</PortfolioElDate>
      </TextBox>
    </PortfolioElementWrapper>
  );
};

export default PortfolioPage;
