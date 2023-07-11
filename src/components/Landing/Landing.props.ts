import { Quote } from 'types/apiResponse';

export type LandingProps = {};

export type LandingViewProps = {
  isError: boolean;
  isLoading: boolean;
  quote: Quote | undefined;
};
