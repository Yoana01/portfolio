import React from 'react';
import { Container, Grid, Typography, Box, Button, Stack, IconButton } from '@mui/material';
import AboutStories from "./AboutStories";
import profileImg from '../assets/profile.jpg';

export default function About() {

  const paragraphs = [
    <Typography paragraph key="intro">
     Hi, I’m Yoana Churkina. <br />
    I’ve always been fascinated by why people do what they do and how design can make that easier, more intuitive, or even enjoyable.
    </Typography>,
    <Typography variant="subtitle1" paragraph color="#7B7155" key="approach-title">
      My Journey
    </Typography>,
    <Typography paragraph key="approach-text">
      During my master’s in Data-Driven Design, I learned that great design starts with understanding people. I’m passionate about uncovering the “why” behind user behavior, and I use research and data to guide decisions that make digital experiences both useful and meaningful.
    </Typography>,

    <Typography variant="subtitle1" paragraph color="#7B7155" key="approach-title">
       Design That Matters
    </Typography>,
    <Typography paragraph key="ai-text">
     I don’t just design screens,I craft interactions and behaviors that support users and stakeholders. Working with AI opened my eyes to the responsibility we carry as designers. I focus on creating products that are transparent, trustworthy, and socially responsible.
    </Typography>,
    <Typography paragraph key="closing">
      I’m looking to join a team that values user-centered, socially responsible design, where I can keep growing, collaborating, and creating products that make a difference.
    </Typography>
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
            sx={{ mt: 3, color: '#2C3E5F', borderColor: '#2C3E5F', '&:hover': { borderColor: '#7B7155', color: '#7B7155' } }}
            // onClick={handleMailClick}
            href="https://www.linkedin.com/in/yoana-churkina-9408a1234/"
            component="a"
            rel="noopener noreferrer"
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

      <AboutStories />
    </Container>
  );
}
