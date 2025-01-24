import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: var(--spacing-xl);
  background-image: url('https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(42, 42, 42, 0.7);
    z-index: 1;
  }
`;

const Content = styled.div`
  max-width: 600px;
  padding: var(--spacing-xl);
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 3.5em;
  margin-bottom: var(--spacing-md);
  line-height: 1.1;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2em;
  color: var(--accent);
  margin-bottom: var(--spacing-lg);
`;

const CTAButton = styled(motion.button)`
  background: var(--primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 1.1em;
  transition: transform 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(45deg, transparent 49%, var(--accent) 49% 51%, transparent 51%);
  background-size: 20px 20px;
  opacity: 0.1;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Modern Design for Modern Living
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our curated collection of premium tech products that blend seamlessly with your lifestyle.
        </Subtitle>
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Shop Now
          </CTAButton>
        </Link>
      </Content>
      <BackgroundPattern />
    </HeroSection>
  );
};

export default Hero;
