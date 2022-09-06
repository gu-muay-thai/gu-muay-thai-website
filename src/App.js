import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Training from './components/Training'
import Socials from './components/Socials'
import FAQ from './components/FAQ'

const App = () => {
    return (
        <Routes>
            <Route exact path = "/gu-muay-thai-website" element = { <Home /> } />
            <Route exact path = "/gu-muay-thai-website/about" element = { <About /> } />
            <Route exact path = "/gu-muay-thai-website/training" element = { <Training /> } />
            <Route exact path = "/gu-muay-thai-website/socials" element = { <Socials /> } />
            <Route exact path = "/gu-muay-thai-website/faq" element = { <FAQ /> } />
		</Routes>
    );
}

export default App;
