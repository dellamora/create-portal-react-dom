/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React from "react";

const Backdrop: React.FC<{ onClose: () => void }> = ({
  onClose,
}): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => {
        onClose();
      }}
      className="fixed z-40 h-screen w-screen  bg-[#131313]/90 "
    />
  );
};

export default Backdrop;
