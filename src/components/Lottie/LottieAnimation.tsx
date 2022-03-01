import Lottie from "react-lottie";
import React from "react";
import animationData from "../../assets/starwar.json";
const LottieAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width={250} height={300} />;
};
export default LottieAnimation;
