"use client";

import Image from "next/image";
import "./page.styled";
import { portfolioData } from "@/app/data";
import { PortfolioImage } from "./page.styled";

const PortfolioPage = () => {
  return (
    <div>
      {portfolioData.map((obj) => {
        return <PortfolioElement key={obj.id} obj={obj} />;
      })}
    </div>
  );
};

const PortfolioElement = ({ obj }) => {
  const { image, title, date } = obj;
  return (
    <div>
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
      <div>
        <p>{title}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default PortfolioPage;
