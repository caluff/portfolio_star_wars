import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from "framer-motion";
import {styles} from "../styles";
import {fadeIn, textVariant} from "../utils/motion";
import {SectionWrapper} from '../hoc';
import {services} from "../constants";
import {CardBody, CardContainer, CardItem} from "./ui/Td_card.jsx";

const ServiceCard = ({index, title, icon}) => (
  <div className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                className="w-full rounded-[20px] shadow-card green-pink-gradient p-[1px]">
      <CardContainer className="inter-var xs:w-[250px] w-full">
        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] flex justify-evenly
        items-center flex-col bg-black border-white/[0.2] h-[280px] rounded-[20px] py-5 px-12 border">

          <CardItem translateZ="100" className="mt-4">
            <img src={icon} className="w-12 h-12 object-contain" alt={title}/>
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </CardItem>

        </CardBody>
      </CardContainer>
    </motion.div>
  </div>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]">
        Degree in Computer Science and highly motivated and dedicated web developer
        with knowledge in React, Next.js, and Tailwind
        CSS. I have excellent problem-solving and
        analytical skills, great attention to detail, and the
        ability to work in a fast-paced environment,
        excellent communication and teamwork skills.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) =>
          <ServiceCard key={service.title} index={index}{...service}/>
        )}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")