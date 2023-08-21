import React from 'react';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Some of my tools</p>
      <h3 className={styles.sectionHeadText}>Technologies.</h3>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technolgy) => (
          <div className='w-28 h-28' key={technolgy.name}>
            <BallCanvas icon={technolgy.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");