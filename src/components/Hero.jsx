import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Projects from './Projects'; 
import ArrowDownwardIcon from '@mui/icons-material/KeyboardArrowDown';

const wordsPool = [
  'Prototype', 'Journey', 'Interaction', 'Feedback', 'Testing',
  'Empathy', 'Heuristic', 'AI', 'Data', 'Brainstorm',
  'Usability', 'Accessibility', 'Analysis'
];

export default function HeroPage() {
  const canvasRef = useRef(null);
  const [showSubtext, setShowSubtext] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const message = "FROM INSIGHT TO IMPACT";

    // Floating words
    const floatingWords = Array.from({ length: 30 }).map(() => ({
      text: wordsPool[Math.floor(Math.random() * wordsPool.length)],
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      opacity: 1
    }));

    // Targets for motto letters
    ctx.font = "bold 56px 'Ubuntu', sans-serif";
    const totalWidth = ctx.measureText(message).width;
    const startX = (canvas.width - totalWidth) / 2;
    const startY = canvas.height / 2;
    const targets = [];
    let x = startX;
    for (let char of message) {
      const w = ctx.measureText(char).width;
      targets.push({ char, x, y: startY });
      x += w;
    }

    // Letters flying to motto
    let letters = targets.map((target, i) => ({
      char: target.char,
      startX: Math.random() * canvas.width,
      startY: Math.random() * canvas.height,
      targetX: target.x,
      targetY: target.y,
      scale: 0.3,
      delay: i * 0.03 + Math.random() * 0.3,
      controlX: Math.random() * canvas.width,
      controlY: Math.random() * canvas.height / 2
    }));

    let startTime = null;
    let collectionStart = null;
    let animationFrameId;

    function ease(t) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Phase 1: floating words
      if (elapsed < 2) {
        floatingWords.forEach(word => {
          word.x += word.vx;
          word.y += word.vy;
          if (word.x < 0 || word.x > canvas.width) word.vx *= -1;
          if (word.y < 0 || word.y > canvas.height) word.vy *= -1;

          ctx.font = "20px 'Ubuntu', sans-serif";
          ctx.fillStyle = `rgba(0,0,0,${word.opacity})`;
          ctx.fillText(word.text, word.x, word.y);
        });
      }
      // Phase 2: letters fly to motto
      else if (elapsed < 4.5) {
        if (!collectionStart) collectionStart = timestamp; 
        const tFade = Math.min(1, (timestamp - collectionStart) / 500); // fade floating words

        floatingWords.forEach(word => {
          word.opacity = 1 - tFade;
          word.x += word.vx;
          word.y += word.vy;
          if (word.x < 0 || word.x > canvas.width) word.vx *= -1;
          if (word.y < 0 || word.y > canvas.height) word.vy *= -1;

          if (word.opacity > 0) {
            ctx.font = "20px 'Ubuntu', sans-serif";
            ctx.fillStyle = `rgba(0,0,0,${word.opacity})`;
            ctx.fillText(word.text, word.x, word.y);
          }
        });

        letters.forEach(letter => {
          const tLocal = Math.max(0, Math.min(1, (elapsed - 2 - letter.delay) / 1.5));
          const t = ease(tLocal);

          const cx = (1 - t) * (1 - t) * letter.startX + 2 * (1 - t) * t * letter.controlX + t * t * letter.targetX;
          const cy = (1 - t) * (1 - t) * letter.startY + 2 * (1 - t) * t * letter.controlY + t * t * letter.targetY;

          const scale = 0.3 + 0.7 * t;

          ctx.font = `bold ${56 * scale}px 'Ubuntu', sans-serif`;
          ctx.fillStyle = "#32620e";
          ctx.fillText(letter.char, cx, cy);
        });
      }
      // Phase 3: final motto
      else {
        letters.forEach(letter => {
          ctx.font = "bold 56px 'Ubuntu', sans-serif";
          ctx.fillStyle = "#32620e";
          ctx.fillText(letter.char, letter.targetX, letter.targetY);
        });
        setShowSubtext(true);
        return;
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Intersection Observer for Projects fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setProjectsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <>
      {/* Hero section */}
      <Box sx={{ position: 'relative', height: '100vh', bgcolor: '#fff' }}>
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />

        {showSubtext && (
          <>
            {/* Subtext */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'opacity 1s',
                opacity: showSubtext ? 1 : 0
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Ubuntu', sans-serif",
                  mt: 2,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  color: 'text.primary'
                }}
              >
                <br /><br />
                Designing human-centered, data-informed experiences
              </Typography>
            </Box>

            {/* Animated scroll down arrow */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 150,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                animation: 'bounce 1.5s infinite'
              }}
            >
              <ArrowDownwardIcon sx={{ fontSize: 40, color: '#32620e' }} />
            </Box>

            {/* Keyframes for bounce */}
            <style>
              {`
                @keyframes bounce {
                  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
                  40% { transform: translateX(-50%) translateY(-10px); }
                  60% { transform: translateX(-50%) translateY(-5px); }
                }
              `}
            </style>
          </>
        )}
      </Box>

      {/* Projects section with fade-up */}
      <Container
        ref={projectsRef}
        sx={{
          textAlign: 'center',
          mt: 6,
          opacity: projectsVisible ? 1 : 0,
          transform: projectsVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
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