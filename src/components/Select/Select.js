import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <StylingElement>
        <span>{displayedValue}</span>
        <Chevron id="chevron-down" strokeWidth={2} size={24} />
      </StylingElement>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  min-height: 43px;
  color: ${COLORS.gray700};
  
  :hover {
    color: ${COLORS.black};
  }
`;

const Chevron = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  margin-left: 16px;
`;

const SelectElement = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const StylingElement = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};

  ${SelectElement}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default Select;
