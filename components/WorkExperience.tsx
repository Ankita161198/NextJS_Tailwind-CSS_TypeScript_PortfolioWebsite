// import React from 'react'
// import {motion} from 'framer-motion'
// import ExperienceCard from './ExperienceCard'
// import { Experience } from '@/typings'

// type Props = {
//   experiences:Experience[];
// }

// export default function WorkExperience({experiences}: Props) {
//   return (
//     <motion.div 
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1.5}}
//     className='h-screen flex relative overflow-hidden flex-col 
//     text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>

//          <h3 className='absolute top-24 uppercase tracking-[20px]
//         text-[#e0afa0] text-sm md:text-2xl'>Work Experience</h3>

//         <div className='w-full flex space-x-5 overflow-x-scroll 
//         p-2 md:p-10 snap-mandatory scrollbar scrollbar-track-[#2f353a]]-400/20
//      scrollbar-thumb-[#e0afa0]/80'>
//             {experiences?.map((experience)=>{
//               return <ExperienceCard key={experience._id} experience={experience}/>
//             })}
//         </div>
//         </motion.div>
//   )
// }

import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-full md:h-screen flex relative overflow-hidden flex-col 
        text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-12 md:top-24 uppercase tracking-[10px] md:tracking-[20px]
        text-[#e0afa0] text-sm md:text-2xl'>Work Experience</h3>

      <div className='w-full mt-24 md:mt-32 flex space-x-5 overflow-x-scroll 
        p-2 md:p-10 snap-mandatory scrollbar scrollbar-track-[#2f353a]-400/20
        scrollbar-thumb-[#e0afa0]/80'>
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
