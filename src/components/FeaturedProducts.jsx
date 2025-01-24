import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProducts } from '../services/mockData';

const Container = styled.section`
  margin: var(--spacing-xl) 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
`;

const ProductCard = styled(motion.div)`
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--background);
  box-shadow: var(--shadow);
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.95);
`;

const Title = styled.h3`
  font-size: 1.1em;
  margin-bottom: var(--spacing-xs);
`;

const Price = styled.span`
  font-weight: 600;
  color: var(--primary);
`;

const FeaturedProducts = () => {
  const { data: products, isLoading } = useQuery(['products'], () => fetchProducts());

  if (isLoading) return null;

  return (
    <Container>
      <h2>Featured Products</h2>
      <Grid>
        {products?.slice(0, 3).map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ProductCard
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <ImageContainer>
                <Image src={product.image} alt={product.name} />
              </ImageContainer>
              <Info>
                <Title>{product.name}</Title>
                <Price>${product.price}</Price>
              </Info>
            </ProductCard>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;
