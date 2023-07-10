import * as React from 'react';

import { queryClient, theme, withMotion } from 'utils';

import { ChakraProvider } from '@chakra-ui/react';

import { QueryClientProvider } from 'react-query';

const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <p>Landing</p>
    </QueryClientProvider>
  </ChakraProvider>
);

const AppWithMotion = withMotion(App);

export default AppWithMotion;
