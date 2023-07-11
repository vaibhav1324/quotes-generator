import { Flex, Text } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { chakraStyled } from 'utils';

import loadingAnimation from 'assets/loading.json';

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export const Container = chakraStyled(MotionFlex as any, {
  flex: 1,
  align: 'center',
  justify: 'center',
  direction: 'column',
  bg: 'primary.500',
  p: { base: '20px', md: '50px' },
  animate: {
    backgroundColor: [
      '#ff006e',
      '#AA6BB7',
      '#4cc9f0',
      '#06d6a0',
      '#9ef01a',
      '#ffff3f',
    ],
  },
  transition: { yoyo: Infinity, duration: 18 },
});

export const LottieContainer = chakraStyled(MotionFlex as any, {
  flex: 1,
  maxH: '30vh',
  align: 'center',
  justify: 'center',
  direction: 'column',
  animate: { y: [-30, 30], opacity: [0.6, 1] },
  transition: { yoyo: Infinity, duration: 1.5 },
});

export const lottieProps = {
  loop: true,
  height: '30vh',
  autoPlay: true,
  style: { maxHeight: '30vh' },
  animationData: loadingAnimation,
};

export const LoadingText = chakraStyled(MotionText as any, {
  mt: '25px',
  color: '#fff',
  fontSize: '22px',
  fontWeight: 'bold',
  animate: { opacity: [1, 0.6] },
  transition: { yoyo: Infinity, duration: 1.5 },
});

export const ContentContainer = chakraStyled(MotionFlex as any, {
  bg: '#fff',
  align: 'center',
  justify: 'center',
  borderRadius: '10px',
  position: 'relative',
  direction: 'column',
  p: '55px 45px 25px',
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    delay: 0.5,
    type: 'spring',
  },
});

export const QuoteText = chakraStyled(MotionText as any, {
  maxW: '75vw',
  fontSize: { base: '20px', md: '30px' },
  fontWeight: '500',
  textAlign: 'center',
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  transition: {
    delay: 1,
    duration: 1,
    type: 'tween',
  },
});

export const AuthorText = chakraStyled(MotionText as any, {
  fontSize: { base: '14px', md: '20px' },
  textAlign: 'right',
  mt: '10px',
  w: '100%',
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    delay: 1.5,
    duration: 1,
    type: 'tween',
  },
});
