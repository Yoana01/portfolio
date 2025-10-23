// src/components/Hero.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Projects from './Projects';

export default function Hero() {
  return (
    <>
      <Container
        sx={{
          py: 8,
          textAlign: 'center',
        }}
      >
       <Typography
  variant="h3"
  sx={{
    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
    lineHeight: 1.4,
    textAlign: 'center',
  }}
>
  Design truly matters when it begins with understanding people. <br />
  <Box
    component="span"
    sx={{ 
      color: '#32620e', 
      fontWeight: 500, 
      display: 'inline-block', 
      mt: 1 
    }}
  >
    Guided by empathy and impactful insights from data.
  </Box>
</Typography>

      </Container>

      {/* Projects section */}
      <Container sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Recent Projects
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Discover what I’ve built and accomplished over the past year.
        </Typography>
        <Projects />
      </Container>
    </>
  );
}
