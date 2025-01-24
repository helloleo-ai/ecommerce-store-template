import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--background);
  box-shadow: var(--shadow);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);
`;

const NavLink = styled(motion(Link))`
  color: var(--secondary);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: var(--primary);
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">INDIE BRANDS</Logo>
        <NavLinks>
          <NavLink 
            to="/products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop
          </NavLink>
          <NavLink 
            to="/cart"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Cart
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
