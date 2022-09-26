import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedBackOptions.styled';

export default function FeedBackOptions({ onLeaveFeedback }) {
  return (
    <ButtonWrapper>
      <Button onClick={() => onLeaveFeedback('good')} type="button">
        Good
      </Button>
      <Button onClick={() => onLeaveFeedback('neutral')} type="button">
        Neutral
      </Button>
      <Button onClick={() => onLeaveFeedback('bad')} type="button">
        Bad
      </Button>
    </ButtonWrapper>
  );
}

FeedBackOptions.propTypes = {
  onClick: PropTypes.func,
};
