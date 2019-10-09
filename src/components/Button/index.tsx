import React from 'react';
import styled from 'styled-components';
import Text from 'components/Text';
import Icon from 'components/Icon';

const RoundedButtonContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.s}px
    ${({ theme }) => theme.spacings.m}px;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.colors.ctaBlue(4)};
`;
const Label = styled.span`
  padding-left: ${({ theme }) => theme.spacings.s}px;
`;

export const RoundedButton = ({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) => {
  return (
    <RoundedButtonContainer>
      <Text variant="secondary" weight="medium">
        <Icon name={icon} size={-2} />
        <Label>{label}</Label>
      </Text>
    </RoundedButtonContainer>
  );
};
