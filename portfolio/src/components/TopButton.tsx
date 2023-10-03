import { useEffect, useState } from "react";
import upImg from "@assets/up.svg";
import styled from "styled-components";

const Button = styled.div`
  margin: 30px;
  padding: 5px;
  background-color: #ffffff80;
  border: 3px solid black;
  border-radius: 5px;
  position: fixed;
  bottom: 0;
  right: 0;
  cursor: pointer;

  img {
    width: 40px;
  }
`;

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 80 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <Button onClick={goToTop}>
      <img src={upImg} />
    </Button>
  ) : null;
};

export default TopButton;
