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
  AccordionDetails
} from "@mui/material";
import {
  DescriptionOutlined as DescriptionOutlinedIcon,
  LightbulbOutlined as LightbulbOutlinedIcon,
  ScienceOutlined as ScienceOutlinedIcon,
  CheckCircleOutlined as CheckCircleOutlinedIcon,
  EmojiEventsOutlined as EmojiEventsOutlinedIcon,
  ForwardOutlined as ForwardOutlinedIcon,
  LightbulbOutlined as LightbulbIcon,
  CheckCircleOutlined as CheckIcon,
  EmojiEventsOutlined as TrophyIcon,
  ScienceOutlined as ScienceIcon,
  ExpandMore as ExpandMoreIcon
} from "@mui/icons-material";
import { motion } from "framer-motion";

import EmergencyChatbotImage from "../assets/Emergency-moos.png";
import EmergencyCover from "../assets/emergency-cover.png";
import Brainstorming1 from "../assets/Assosiations.PNG";
import Brainstorming2 from "../assets/robin.PNG";
import TakeawaysImg from "../assets/emergency-code.png";
import ImpactImg from "../assets/Impact.jpg";

// Modern Callout Component
const Callout = ({ children, icon }) => (
  <Box sx={{
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    bgcolor: "#fcfcfc",
    px: 3,
    py: 2,
    borderRadius: 3,
    my: 3,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  }}>
    {icon}
    <Typography sx={{ color: "#32620e", fontWeight: 600, fontSize: "1rem", lineHeight: 1.6 }}>
      {children}
    </Typography>
  </Box>
);

const calloutIcons = {
  insight: <LightbulbIcon sx={{ color: "#32620e", fontSize: 22 }} />,
  decision: <ScienceIcon sx={{ color: "#32620e", fontSize: 22 }} />,
  result: <TrophyIcon sx={{ color: "#32620e", fontSize: 22 }} />,
  validation: <CheckIcon sx={{ color: "#32620e", fontSize: 22 }} />
};

const icons = [
  <DescriptionOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <LightbulbOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <ScienceOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <EmojiEventsOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <ForwardOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
];

// Senior designer storytelling version of all sections
const caseStudySections = [
  {
    id: "overview",
    title: "Emergency Chatbot: Overview",
    description: (
      <>
        <Typography paragraph>
          Over a 4-week sprint, our team tackled the challenge of **making emergency care more accessible and empathetic**. I led the design of an **AI-driven emergency form**, working closely with three teammates to iterate from concept to functional prototype.
        </Typography>
        <Typography paragraph>
          This project wasn’t just about efficiency — it was about **building trust, clarity, and user confidence**. Every design decision aimed to empower patients while supporting hospital staff with accurate, actionable data.
        </Typography>
        <Callout icon={calloutIcons.insight}>
          Key Insight: Emergency care benefits most when **automation complements human judgment**, not replaces it.
        </Callout>
      </>
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
        <Typography paragraph>
          ERs face chronic **overcrowding and delays**, and patients often arrive unsure if their condition warrants urgent attention. This uncertainty increases stress for both patients and medical staff.
        </Typography>
        <Typography paragraph>
          Our solution: a **smart online triage form with an AI chatbot** that guides patients through symptom assessment, collects essential medical data, and routes them appropriately. By **reducing unnecessary ER visits**, it improves hospital efficiency while keeping humans in the loop for critical decisions.
        </Typography>
        <Callout icon={calloutIcons.insight}>
          Insight: Providing patients with **autonomy, transparency, and reassurance** reduces anxiety and operational strain.
        </Callout>
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
          We applied **diverse ideation methods** including analogies, SCAMPER, assumptions, and Round Robin exercises. These approaches revealed multiple opportunities and challenges in emergency care design.
        </Typography>
        <Typography paragraph>
          <b>Analogies:</b> Comparing ER workflows to **fast-food efficiency** and **multi-functional devices** highlighted the importance of speed, predictability, and flexibility. <b>Mood boards</b> helped visualize potential interactions and spark creativity.
        </Typography>
        <Typography paragraph>
          <b>Assumptions & Insights:</b> Identifying weak points, like **overworked staff and communication gaps**, allowed us to define areas where AI could assist rather than replace humans.
        </Typography>
        <Callout icon={calloutIcons.decision}>
          Design Decision: Prioritize **human oversight and patient autonomy**, while automating repetitive tasks to reduce cognitive load on staff.
        </Callout>
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
          During prototyping, color was used deliberately to communicate **mood and urgency**: green for calm, red for alert, blue for stability. Iterative user testing helped refine a **streamlined, reassuring experience**.
        </Typography>
        <Typography paragraph>
          We created a **chatbot inspired by Uber**, delivering **real-time ambulance updates** and follow-ups. Testers valued the combination of **speed, clarity, and empathy**.
        </Typography>
        <Callout icon={calloutIcons.result}>
          Outcome: Real-time AI guidance fostered **trust and satisfaction**, while ensuring human supervision remained central.
        </Callout>
      </>
    ),
    isPrototype: true
  },
  {
    id: "impact",
    title: "Impact & Results",
    description: (
      <>
        <Typography paragraph>
          User testing revealed a **SUS score of 77.8**, confirming strong usability. Participants appreciated **clear instructions, autonomy, and real-time feedback**.
        </Typography>
        <Typography paragraph>
          Early detection before hospital arrival was highly valued. Users highlighted the need for **explanations alongside efficiency**, emphasizing trust and understanding over mere speed.
        </Typography>
        <Callout icon={calloutIcons.validation}>
          Key Result: Thoughtful design increased **patient confidence**, improved hospital efficiency, and minimized unnecessary ER visits.
        </Callout>
      </>
    ),
    image: ImpactImg,
    imageAlt: "Impact & Results",
    imageCaption: "Visualization of the AI and Human interaction"
  },
  {
    id: "takeaways",
    title: "Takeaways & Next Steps",
    description: (
      <>
        <Typography paragraph>
          The project highlighted the delicate balance of **efficiency, empathy, and clarity**. Features like **body scans and video explanations** fostered trust, while iterative testing highlighted areas for improving **language accessibility and guidance transparency**.
        </Typography>
        <Typography paragraph>
          A LangChain prototype demonstrated the potential for **scalable, real-time emergency support**, keeping humans in the loop for critical decisions.
        </Typography>
        <Callout icon={calloutIcons.insight}>
          Next Steps: Expand testing, integrate **real-time health data**, and collaborate closely with medical professionals to refine **human-centered AI design**.
        </Callout>
      </>
    ),
    image: TakeawaysImg,
    imageAlt: "Takeaways & Next Steps",
    imageCaption: "A code snippet of the prototype implementation."
  }
];

