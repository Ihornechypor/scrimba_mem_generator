import { styled } from 'styled-components';
import theme from '../../styles/theme';

const Nav = styled.nav`
  padding: 22px ${theme.global.gutter};
  display: flex;
  background: linear-gradient(90deg, #672280 0%, #a626d3 100%);
  color: #fff;
  gap: 10px;
  align-items: center;

  h1 {
    font-size: 20px;
  }

  img {
    width: 100%;
    max-width: 32px;
  }
  p {
    flex-grow: 1;
    text-align: right;
  }
`;
export { Nav };
