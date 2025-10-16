import { Route, Routes } from "react-router-dom";

import FruitOne from './../pages/FruitOne'; // 표현식01
import FruitList from './../pages/FruitList';
import HomePage from './../pages/HomePage';
import SignupPage from './../pages/SignupPage';
import LoginPage from './../pages/LoginPage';

function App({ user, handleLoginSuccess }) {
    return (
        <Routes>
            {/* path 프롭스는 요청 정보 url, element 프롭스는 컴포넌트 이름 */}
            <Route path='/' element={<HomePage />} />
            <Route path='/member/signup' element={<SignupPage />} />

            <Route path='/member/login' element={< LoginPage setUser={handleLoginSuccess} />} />

            <Route path='/fruit' element={<FruitOne />} />
            <Route path='/fruit/list' element={<FruitList />} />
        </Routes>
    );
}

export default App;
