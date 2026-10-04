import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewAgendaRoundedIcon from '@mui/icons-material/ViewAgendaRounded';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import emergencyImg from '../assets/emergency-cover.png';
import financeTeen from '../assets/FintechPic1.png';
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
    shortSentence:
      'A conversational agent for media research and innovation.',
  },
  {
    title: 'Simptel Identity Platform',
    img: simptelImg,
    link: '/projects/Simptel',
    sentence:
      'A visual development tool for Simptel’s identity platform, enabling users to customize digital identity portals.',
    shortSentence:
      'A visual tool for customizing digital identity portals.',
  },
  {
    title: 'From Spending to Understanding',
    img: financeTeen,
    link: '/projects/FinTechTeens',
    sentence:
      'A UX concept helping teenagers build financial literacy',
    shortSentence:
      'A UX concept for building financial literacy.',
  },
  {
    title: 'Emergency Chatbot',
    img: emergencyImg,
    link: '/projects/emergency',
    sentence:
      'A data-driven chatbot designed to assist in emergency scenarios.',
    shortSentence:
      'A data-driven chatbot for emergency scenarios.',
  },
  {
    title: 'Financial App',
    img: financeImg,
    link: '/projects/FundingApp',
    sentence:
      'A gamified app that helps students build financial literacy and responsible habits.',
    shortSentence:
      'A gamified app for financial literacy.',
  },
  {
    title: 'Simac Onboarding Process',
    img: simacImg,
    link: '/projects/SimacOnboarding',
    sentence:
      'A challenge-based onboarding solution improving socialization and inclusion for non-Dutch employees.',
    shortSentence:
      'A challenge-based onboarding experience.',
  },
];

export default function Project() {
  const containerRef = useRef([]);
  const [view, setView] = useState('grid');

  useEffect(() => {
    const ctx = gsap.context(() => {
      containerRef.current.forEach((el, idx) => {
        if (!el) return;

        // Parallax effect
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

        // Card entrance animation
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
    });

    return () => {
      ctx.revert();
    };
  }, [view]);

  return (
    <Box
      sx={{
        width: '100%',
        px: {
          xs: 2,
          sm: 4,
          md: 8,
        },
        py: 6,
      }}
    >
      {/* View toggle */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mb: 4,
          gap: 0.5,
        }}
      >
        {/* Grid button */}
        <Tooltip title="Grid view">
          <IconButton
            onClick={() => setView('grid')}
            aria-label="Grid view"
            sx={{
              color:
                view === 'grid'
                  ? '#2C3E5F'
                  : 'text.secondary',

              backgroundColor:
                view === 'grid'
                  ? 'rgba(44, 62, 95, 0.08)'
                  : 'transparent',

              '&:hover': {
                backgroundColor:
                  'rgba(44, 62, 95, 0.12)',
              },
            }}
          >
            <GridViewRoundedIcon />
          </IconButton>
        </Tooltip>

        {/* List button */}
        <Tooltip title="List view">
          <IconButton
            onClick={() => setView('list')}
            aria-label="List view"
            sx={{
              color:
                view === 'list'
                  ? '#2C3E5F'
                  : 'text.secondary',

              backgroundColor:
                view === 'list'
                  ? 'rgba(44, 62, 95, 0.08)'
                  : 'transparent',

              '&:hover': {
                backgroundColor:
                  'rgba(44, 62, 95, 0.12)',
              },
            }}
          >
            <ViewAgendaRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Projects */}
      <Box
        sx={{
          display: 'grid',

          gridTemplateColumns: {
            xs:
              view === 'grid'
                ? 'repeat(2, 1fr)'
                : '1fr',

            md:
              view === 'grid'
                ? 'repeat(2, 1fr)'
                : '1fr',
          },

          gap: {
            xs:
              view === 'grid'
                ? 2
                : 6,

            md:
              view === 'grid'
                ? 4
                : 6,
          },

          alignItems: 'stretch',
        }}
      >
        {projects.map((project, idx) => (
          <Box
            key={idx}
            ref={(el) =>
              (containerRef.current[idx] = el)
            }
            sx={{
              width: '100%',
              position: 'relative',
            }}
          >
            <Link
              to={project.link}
              style={{
                textDecoration: 'none',
                width: '100%',
                display: 'block',
                height: '100%',
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

                  /*
                   * Grid cards use the same aspect ratio.
                   * List cards keep the larger fixed height.
                   */
                  aspectRatio:
                    view === 'grid'
                      ? {
                          xs: '1 / 1',
                          sm: '4 / 3',
                          md: '4 / 3',
                        }
                      : 'auto',

                  height:
                    view === 'list'
                      ? {
                          xs: 280,
                          sm: 380,
                          md: 500,
                        }
                      : 'auto',

                  minHeight:
                    view === 'grid'
                      ? 0
                      : undefined,

                  transition:
                    'transform 0.4s ease',

                  '&:hover': {
                    transform: 'scale(1.01)',
                  },
                }}
              >
                {/* Project image */}
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
                    left: 0,
                    width: '100%',

                    px: {
                      xs: 1.5,
                      sm: 3,
                      md: 5,
                    },

                    py: {
                      xs: 1.5,
                      sm: 3,
                      md: 5,
                    },

                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0))',

                    backdropFilter: 'blur(10px)',

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: '#ffffff',

                      fontSize: {
                        xs: '0.95rem',
                        sm: '1.3rem',
                        md:
                          view === 'grid'
                            ? '1.5rem'
                            : '2rem',
                      },

                      lineHeight: 1.15,
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Full description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',

                      fontSize: {
                        xs: '0.72rem',
                        sm: '0.9rem',
                        md: '1.05rem',
                      },

                      fontWeight: 400,

                      lineHeight: {
                        xs: 1.3,
                        sm: 1.4,
                        md: 1.5,
                      },

                      mt: {
                        xs: 0.5,
                        sm: 1,
                      },

                      maxWidth: {
                        xs: '100%',
                        sm: '85%',
                      },

                      textShadow:
                        '0px 2px 6px rgba(0,0,0,0.7)',

                      display: {
                        xs:
                          view === 'grid'
                            ? 'none'
                            : 'block',

                        sm: 'block',
                      },
                    }}
                  >
                    {project.sentence}
                  </Typography>

                  {/* Short description for mobile grid */}
                  <Typography
                    sx={{
                      display: {
                        xs:
                          view === 'grid'
                            ? 'block'
                            : 'none',

                        sm: 'none',
                      },

                      color: 'white',

                      fontSize: '0.72rem',

                      lineHeight: 1.3,

                      mt: 0.5,

                      textShadow:
                        '0px 2px 6px rgba(0,0,0,0.7)',
                    }}
                  >
                    {project.shortSentence}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}