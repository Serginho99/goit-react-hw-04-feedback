import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedBackOptions.styled';

export default function FeedBackOptions({ onLeaveFeedback, options }) {
  return (
    <ButtonWrapper>
      {options.map((option, index) => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <Button
            key={index}
            onClick={() => console.log(onLeaveFeedback(option))}
            type="button"
          >
            {label}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
}

FeedBackOptions.propTypes = {
  onClick: PropTypes.func,
};
