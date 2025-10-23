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
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';

import EmergencyChatbotImage from "../assets/Emergency-moos.png";
import EmergencyCover from "../assets/emergency-cover.png";
import Brainstorming1 from "../assets/Assosiations.PNG";
import Brainstorming2 from "../assets/robin.PNG";
import TakeawaysImg from "../assets/emergency-code.png";
import ImpactImg from "../assets/Impact.jpg";

import { motion } from "framer-motion";

const icons = [
  <DescriptionOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <LightbulbOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <ScienceOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <EmojiEventsOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <ForwardOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
];

const caseStudySections = [
  {
    id: "overview",
    title: "Emergency Chatbot: Overview",
    description: (
      <Typography>
        4-week project designing an AI-driven online emergency form. Collaborated with three teammates to brainstorm, refine, and implement the most feasible solution.
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
      <Typography>
        ERs face high demand, causing delays. Our AI chatbot automates triage, guides patients efficiently, and pre-sends medical information to support staff workflow and patient access.
      </Typography>
    ),
    image: EmergencyChatbotImage,
    imageAlt: "Emergency Chatbot Context",
    imageCaption: "Illustration showing the context and workflow of the emergency chatbot."
  },
  {
    id: "ideation",
    title: "Ideation & Methods",
    description: (
      <Typography>
        We applied <b>Analogies, SCAMPER, Assumptions, and Round Robin</b> to generate creative solutions. Key insights revealed <b>communication gaps, overworked staff, and patient autonomy needs</b>, guiding the design of the AI form.
      </Typography>
    ),
    methods: ["Analogies", "SCAMPER", "Assumptions", "Round Robin"],
    results: ["Automated triage workflow", "ER checkpoints", "Sectioned spaces for efficiency"],
    images: [
      { src: Brainstorming1, alt: "Brainstorming Ideas 1", caption: "Initial sketches and analogies for brainstorming." },
      { src: Brainstorming2, alt: "Brainstorming Ideas 2", caption: "Further brainstorming with Round Robin and SCAMPER methods." }
    ]
  },
  {
    id: "prototype",
    title: "Prototype & Testing",
    description: (
      <Typography>
        Iterated colors and flows based on <b>user testing</b>. Developed a chatbot offering <b>real-time updates, skippable questions, and empathetic follow-ups</b>, improving trust and usability.
      </Typography>
    ),
    methods: ["User Testing", "Iterative Prototyping", "Color Experiments", "Flow Optimization"],
    results: ["Enhanced empathy", "Streamlined experience", "Data-driven design decisions"],
    isPrototype: true
  },
  {
    id: "impact",
    title: "Impact & Results",
    description: (
      <Typography>
        Evaluated with 7 participants and a <b>SUS score of 77.8</b>. Users valued <b>real-time updates, clear guidance, and body scan features</b>. Insights informed balancing autonomy with AI recommendations and improving ER efficiency.
      </Typography>
    ),
    methods: ["SUS Survey", "Think-Aloud Testing", "Expert Review"],
    results: ["Balanced autonomy with AI", "Improved efficiency", "Accessible for all literacy levels"],
    image: ImpactImg,
    imageAlt: "Impact & Results",
    imageCaption: "Visualization of the AI and Human interaction"
  },
  {
    id: "takeaways",
    title: "Takeaways & Next Steps",
    description: (
      <Typography>
        Explored <b>balancing speed and empathy</b>. LangChain prototype demonstrated scalable, real-time guidance. Next steps: broader testing, healthcare collaboration, and live data integration, keeping <b>usability, clarity, and trust</b> central.
      </Typography>
    ),
    methods: ["Iterative Testing", "Healthcare Collaboration", "Prototype Experimentation"],
    results: ["Broader testing", "Live data integration", "Focus on trust & clarity"],
    image: TakeawaysImg,
    imageAlt: "Takeaways & Next Steps",
    imageCaption: "A code snippet of the code I developed."
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
      const current = offsets.find((section) => section.offset >= 0) || offsets[offsets.length - 1];
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Desktop sidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: { xs: "none", md: "block" }, position: "sticky", top: 100 }}>
            <Box sx={{ borderRadius: 2, p: 2, mb: 4, bgcolor: "white", boxShadow: 3 }}>
              <Typography variant="subtitle2" sx={{ px: 1, py: 1, fontWeight: 700 }}>Contents</Typography>
              <List dense>
                {caseStudySections.map((s, i) => (
                  <ListItemButton
                    key={s.id}
                    onClick={() => scrollToId(s.id)}
                    selected={activeSection === s.id}
                    sx={{
                      borderRadius: 2,
                      mb: 1,
                      bgcolor: "transparent",
                      "&.Mui-selected": {
                        bgcolor: "transparent", // remove background
                      },
                    }}
                  >
                    {icons[i]}
                    <ListItemText
                      primary={s.title}
                      sx={{
                        ml: 1,
                        fontWeight: activeSection === s.id ? 700 : 400,
                        borderBottom: activeSection === s.id ? "2px solid #32620e" : "none",
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Box>

          {/* Mobile accordion */}
          <Box sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            mb: 4,
            width: "100%",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            bgcolor: "background.paper",
            boxShadow: 2,
            py: 1
          }}>
            <Accordion sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, textAlign: "center", width: "100%" }}>
                  Contents
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List dense>
                  {caseStudySections.map((s) => (
                    <ListItemButton key={s.id} onClick={() => scrollToId(s.id)}>
                      <ListItemText primary={s.title} sx={{ textAlign: "center" }} />
                    </ListItemButton>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>

        {/* Main content */}
        <Grid item xs={12} md={8} lg={9}>
          {caseStudySections.map((section, index) => (
            <motion.div
              key={index}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Box sx={{ mb: 8, maxWidth: 800, width: "100%" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#32620e" }}>
                  {section.title}
                </Typography>
                <Box sx={{ color: "text.secondary", mb: 3 }}>{section.description}</Box>

                {/* Conditional Images / Prototype */}
                {section.isPrototype ? (
                  <Box sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}>
                    <iframe
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      width="100%"
                      height="450"
                      src="https://embed.figma.com/design/yCAgDP2YQZqYPyL9g2iPfr/Emergency-chatbot?node-id=0-1&embed-host=share"
                      allowFullScreen
                      title="Figma Prototype Emergency Chatbot"
                    />
                  </Box>
                ) : section.images ? (
                  section.images.map((img, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                      <Box component="img" src={img.src} alt={img.alt} sx={{ width: "100%", height: "auto", borderRadius: 2, mb: 1, boxShadow: 3 }} />
                      <Typography variant="caption" display="block" align="center" sx={{ mb: 2 }}>{img.caption}</Typography>
                    </Box>
                  ))
                ) : section.image ? (
                  <Box sx={{ mb: 2 }}>
                    <Box component="img" src={section.image} alt={section.imageAlt} sx={{ width: "100%", height: "auto", borderRadius: 2, mb: 1, boxShadow: 3 }} />
                    <Typography variant="caption" display="block" align="center">{section.imageCaption}</Typography>
                  </Box>
                ) : (
                  <Box sx={{
                    width: "100%",
                    height: 250,
                    bgcolor: "grey.200",
                    borderRadius: 2,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "text.disabled",
                  }}>
                    Image / Screenshot Placeholder
                  </Box>
                )}
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UXCaseStudyPage;