// import React from 'react'
// import {motion} from 'framer-motion'
// import react from '../images/react.png'
// import Image from 'next/image'
// import { Skill as Skillt } from '@/typings'
// import { urlFor } from '@/sanity'

// type Props = {
//     directionLeft?:boolean;
//     skill : Skillt
// }

// const Skill = ({directionLeft,skill}: Props) => {
//   return (
//     <div className='group relative flex cursor-pointer'>
//     <motion.div
//     initial={{x:directionLeft ? -200 :200}}
//     transition={{duration:1}}
//     whileInView={{opacity:1,x:0}}
//     >
//         <img className='rounded-full border border-gray-500 object-cover w-24 h-24 
//         md:h-28 md:w-28 xl:w-32 x:h-32 filter group-hover:grayscale transition duration-300 ease-in-out ' 
//         src={urlFor(skill.image).url()} alt=""/>
//         </motion.div>

//     <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
//     ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>
//         <div className='flex items-center justify-center h-full'>
//             <p className=' text-lg font-bold text-black opacity-100 items-center'>{skill.title}  {skill.progress}%</p>
//         </div>
//     </div>
//     </div>
    
//   )
// }

// export default Skill
import React from 'react';
import { motion } from 'framer-motion';
import { Skill as Skillt } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  directionLeft?: boolean;
  skill: Skillt;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{ x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <img
          className='rounded-full border border-gray-500 object-cover w-16 h-16
          sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
          src={urlFor(skill.image).url()} alt={skill.title}
        />
      </motion.div>

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-16 w-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-xs sm:text-sm md:text-md xl:text-lg font-bold text-black opacity-100'>{skill.title} {skill.progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
