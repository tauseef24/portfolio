import React from "react";
import { styles } from "../styles";
import { github, linkedin } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} w-full flex flex-row items-center py-5 bottom-0 z-20 bg-primary justify-around`}
    >
      <div
        className={`${styles.sectionSubText} ${styles.paddingX} flex w-1/2 capitalize`}
      >
        Tauseef Ul Hasan
      </div>
      <div className={`${styles.paddingX} flex w-1/2 justify-end gap-2`}>
        <div className="w-[40px] h-[40px]">
          <Link to="https://github.com/tauseef24" target="_blank">
            <img src={github} alt="github" className="object-cover" />
          </Link>
        </div>
        <div className="w-[40px] h-[40px]">
          <Link
            to="https://www.linkedin.com/in/tauseef-ul-hasan-5107751b0/"
            target="_blank"
          >
            <img src={linkedin} alt="github" className="object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
