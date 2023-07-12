import { Flex, IconButton } from '@chakra-ui/react';

import { chakraStyled } from 'utils';

export const Container = chakraStyled(Flex, {
  w: '100%',
  bottom: '20px',
  align: 'center',
  justify: 'center',
  position: 'fixed',
  borderRadius: '10px',
});

export const Card = chakraStyled(Flex, {
  gap: '15px',
});

export const Button = chakraStyled(IconButton, {
  w: '55px',
  h: '55px',
  size: 'lg',
  isRound: true,
  colorScheme: 'blackAlpha',
} as any);
