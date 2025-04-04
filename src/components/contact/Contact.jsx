import React, { useRef, useState } from 'react'
import "./Contact.scss"
import { animate } from 'framer-motion'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

const variants = {
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,

        },
    },
}

const Contact = () => {
    const formref = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_w18jhmk', 'template_bj05wwt', formref.current, {
            publicKey: 'oBnVfTBngKQkeHePu',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>saharshkhalokar14@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Sangli, Maharashtra</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+91 8793817909</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.form ref={formref} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1,duration:1}}>
                <input type="text" required placeholder='Name' name='name'/>
                <input type="email" required placeholder='Email' name='email'/>
                <textarea rows={8} placeholder='Message' name='message'/>
                <button>Submit</button>
            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact
