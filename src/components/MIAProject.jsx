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

import BlackBox from "../assets/MIAblackbox.png";
import MIACover from "../assets/MIA.png";
import Research from "../assets/MIA RESEARCH.png";
import Design from "../assets/Design 2.png";
import TakeawaysImg from "../assets/Support.png";
import ImpactImg from "../assets/MIA Design.png";

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
          The Media Innovation Assistant (MIA) is a platform created to support Dutch media start-ups in generating and validating ideas responsibly. Early-stage founders often hesitate to share ideas because of concerns around <Typography component="span" sx={{ color: "#7F5539", fontWeight: "bold" }}>privacy, transparency, and trust</Typography>. MIA provides a secure and supportive environment where users can experiment, receive feedback, and maintain control over their data.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          Through an iterative value-sensitive design process involving prototyping, stakeholder interviews, and usability testing, the project focused on the delicate tension between <Typography component="span" sx={{ color: "#7F5539", fontWeight: "bold" }}>user autonomy and AI guidance</Typography>.
        </Typography>
        <Callout icon={calloutIcons.insight}>
          Key Insight: Balancing autonomy with AI support was identified as the central challenge from the start.
        </Callout>
      </>
    ),
    image: MIACover,
    imageAlt: "MIA Cover",
    imageCaption: "Project cover illustrating the MIA platform."
  },
  {
    id: "context",
    title: "Problem & Context",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          AI tools are increasingly used in everyday decision-making, yet many users rely on AI outputs without critical evaluation, sometimes leading to errors. In the media sector, where creativity, data ownership, and trust are paramount, professionals often perceive AI as a <Typography component="span" sx={{ color: "#7F5539", fontWeight: "bold" }}>“black box”</Typography>, making them hesitant to adopt these tools.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          Interviews with six start-up owners revealed a strong <Typography component="span" sx={{ color: "#7F5539", fontWeight: "bold" }}>privacy paradox</Typography>: while users appreciated AI’s efficiency, they were deeply concerned about how their data would be used.
        </Typography>
        <Callout icon={calloutIcons.insight}>
          Insight: Privacy concerns were the top barrier to idea sharing, guiding all subsequent design decisions.
        </Callout>
      </>
    ),
    image: BlackBox,
    imageAlt: "AI Black Box: Human Uncertainty in the Age of Automation.",
    imageCaption: "Illustration showing AI Black Box: Human Uncertainty in the Age of Automation."
  },
  {
    id: "ideation",
    title: "Ideation & Design Process",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          Guided by Human-Centered Design and Value-Sensitive Design principles, I iteratively explored solutions aligned with MIA’s goals and user values. Cognitive walkthroughs, co-design sessions, and usability testing shaped every iteration.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          A key insight emerged early: <Typography component="span" sx={{ color: "#7F5539", fontWeight: "bold" }}>too much visible guidance suppressed originality</Typography>, whereas too little left users unsure of expectations. Balancing transparency with autonomy became the central challenge.
        </Typography>
        <Callout icon={calloutIcons.decision}>
          Design Decision: Evaluation criteria were made selectively visible to preserve creative freedom.
        </Callout>
      </>
    ),
    images: [
      { src: Research, alt: "Research methods used to solve the problem", caption: "Research methods used to solve the problem" }
    ]
  },
  {
    id: "prototype",
    title: "Prototype & Testing",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          Prototypes focused on balancing usability, privacy, and transparency. Structured submission flows were tested alongside selective evaluation criteria to maintain user control while providing guidance.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          Refinements included a chatbot avatar for guidance, clearer instructions, and an <Typography component="span" sx={{ color: "#7F5539", fontWeight: "bold" }}>incognito mode</Typography> to enhance trust.
        </Typography>
        <Callout icon={calloutIcons.result}>
          Outcome: Users felt safer sharing ideas and more confident in the system, demonstrating trust-building through design.
        </Callout>
      </>
    ),
    images: [
      { src: Design, alt: "One of the pages of MIA", caption: "Example of a MIA design page" }
    ]
  },
  {
    id: "impact",
    title: "Impact & Results",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          Testing confirmed that building trust requires <Typography component="span" sx={{ color: "#7F5539", fontWeight: "bold" }}>privacy, clarity, and transparency</Typography>. The addition of incognito mode and refined submission flows significantly improved user confidence.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          Evaluation also highlighted the <Typography component="span" sx={{ color: "#7F5539", fontWeight: "bold" }}>Transparency Paradox</Typography>: constant visibility of evaluation criteria encouraged conformity and reduced originality. Selective visibility preserved creative freedom while still providing guidance.
        </Typography>
        <Callout icon={calloutIcons.validation}>
          Key Result: Thoughtful transparency design increased authentic idea sharing without compromising guidance.
        </Callout>
      </>
    ),
    image: ImpactImg,
    imageAlt: "Impact & Results",
    imageCaption: "Visualization of the AI and human interaction"
  },
  {
    id: "takeaways",
    title: "Takeaways & Next Steps",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          Designing MIA required careful balancing of <Typography component="span" sx={{ color: "#7F5539", fontWeight: "bold" }}>trust, privacy, transparency, and usability</Typography>. Chatbot avatars, incognito mode, and structured submission flows promoted engagement and supported idea refinement.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          MIA emphasizes a <Typography component="span" sx={{ color: "#7F5539", fontWeight: "bold" }}>supportive AI assistant</Typography> rather than a decision-maker. Human-in-the-loop interactions and diverse data training reduce bias while keeping the platform context-aware and adaptable.
        </Typography>
        <Callout icon={calloutIcons.insight}>
          Next Step: Expand collaborative validation features while maintaining trust and autonomy.
        </Callout>
      </>
    ),
    image: TakeawaysImg,
    imageAlt: "AI as a supportive assistant",
    imageCaption: "Illustration showing AI as a supportive assistant rather than a decision-maker."
  }
];

// Render images without zoom effect
const renderImage = (src, alt, caption) => (
  <Box sx={{ mb: 4, borderRadius: 3, overflow: "hidden" }}>
    <img src={src} alt={alt} style={{ width: "100%", borderRadius: "8px", display: "block" }} />
    <Typography variant="caption" display="block" align="center" sx={{ mt: 1 }}>
      {caption}
    </Typography>
  </Box>
);

const MIAProject = () => {
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
        MIA: Media Innovation Assistant
      </Typography>

      <Grid container spacing={6}>
        {/* Left nav unchanged */}
        <Grid item xs={12} md={3}>
          {/* Desktop sidebar */}
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

                {section.images
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

export default MIAProject;