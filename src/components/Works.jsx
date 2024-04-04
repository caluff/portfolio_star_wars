import {styles} from "../styles";
import {SectionWrapper} from '../hoc';
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import {PinContainer} from "./ui/Td_pin.jsx";
import React from "react";

const ProjectCard = ({index, name, description, tags, image, source_code_link, url_code_link, developing}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="sm:w-[360px] w-full h-full p-5">
        <PinContainer title={url_code_link} href={url_code_link} source_code_link={source_code_link}>
          <div className="relative w-full h-[230px]">
            {developing && (
              <div className={"absolute bg-[#991b1b] w-36 left-0 rounded-full text-center"}>
                <h1>Developing</h1>
              </div>
            )}
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl mt-4"/>
          </div>
          <div
            className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[230px] pt-2">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {name}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name}
                   className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </PinContainer>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>ProJectS</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
                  className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          These projects showcase my skills and real-world experiences in my work.
          Each project is briefly described with links to the code repositories
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index}{...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");