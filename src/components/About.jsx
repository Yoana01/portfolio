import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import AboutStories from "./AboutStories";
import profileImg from '../assets/profile.jpg';

export default function About() {
  const paragraphs = [
    "Hi, I’m Yoana Churkina - a UX/UI designer and recent graduate of the Data-Driven Design master’s program at the University of Applied Studies Utrecht. Originally from Sofia, Bulgaria, I’ve spent the last five years in the Netherlands, where I’ve explored how design, data, and technology come together to create meaningful digital experiences.",
    "Throughout my work, I’ve come to realize that UI design on its own isn’t enough. To create real impact, design must be grounded in a deep understanding of user behavior, needs, and values. That’s why I approach every project with a research-first mindset — because only by knowing how people think and feel can we design experiences that truly resonate. I don’t just design screens — I design interactions and behaviors that support both user needs and stakeholder goals.",
    "The AI component of my studies made me even more aware of the importance of responsible design. As we increasingly integrate intelligent systems into digital products, it’s essential to consider the ethical impact of our choices. I believe in using data to inform design, not to control it, and in building trust through transparency and empathy.",
    "I’m currently looking to join a team that values user-centered, socially responsible design, where I can keep growing, collaborating, and creating products that make a difference. Curious to learn more?"
  ];

  return (
    <Container maxWidth={false} sx={{ py: 5, px: { xs: 2, md: 8 } }}>
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        {/* Left Column */}
        <Grid item xs={12} md={6} sx={{ maxWidth: 600 }}>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            Let's introduce ourselves
          </Typography>

          {paragraphs.map((text, index) => (
            <Typography key={index} variant="body1" paragraph>
              {text}
            </Typography>
          ))}

          <Button
            variant="outlined"
            sx={{ mt: 3, color: '#4caf50', borderColor: '#4caf50', '&:hover': { borderColor: '#388e3c', color: '#388e3c' } }}
            href="mailto:yonichurikina@gmail.com"
          >
            👉 Let’s connect and create something meaningful together
          </Button>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={profileImg}
            alt="Yoana Churkina smiling, UX/UI designer"
            sx={{
              width: '100%',
              maxWidth: 400,
              borderRadius: 2,
              boxShadow: 3,
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          />
        </Grid>
      </Grid>

      {/* About Stories Section - outside main layout */}
    
      <AboutStories />
    </Container>
  );
}
