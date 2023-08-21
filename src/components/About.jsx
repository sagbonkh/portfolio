import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import SectionWrapper from '../hoc/SectionWrapper';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({index, title, icon}) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("","", 0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'>
          As a recent graduate with a background in Computer Science, I bring a fresh perspective and a passion for problem-solving to the table. My most recent role as a web developer at ACD Systems has equipped me with hands-on experience in creating dynamic and user-friendly web applications. Proficient in languages such as HTML, CSS, JavaScript, and PHP, I have a solid foundation in crafting visually appealing and functional interfaces.
          My journey has led me to explore the world of databases, including MySQL and MongoDB, giving me the ability to efficiently manage and organize data for optimal application performance. Additionally, my familiarity with the React framework has enabled me to delve into the world of frontend development, enhancing user experiences through responsive and interactive designs.
          My overarching objective is to combine my technical expertise with creative problem-solving to drive innovation. I am driven by a desire to create solutions that not only cater to business needs but also resonate with end-users. With a commitment to efficiency and a keen eye for detail, I am enthusiastic about contributing to projects that bridge the gap between technology and human-centric design, ultimately delivering valuable solutions to businesses and their customers.
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index)=>(
            <ServiceCard key={service.title} index={index}{...service} />
          ))}
        </div>
    </>
  );
};

export default SectionWrapper(About, 'about')