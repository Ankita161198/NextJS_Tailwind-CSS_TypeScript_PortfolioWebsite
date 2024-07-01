import React from 'react'
import {motion} from 'framer-motion'
import about from '../images/about.jpeg'
import Image from 'next/image'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo : PageInfo
}

export default function About({pageInfo}: Props) {
  console.log(pageInfo)
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left
         md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px]
        text-[#e0afa0] text-2xl'>About</h3>

        <motion.div
        initial={{x:-200,opacity:0}}
        transition={{duration:1.2,}}
        whileInView={{x:0, opacity:1}}
        viewport={{once:true}}
        >
            <img className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
             md:rounded-lg md:w-94 md:h-215 xl:w-[500px] xl:h-[600px]" alt="about" src={urlFor(pageInfo.profilePicture).url()}/>
        </motion.div>
        <div />
        <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here&apos;s a <span className='underline decoration-[#bde0fe]/50'>little</span>{" "}background</h4>
        <div className='flex justify-center'>
        <p className='text-xl max-w-3xl'> {pageInfo?.backgroundInformation}</p>   </div>   
        </div>
        </motion.div>
  )
}