import { Route, Routes } from "react-router-dom";

import FruitOne from './../pages/FruitOne'; // 표현식01
import FruitList from './../pages/FruitList';
import HomePage from './../pages/HomePage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/fruit' element={<FruitOne />} />
            <Route path='/fruit/list' element={<FruitList />} />
        </Routes>
    );
}

export default App;
