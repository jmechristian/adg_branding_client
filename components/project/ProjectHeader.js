import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Watermark from '../layout/Watermark';
import EnlargeButton from '../layout/EnlargeButton';
import { ProjectModernInfoAnimation } from '../../data/animation';

const ProjectHeader = ({ title, location, hero, caption }) => {
  const [isHover, setIsHover] = useState(false);
  const titleRef = useRef();

  titleRef.current = [];

  const addToTitleRef = (el) => {
    if (el && !titleRef.current.includes(el)) {
      titleRef.current.push(el);
    }
  };

  useEffect(() => {
    ProjectModernInfoAnimation(titleRef.current);
  }, [hero]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      <div className='flex flex-col md:flex-row w-full justify-between md:items-end mt-12 md:mt-16'>
        <div
          className='font-brand-serif text-5xl md:text-6xl xl:text-7xl px-5 md:px-0 leading-tight md:leading-tight xl:leading-tight'
          ref={addToTitleRef}
        >
          {title}
        </div>
        <div className='font-brand-serif font-medium tracking-wider uppercase text-sm lg:text-lg text-gray-800 text-right px-5 md:px-0'>
          <div ref={addToTitleRef}>{location}</div>
        </div>
      </div>
      <div
        className='w-full aspect-w-16 aspect-h-12 md:aspect-w-16 md:aspect-h-9 mt-6 mb-10'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          src={hero.data.attributes.url}
          id={hero.data.attributes.hash}
          data-caption={hero.data.attributes.caption}
          className='imageArray'
        />
        <div>
          <Watermark />
          <AnimatePresence>
            {isHover && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                exit={{ opacity: 0 }}
              >
                <EnlargeButton
                  imageId={hero.data.attributes.hash}
                  caption={hero.data.attributes.caption}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectHeader;
