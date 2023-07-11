import React, { FC } from 'react';

import Lottie from 'lottie-react';

import { LandingViewProps } from './Landing.props';

import {
  QuoteText,
  Container,
  AuthorText,
  lottieProps,
  LoadingText,
  LottieContainer,
  ContentContainer,
} from './Landing.style';

const LandingView: FC<LandingViewProps> = ({ quote, isError, isLoading }) => {
  return (
    <Container>
      {isLoading ? (
        <>
          <LottieContainer>
            <Lottie {...lottieProps} />
          </LottieContainer>
          <LoadingText>Loading...</LoadingText>
        </>
      ) : isError ? (
        <LoadingText>Something went wrong. please try again</LoadingText>
      ) : (
        <ContentContainer>
          <QuoteText>"{quote?.content || ''}"</QuoteText>
          <AuthorText>~ {quote?.author || ''}</AuthorText>
        </ContentContainer>
      )}
    </Container>
  );
};

export default LandingView;
