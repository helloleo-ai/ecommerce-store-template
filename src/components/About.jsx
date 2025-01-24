import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  margin: calc(var(--spacing-xl) * 2) 0;
  padding: calc(var(--spacing-xl) * 1.5);
  background: var(--gradient);
  border-radius: var(--radius);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  h2 {
    margin-bottom: var(--spacing-md);
  }

  p {
    color: var(--secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    border-radius: var(--radius);
  }
`;

const About = () => {
  return (
    <AboutSection>
      <Grid>
        <Content>
          <h2>About TechStyle</h2>
          <p>
            We believe that technology should not only perform exceptionally but also complement your personal style. Our carefully curated collection brings together the most innovative and aesthetically pleasing tech products from around the world.
          </p>
          <p>
            Founded in 2024, we've made it our mission to bridge the gap between high-performance technology and contemporary design, ensuring that every product we offer meets our exacting standards for both form and function.
          </p>
        </Content>
        <ImageContainer
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500" 
            alt="Our workspace"
          />
        </ImageContainer>
      </Grid>
    </AboutSection>
  );
};

export default About;
