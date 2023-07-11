import { css, styled } from 'styled-components';
import { themeFonts } from '../../styles/theme';

const MemWrap = styled.div`
  button {
    background: linear-gradient(135deg, #711f8d 0%, #a818da 100%);
    border: none;
    display: block;
    width: 100%;
    margin-top: 24px;
    text-align: center;
    color: #fff;
    padding: 10px 12px;
    border-radius: 5px;
  }
`;
const MemInputWrap = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  gap: 10px;
`;
const MemInputBox = styled.div`
  input {
    display: block;
    width: 100%;
    padding: 10px 12px;
    border-radius: 5px;
    border: 1px solid #d5d4d8;
    &::placeholder {
      color: #0d0d0d;
    }
  }
`;

const MemScene = styled.div`
  margin-top: 30px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const MemText = styled.p`
  position: absolute;
  display: block;
  padding: 5px 10px;
  font-size: calc(2rem + 2vw);
  font-family: ${themeFonts.memFont};
  color: #fff;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  ${(props: { memTextTop: boolean }) =>
    props.memTextTop &&
    css`
      top: 40px;
    `}
  ${(props: { memTextBot: boolean }) =>
    props.memTextBot &&
    css`
      bottom: 40px;
    `};
`;

export { MemInputBox, MemInputWrap, MemScene, MemText, MemWrap };
