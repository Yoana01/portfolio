// import React from 'react';
// import { Container, Grid, Typography, Box, Button } from '@mui/material';
// import Projects from './Projects';
// import HeroImage from '../assets/Hero image.png'; // no spaces in file name

// export default function Hero() {
//   return (
//     <>
//       <Container sx={{ py: { xs: 4, md: 8 } }}>
//         <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
//           {/* Right Image Section (mobile-first) */}
//           <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
//             <Box
//               component="img"
//               src={HeroImage}
//               alt="Illustration"
//               sx={{
//                 width: '100%',
//                 maxWidth: 400,
//                 display: 'block',
//                 mx: { xs: 'auto', md: '0' },
//               }}
//             />
//           </Grid>

//           {/* Left Text Section */}
//           <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
//             <Typography
//               variant="h1"
//               sx={{
//                 fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
//                 lineHeight: 1.4,
//                 mb: 2,
//                 textAlign: { xs: 'center', md: 'left' },
//               }}
//             >
//             </Typography>
//             <Box component="span" sx={{ fontWeight: 'bold', color: '#32620e' }}>
//               From insight to impact
//             </Box>{' '}
//             – I design{' '}
//             <Box component="span" sx={{ fontWeight: 'bold', color: '#32620e' }}>
//               digital experiences
//             </Box>{' '}
//             built on{' '}
//             <Box component="span" sx={{ fontWeight: 'bold', color: '#32620e' }}>
//               human understanding
//             </Box>
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 lineHeight: 1.6,
//                 textAlign: { xs: 'center', md: 'left' },
//               }}
//             >

//               , informed by data.
//             </Typography>

//             <Button
//               variant="text"
//               sx={{
//                 mt: 3,
//                 color: '#32620e',
//                 textTransform: 'none',
//                 fontSize: { xs: '0.9rem', md: '1rem' },
//                 px: 2,
//                 py: 1,
//                 display: 'block',
//                 mx: { xs: 'auto', md: '0' },
//               }}
//               href="#projects"
//             >
//               Scroll down to see my projects ⬇
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Projects Section */}
//       <Container sx={{ textAlign: 'center', mt: { xs: 6, md: 12 } }}>
//         <Typography variant="h3" fontWeight="bold" gutterBottom>
//           Recent Projects
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary" paragraph>
//           Discover what I’ve built and accomplished over the past year.
//         </Typography>
//         <Projects />
//       </Container>
//     </>
//   );
// }
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
       <Typography
  variant="h3"
  sx={{
    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
    lineHeight: 1.4,
    textAlign: 'center',
  }}
>
  {/* <Box
    component="span"
    sx={{ 
      color: '#32620e', 
      fontWeight: 500, 
      display: 'inline-block', 
      mt: 1 
    }}
  ><br />

  </Box> */}
  From insight to impact.
  Designing human-centered, data-informed experiences.
</Typography>

      </Container>

      {/* Projects section */}
      <Container sx={{ textAlign: 'center', mt: 6 }}>
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