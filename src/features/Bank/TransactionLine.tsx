import React, { FC } from 'react';
import styled from 'styled-components';
import IconCircle from 'components/IconCircle';
import Text from 'components/Text';
import moment from 'moment';
import Icon from 'components/Icon';

const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacings.m}px;
  padding-right: ${({ theme }) => theme.spacings.m}px;
  height: ${({ theme }) => theme.spacings.xxxl}px;
`;

const TransactionLabel = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacings.m}px;
  margin-right: ${({ theme }) => theme.spacings.m}px;
`;

const PaymentMethod = styled.div`
  text-transform: capitalize;
  width: 100px;
`;

const AmountContainer = styled.div`
  width: 100px;
  text-align: right;
`;

const ReceiptIcon = styled.div`
  width: 40px;
  text-align: right;
`;

const Amount: FC<{
  value: number;
  type: 'payin' | 'payout';
  currency: string;
}> = ({ value, currency, type }) => {
  const amount = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
  }).format(value);
  const payin = type === 'payin';

  return (
    <Text variant={payin ? 'success' : 'secondary'} weight="medium">
      {payin && '+'}
      {amount}
    </Text>
  );
};

const TransactionLine = ({ transaction }: { transaction: any }) => {
  const formattedTime = moment(transaction.transactionAt).format('HH:mm');

  return (
    <LineWrapper>
      <IconCircle circleColor="#FFF8DF" name="cuttlery" size={4} />
      <TransactionLabel>
        <Text>{transaction.title}</Text>
        <br />
        <Text variant="light">{formattedTime}</Text>
      </TransactionLabel>
      <PaymentMethod>
        <Text variant="light">
          {transaction.paymentMethod.toLocaleLowerCase()}
        </Text>
      </PaymentMethod>
      <AmountContainer>
        <Amount
          currency={transaction.paymentCurrency}
          type={transaction.type}
          value={transaction.value}
        />
      </AmountContainer>
      <ReceiptIcon>
        {transaction.receiptId && <Icon name="paperclip" size={4} />}
      </ReceiptIcon>
    </LineWrapper>
  );
};

export default TransactionLine;
