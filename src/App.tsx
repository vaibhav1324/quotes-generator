import * as React from 'react';

import { queryClient, theme, withMotion } from 'utils';

import { ChakraProvider } from '@chakra-ui/react';

import { QueryClientProvider } from 'react-query';

import Landing from 'components/Landing';
import GhButton from 'components/GhButton';

const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Landing />
      <GhButton />
    </QueryClientProvider>
  </ChakraProvider>
);

const AppWithMotion = withMotion(App);

export default AppWithMotion;
