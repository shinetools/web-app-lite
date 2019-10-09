import React, { FC } from 'react';
import styled from 'styled-components';
import Text from 'components/Text';
import { RoundedButton } from 'components/Button';
import recipients, { Recipient } from './recipients';
import SectionList from '../../components/SectionList';

const RecipientContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.m}px;
`;

const RecipientLine: FC<{ recipient: Recipient }> = ({ recipient }) => {
  return (
    <RecipientContainer>
      <div>
        <Text variant="primary" weight="medium">
          {recipient.label}
        </Text>
        <br />
        <Text variant="light">HSBC • {recipient.iban}</Text>
      </div>
      <RoundedButton icon="payout" label="Send" />
    </RecipientContainer>
  );
};

const Container = styled.div`
  padding: 120px;
  flex: 1;
`;

const Payments = () => {
  const sections = [
    {
      id: '1',
      title: 'My Accounts',
      items: recipients.map(recipient => ({
        id: recipient.bankTransferRecipientId,
        href: '/payments',
        content: <RecipientLine recipient={recipient} />,
      })),
    },
  ];

  return (
    <Container>
      <SectionList sections={sections} />
    </Container>
  );
};

export default Payments;
