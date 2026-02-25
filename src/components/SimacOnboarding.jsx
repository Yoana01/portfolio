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

// Placeholder images
import SimacOverview from "../assets/SimacOverview.png";
import SimacResearch from "../assets/Empatymap.png";
import SimacResearch1 from "../assets/SimacAffinity.png";
import SimacImpact from "../assets/grouppic.jpg";

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
    <Typography sx={{ color: "#7F5539", fontWeight: 600, fontSize: "1rem", lineHeight: 1.6 }}>
      {children}
    </Typography>
  </Box>
);

const calloutIcons = {
  insight: <LightbulbIcon sx={{ color: "#7f5539", fontSize: 22 }} />,
  decision: <ScienceIcon sx={{ color: "#7f5539", fontSize: 22 }} />,
  result: <TrophyIcon sx={{ color: "#7f5539", fontSize: 22 }} />,
  validation: <CheckIcon sx={{ color: "#7f5539", fontSize: 22 }} />
};

const icons = [
  <DescriptionOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <LightbulbOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <ScienceOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <EmojiEventsOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <ForwardOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
];

// Case study sections
const caseStudySections = [
  {
    id: "overview",
    title: "Overview",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          The Simac onboarding project focused on enhancing the experience for non-Dutch employees. I approached this with a dual lens of human-centered research and strategic process optimization, balancing employee needs with organizational objectives.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          As Scrum Master, I led the team using Scrum-ban methodology, coordinating tasks pragmatically, facilitating clear communication, and ensuring timely delivery of project milestones.
        </Typography>
        <Callout icon={calloutIcons.insight}>
          Key Insight: Onboarding is not just information delivery - it’s about encouraging inclusion, engagement, and early connections.
        </Callout>
      </>
    ),
    image: SimacOverview,
    imageAlt: "Simac Overview",
    imageCaption: "Overview of the Simac onboarding project."
  },
  {
    id: "context",
    title: "Research & Context",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          Mapping Simac’s onboarding journey revealed four stages where new hires often felt overwhelmed despite support from assigned “buddies.”
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          Interviews with non-Dutch employees, both at Simac and a peer organization, showed that language barriers were minimal, but socialization and team integration were significant gaps.
        </Typography>
        <Callout icon={calloutIcons.insight}>
          Research Insight: Early-stage socialization is critical for employee engagement, particularly for international hires.
        </Callout>
      </>
    ),
    images: [
      { src: SimacResearch, alt: "Empathy Map", caption: "Empathy map showing employee pain points." },
      { src: SimacResearch1, alt: "Affinity Map", caption: "Affinity map clustering research insights." }
    ]
  },
  {
    id: "ideation",
    title: "Ideation & Design Process",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          Based on empathy maps, personas, and user requirements, the team focused on socialization challenges. Affinity mapping revealed that non-Dutch employees often felt disconnected during their first days.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          We scoped the project toward interaction and collaboration, developing a challenge-based onboarding app featuring:
          <ul>
            <li>A world map highlighting Simac’s cultural diversity.</li>
            <li>Task-based challenges encouraging peer interaction.</li>
            <li>Social recognition elements to motivate participation.</li>
          </ul>
        </Typography>
        <Callout icon={calloutIcons.decision}>
          Design Decision: Prioritized socialization, designing features that foster collaboration, inclusivity, and early engagement.
        </Callout>
      </>
    ),
  },
  {
    id: "testing",
    title: "Prototype & Testing",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          I led UI design for the Scanning and Congratulating component, integrating image recognition to verify task completion. Testing confirmed that the interface was intuitive and engaging, receiving a user satisfaction score of 9/10.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          The iterative approach ensured the solution was practical, enjoyable, and encouraged meaningful interactions from day one.
        </Typography>
        <Callout icon={calloutIcons.result}>
          Outcome: New employees could engage, learn, and integrate quickly, resulting in a more inclusive onboarding experience.
        </Callout>
      </>
    ),
    video: "https://www.youtube.com/embed/4isAugIrrt8?si=Id_YBEmo8a-kfYRs"
  },
  {
    id: "impact",
    title: "Impact & Takeaways",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          This project strengthened my leadership, project management, and design skills. Taking on a Scrum Master role reinforced my ability to coordinate teams and deliver results under Agile processes. My design approach evolved to favor simplicity, clarity, and minimalism with a strong focus on user-centered outcomes.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          The client’s positive feedback and intent to continue development validate the project’s impact and scalability.
        </Typography>
        <Callout icon={calloutIcons.validation}>
          Key Result: Socialization-focused onboarding enhanced engagement, inclusion, and early employee satisfaction, creating measurable value for both employees and the organization.
        </Callout>
      </>
    ),
    image: SimacImpact,
    imageAlt: "Impact & Takeaways",
    imageCaption: "Picture of the Simac team and my team celebrating the successful onboarding project."
  }
];

// Render images
const renderImage = (src, alt, caption) => (
  <Box sx={{ width: "100%", borderRadius: 3, overflow: "hidden" }}>
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
    />
    <Typography variant="caption" display="block" align="center" sx={{ mt: 1 }}>
      {caption}
    </Typography>
  </Box>
);

const SimacProject = () => {
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
        Simac: Onboarding Process
      </Typography>

      <Grid container spacing={6}>
        {/* Sidebar / Mobile Accordion */}
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

                {/* Render images */}
                {section.images ? (
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {section.images.map((img, idx) => (
                      <Grid item xs={12} md={6} key={idx}>
                        {renderImage(img.src, img.alt, img.caption)}
                      </Grid>
                    ))}
                  </Grid>
                ) : section.image ? (
                  <Box sx={{ mb: 4 }}>
                    {renderImage(section.image, section.imageAlt, section.imageCaption)}
                  </Box>
                ) : null}

                {/* Animated video */}
                {section.video && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Box sx={{ position: "relative", pt: "56.25%", mb: 4, borderRadius: 3, overflow: "hidden" }}>
                      <iframe
                        src={section.video}
                        title="YouTube video"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: 0,
                          borderRadius: "8px"
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </Box>
                  </motion.div>
                )}
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SimacProject;