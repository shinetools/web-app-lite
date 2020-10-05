import React, { FC } from "react";
import { NavLink, LinkProps } from "react-router-dom";

const Link: FC<LinkProps> = ({ to, children }) => (
  <NavLink
    activeStyle={{ color: "#4B5FFA" }}
    style={{ color: "#455980", fontWeight: 500 }}
    to={to}
  >
    {children}
  </NavLink>
);

export default Link;
