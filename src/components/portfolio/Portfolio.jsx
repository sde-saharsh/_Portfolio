import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Portfolio",
        img: "/Portfolio.png",
        desc: " developed a modern and interactive portfolio using React, Framer Motion, and SCSS, highlighting his expertise in front-end development. With a sleek design, smooth animations, and responsive layouts, the portfolio effectively showcases his skills, projects, and professional journey. It serves as a testament to his proficiency in creating visually appealing and highly functional web experiences.",
    },
    {
        id: 2,
        title: "Homie's Kitchen",
        img: "/Kitchen.png",
        desc: "Purpose: Simplify meal planning and recipe sharing for students by providing an accessible, user-friendly platform.  Developed an interactive interface with recipe submission, search, and filtering capabilities to help users quickly find and share meal ideas. Implemented responsive design techniques to ensure seamless performance on both mobile and desktop devices. Incorporated client-side validations and error handling to improve data accuracy and user experience.",
    },
    {
        id: 3,
        title: "Auto-Rentpro",
        img: "https://www.4mentera.com/wp-content/uploads/2019/07/Proauto-web-alquiler-vehiculos.jpg",
        desc: "Purpose: Streamline the process of renting and returning cars by building a robust, menu-driven CLI application. Characteristics : Designed a modular system architecture with distinct classes for cars, customers, and rental transactions. Developed dynamic cost calculation logic based on rental duration and vehicle specifications, ensuring accurate billing. Utilized the Java Collections Framework to efficiently manage and update real-time data related to vehicle availability and customer records.",
    }
];

const Single = ({ item }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300,300]);


    return (
        <section  className="single">
            <div className="contaier">
                <div className="wrapper" style={{y}}>
                    <div className="img-container" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href="https://github.com/sde-saharsh?tab=repositories">See More</a></button>
                    </motion.div>
                </div>
                
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
