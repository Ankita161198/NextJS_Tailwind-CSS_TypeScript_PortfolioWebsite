import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Social } from '@/typings';

type Props = {
  socials:Social[]
};

const Header: React.FC<Props> = ({socials}) => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('#contact');
  };

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'
      >
        
        {socials.map((social)=>{
          return <SocialIcon
           key={social._id}
           url={social.url}
           fgColor='black'
           bgColor='#e0afa0'
           target='_blank'
           style={{ width: 40, height: 40, margin: '0 4px' }}
         />
        })}


       
        {/* <SocialIcon
          url="https://github.com/Ankita161198"
          fgColor='black'
          bgColor='#e0afa0'
          target='_blank'
          style={{ width: 40, height: 40, margin: '0 4px' }}
        /> */}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        onClick={handleContactClick}
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='#e0afa0'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-md' style={{ color: '#e0afa0' }}>
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
