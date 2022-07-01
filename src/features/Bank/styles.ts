import styled from 'styled-components';
import Text from '../../components/Text';

export const Title = styled(Text).attrs({
  display: 'block',
  weight: 'medium',
  size: 1,
})``;

export const Subtitle = styled(Text)`
  display: block;
  color: ${({ theme }) => `${theme.colors.grey(0)}`};
`;
