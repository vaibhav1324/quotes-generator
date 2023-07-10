import React from 'react';

import { QueryClient } from 'react-query';

import { createStandaloneToast } from '@chakra-ui/react';

import { theme } from '@chakra-ui/react';

export const toast = createStandaloneToast({ theme });

const renderErrorItems = (items: string[]) => {
  return (
    <ul style={{ marginTop: '10px' }}>
      {items?.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
};

const showErrorToast = (err?: any) => {
  const data = err?.response?.data;
  const message = data?.message ?? err?.message ?? data;
  const validationMessages = data?.validationMessages;

  const error =
    typeof message === 'string'
      ? message
      : 'Something went wrong with the request';

  const isValidationErr =
    data?.error === 'ValidationError' || error === 'ValidationError';

  const validationErrors = validationMessages
    ? Object.values(validationMessages)?.map((e: any) => e?.toString())
    : null;

  let title = 'Error';
  let description: React.ReactNode = error;

  if (isValidationErr && validationErrors) {
    title = 'Validation Error';

    description = renderErrorItems(validationErrors);
  }

  toast.toast({
    status: 'error',
    title: 'Error',
    description,
    isClosable: true,
    duration: 5000,
  });
};

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: any) => {
        showErrorToast(error);
      },
    },
    queries: {
      retry: false,
      onError: (error: any) => {
        if (error?.response?.data?.type === 'session_expired') {
          showErrorToast(error);
        }
      },
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000 * 5,
    },
  },
});
