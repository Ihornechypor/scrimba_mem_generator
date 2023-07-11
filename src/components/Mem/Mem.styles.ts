import { styled } from 'styled-components';

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
const MemInputBox = styled.div``;

export { MemInputBox, MemInputWrap, MemWrap };
