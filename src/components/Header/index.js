import React from "react";
import styled from "styled-components";
const FirstCircle = styled.div`
  position: absolute;
  top: 10%;
  left: 20%;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background-color: blanchedalmond;

  animation: move 1s infinite;

  @keyframes move {
    /* 20% {
      transform: translateX(5px) rotate3d(0, 0, 1, 10deg);
    }
    40% {
      transform: translateY(5px) rotate3d(0, 0, 1, -7deg);
    }
    60% {
      transform: translateX(-10px) rotate3d(0, 0, 1, 5deg);
    }
    80% {
      transform: translateY(15px) rotate3d(0, 0, 1, -5deg);
    }
    100% {
      transform: rotate3d(0, 0, 1, 0);
    } */
    /* from {
      scale: 1.1;
      transform: rotate(0deg) translateX(5px) rotate(0deg);
      transform: translate(-30%);
    }
    to {
      scale: 1;
      transform: rotate(360deg) translateX(5px) rotate(-360deg);
    } */
  }
`;

const Header = () => {
  return <FirstCircle></FirstCircle>;
};
export default Header;
