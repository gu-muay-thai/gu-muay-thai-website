import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
    return (
        <Routes>
            <Route exact path = "/gu-muay-thai-website" element = { <Home /> } />
            <Route exact path = "/gu-muay-thai-website/about" element = { <></> } />
            <Route exact path = "/gu-muay-thai-website/training" element = { <></> } />
            <Route exact path = "/gu-muay-thai-website/socials" element = { <></> } />
            <Route exact path = "/gu-muay-thai-website/faq" element = { <></> } />
		</Routes>
    );
}

export default App;
