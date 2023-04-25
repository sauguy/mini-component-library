import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    icon: 16,
    height: '1.5rem',
    borderSize: '1px',
  },
  large: {
    icon: 24,
    height: '2rem',
    borderSize: '2px',
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const iconSize = sizes[size].icon;

  if (!iconSize) {
    throw new Error(`The size ${iconSize} is not supported. Use one of these values: ${Object.keys(sizes).join(', ')}`)
  }

  const height = sizes[size].height;
  const paddingLeft = sizes[size].height;
  const borderSize = sizes[size].borderSize;

  return <Wrapper style={{width, height}}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Input style={{paddingLeft}} placeholder={placeholder} />
    <IconWrapper><Icon id={icon} size={iconSize} /></IconWrapper>
    <Underline style={{'--borderSize': borderSize}}/>
  </Wrapper>;
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
`;

const IconWrapper = styled.div`
  position: absolute;
  height: min-content;
  left: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
`;

const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  :hover {
    &, & + ${IconWrapper} {
      color: ${COLORS.black};
    }
  }
`;

const Underline = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  bottom: 1px;
  width: 98%;
  border-bottom: var(--borderSize) solid ${COLORS.black};
`;

export default IconInput;
