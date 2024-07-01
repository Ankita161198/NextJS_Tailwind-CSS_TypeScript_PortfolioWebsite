import React, { use } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Backgroundcircles from './Backgroundcircles';
import dp from '../images/dp.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo : PageInfo;
};

export default function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [`Hey! My Name is ${pageInfo?.name}.`,
       "<Welcome to my geeky side/>"],
    loop: true,
    delaySpeed: 100,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <Backgroundcircles />
      <img className='relative rounded-full h-36 w-36 mx-auto object-cover'
       src={urlFor(pageInfo.heroImage).url()} alt='dp' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-[#e0afa0] pb-2 tracking-[15px]'>{pageInfo.role}</h2>
        <h1 className='text-5xl  lg:text-6xl font-semibold px-10'>
          <span className='mr-1' style={{ color: '#e0afa0' }}>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'><button className='heroButton'>About</button></Link>
          <Link href='#experience'><button className='heroButton'>Experience</button></Link>
          <Link href='#skills'><button className='heroButton'>Skills</button></Link>
          <Link href='/projects'><button className='heroButton'>Projects</button></Link>
        </div>
      </div>
    </div>
  );
}
