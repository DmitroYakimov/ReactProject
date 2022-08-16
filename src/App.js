import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { FooterContainer } from './containers/footer';
import Amogus from './components/Amogus';
import {Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Routes>
                    <Route index element={<Hero/>}/>            
                    <Route path="amogus" element={<Amogus/>} />
            </Routes>
            <FooterContainer />
        </>    
    );
}

export default App;
