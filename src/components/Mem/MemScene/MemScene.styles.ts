import { css, styled } from 'styled-components';
import theme, { themeFonts } from '../../../styles/theme';

interface MemStyleProps {
  memTextTop?: boolean;
  memTextBot?: boolean;
}

const MemScene = styled.div`
  margin-top: 30px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const MemSceneText = styled.p<MemStyleProps>`
  position: absolute;
  width: 100%;
  word-break: break-all;
  text-align: center;
  max-width: ${theme.global.maxSectionWidth};
  display: block;
  padding: 5px 10px;
  font-size: calc(2rem + 2vw);
  font-family: ${themeFonts.memFont};
  color: #fff;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  ${(props) =>
    props.memTextTop &&
    css`
      top: 40px;
    `}
  ${(props) =>
    props.memTextBot &&
    css`
      bottom: 40px;
    `};
`;

export { MemScene, MemSceneText };
