import React, { useEffect, useRef } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emergencyImg from '../assets/emergency-cover.png';
import financeImg from '../assets/Finance Cover.png';
import miaImg from '../assets/MIA.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Media Innovation Assistant',
    img: miaImg,
    skills: ['Research', 'AI', 'Conversational Agent', 'Langchain', 'Trust', 'Privacy', 'Innovation'],
    link: '/projects/MIA',
  },
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
  const containerRef = useRef([]);

  useEffect(() => {
    containerRef.current.forEach((el, idx) => {
      if (!el) return;

      // Smooth parallax for the wrapper
      gsap.to(el, {
        y: -(idx + 1) * 10, // smaller layered offset
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true, // smooth parallax
        },
      });

      // Fade & scale entrance for inner card (no y transform!)
      const card = el.querySelector('.card-content');
      if (card) {
        gsap.from(card, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });
  }, []);

  return (
    <Box sx={{ width: '100%', px: { xs: 2, sm: 4, md: 8 }, py: 4 }}>
      {projects.map((project, idx) => (
        <Box
          key={idx}
          ref={(el) => (containerRef.current[idx] = el)}
          className="card-wrapper"
          sx={{
            width: '100%',
            mb: 6,
            position: 'relative',
            willChange: 'transform', // GPU acceleration
          }}
        >
          <Link to={project.link} style={{ textDecoration: 'none', width: '100%' }}>
            <Box
              className="card-content"
              sx={{
                borderRadius: 6,
                overflow: 'hidden',
                boxShadow: 6,
                position: 'relative',
                cursor: 'pointer',
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
                        borderColor: 'white',
                        color: 'white',
                        fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
}