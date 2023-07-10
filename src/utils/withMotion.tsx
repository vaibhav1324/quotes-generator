import React, { FunctionComponent } from 'react';

import { Flex } from '@chakra-ui/react';

import { motion, AnimatePresence } from 'framer-motion';

const MotionFlex = motion(Flex);

const defaultOptions = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

const withMotion = (
  WrappedComponent: FunctionComponent,
  animateOptions?: any,
) => {
  const options = animateOptions || defaultOptions;

  const AnimatedPage: FunctionComponent = (props) => {
    return (
      <AnimatePresence exitBeforeEnter>
        <MotionFlex
          flex={1}
          exit={options.exit}
          initial={options.initial}
          animate={options.animate}
          transition={options.transition}>
          <WrappedComponent {...props} />
        </MotionFlex>
      </AnimatePresence>
    );
  };

  return AnimatedPage;
};

export default withMotion;
