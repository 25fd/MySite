import { motion } from "framer-motion";

import { styles } from "../styles";
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const Hero = () => {
  const [textColors, setTextColors] = useState('text-white'); 
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          {/* <h1 className={`${styles.heroHeadText} text-white`}> */}
          <TypeAnimation
            sequence={[
              'Hi,', // Types 'One'
              1000, // Waits 1s
              "I'm", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              () => setTextColors('text-[#915EFF]'),
              "Falgun Dudhat", // Types 'Three' without deleting 'Two'
              3000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className={`${styles.heroHeadText} ${textColors}}`}
            style={{ display: 'inline-block' }}
          />
          {/* </h1> */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a full-stack web developer.
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Checkout my <a href="https://www.linkedin.com/in/falgundudhat/" target="_blank" className={`${styles.heroSubText} mt-2 text-[#915EFF]`}>Linkedin</a>
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;