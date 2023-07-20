import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from "framer-motion";

import {styles} from "../styles";
import {fadeIn, textVariant} from "../utils/motion";
import {SectionWrapper} from '../hoc';
import {services} from "../constants";


const ServiceCard = ({index, title, icon}) => (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variant={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full rounded-[20px] shadow-card green-pink-gradient p-[1px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img className="w-12 h-12 object-contain"
               src={icon}
               alt={title}/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]">
        Highly motivated and dedicated web developer
        with knowledge in React, Next.js, and Tailwind
        CSS. I have excellent problem-solving and
        analytical skills, great attention to detail, and the
        ability to work in a fast-paced environment,
        excellent communication and teamwork skills. I
        am self-taught and a quick learner.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title}
                       index={index}{...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")