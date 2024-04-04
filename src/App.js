import React from "react";
import Header from "./container/Header";
import Home from "./container/Home";
import ServiceCount from "./container/ServiceCount";
import About from "./container/About";
import Skills from "./container/Skills";
import Projects from "./container/Projects";
import Contact from "./container/Contact";
import { AnimatePresence } from "framer-motion";
import HomeSocialLinks from "./components/HomeSocialLinks";
import { Socials } from "./utlis/helper";
import ParticlesContainer from "./container/ParticlesContainer";

const App = () => {
  return (
    <div className="w-full xl:w-[1440px]  lg:py-12 lg:pr-32 py-32 pr-4 px-4">
      {/* particles container */}
      <ParticlesContainer />
      {/* header */}
      <Header />

      {/* home container */}
      <Home />

      {/* service card */}
      <ServiceCount />
      {/* about container */}
      <About />
      {/* skill container */}
      <Skills />

      {/* project container */}
      <Projects />

      {/* contact container */}
      <Contact />

      {/* footer container */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wide text-textlight">Amarnath</p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => {
                return (
                  <HomeSocialLinks key={index} data={item} index={index} />
                );
              })}
          </AnimatePresence>
        </div>
        <div className=" w-full grid grid-col lg:grid-cols-3 mt-12 gap-10">
          <p className="text-textlight text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            impedit quos consequatur eaque necessitatibus praesentium tempora.
          </p>
          <p className="text-textlight text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            impedit quos consequatur eaque necessitatibus praesentium tempora.
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <p className="text-textlight text-center">amar@gmail.com</p>
            <p className="text-textlight text-center"> +91 00000 00000</p>
            <a href="#">
              <p className="text-primary text-center">Hire me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
