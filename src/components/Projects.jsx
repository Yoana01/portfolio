import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import emergencyImg from '../assets/emergency-cover.png';
import financeImg from '../assets/Finance Cover.png';
import miaImg from '../assets/MIA.png';
import simptelImg from '../assets/Simptel.png';
import simacImg from '../assets/SimacOverview.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Media Innovation Assistant',
    img: miaImg,
    link: '/projects/MIA',
    sentence:
      'A conversational agent that supports research and innovation in media projects.',
  },
  {
    title: 'Simptel Identity Platform',
    img: simptelImg,
    link: '/projects/Simptel',
    sentence:
      'A visual development tool for Simptel’s identity platform (IDaaS), enabling users to customize digital identity portals.',
  },
  {
    title: 'Emergency Chatbot',
    img: emergencyImg,
    link: '/projects/emergency',
    sentence:
      'A data-driven chatbot designed to assist in emergency scenarios.',
  },
  {
    title: 'Financial App',
    img: financeImg,
    link: '/projects/FundingApp',
    sentence:
      'A gamified app that helps students build financial literacy and responsible habits.',
  },
  {
    title: 'Simac Onboarding Process',
    img: simacImg,
    link: '/projects/SimacOnboarding',
    sentence:
      'A challenge-based onboarding solution improving socialization and inclusion for non-Dutch employees.',
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
          scale: 0.96,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        px: { xs: 2, sm: 4, md: 8 },
        py: 6,
      }}
    >
      {projects.map((project, idx) => (
        <Box
          key={idx}
          ref={(el) => (containerRef.current[idx] = el)}
          sx={{
            width: '100%',
            mb: 6,
            position: 'relative',
          }}
        >
          <Link
            to={project.link}
            style={{
              textDecoration: 'none',
              width: '100%',
              display: 'block',
            }}
          >
            <Box
              className="card-content"
              sx={{
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 6,
                position: 'relative',
                cursor: 'pointer',
                height: { xs: 280, sm: 380, md: 'auto' },
                transition: 'transform 0.4s ease',
                '&:hover': {
                  transform: 'scale(1.01)',
                },
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />

              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  px: { xs: 3, sm: 4, md: 6 },
                  py: { xs: 3, sm: 4, md: 6 },
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: '#ffffff',
                    fontSize: {
                      xs: '1.3rem',
                      sm: '1.7rem',
                      md: '2rem',
                    },
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                    fontWeight: 400,
                    lineHeight: 1.5,
                    mt: 1,
                    maxWidth: { xs: '100%', sm: '80%' },
                    textShadow: '0px 2px 6px rgba(0,0,0,0.7)',
                  }}
                >
                  {project.sentence}
                </Typography>
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
}