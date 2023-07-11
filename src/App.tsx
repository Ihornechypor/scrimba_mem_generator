import tollImg from './assets/troll.png';
import { Main } from './components/Layout';
import { Mem } from './components/Mem';
import Nav from './components/Nav';
import Section from './components/Section';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav srcLogo={tollImg} head="Meme Generator" topic="React Course - Project 3" />
      <Main>
        <Section>
          <Mem />
        </Section>
      </Main>
    </>
  );
}

export default App;
