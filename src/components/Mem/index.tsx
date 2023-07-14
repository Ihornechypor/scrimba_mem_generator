import { useState } from 'react';
import data from '../../data/mems';
import Input from '../Input';
import * as Styled from './Mem.styles';
import MemScene from './MemScene/index';

const random = (max: number) => Math.floor(Math.random() * max);

export const Mem = () => {
  const [memStatus, setMemStatus] = useState({ memTopText: '', memBotText: '', memSrc: '', memLoaded: false });

  const handleMemTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMemStatus((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  const handleGetMem = () => {
    setMemStatus((prev) => ({
      ...prev,
      memSrc: data.data.memes[random(data.data.memes.length - 1)].url,
      memTopText: '',
      memBotText: '',
      memLoaded: true,
    }));
  };

  return (
    <Styled.MemWrap>
      <Styled.MemInputWrap>
        <Styled.MemInputBox>
          <Input
            type="text"
            placeholder="type text"
            id="memTopText"
            value={memStatus.memTopText}
            onChangeInp={handleMemTextChange}
            disabled={!memStatus.memLoaded}
          />
        </Styled.MemInputBox>
        <Styled.MemInputBox>
          <Input
            type="text"
            placeholder="type text"
            id="memBotText"
            value={memStatus.memBotText}
            onChangeInp={handleMemTextChange}
            disabled={!memStatus.memLoaded}
          />
        </Styled.MemInputBox>
      </Styled.MemInputWrap>
      <button onClick={handleGetMem}>Get a new meme image 🖼</button>
      <MemScene
        memTopText={memStatus.memTopText}
        memBotText={memStatus.memBotText}
        memLoaded={memStatus.memLoaded}
        memSrc={memStatus.memSrc}
      />
    </Styled.MemWrap>
  );
};
