import './App.css';
import { Routes, Route, } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetall from './page/ProductDetall';

//1. 전체상품페이지, 로그인, 상품페이지
//2. 전체상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//6. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
//7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//8. 상품을 검색 할 수 있다.

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductAll/>}/> {/*메인 페이지*/}
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductDetall/>}/>
      </Routes>
    </div>
  );
}

export default App;
