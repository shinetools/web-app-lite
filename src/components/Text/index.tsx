import styled from 'styled-components';
import { TextProps } from './types';

const Text = styled.span<TextProps>`
  font-size: ${({ theme, size = 0 }) => theme.texts.size(size)}px;
  font-weight: ${({ weight = 'regular' }) => (weight === 'medium' ? 500 : 400)};
  color: ${({ variant, theme }) =>
    variant === 'success'
      ? theme.colors.turquoise(-1)
      : theme.colors.grey(
        variant === 'light' ? 0 : (variant === 'secondary' && -1) || -2,
      )};
`;

export default Text;
