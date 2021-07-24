import React from "react";
import Link from "../Link";
import styled from "styled-components";
import { Wrapper, NavMenu } from "./styles";
import Icon from "../Icon";

const Label = styled.span`
  margin-left: ${({ theme }) => theme.spacings.abs8}px;
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
      <Link to="/styleguide">
        <Icon name="smile" />
        <Label>Styleguide</Label>
      </Link>
    </NavMenu>
  </Wrapper>
);

export default Sidebar;
