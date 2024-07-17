import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LandingHero = () => {
  const landingRef = useRef();
  const headingTextRef = useRef();

  headingTextRef.current = [];

  // useIsomorphicLayoutEffect(() => {
  //   LandingAnimation(landingRef.current, headingTextRef.current);
  // }, []);

  const addToHeaderTextRef = (el) => {
    if (el && !headingTextRef.current.includes(el)) {
      headingTextRef.current.push(el);
    }
  };

  return (
    <motion.div
      className='w-full aspect-w-1 aspect-h-1 md:aspect-w-12 md:aspect-h-6'
      ref={landingRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <div className='flex-1 h-full justify-center items-center opacity-60 relative'></div>
      <motion.div
        className=' absolute w-full h-full mx-auto px-8 md:px-28 flex flex-col justify-center items-center text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
      >
        <h1
          className='font-brand-serif text-brand text-3xl lg:text-4xl xl:text-5xl xl:leading-tight leading-tight'
          ref={addToHeaderTextRef}
        >
          Our <i>360° design approach</i>
        </h1>
        <h1 className='font-brand-bold text-neutral-800 text-3xl lg:text-4xl xl:text-5xl xl:leading-tight leading-tight'>
          strengthens the connection between built environments and their
          strategic communications in the marketplace.
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default LandingHero;
