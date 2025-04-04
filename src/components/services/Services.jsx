import React from 'react';
import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  const sections = [
    {
      title: "Education",
      description: "Currently pursuing a B.Tech in Computer Science & Engineering at Walchand College of Engineering, Sangli. Equipped with a strong foundation in DS, OOPs, DBMS, and OS—building the expertise to solve real-world challenges through efficient algorithms and scalable software solutions",
      buttonText: "View Details",
    },
    {
      title: "Front-End Development",
      description: "I specialize in React.js, JavaScript, and Framer Motion to build dynamic UIs. I use HTML, CSS, Tailwind CSS, SCSS, and Bootstrap for responsive and visually appealing designs.",
      buttonText: "See Skills",
    },
    {
      title: "Back-End Development",
      description: "I have experience with Node.js and Express.js, enabling me to build scalable and efficient server-side applications.",
      buttonText: "My Work",
    },
    {
      title: "Achievements",
      description: "92.63 percentile in MHT CET, 73 percentile in JEE Main, completed a 25-day DSA challenge by JavaAirlines.",
      buttonText: "Learn More",
    },
  ];

  return (
    <motion.div 
      className='services'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className='textContainer'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <p>Bringing Creativity 
            <br /> & Code Together.
        </p>
        <hr />
      </motion.div>
      
      <motion.div 
        className='titleContainer'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="title">
            <img src="/programmer.webp" alt="programmer" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>Crafting</motion.b> Scalable  
            </h1>
        </div>
        <div className="title">
            <h1>
                <motion.b whileHover={{color:"orange"}}>Web</motion.b>  Experiences
            </h1>
            <a href="https://github.com/sde-saharsh"><button>Work With Me</button></a>
        </div>
      </motion.div>
      
      <motion.div className="listContainer">
        {sections.map((section, index) => (
          <motion.div 
            key={index} 
            className="box" 
            whileHover={{ background:"lightgray", color:"black" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <button><a href="https://github.com/sde-saharsh">{section.buttonText}</a></button>
            
          </motion.div>
        ))}
      </motion.div>
      
    </motion.div>
  );
};

export default Services;
