import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchProductById } from '../services/mockData';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductCarousel from '../components/ProductCarousel';
import PriceHistory from '../components/PriceHistory';

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const Price = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  color: var(--primary);
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--secondary);
`;

const BuyButton = styled(motion.button)`
  background: var(--primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius);
  font-weight: 600;
  margin-top: var(--spacing-md);
  
  &:hover {
    opacity: 0.9;
  }
`;

const Description = styled.p`
  color: var(--secondary);
  line-height: 1.6;
`;

const ProductDetail = () => {
  const { id } = useParams();
  
  const { data: product, isLoading } = useQuery(['product', id], () => 
    fetchProductById(id)
  );

  if (isLoading) return <LoadingSpinner />;

  const priceHistoryData = [
    { date: '2024-01', price: 299 },
    { date: '2024-02', price: 289 },
    { date: '2024-03', price: 299 },
    { date: '2024-04', price: 279 },
    { date: '2024-05', price: 269 },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProductContainer>
          <div>
            <ProductCarousel images={product.images} />
          </div>
          
          <ProductInfo>
            <h1>{product.name}</h1>
            <Price>${product.price}</Price>
            <Rating>
              <span>⭐ {product.rating}</span>
              <span>({product.reviews} reviews)</span>
            </Rating>
            <Description>{product.description}</Description>
            <BuyButton
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              Add to Cart
            </BuyButton>
          </ProductInfo>
        </ProductContainer>

        <div>
          <h2>Price History</h2>
          <PriceHistory data={priceHistoryData} />
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
