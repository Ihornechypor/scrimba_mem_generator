import { useState } from 'react';
import data from '../../data/mems';
import * as Styled from './Mem.styles';

const random = (max: number) => Math.floor(Math.random() * max);

export const Mem = () => {
  const [memStatus, setMemStatus] = useState({ memTopText: '', memBotText: '', memSrc: '', memLoaded: false });

  const handleMemTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'memTopText') setMemStatus((prev) => ({ ...prev, memTopText: e.target.value }));
    if (e.target.id === 'memBotText') setMemStatus((prev) => ({ ...prev, memBotText: e.target.value }));
  };
  const handleGetMem = () =>
    setMemStatus((prev) => ({
      ...prev,
      memSrc: data.data.memes[random(data.data.memes.length - 1)].url,
      memTopText: '',
      memBotText: '',
      memLoaded: true,
    }));

  return (
    <Styled.MemWrap>
      <Styled.MemInputWrap>
        <Styled.MemInputBox>
          <label>
            <input
              type="text"
              placeholder="Shut up"
              id="memTopText"
              value={memStatus.memTopText}
              onChange={handleMemTextChange}
              disabled={!memStatus.memLoaded}
            />
          </label>
        </Styled.MemInputBox>
        <Styled.MemInputBox>
          <label>
            <input
              type="text"
              placeholder="and take my money"
              id="memBotText"
              value={memStatus.memBotText}
              onChange={handleMemTextChange}
              disabled={!memStatus.memLoaded}
            />
          </label>
        </Styled.MemInputBox>
      </Styled.MemInputWrap>
      <button onClick={handleGetMem}>Get a new meme image 🖼</button>
      <Styled.MemScene>
        <Styled.MemText memTextTop>{memStatus.memTopText}</Styled.MemText>
        {memStatus.memLoaded && <img src={memStatus.memSrc} alt="" />}
        <Styled.MemText memTextBot>{memStatus.memBotText}</Styled.MemText>
      </Styled.MemScene>
    </Styled.MemWrap>
  );
};
