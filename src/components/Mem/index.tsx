import { useState } from 'react';
import data from '../../data/mems';
import * as Styled from './Mem.styles';

const random = (max: number) => Math.floor(Math.random() * max);

export const Mem = () => {
  const [memTopText, setMemTopText] = useState('');
  const [memBotText, setMemBotText] = useState('');
  const [memSrc, setMemSrc] = useState('');
  const [memLoaded, setMemLoaded] = useState(false);

  const handleMemTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'memTopText') setMemTopText(e.target.value);
    if (e.target.id === 'memBotText') setMemBotText(e.target.value);
  };
  const handleGetMem = () => {
    setMemSrc(data.data.memes[random(data.data.memes.length - 1)].url);
    setMemLoaded(true);
  };
  return (
    <Styled.MemWrap>
      <Styled.MemInputWrap>
        <Styled.MemInputBox>
          <label>
            <input
              type="text"
              placeholder="Shut up"
              id="memTopText"
              onChange={handleMemTextChange}
              disabled={!memLoaded}
            />
          </label>
        </Styled.MemInputBox>
        <Styled.MemInputBox>
          <label>
            <input
              type="text"
              placeholder="and take my money"
              id="memBotText"
              onChange={handleMemTextChange}
              disabled={!memLoaded}
            />
          </label>
        </Styled.MemInputBox>
      </Styled.MemInputWrap>
      <button onClick={handleGetMem}>Get a new meme image 🖼</button>
      <Styled.MemScene>
        <Styled.MemText memTextTop>{memTopText}</Styled.MemText>
        {memLoaded && <img src={memSrc} alt="" />}
        <Styled.MemText memTextBot>{memBotText}</Styled.MemText>
      </Styled.MemScene>
    </Styled.MemWrap>
  );
};
