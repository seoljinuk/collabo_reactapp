import { Route, Routes } from "react-router-dom";

import FruitOne from './../pages/FruitOne'; // 표현식01
import FruitList from './../pages/FruitList';
import HomePage from './../pages/HomePage';
import SignupPage from './../pages/SignupPage';
import LoginPage from './../pages/LoginPage';
import ProductList from './../pages/ProductList';
import ProductInsertForm from './../pages/ProductInsertForm';
import ProductUpdateForm from './../pages/ProductUpdateForm';
import ProductDetail from './../pages/ProductDetail';
import CartList from './../pages/CartList';


function App({ user, handleLoginSuccess }) {
    return (
        <Routes>
            {/* path 프롭스는 요청 정보 url, element 프롭스는 컴포넌트 이름 */}
            <Route path='/' element={<HomePage />} />
            <Route path='/member/signup' element={<SignupPage />} />
            <Route path='/member/login' element={< LoginPage setUser={handleLoginSuccess} />} />

            {/* 로그인 여부에 따라서 상품 목록 페이지가 다르게 보여야 하므로, user 프롭스를 넘겨 줍니다. */}
            <Route path='/product/list' element={<ProductList user={user} />} />
            <Route path='/product/insert' element={<ProductInsertForm user={user} />} />

            {/* 기호 ":id"는 변수처럼 동작하는 매개 변수이고, ProductUpdateForm.js 파일에서 참조합니다. */}
            <Route path='/product/update/:id' element={<ProductUpdateForm user={user} />} />

            {/* 미로그인시 `장바구니`와 `구매하기` 기능은 선택이 불가능해야 하므로, user를 프롭스로 넘겨 줍니다. */}
            <Route path='/product/detail/:id' element={<ProductDetail user={user} />} />

            <Route path='/cart/list' element={<CartList user={user} />} />

            <Route path='/fruit' element={<FruitOne />} />
            <Route path='/fruit/list' element={<FruitList />} />
        </Routes>
    );
}

export default App;
