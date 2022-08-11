import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { FooterContainer } from './containers/footer'

function App() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Hero />
            <FooterContainer />
        </>
    );
}

export default App;
