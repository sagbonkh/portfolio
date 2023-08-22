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
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
          As a recent Computer Science graduate, I bring fresh problem-solving enthusiasm. With web development experience at ACD Systems, I've mastered HTML, 
          CSS, JavaScript, PHP, and databases like MySQL and MongoDB. React familiarity enhances my frontend skills for user-friendly designs. My goal: 
          blend tech expertise and creative solutions for innovative, user-centric results.
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