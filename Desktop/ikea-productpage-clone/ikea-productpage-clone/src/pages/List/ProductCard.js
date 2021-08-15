import React from 'react';
import styled from 'styled-components';
//import Container from '../../components/Container/Container';

const ProductCard = props => {
  const { img, name, description, price } = props;

  // const { imgHover } = this.state;

  return (
    <ProductCardContainer>
      <section className="productImage">
        <img src={img} alt="chairProduct" />
      </section>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  display: grid;
  column-gap: 2.5rem;
  align-items: stretch;
`;

// const ChairProduct = styled.img`
//   width: 50%;
//   height: 50%;
//   position: absolute;
// `;

export default ProductCard;
