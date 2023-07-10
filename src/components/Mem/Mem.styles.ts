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

const MemScene = styled.div``;

export { MemInputBox, MemInputWrap, MemScene, MemWrap };
