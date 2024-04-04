import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import HeroTypeWrite from "../components/HeroTypeWrite";
import HomeSocialLinks from "../components/HomeSocialLinks";
import { Socials } from "../utlis/helper";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col gap-12 items-center justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content  */}
        <div className="w-full h-full items-center justify-center lg:items-start gap-4 flex flex-col">
          <h2 className="text-3xl lg:text-4xl text-textlight">
            Hello It's me
            <span className="text-white text-4xl lg:text-6xl block tracking-wider mt-4">
              Amarnath
            </span>
          </h2>
          <h2 className="text-2xl lg:text-4xl mt-4 text-textlight">
            And I'am{" "}
            <HeroTypeWrite
              speed={100}
              words={["a Developer..", "an Youtuber..", "a Freelancer.."]}
            />
          </h2>
          {/* some text */}
          <p className="text-textlight text-base text-center lg:text-left mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            rerum? Deleniti dolore doloremque voluptatibus? Eligendi, in dolor.
            Libero ducimus nostrum, excepturi quaerat hic unde eos! Illo velit
            perferendis temporibus praesentium.
          </p>
          {/* social links */}
          {/* hero img */}
          <div className="gap-16 flex items-center justify-center mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => {
                  return (
                    <HomeSocialLinks key={index} data={item} index={index} />
                  );
                })}
            </AnimatePresence>
          </div>
          {/* hire me */}
          <a
            href="#"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.4)" }}
            className=" mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl py-3 px-8 active:95 group hover:border-primary  "
          >
            <p className="text-textlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
              Hire me
            </p>
          </a>
        </div>

        <div className="w-full h-full items-start lg:items-center justify-center flex">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            src={Hero}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
