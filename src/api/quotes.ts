import { api } from './instance';

import { Quote } from 'types/apiResponse';

import { delay } from 'utils';

export const getRandomQuote = async () => {
  const { data } = await api.get<Quote>(`/random`);

  await delay(2000);

  return data;
};
