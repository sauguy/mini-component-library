/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
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

  ${props => props.value > 99.6 && `
    border-radius: 4px ${Math.round(4 - (100 - props.value) * 10)}px ${Math.round(4 - (100 - props.value) * 10)}px 4px
  `};
`;

export default ProgressBar;
