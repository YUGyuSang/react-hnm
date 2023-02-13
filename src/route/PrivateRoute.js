import React from 'react'
import ProductDetall from '../page/ProductDetall'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({authenticate}) => {
  return authenticate== true?<ProductDetall />:<Navigate to="/login"/>; // true면 프로덕트 디테일 페이지를 보여주고 그게 아니면 로그인페이지로 팅겨주는 코드
}

export default PrivateRoute
