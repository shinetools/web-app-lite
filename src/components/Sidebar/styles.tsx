import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      28.07deg,
      rgba(246, 246, 254, 0) 66.97%,
      rgba(246, 246, 254, 0.5) 100%,
      rgba(246, 246, 254, 0.5) 100%
    ),
    linear-gradient(
      270deg,
      rgba(246, 246, 254, 0.5) 0%,
      rgba(252, 252, 253, 0.5) 41.25%
    ),
    #fcfcfd;
  width: 240px;
`;

export const NavMenu = styled.div`
  padding: ${({ theme }) =>
    `${theme.spacings.abs32}px ${theme.spacings.abs16}px 0`};
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: ${({ theme }) => theme.spacings.abs16}px;
  }
`;
