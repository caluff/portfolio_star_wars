import React from "react";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {ComputersCanvas} from "./canvas";
import {whatsapp, telegram, linkedin} from "../assets"
import {fadeIn} from "../utils/motion.js";

function downloadFile() {
  const link = document.createElement('a');
  link.href = "https://drive.google.com/file/d/1XKQEiaW9zn1mgXl91rL5S1yABMUaB8cH/view?usp=drive_link";
  link.target = "_blank"
  link.download = "Daniel_Caluff_CV.pdf";
  link.click();
}

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} z-10 lg:z-0 absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flexrow items-start gap-5 `}
      >
        <div className={"flex flex-col"}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#FAD64C]"/>
            <div className="w-1 sm:h-80 h-40 yellow-gradient"/>
          </div>

          <a href='https://www.linkedin.com/in/danielcaluff' target={"_blank"}>
            <img src={linkedin}
                 className={"my-2 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 delay-0"}
                 alt={"linkedin"}/>
          </a>
          <a href={'https://api.whatsapp.com/send?phone=5356490516'} target={"_blank"}>
            <img src={whatsapp}
                 className={"my-2 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 delay-0"}
                 alt={"whatsapp"}/>
          </a>
          <a href={'https://t.me/DanielCaluff'} target={"_blank"}>
            <img src={telegram}
                 className={"my-2 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 delay-0"}
                 alt={"telegram"}/>
          </a>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm&nbsp;
            <span className="text-[#FAD64C]">Daniel Caluff</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Developer <br className="sm:block hidden"/>
            focused in <span

            className={'text-transparent bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19]'}
          >WEB</span> application
          </p>
          <button
            onClick={downloadFile}
            className={"transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 delay-0 mt-6 shadow-lg shadow-yellow-500/50 bg-[#FAD64C] hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-black font-semibold h-12 px-12 rounded-lg w-full flex items-center justify-center sm:w-auto"}
          >
            Show CV
          </button>
        </div>
      </div>
      <div className={"lg:ml-[40rem] h-full"}>
        <ComputersCanvas/>
      </div>
      <div className="z-10 absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{y: [0, 24, 0]}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;


