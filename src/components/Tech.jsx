import React from "react";

import { BallCanvas } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BackgroundGradient } from "./ui/background-gradient";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-8">
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <motion.div variants={fadeIn("up", "spring", 0.1, 1)}>
        <BackgroundGradient className="flex flex-row flex-wrap justify-evenly gap-5 bg-black-100 rounded-3xl p-4">
          {technologies.map((technology) => (
            <div className="w-28 h-28 rounded-xl" key={technology.name}>
              <IconComp icon={technology.icon} />
            </div>
          ))}
        </BackgroundGradient>
      </motion.div>
    </>
  );
};

const IconComp = ({ icon }) => {
  return (
    <div className="w-24 h-24 bg-transparent flex">
      <img
        src={icon}
        className="justify-center w-24 h-24 object-contain items-center rounded-2xl"
      />
    </div>
  );
};

export default SectionWrapper(Tech, "");
// export default Tech;
