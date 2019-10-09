import React, { FC } from 'react';
import { NavLink, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

const Link: FC<LinkProps> = ({ to, children }) => (
  <NavLink
    to={to}
    style={{ color: '#455980', fontWeight: 500 }}
    activeStyle={{ color: '#4B5FFA' }}
  >
    {children}
  </NavLink>
);

export default Link;
