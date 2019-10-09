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

const Item = styled.div<{ selected: boolean }>`
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacings.s}px;
  ${({ selected }) =>
    selected
      ? 'box-shadow: 0px 2px 4px rgba(69, 89, 128, 0.12), 0px 2px 8px rgba(69, 89, 128, 0.08);'
      : ''}

  :hover {
    ${({ selected, theme }) =>
    selected ? '' : `background-color: ${theme.colors.ctaBlue(4)};`}
  }
`;

const SectionList: FC<SectionListProps> = ({ sections, onSelectItem }) => {
  return (
    <>
      {sections.map(section => {
        return (
          <Section key={section.id}>
            <TitleContainer>
              <Text weight="medium">{section.title}</Text>
            </TitleContainer>
            {section.items.map(item => {
              return (
                <Item
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  selected={item.selected}
                >
                  {item.content}
                </Item>
              );
            })}
          </Section>
        );
      })}
    </>
  );
};

export default SectionList;
