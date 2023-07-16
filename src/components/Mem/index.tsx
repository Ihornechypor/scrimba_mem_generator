import { useEffect, useState } from 'react';
import Input from '../Input';
import * as Styled from './Mem.styles';
import MemScene from './MemScene/index';

const random = (max: number) => Math.floor(Math.random() * max);

export const Mem = () => {
  const [memStatus, setMemStatus] = useState({ memTopText: '', memBotText: '', memSrc: '', memLoaded: false });
  const [allMems, setAllMems] = useState(['']);

  const handleMemTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMemStatus((prev) => ({ ...prev, [name]: value }));
  };

  const handleGetMem = () => {
    setMemStatus((prev) => ({
      ...prev,
      memTopText: '',
      memBotText: '',
      memSrc: allMems[random(allMems.length - 1)],
      memLoaded: true,
    }));
  };

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        setAllMems(data.data.memes.map((item: { url: string }) => item.url));
        setMemStatus((prev) => ({
          ...prev,
        }));
      });
  }, []);

  return (
    <Styled.MemWrap>
      <Styled.MemInputWrap>
        <Styled.MemInputBox>
          <Input
            type="text"
            placeholder="type text"
            name="memTopText"
            value={memStatus.memTopText}
            onChangeInp={handleMemTextChange}
            disabled={!memStatus.memLoaded}
          />
        </Styled.MemInputBox>
        <Styled.MemInputBox>
          <Input
            type="text"
            placeholder="type text"
            name="memBotText"
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
