// import React from 'react'
// import Image from 'next/image';
// import react from '../images/react.png'
// import {motion} from 'framer-motion'
// import { Project } from '@/typings';
// import { urlFor } from '@/sanity';
// import Link from 'next/link';

// type Props = {
//     projects:Project[]
// }

// const Projects = ({projects}: Props) => {
//    console.log(projects)
//   return (
//     <motion.div 
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1.5}}
//     className='h-screen relative flex overflow-hidden flex-col text-left 
//     md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
//         <h3 className='absolute top-24 uppercase tracking-[20px]
//         text-[#e0afa0] text-2xl'>Projects</h3>
//         <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#2f353a]]-400/20
//      scrollbar-thumb-[#e0afa0]/80'>
//         {projects.map((project,i)=>(
//             <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
//             justify-center p-20 md:p-44 h-screen' >
//                 <motion.img 
//                 initial={{
//                     y:-300, 
//                     opacity:0,
//                 }}
//                 transition={{duration:1.2}}
//                 whileInView={{opacity:1,y:0}}
//                 viewport={{once:true}}
//                 className='h-1/5'
//                 src={urlFor(project.image).url()} alt=""/>
                
//                 <div  className='space-y-10 px-0 md:px-10 max-w-6xl'>
//                     <h4 className='text-4xl font-semibold text-center'>
//                     <Link href={project.linkToBuild} className='text text-[#e0afa0]'>
//                     <span className='underline decoration-[#c978ab]/50'>Project {i+1} of {projects.length} : </span>{project.title}</Link>
//                     </h4>
//                     <div className='flex item-center space-x-2 justify-center'>
//                     {project.technologies.map((tech)=>{
//                             return <img className=' h-10 w-10' key={tech._id} src={urlFor(tech.image).url()} alt=""/>
//                     })}
//                     </div>
//                     <p className='text-lg text-center md:text-left'>{project.summary}
//                     </p>
//                     </div>
//             </div>
//         ))}
//         </div>
//         <div className='w-full absolute top-[30%] bg-[#e0afa0]/10 left-0 h-[500px] -skew-y-12'/>
        
//         </motion.div>
//   )
// }

// export default Projects


import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Link from 'next/link';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left 
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-16 md:top-24 uppercase tracking-[15px] md:tracking-[20px]
      text-[#e0afa0] text-lg md:text-2xl'>Projects</h3>
      
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#2f353a]/20 scrollbar-thumb-[#e0afa0]/80'>
        {projects.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
          justify-center p-10 md:p-20 h-screen'>
            <motion.img
              initial={{ y: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='h-40 md:h-60'
              src={urlFor(project.image).url()} alt={project.title}
            />

            <div className='space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-lg md:text-2xl lg:text-4xl font-semibold text-center'>
                <Link href={project.linkToBuild} className='text text-[#e0afa0]'>
                  <span className='underline decoration-[#c978ab]/50'>Project {i + 1} of {projects.length} : </span>{project.title}
                </Link>
              </h4>
              <div className='flex items-center space-x-2 justify-center'>
                {project.technologies.map((tech) => (
                  <img className='h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' key={tech._id} src={urlFor(tech.image).url()} alt={tech.title} />
                ))}
              </div>
              <p className='text-sm md:text-base lg:text-lg text-center md:text-left'>{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#e0afa0]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
};

export default Projects;
