import React, { FC } from 'react';

import { getRandomQuote } from 'api/quotes';
import { useQuery } from 'react-query';

import { LandingProps } from './Landing.props';

import LandingView from './Landing.view';

const Landing: FC<LandingProps> = () => {
  const queryKey = ['fetch-random-quote'];
  const queryFn = () => getRandomQuote();

  const { data, isError, isLoading } = useQuery(queryKey, queryFn);

  return <LandingView quote={data} isLoading={isLoading} isError={isError} />;
};

export default Landing;
