import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  margin: var(--spacing-xl) 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
`;

const TestimonialCard = styled(motion.div)`
  background: var(--background);
  padding: var(--spacing-lg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

const Quote = styled.p`
  font-style: italic;
  color: var(--secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  h4 {
    margin-bottom: 4px;
  }
  
  p {
    color: var(--secondary);
    font-size: 0.9em;
  }
`;

const testimonials = [
  {
    quote: "The quality of products and attention to design details exceeded my expectations. Absolutely love my new tech setup!",
    author: "Sarah Chen",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  },
  {
    quote: "Finally found a tech store that cares about aesthetics as much as performance. The customer service is outstanding too.",
    author: "Michael Ross",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    quote: "Every product I've purchased has been a perfect blend of functionality and style. Highly recommended!",
    author: "Emma Thompson",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  }
];

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <h2>What Our Customers Say</h2>
      <Grid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Quote>"{testimonial.quote}"</Quote>
            <Author>
              <Avatar src={testimonial.avatar} alt={testimonial.author} />
              <AuthorInfo>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </AuthorInfo>
            </Author>
          </TestimonialCard>
        ))}
      </Grid>
    </TestimonialsSection>
  );
};

export default Testimonials;
