import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Section = styled.section`
  margin: calc(var(--spacing-xl) * 2) 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  padding: var(--spacing-lg);
  background: var(--gradient);
  border-radius: var(--radius);
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 2em;
  margin-bottom: var(--spacing-md);
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Hero />
        <FeaturedProducts />
        
        <Section>
          <h2>Why Choose Us</h2>
          <Grid>
            <Feature>
              <FeatureIcon>🚚</FeatureIcon>
              <h3>Free Shipping</h3>
              <p>On orders over $100</p>
            </Feature>
            <Feature>
              <FeatureIcon>⭐</FeatureIcon>
              <h3>Premium Quality</h3>
              <p>Curated products from top brands</p>
            </Feature>
          </Grid>
        </Section>
        
        <About />
        <Testimonials />
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
