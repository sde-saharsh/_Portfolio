import React, { useState } from 'react';
import './Sidebar.scss';
import { motion } from 'framer-motion';
import Links from './links/Links';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      width: "400px",
      height: "100vh",
      borderRadius: "0",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  return (
    <motion.div className="sidebar">
      <motion.div 
        className="bg" 
        variants={variants}
        initial="closed" 
        animate={open ? "open" : "closed"}
      >
        {/* Motion div for delayed text appearance */}
        {open && (
          <motion.div 
            className="links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9 }} // Delay text appearance
          >
            <Links />
          </motion.div>
        )}
      </motion.div>

      {/* Toggle button inside the circle */}
      <button className="toggle-button" onClick={() => setOpen(prev => !prev)}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          {/* Line 1 */}
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 1.5 2.5 L 15 2.5" }, // Horizontal line
              open: { d: "M 3 16.5 L 17 2.5" },  // Diagonal line
            }}
            initial="closed"
            animate={open ? "open" : "closed"}
          />
          {/* Line 2 */}
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 9.5 L 15 9.5",opacity:1},  // Horizontal line
              open: { opacity:0 },   
            }}
            initial="closed"
            animate={open ? "open" : "closed"}
          />
          {/* Line 3 */}
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.5 L 15 16.5" },  // Horizontal line
              open: { d: "M 3 2.5 L 17 16.5" },   // Diagonal line
            }}
            initial="closed"
            animate={open ? "open" : "closed"}
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default Sidebar;
