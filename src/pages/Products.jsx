import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
`;

const ProductCard = styled(motion.div)`
  background: var(--background);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: var(--spacing-md);
`;

const ProductTitle = styled.h3`
  margin-bottom: var(--spacing-xs);
`;

const ProductMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--secondary);
  font-size: 0.9em;
`;

const SortControls = styled.div`
  margin-bottom: var(--spacing-lg);
  display: flex;
  gap: var(--spacing-md);
`;

const SortButton = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background: ${props => props.active ? 'var(--primary)' : 'var(--accent)'};
  color: ${props => props.active ? 'var(--accent)' : 'var(--primary)'};
  border-radius: var(--radius);
  transition: all 0.2s;

  &:hover {
    background: var(--primary);
    color: var(--accent);
  }
`;

const Products = () => {
  const [sortBy, setSortBy] = React.useState('popularity');
  
  const { data: products, isLoading } = useQuery(['products', sortBy], async () => {
    // Replace with your actual API endpoint
    const response = await fetch(`/api/products?sort=${sortBy}`);
    return response.json();
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Our Products</h1>
      <SortControls>
        <SortButton 
          active={sortBy === 'popularity'} 
          onClick={() => setSortBy('popularity')}
        >
          Most Popular
        </SortButton>
        <SortButton 
          active={sortBy === 'rating'} 
          onClick={() => setSortBy('rating')}
        >
          Top Rated
        </SortButton>
      </SortControls>
      
      <ProductGrid>
        {products?.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ProductCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductImage src={product.image} alt={product.name} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductMeta>
                  <span>${product.price}</span>
                  <span>⭐ {product.rating} ({product.reviews} reviews)</span>
                </ProductMeta>
              </ProductInfo>
            </ProductCard>
          </Link>
        ))}
      </ProductGrid>
    </div>
  );
};

export default Products;
