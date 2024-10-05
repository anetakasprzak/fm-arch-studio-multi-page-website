import Image from "next/image";
import { ButtonBox } from "./Button.styled";

const Button = ({ children, onClick }) => {
  return (
    <ButtonBox onClick={onClick}>
      {children}
      <Image
        src="/assets/icons/icon-arrow.svg"
        alt="arrow icon"
        width={24}
        height={18}
      />
    </ButtonBox>
  );
};

export default Button;
