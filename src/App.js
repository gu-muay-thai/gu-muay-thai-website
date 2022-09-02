import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
    return (
        <Routes>
            <Route exact path = "/gu-muay-thai-website" element = { <Home /> } />
		</Routes>
    );
}

export default App;
