import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const List = () => {
  const [listProduct, setListproduct] = useState([]);

  useEffect(() => {
    fetch('data/listProductData.json')
      .then(res => res.json())
      .then(data => {
        setListproduct(data.listProductData);
      });
  }, []);

  return (
    <ProductContainer>
      {listProduct.map((listProduct, index) => {
        return (
          <ProductCard
            key={index}
            id={listProduct.id}
            img={listProduct.image_url}
            name={listProduct.name}
            description={listProduct.description}
          />
        );
      })}
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: grid;
  column-gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0;
`;

export default List;
