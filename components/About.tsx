// import React from 'react'
// import {motion} from 'framer-motion'
// import about from '../images/about.jpeg'
// import Image from 'next/image'
// import { PageInfo } from '@/typings'
// import { urlFor } from '@/sanity'

// type Props = {
//   pageInfo : PageInfo
// }

// export default function About({pageInfo}: Props) {
//   console.log(pageInfo)
//   return (
//     <motion.div 
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1.5}}
//     className='flex flex-col relative h-screen text-center md:text-left
//          md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
//         <h3 className='absolute top-24 bottom-24 uppercase tracking-[20px]
//         text-[#e0afa0] text-xl md:2xl text-center'>About</h3>

//         <motion.div
//         initial={{x:-200,opacity:0}}
//         transition={{duration:1.2,}}
//         whileInView={{x:0, opacity:1}}
//         viewport={{once:true}}
//         >
//         <img className="mb-2 md:mb-0 flex-shrink-0 w-20 h-20 rounded-full object-cover
//              md:rounded-sm md:w-94 md:h-215 xl:w-[500px] xl:h-[600px] " alt="about" src={urlFor(pageInfo.profilePicture).url()}/>
//         </motion.div>
//         <div />
//         <div className='space-y-3 px-0 md:px-10 py-20'>
//         <h4 className=' text:lg md:text-4xl font-semibold'>Here&apos;s a <span className='underline decoration-[#bde0fe]/50'>little</span>{" "}background</h4>
//         <div className='flex justify-center'>
//         <p className='text-sm md:text-xl max-w-3xl'> {pageInfo?.backgroundInformation}</p>   </div>   
//         </div>
//         </motion.div>
//   )
// }

import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  console.log(pageInfo);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-full md:h-screen text-center md:text-left
         md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-12 md:top-24 uppercase tracking-[10px] md:tracking-[20px]
        text-[#e0afa0] text-sm md:text-2xl'>About</h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='mt-24 md:mt-0'
      >
        <img className="mb-2 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover
             md:rounded-sm md:w-64 md:h-80 xl:w-[500px] xl:h-[600px]" alt="about" src={urlFor(pageInfo.profilePicture).url()} />
      </motion.div>

      <div className='space-y-5 px-0 md:px-10 py-14 md:py-0'>
        <h4 className='text-lg md:text-4xl font-semibold'>Here&apos;s a <span className='underline decoration-[#bde0fe]/50'>little</span>{" "}background</h4>
        <p className='text-sm md:text-xl max-w-3xl mx-auto'>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
