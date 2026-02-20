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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  DescriptionOutlined as DescriptionOutlinedIcon,
  LightbulbOutlined as LightbulbOutlinedIcon,
  ScienceOutlined as ScienceOutlinedIcon,
  CheckCircleOutlined as CheckCircleOutlinedIcon,
  EmojiEventsOutlined as EmojiEventsOutlinedIcon,
} from "@mui/icons-material";

import { motion } from "framer-motion";

import financeImg from "../assets/Finance Cover.png";
import SadStudent from "../assets/SadStudent.png";
import Students from "../assets/Students.png";

// Icons array
const icons = [
  <DescriptionOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <LightbulbOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <ScienceOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <EmojiEventsOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
];

// Callout Component
const Callout = ({ children, icon }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      bgcolor: "#f8faf7",
      px: 3,
      py: 2,
      borderRadius: 3,
      my: 3,
      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    }}
  >
    {icon}
    <Typography sx={{ fontWeight: 600, lineHeight: 1.6 }}>{children}</Typography>
  </Box>
);

const calloutIcons = {
  insight: <LightbulbOutlinedIcon sx={{ color: "#7f5539", fontSize: 22 }} />,
  decision: <ScienceOutlinedIcon sx={{ color: "#7f5539", fontSize: 22 }} />,
  result: <EmojiEventsOutlinedIcon sx={{ color: "#7f5539", fontSize: 22 }} />,
  validation: <CheckCircleOutlinedIcon sx={{ color: "#7f5539", fontSize: 22 }} />,
};

// Sections
const caseStudySections = [
  {
    id: "overview",
    title: "Overview",
    description: (
      <>
        <Typography paragraph>
          This case study demonstrates the design and research process behind a
          personalized financial management tool for students aged 18–25.
        </Typography>
        <Typography paragraph>
          Through surveys, focus groups, interviews, storyboards, and empathy
          mapping, key insights were uncovered: students often rely on family or
          DUO support, prefer Excel over finance apps, and experience stress when
          managing finances.
        </Typography>
        <Callout icon={calloutIcons.insight}>
          Students associate financial management with stress and desire simple,
          confidence-building tools.
        </Callout>
      </>
    ),
    image: financeImg,
    imageAlt: "Financial App Cover",
    imageCaption: "Project cover illustrating the financial app.",
  },
  {
    id: "context",
    title: "Problem & Context",
    description: (
      <>
        <Typography paragraph>
          Many students lack confidence in managing their finances independently.
          Existing apps focus heavily on dashboards but fail to address emotional
          barriers, often amplifying stress and avoidance.
        </Typography>
        <Callout icon={calloutIcons.insight}>
          Financial literacy challenges are behavioral and emotional, not just informational.
        </Callout>
      </>
    ),
    image: SadStudent,
    imageAlt: "Student stressed about finances",
    imageCaption: "Illustration showing the stressed student.",
  },
  {
    id: "ideation",
    title: "Ideation & Design Process",
    description: (
      <>
        <Typography paragraph>
          Research included empathy mapping, stakeholder analysis, surveys, and focus groups. Storyboards helped uncover students’ mental models and financial habits.
        </Typography>
        <Callout icon={calloutIcons.decision}>
          Insights guided design: reduce cognitive load, provide guidance, and build confidence.
        </Callout>
      </>
    ),
    isResearch: true,
  },
  {
    id: "prototype",
    title: "Prototype & Testing",
    description: (
      <>
        <Typography paragraph>
          Prototypes experimented with color, microlearning, and simplified flows.
          User testing refined onboarding and clarified progress indicators.
        </Typography>
      </>
    ),
    isPrototype: true,
  },
  {
    id: "impact",
    title: "Impact & Results",
    description: (
      <>
        <Typography paragraph>
          Testing confirmed that the tool should feel supportive rather than corrective.
        </Typography>
        <Callout icon={calloutIcons.result}>
          Reframing the product as a confidence-building experience reduced stress and improved engagement.
        </Callout>
        <Typography paragraph>
          Students moved from financial anxiety to control and confidence.
        </Typography>
      </>
    ),
    image: Students,
    imageAlt: "Students feeling happy about finances",
    imageCaption: "Illustration showing students feeling confident about finances.",
  },
];

// Scroll helper
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Component
const FinanceApp = () => {
  const [activeSection, setActiveSection] = useState(caseStudySections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = caseStudySections.map((section) => {
        const el = document.getElementById(section.id);
        return { id: section.id, offset: el ? el.getBoundingClientRect().top : 0 };
      });
      const current = offsets.reduce((prev, curr) =>
        Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev
      );
      setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: "bold", mb: 10, color: "#32620e" }}
      >
        Student Financial Confidence Platform
      </Typography>

      <Grid container spacing={6}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: { xs: "none", md: "block" }, position: "sticky", top: 100 }}>
            <Box sx={{ borderRadius: 3, p: 3, bgcolor: "white", boxShadow: 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
                Contents
              </Typography>
              <List dense>
                {caseStudySections.map((s, i) => (
                  <ListItemButton
                    key={s.id}
                    onClick={() => scrollToId(s.id)}
                    selected={activeSection === s.id}
                    sx={{ borderRadius: 2, mb: 1, "&.Mui-selected": { bgcolor: "transparent" } }}
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
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              mb: 4,
              width: "100%",
              position: "sticky",
              top: 0,
              zIndex: 1000,
              bgcolor: "background.paper",
              boxShadow: 2,
              py: 1,
            }}
          >
            <Accordion sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, textAlign: "center" }}>
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
        <Grid item xs={12} md={9}>
          {caseStudySections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Box sx={{ mb: 12, maxWidth: 800 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: "#32620e" }}>
                  {section.title}
                </Typography>

                <Box sx={{ color: "text.secondary", mb: 4 }}>{section.description}</Box>

                {section.isPrototype ? (
                  <Box sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}>
                    <iframe
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      width="100%"
                      height="450"
                      src="https://embed.figma.com/design/uvowkaNI2In1FGhXSyGmTD/Finance-App?node-id=37-1269&embed-host=share"
                      allowFullScreen
                      title="Finance App Prototype"
                    />
                  </Box>
                ) : section.isResearch ? (
                  <Box sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}>
                    <iframe
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      width="100%"
                      height="450"
                      src="https://embed.figma.com/board/ll07NUUDbfCHruIXm33pwc/Finance-Research?node-id=1-6843&embed-host=share"
                      allowFullScreen
                      title="Finance Research"
                    />
                  </Box>
                ) : section.image ? (
                  <Box sx={{ mb: 4, borderRadius: 3, overflow: "hidden" }}>
                    <Box
                      component={motion.img}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      src={section.image}
                      alt={section.imageAlt}
                      sx={{ width: "100%", borderRadius: 3, mb: 1 }}
                    />
                    <Typography variant="caption" display="block" align="center">
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

export default FinanceApp;