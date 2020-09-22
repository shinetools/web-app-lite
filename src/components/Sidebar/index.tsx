import React from "react";
import Link from "../Link";
import styled from "styled-components";
import { Wrapper, NavMenu } from "./styles";
import { Icon } from "@shinetools/sunbeams/web";

const Label = styled.span`
  margin-left: ${({ theme }) => theme.spacings.abs8}px;
`;

const Sidebar = () => (
  <Wrapper>
    <NavMenu>
      <Link to="/bank">
        <Icon name="user" color="inherit" />
        <Label>Banque</Label>
      </Link>
      <Link to="/payments">
        <Icon name="transfer" color="inherit" />
        <Label>Paiements</Label>
      </Link>
    </NavMenu>
  </Wrapper>
);

export default Sidebar;
