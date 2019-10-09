import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { IconProps } from 'components/Icon/types';

interface IconCircleProps extends IconProps {
  circleColor: string;
}

const Circle = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  border-radius: 40px;
`;

const IconCircle: FC<IconCircleProps> = ({ circleColor, ...props }) => {
  return (
    <Circle color={circleColor}>
      <Icon {...props} />
    </Circle>
  );
};

export default IconCircle;
