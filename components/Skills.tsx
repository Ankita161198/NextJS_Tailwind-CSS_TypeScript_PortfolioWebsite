// import React from 'react'
// import {motion} from 'framer-motion'
// import Skill from './Skill'
// import { Skill as SkillType} from '@/typings'

// type Props = {
//   skills:SkillType[]
// }

// const Skills = ({skills}: Props) => {
//   return (
//     <motion.div 
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1.5}}
//     className='flex relative flex-col text-center md:text-left
//     xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto
//     items-center'>
//         <h3 className='absolute top-24 uppercase tracking-[20px]
//         text-[#e0afa0] text-2xl'>
//         Skills </h3>
//         <h3 className='absolute top-36 uppercase tracking-[3px] text-[#e0afa0] text-sm'>Hover Over a skill for current proficiency</h3>
//         <div className='grid grid-cols-4 gap-5'>
//           {skills?.slice(0,skills.length/2).map((skill)=>{
//             return <Skill key={skill._id} skill={skill}/>
//           })}
//           {skills?.slice(skills.length/2,skills.length).map((skill)=>{
//             return <Skill key={skill._id} skill={skill} directionLeft/>
//           })}
           
//         </div>
        
//         </motion.div>
//   )
// }

// export default Skills

import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '@/typings';

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left
      xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto
      items-center'>
      <h3 className='absolute top-16 md:top-24 uppercase tracking-[10px] md:tracking-[20px]
      text-[#e0afa0] text-lg md:text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-24 md:top-36 uppercase tracking-[1px] md:tracking-[3px] text-[#e0afa0] text-xs md:text-sm'>
        Hover Over a Skill for Current Proficiency
      </h3>
      <div className='grid grid-cols-4 md:grid-cols-4 gap-4 sm:gap-5 mt-12 md:mt-0'>
        {skills?.map((skill, index) => (
          <Skill key={skill._id} skill={skill} directionLeft={index % 2 !== 0} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
