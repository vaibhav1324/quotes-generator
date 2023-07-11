import React, { FC } from 'react';

import { getRandomQuote } from 'api/quotes';
import { useQuery } from 'react-query';

import { LandingProps } from './Landing.props';

import LandingView from './Landing.view';

const Landing: FC<LandingProps> = () => {
  const queryKey = ['fetch-random-quote'];
  const queryFn = () => getRandomQuote();

  const { data, isError, isLoading, isFetching } = useQuery(queryKey, queryFn);

  return (
    <LandingView
      quote={data}
      isError={isError}
      isLoading={isLoading || isFetching}
    />
  );
};

export default Landing;
