import React from "react";
import { HeaderSection } from "./styles";
import LottieAnimation from "../Lottie/LottieAnimation";
import { motion } from "framer-motion";
const Header: React.FC = () => {
  return (
    <HeaderSection>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.6 }}
      >
        <LottieAnimation />
      </motion.div>
    </HeaderSection>
  );
};
export default Header;
