// src/components/AboutStories.jsx
import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import Dancing from '../assets/Dancing.jpg';
import Nature from '../assets/nature.jpg';

const stories = [
  {
    title: "From Buddy to Vice President - Strengthening the Student Experience",
    text: "When I first arrived in the Netherlands, I barely knew anyone. Starting from scratch in a new country was challenging, but I was lucky to have one friend who guided me through those early days, explaining how things work and helping me feel at home. That support meant a lot to me, and it inspired me to do the same for others.I began by volunteering as a buddy during the Introduction Weeks organized by Proxy, our study association. Wanting to be more involved, I later joined the board as Internal Affairs. Eventually, I was honored to serve as Vice President.In this leadership role, I helped organize events that connected students from diverse backgrounds, fostered a sense of community, and made university life more enjoyable. Through this journey, I developed strong leadership, organizational, and team management skills. More importantly, I learned how impactful it can be to create space for others, to lead with empathy and purpose. Being part of Proxy wasn’t just an extracurricular activity; it was my way of giving back and helping others feel that they belong.",
    video: "https://www.youtube.com/embed/VbDT_a_2rWk",
  },
  {
    title: "Inspirational Speaker - UX/UI Design Introduction",
    text: "I had the privilege of introducing first-year students at Fontys University to the exciting world of UX/UI design. Through this interactive and thought-provoking session, I shared key insights into the power of user-centered design, highlighted real-world applications, and aimed to spark curiosity about the creative and strategic potential of this field. My goal was not only to inform but to inspire - a new generation of designers to think critically, design with empathy, and see UX/UI as a way to make meaningful impact in the digital world.",
    video: "https://www.youtube.com/embed/8RitzmtguBk",
  },
  {
    title: "Back to the Studio, Back to Myself",
    text: "Since I was a kid, dancing has been my favorite thing to do. I’ve explored many styles - ballet, folklore, modern - and each one has helped me express my emotions and recharge with positive energy.For a long time, I didn’t dance in a studio. But recently, I found one again - and I’m so grateful. This studio has helped me get through one of the most difficult periods in my life. It gave me not only a space to move and feel again, but also a chance to connect with amazing people. Together, we’re building a community that brings light, strength, and belonging.",
    image: Dancing,
  },
  {
    title: "Rooted in Nature",
    text: "Like everyone, I need a place to recharge and reflect, and for me, that place is nature. I feel most at peace in the mountains of my home country, Bulgaria, where the stillness calms my thoughts. But I’m also drawn to the untouched beauty of far-off, mysterious landscapes. Whether close to home or across the world, nature grounds me and reminds me of what truly matters.",
    image: Nature,
  },
];

export default function AboutStories() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={8}>
           <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom sx={{ mt: 8, textAlign: 'left' }}>
                      4 Little Stories About Me
                    </Typography>
        {stories.map((story, idx) => (
          <Grid item xs={12} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: idx % 2 === 0 ? "row" : "row-reverse" },
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {/* Image or Video */}
                {story.video ? (
                  <motion.div
                    style={{ width: "100%", maxWidth: 500, height: 300 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={story.video}
                      title={story.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ borderRadius: 12 }}
                    />
                  </motion.div>
                ) : (
                  <motion.img
                    src={story.image}
                    alt={story.title}
                    style={{
                      width: "100%",
                      maxWidth: 400,
                      height: 300,
                      objectFit: "cover",
                      borderRadius: 12,
                      cursor: "pointer",
                    }}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Text block */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{ flex: 1 }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "#32620e", fontFamily: "Ubuntu" }}
                  >
                    {story.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Ubuntu", lineHeight: 1.6 }}
                  >
                    {story.text}
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
