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
      <Nav srcLogo={tollImg} />
      <Main>
        <Section>
          <Mem />
        </Section>
      </Main>
    </>
  );
}

export default App;
