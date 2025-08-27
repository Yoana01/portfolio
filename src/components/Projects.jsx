// src/components/Project.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- import Link
import emergencyImg from '../assets/emergency-cover.png';

const projects = [
  {
    title: 'Emergency Chatbot',
    img: emergencyImg,
    desc: 'AI chatbot designed to assist users in emergency situations, providing quick access to critical information and resources app redesign focusing on UX improvements and accessibility.',
    skills: ['Chatbots', 'Emergency', 'Data-Driven Design', 'Brainstorming'],
    link: '/projects/emergency', 
  },
  {
    title: 'Portfolio Website',
    img: '/images/project2.png',
    desc: 'Responsive portfolio website with interactive animations and dynamic content.',
    skills: ['React', 'Framer Motion', 'MUI'],
    link: '/projects/MIA',
  }
];

export default function Project() {
  return (
    <Box sx={{ p: { xs: 2, md: 8 } }}>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to={project.link} style={{ textDecoration: 'none', width: '100%' }}>
                <Card
                  sx={{
                    height: '100%',
                    maxWidth: 400,
                    width: '100%',
                    boxShadow: 3,
                    transition: '0.3s',
                    '&:hover': { boxShadow: 6 },
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.img}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {project.desc}
                    </Typography>

                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.skills.map((skill, i) => (
                        <Chip label={skill} key={i} color="primary" size="small" />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
