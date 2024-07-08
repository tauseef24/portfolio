import { motion } from "framer-motion";

import { styles } from "../styles";
import { BackgroundBeams } from "./ui/background-beams";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = ["better", "functional", "beautiful", "modern"];

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute w-full`}>
        <div className="flex flex-col w-full h-screen justify-center items-center gap-20">
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-5xl leading-relaxed lg:leading-snug text-center"
            >
              Hi, I'm <span className="text-[#915eff]">Tauseef</span>
              <br /> I Develop{" "}
              <Highlight className="max-lg:w-full max-sm:hidden text-white max-sm:text-[18px]">
                Full-Stack Web Applications
              </Highlight>
              <div className="sm:hidden">
                <Highlight className="text-white ">
                  Full-Stack <br />
                </Highlight>
                <Highlight className="text-white">Web Applications</Highlight>
              </div>
            </motion.h1>
          </HeroHighlight>

          <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-5xl leading-relaxed lg:leading-snug text-center">
            Build
            <FlipWords words={words} /> <br />
            websites with Me
          </div>
        </div>
      </div>

      <BackgroundBeams />

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
