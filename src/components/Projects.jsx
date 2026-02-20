import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
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
    link: '/projects/MIA',
    sentence: 'A conversational agent that supports research and innovation in media projects.',
    question: 'How did I ensure trust and privacy while making it useful for creators?',
  },
  {
    title: 'Emergency Chatbot',
    img: emergencyImg,
    link: '/projects/emergency',
    sentence: 'A data-driven chatbot designed to assist in emergency scenarios.',
    question: 'How did I make it fast and reliable for real-time use?',
  },
  {
    title: 'Financial App',
    img: financeImg,
    link: '/projects/FundingApp',
    sentence: 'A gamified app that helps students build financial literacy and responsible habits.',
    question: 'How did I motivate students to track and reach their goals consistently?',
  },
];

export default function Project() {
  const containerRef = useRef([]);

  useEffect(() => {
    containerRef.current.forEach((el, idx) => {
      if (!el) return;

      gsap.to(el, {
        y: -(idx + 1) * 10,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

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
            willChange: 'transform',
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

              {/* Stronger overlay for readability */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  px: { xs: 2, sm: 4, md: 6 },
                  py: { xs: 2, sm: 4, md: 6 },
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                  backdropFilter: 'blur(12px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 0.5, sm: 1, md: 1.5 },
                  alignItems: 'flex-start',
                }}
              >
                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: '#ffffff', // darker green for better contrast
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.3rem' },
                    textAlign: 'left',
                  }}
                >
                  {project.title}
                </Typography>

                {/* Context sentence */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    fontWeight: 400,
                    lineHeight: 1.4,
                    mt: 0.5,
                    textShadow: '0px 1px 3px rgba(0,0,0,0.6)',
                  }}
                >
                  {project.sentence}
                </Typography>

                {/* Teaser question */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                    fontWeight: 400,
                    lineHeight: 1.3,
                    mt: 0.3,
                    textShadow: '0px 1px 3px rgba(0,0,0,0.6)',
                  }}
                >
                  {project.question}
                </Typography>
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
}