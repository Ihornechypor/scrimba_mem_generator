import styled from 'styled-components';
import theme from '../../../styles/theme';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 0 ${theme.global.gutter};
`;

export { Main };
