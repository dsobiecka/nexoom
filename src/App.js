import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CharacterList/>}/>
                <Route path="/character/:id" element={<CharacterDetail/>}/>
            </Routes>
        </Router>
    );
}

export default App;
