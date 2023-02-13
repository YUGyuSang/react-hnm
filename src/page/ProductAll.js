import React, { useEffect, useState } from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductAll = () => {
    const [productList, setProudctList] = useState([]); // ui로 보여주기 위해

const getProducts= async () =>{
    let url = `http://localhost:3004/products`
    let response = await fetch(url);
    let data = await response.json();
    setProudctList(data)
}
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
      <Container>
        <Row>
            {productList.map((menu)=>(
                <Col lg={3}><ProductCard item={menu} /></Col>
            ))}
        </Row> 
      </Container>
    </div>
  )
}
 
export default ProductAll
