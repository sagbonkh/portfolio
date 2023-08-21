import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div 
        className={`absolute inset-0 top-[120px] max-w-7x1 mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}
          >Hi, I'm <span className='text-[#DFA6DB]'>Sidney</span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a web and cloud developer
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex
      justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[55px] rounded-3xl border-4
          border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{
              y: [0,24,0]}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero