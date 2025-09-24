import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import emergencyImg from '../assets/emergency-cover.png';
import financeImg from '../assets/Finance Cover.png';

const projects = [
  {
    title: 'Emergency Chatbot',
    img: emergencyImg,
    skills: ['Chatbots', 'Emergency', 'Data-Driven Design', 'Brainstorming'],
    link: '/projects/emergency',
  },
  {
    title: 'Financial App',
    img: financeImg,
    skills: ['Research', 'AI', 'Gamification', 'Literacy', 'UX/UI', 'Finance'],
    link: '/projects/FundingApp',
  },
];

export default function Project() {
  return (
    <Box sx={{ width: '100%', px: { xs: 2, sm: 4, md: 8 }, py: 4 }}>
      {projects.map((project, idx) => (
        <Box key={idx} sx={{ width: '100%', mb: 3 }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
          >
            <Link to={project.link} style={{ textDecoration: 'none', width: '100%' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  overflow: 'hidden',
                  borderRadius: 6, // slightly larger rounded edges
                  boxShadow: 6,
                  '&:hover img': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.5s ease',
                  },
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    px: { xs: 2, sm: 4, md: 6 },
                    py: { xs: 2, sm: 4, md: 6 },
                    background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))',
                    backdropFilter: 'blur(12px)',
                    transition: 'backdrop-filter 0.5s ease, background 0.5s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 1, sm: 1.5, md: 2 },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                      textAlign: 'left',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1, md: 1.5 }, flexWrap: 'wrap' }}>
                    {project.skills.map((skill, i) => (
                      <Chip
                        key={i}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'White',
                          color: 'white',
                          fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Link>
          </motion.div>
        </Box>
      ))}
    </Box>
  );
}
