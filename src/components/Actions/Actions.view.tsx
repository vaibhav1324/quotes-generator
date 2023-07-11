import React, { FC } from 'react';

import { useToast } from '@chakra-ui/react';

import { useQueryClient, useIsFetching } from 'react-query';

import { MdContentCopy, MdReplay } from 'react-icons/md';

import { Button, Card, Container } from './Actions.style';

import { Quote } from 'types/apiResponse';

const RANDOM_QUOTE_QK = ['fetch-random-quote'];

const Actions: FC = () => {
  const toast = useToast();
  const isFetching = useIsFetching();
  const queryClient = useQueryClient();

  const onRegenerate = () => {
    queryClient.refetchQueries(RANDOM_QUOTE_QK);
  };

  const onCopyContent = () => {
    const quoteData = queryClient.getQueryData<Quote>(RANDOM_QUOTE_QK);

    if (!quoteData) {
      return;
    }

    const { author = '', content = '' } = quoteData;

    const textToCopy = `"${content}" ~ ${author}`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast({
          size: 'sm',
          duration: 2000,
          status: 'success',
          variant: 'subtle',
          title: 'Text copied to clipboard',
        });
      })
      .catch(() => null);
  };

  return (
    <Container>
      <Card>
        <Button
          onClick={onCopyContent}
          aria-label="copy-button"
          icon={<MdContentCopy size="22px" />}
          isDisabled={isFetching !== 0}
        />
        <Button
          onClick={onRegenerate}
          aria-label="regenrate-button"
          icon={<MdReplay size="22px" />}
          isLoading={isFetching !== 0}
        />
      </Card>
    </Container>
  );
};

export default Actions;
