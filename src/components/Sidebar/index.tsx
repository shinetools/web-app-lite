import React from 'react';
import Link from 'components/Link';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Wrapper, NavMenu } from './styles';

const Label = styled.span`
  margin-left: ${({ theme }) => theme.spacings.s}px;
`;

const Sidebar = () => (
  <Wrapper>
    <NavMenu>
      <Link to="/bank">
        <Icon name="user" />
        <Label>Banque</Label>
      </Link>
      <Link to="/payments">
        <Icon name="transfer" />
        <Label>Paiements</Label>
      </Link>
    </NavMenu>
  </Wrapper>
);

export default Sidebar;
