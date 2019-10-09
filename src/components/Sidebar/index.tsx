import React from 'react';
import Link from 'components/Link';
import { Wrapper, NavMenu } from './styles';

const Sidebar = () => (
  <Wrapper>
    <NavMenu>
      <Link to="/bank">Banque</Link>
      <Link to="/payments">Paiements</Link>
    </NavMenu>
  </Wrapper>
);

export default Sidebar;
