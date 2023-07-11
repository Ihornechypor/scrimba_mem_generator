import * as Styled from './Nav.styles';

interface NavProps {
  srcLogo: string;
  head: string;
  topic: string;
}
const Nav = ({ srcLogo, head, topic }: NavProps) => (
  <Styled.Nav>
    <img src={srcLogo} alt="" />
    <h1>{head}</h1>
    <p>{topic}</p>
  </Styled.Nav>
);
export default Nav;
