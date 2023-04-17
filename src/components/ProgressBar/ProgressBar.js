/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  if (value < 0 || value > 100) {
    // round up to 0 or 100
    value = Math.max(0, Math.min(100, value));
  }
  
  return <>
    <Wrapper className={size} role='progressbar' aria-labelledby='progress' aria-valuenow={value}>
      <ProgressBarElement value={value}/>
    </Wrapper>
  </>
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  padding: 0;

  &.large {
    height: 24px;
    padding: 4px;
  }

  &.medium {
    height: 12px;
  }

  &.small {
    height: 8px;
  }
`;


const ProgressBarElement = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;

  ${props => {
    if (props.value === 100) {
      return `border-radius: 4px 4px 4px 4px`;
    }
    if (props.value >= 99.7) {
      return `border-radius: 4px 3px 3px 4px`;
    }
    if (props.value >= 99.3) {
      return `border-radius: 4px 2px 2px 4px`;
    }
    if (props.value > 99) {
      return `border-radius: 4px 1px 1px 4px`;
    }
  }};
`;

export default ProgressBar;
