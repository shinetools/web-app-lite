import React, { FC } from 'react';
import styled from 'styled-components';
import Text from 'components/Text';
import { SectionListProps } from './types';

const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.xxl}px;
`;

const TitleContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.s}px;
  padding-left: ${({ theme }) => theme.spacings.m}px;
`;

const Item = styled.div`
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacings.s}px;

  :hover {
    background-color: ${({ theme }) => theme.colors.ctaBlue(4)};
  }
`;

const SectionList: FC<SectionListProps> = ({ sections }) => {
  return (
    <>
      {sections.map(section => {
        return (
          <Section key={section.id}>
            <TitleContainer>
              <Text weight="medium">{section.title}</Text>
            </TitleContainer>
            {section.items.map(item => {
              return <Item key={item.id}>{item.content}</Item>;
            })}
          </Section>
        );
      })}
    </>
  );
};

export default SectionList;
