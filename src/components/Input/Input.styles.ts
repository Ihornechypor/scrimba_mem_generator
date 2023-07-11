import { styled } from 'styled-components';

const InputBox = styled.label`
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

export { InputBox };
