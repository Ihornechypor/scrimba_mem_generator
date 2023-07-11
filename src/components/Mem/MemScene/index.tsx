import * as Styled from './MemScene.styles';

interface MemSceneProps {
  memTopText: string;
  memSrc: string;
  memBotText: string;
  memLoaded: boolean;
}

const MemScene = ({ memTopText, memSrc, memBotText, memLoaded }: MemSceneProps) => (
  <Styled.MemScene>
    <Styled.MemSceneText memTextTop>{memTopText}</Styled.MemSceneText>
    {memLoaded && <img src={memSrc} alt="" />}
    <Styled.MemSceneText memTextBot>{memBotText}</Styled.MemSceneText>
  </Styled.MemScene>
);

export default MemScene;
