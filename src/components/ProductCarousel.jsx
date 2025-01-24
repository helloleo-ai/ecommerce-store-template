import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: var(--spacing-lg);
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

const Image = styled.img`
  min-width: 100%;
  height: 400px;
  object-fit: cover;
  pointer-events: none;
`;

const ProductCarousel = ({ images }) => {
  const [dragStart, setDragStart] = React.useState(0);
  const [dragOffset, setDragOffset] = React.useState(0);
  const containerRef = React.useRef(null);

  const handleDragStart = (e, info) => {
    setDragStart(dragOffset);
  };

  const handleDragEnd = (e, info) => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const numImages = images.length;
    const newOffset = dragStart + info.offset.x;
    const maxOffset = -((numImages - 1) * containerWidth);
    
    let snapOffset = Math.round(newOffset / containerWidth) * containerWidth;
    snapOffset = Math.max(maxOffset, Math.min(0, snapOffset));
    
    setDragOffset(snapOffset);
  };

  return (
    <CarouselContainer ref={containerRef}>
      <ImageContainer
        drag="x"
        dragConstraints={{ left: -(images.length - 1) * 100 + '%', right: 0 }}
        dragElastic={0.2}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={{ x: dragOffset }}
        transition={{ type: "spring", damping: 20 }}
      >
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Product image ${index + 1}`} />
        ))}
      </ImageContainer>
    </CarouselContainer>
  );
};

export default ProductCarousel;
