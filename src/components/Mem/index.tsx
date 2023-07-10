import * as Styled from './Mem.styles';
export const Mem = () => (
  <>
    <Styled.MemWrap>
      <Styled.MemInputWrap>
        <Styled.MemInputBox>
          <label>
            <input type="text" placeholder="Shut up" />
          </label>
        </Styled.MemInputBox>
        <Styled.MemInputBox>
          <label>
            <input type="text" placeholder="and take my money" />
          </label>
        </Styled.MemInputBox>
      </Styled.MemInputWrap>
      <button>Get a new meme image</button>
      <Styled.MemScene>
        <img src="" alt="" />
      </Styled.MemScene>
    </Styled.MemWrap>
  </>
);