// Render images MIA-style
const renderImage = (src, alt, caption) => (
  <Box sx={{ mb: 4, borderRadius: 3, overflow: "hidden" }}>
    <img src={src} alt={alt} style={{ width: "100%", borderRadius: "8px", display: "block" }} />
    <Typography variant="caption" display="block" align="center" sx={{ mt: 1 }}>
      {caption}
    </Typography>
  </Box>
);

const EmergencyCaseStudy = () => {
  const [activeSection, setActiveSection] = useState(caseStudySections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = caseStudySections.map(section => {
        const el = document.getElementById(section.id);
        return { id: section.id, offset: el ? el.getBoundingClientRect().top : 0 };
      });
      const current = offsets.reduce((prev, curr) => Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev);
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 10 }}>
        Emergency Chatbot Case Study
      </Typography>

      <Grid container spacing={6}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: { xs: "none", md: "block" }, position: "sticky", top: 100 }}>
            <Box sx={{ borderRadius: 3, p: 3, mb: 4, bgcolor: "white", boxShadow: 3 }}>
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
                      "&.Mui-selected": { bgcolor: "transparent" },
                      transition: "background 0.3s"
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

          {/* Mobile Accordion */}
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

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          {caseStudySections.map((section, index) => (
            <motion.div
              key={index}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Box sx={{ mb: 12, maxWidth: 800 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: "primary.main", lineHeight: 1.2 }}>
                  {section.title}
                </Typography>
                <Box sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
                  {section.description}
                </Box>

                {section.isPrototype ? (
                  <Box sx={{ mb: 4, borderRadius: 3, overflow: "hidden" }}>
                    <iframe
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      width="100%"
                      height="450"
                      src="https://embed.figma.com/design/yCAgDP2YQZqYPyL9g2iPfr/Emergency-chatbot?node-id=0-1&embed-host=share"
                      allowFullScreen
                      title="Figma Prototype Emergency Chatbot"
                    />
                  </Box>
                ) : section.images
                  ? section.images.map((img, idx) => renderImage(img.src, img.alt, img.caption))
                  : section.image
                  ? renderImage(section.image, section.imageAlt, section.imageCaption)
                  : <Box sx={{ width: "100%", height: 250, bgcolor: "grey.100", borderRadius: 3, mb: 2, display: "flex", alignItems: "center", justifyContent: "center", color: "text.disabled" }}>
                      Image / Screenshot Placeholder
                    </Box>}
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmergencyCaseStudy;