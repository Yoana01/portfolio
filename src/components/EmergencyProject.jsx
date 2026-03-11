import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";

import EmergencyChatbotImage from "../assets/Emergency-moos.png";
import EmergencyCover from "../assets/emergency-cover.png";
import Brainstorming1 from "../assets/Assosiations.PNG";
import Brainstorming2 from "../assets/robin.PNG";
import Wireframes from "../assets/Emergency-wire.png";
import TakeawaysImg from "../assets/emergency-code.png";
import ImpactVideo from "../assets/Demo.webm";

import { motion } from "framer-motion";

const icons = [
  <DescriptionOutlinedIcon fontSize="small" sx={{ color: "#2C3E5F" }} />,
  <LightbulbOutlinedIcon fontSize="small" sx={{ color: "#2C3E5F" }} />,
  <ScienceOutlinedIcon fontSize="small" sx={{ color: "#2C3E5F" }} />,
  <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#2C3E5F" }} />,
  <EmojiEventsOutlinedIcon fontSize="small" sx={{ color: "#2C3E5F" }} />,
  <ForwardOutlinedIcon fontSize="small" sx={{ color: "#2C3E5F" }} />,
];

const caseStudySections = [
  {
    id: "overview",
    title: "Emergency Chatbot: Overview",
    description: (
      <Typography>
        This 4-week project focused on ideation and implementation. I contributed my own design idea and collaborated with three teammates. Together, we brainstormed multiple concepts and refined the most feasible solution: an AI-driven online emergency form.
      </Typography>
    ),
    image: EmergencyCover,
    imageAlt: "Emergency Cover",
    imageCaption: "Project cover illustrating the Emergency Chatbot concept."
  },
  {
    id: "context",
    title: "Problem & Context",
    description: (
      <>
        <Typography>
          Emergency services often face high demand, causing delays in critical care. Our solution, a smart online form with an AI chatbot, helps patients quickly determine if they need emergency care or alternative treatment while sending essential medical information to hospitals in advance.
        </Typography>
        <Typography>
          By automating triage and guidance, the form reduces unnecessary ER visits, supports emergency personnel, and improves access for patients hesitant to call emergency services.
        </Typography>
      </>
    ),
    image: EmergencyChatbotImage,
    imageAlt: "Emergency Chatbot Context",
    imageCaption: "Illustration showing the context and workflow of the emergency chatbot."
  },
  {
    id: "ideation",
    title: "Ideation & Design Process",
    description: (
      <>
        <Typography paragraph>
          We explored multiple ideation methods including analogies, assumptions, provocations, random entry, SCAMPER, and Round Robin to generate creative solutions.
        </Typography>
        <Typography paragraph>
          <b>Analogies:</b> Comparing ER services to <b>McDonald’s</b> and a <b>kettle</b> inspired ideas for streamlining processes.
        </Typography>
        <Typography paragraph>
          <b>Assumptions & Insights:</b> Challenging assumptions revealed <b>communication barriers</b> and <b>overworked staff</b>.
        </Typography>
        <Typography paragraph>
          <b>Outcomes:</b> These insights informed our AI-driven emergency form concept.
        </Typography>
      </>
    ),
    images: [
      { src: Brainstorming1, alt: "Brainstorming Ideas 1", caption: "Initial idea sketches and analogies used in brainstorming." },
      { src: Brainstorming2, alt: "Brainstorming Ideas 2", caption: "Further brainstorming with Round Robin and SCAMPER methods." }
    ]
  },
  {
    id: "prototype",
    title: "Prototype & Testing",
    description: (
      <>
        <Typography paragraph>
          When working on the prototype, I experimented with colors to influence user experience.
        </Typography>
        <Typography paragraph>
          <b>User testing</b> helped streamline the questions and improve efficiency.
        </Typography>
      </>
    ),
    images: [
      { src: Wireframes, alt: "Wireframes", caption: "Initial wireframe designs for the emergency form." }
    ]
  },
  {
    id: "impact",
    title: "Impact & Results",
    description: (
      <>
        <Typography paragraph>
          The chatbot scored <b>77.8 on the SUS usability scale</b>. User testing revealed strong efficiency but also the need for clearer explanations.
        </Typography>
        <Typography paragraph>
          Features like the <b>body scan interaction</b> were especially appreciated.
        </Typography>
      </>
    ),
    video: ImpactVideo,
    videoCaption:
      "Prototype demo showing the user interacting with the chatbot and receiving ambulance updates."
  },
  {
    id: "takeaways",
    title: "Takeaways & Next Steps",
    description: (
      <>
        <Typography paragraph>
          The project explored balancing <b>efficiency and empathy</b> in emergency care design.
        </Typography>
        <Typography paragraph>
          I later experimented with a <b>LangChain prototype</b> to explore real-time guidance.
        </Typography>
      </>
    ),
    image: TakeawaysImg,
    imageAlt: "Takeaways",
    imageCaption: "A code snippet from the prototype."
  }
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const UXCaseStudyPage = () => {
  const [activeSection, setActiveSection] = useState(caseStudySections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = caseStudySections.map((section) => {
        const el = document.getElementById(section.id);
        return { id: section.id, offset: el ? el.getBoundingClientRect().top : 0 };
      });

      const current =
        offsets.find((section) => section.offset >= 0) ||
        offsets[offsets.length - 1];

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>

        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: { xs: "none", md: "block" }, position: "sticky", top: 100 }}>
            <Box sx={{ borderRadius: 2, p: 2, mb: 4, bgcolor: "white", boxShadow: 3 }}>
              <Typography variant="subtitle2" sx={{ px: 1, py: 1, fontWeight: 700 }}>
                Contents
              </Typography>

              <List dense>
                {caseStudySections.map((s, i) => (
                  <ListItemButton
                    key={s.id}
                    onClick={() => scrollToId(s.id)}
                    selected={activeSection === s.id}
                    sx={{ borderRadius: 2, mb: 1 }}
                  >
                    {icons[i]}
                    <ListItemText
                      primary={s.title}
                      sx={{
                        ml: 1,
                        fontWeight: activeSection === s.id ? 700 : 400,
                        borderBottom:
                          activeSection === s.id
                            ? "2px solid #2C3E5F"
                            : "none",
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Box>
        </Grid>

        {/* Main content */}
        <Grid item xs={12} md={8} lg={9}>
          {caseStudySections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Box sx={{ mb: 8, maxWidth: 800 }}>

                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mb: 2, color: "#2C3E5F" }}
                >
                  {section.title}
                </Typography>

                <Box sx={{ color: "text.secondary", mb: 3 }}>
                  {section.description}
                </Box>

                {/* VIDEO */}
                {section.video ? (
                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        position: "relative",
                        paddingTop: "56.25%"
                      }}
                    >
                      <Box
                        component="video"
                        src={section.video}
                        controls
                        loop
                        muted
                        playsInline
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          borderRadius: 2,
                          boxShadow: 3
                        }}
                      />
                    </Box>

                    <Typography variant="caption" align="center" display="block">
                      {section.videoCaption}
                    </Typography>
                  </Box>
                ) : section.images ? (
                  section.images.map((img, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                      <Box
                        component="img"
                        src={img.src}
                        alt={img.alt}
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          mb: 1,
                          boxShadow: 3
                        }}
                      />
                      <Typography variant="caption" align="center" display="block">
                        {img.caption}
                      </Typography>
                    </Box>
                  ))
                ) : section.image ? (
                  <Box sx={{ mb: 2 }}>
                    <Box
                      component="img"
                      src={section.image}
                      alt={section.imageAlt}
                      sx={{
                        width: "100%",
                        borderRadius: 2,
                        mb: 1,
                        boxShadow: 3
                      }}
                    />
                    <Typography variant="caption" align="center" display="block">
                      {section.imageCaption}
                    </Typography>
                  </Box>
                ) : null}

              </Box>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UXCaseStudyPage;