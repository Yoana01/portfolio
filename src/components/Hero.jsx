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
        <Typography variant="h3" paragraph>
          My signature touch is evident in every website or app I create, designing and developing experiences that{' '}
          <Box component="span" sx={{ color: '#32620e', fontWeight: 'bold' }}>
            simplify people's lives
          </Box>
          .
        </Typography>
      </Container>

      {/* Projects section */}
      <Container sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Recent Projects
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Discover what I’ve built and accomplished over the past two years.
        </Typography>
        <Projects />
      </Container>
    </>
  );
}
