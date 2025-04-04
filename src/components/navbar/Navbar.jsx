import React from 'react';
import { motion } from 'framer-motion';
import './navbar.scss';
import Sidebar from '../sidebar/sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
      <div className='wrapper'>
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}>
          Saharsh Khalokar
        </motion.span>
        <div className='social'>
          <a href="https://github.com/sde-saharsh"><img src="/gitHub.png" alt="GitHub" /></a>
          <a href="https://www.instagram.com/sde_saharsh/"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/in/saharsh-khalokar-a9a8a731a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/linkedIn.png" alt="LinkedIn" /></a>
          <a href="https://leetcode.com/u/SAHARSH_14/"><img src="/Leetcode.webp" alt="Leetcode" /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
