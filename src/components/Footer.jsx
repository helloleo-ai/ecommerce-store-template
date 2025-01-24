import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: var(--primary);
  color: var(--background);
  padding: var(--spacing-xl) 0;
  margin-top: calc(var(--spacing-xl) * 2);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
`;

const Column = styled.div`
  h3 {
    margin-bottom: var(--spacing-md);
    color: var(--accent);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: var(--spacing-sm);
  }

  a {
    color: var(--background);
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--accent);
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <h3>TechStyle</h3>
          <p>Premium tech products with modern design aesthetic.</p>
        </Column>
        <Column>
          <h3>Shop</h3>
          <ul>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/products">Featured</Link></li>
            <li><Link to="/products">New Arrivals</Link></li>
          </ul>
        </Column>
        <Column>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </Column>
        <Column>
          <h3>Support</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/returns">Returns</Link></li>
          </ul>
        </Column>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} TechStyle. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
