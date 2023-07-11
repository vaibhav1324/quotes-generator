import * as React from 'react';

import { queryClient, theme, withMotion } from 'utils';

import { ChakraProvider } from '@chakra-ui/react';

import { QueryClientProvider } from 'react-query';

import Landing from 'components/Landing';

const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Landing />
    </QueryClientProvider>
  </ChakraProvider>
);

const AppWithMotion = withMotion(App);

export default AppWithMotion;
