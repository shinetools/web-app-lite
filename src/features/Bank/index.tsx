import React, { FC } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import transactions, { Transaction } from './transactions';
import SectionList from '../../components/SectionList';
import TransactionLine from './TransactionLine';

const Container = styled.div`
  padding: 120px;
  flex: 1;
`;

const groupTransactions = (transacs: Transaction[]) => {
  const groupedTransactions: { [x: string]: Transaction[] } = {};

  transacs.forEach(transaction => {
    const date = moment(transaction.transactionAt).format('YYYY-MM-DD');
    if (!groupedTransactions[date]) {
      groupedTransactions[date] = [];
    }

    groupedTransactions[date].push(transaction);
  });

  return groupedTransactions;
};

const Bank: FC = () => {
  const { transactionId } = useParams();

  const groupedTransactions = groupTransactions(transactions);
  const sections = Object.keys(groupedTransactions)
    .sort()
    .reverse()
    .map(date => {
      const dateTransactions = groupedTransactions[date];

      return {
        id: date,
        title: moment(date).format('DD/MM/YYYY'),
        items: dateTransactions.map(transaction => ({
          id: transaction.transactionId,
          href: `/bank/${transaction.transactionId}`,
          selected: transactionId === transaction.transactionId,
          content: <TransactionLine transaction={transaction} />,
        })),
      };
    });

  return (
    <Container>
      <SectionList sections={sections} />
    </Container>
  );
};

export default Bank;
