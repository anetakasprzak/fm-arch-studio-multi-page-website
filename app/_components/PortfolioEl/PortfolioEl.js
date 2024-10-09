const {
  PortfolioElementWrapper,
  PortfolioImage,
  TextBox,
  PortfolioElTitle,
  PortfolioElDate,
} = require("@/app/(root)/portfolio/page.styled");
const { default: Image } = require("next/image");

const PortfolioElement = ({ obj }) => {
  const { image, title, date } = obj;
  return (
    <PortfolioElementWrapper>
      <PortfolioImage>
        <source srcSet={image.desktop} media="(min-width: 62em)" />
        <source srcSet={image.tablet} media="(min-width: 34.5em)" />
        <source srcSet={image.mobile} media="(min-width: 15em)" />
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

export { PortfolioElement };
